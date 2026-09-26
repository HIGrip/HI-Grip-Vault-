"""Google Analytics 4 en Search Console voor de HÏ Grip-routines.

Werkt lokaal en in de cloud met dezelfde servicesleutel (alleen-lezen):
  - cloud:  omgevingsvariabele GOOGLE_SA_JSON_B64 (base64 van het sleutelbestand)
            of GOOGLE_SA_JSON (de JSON zelf)
  - lokaal: GOOGLE_APPLICATION_CREDENTIALS, of anders ~/.claude/ga4-mcp-key.json

Gebruik:
  python 05_Research/_tools/google_data.py check
  python 05_Research/_tools/google_data.py ga4 [--dagen 7]
  python 05_Research/_tools/google_data.py gsc [--dagen 7] [--top 25]
  python 05_Research/_tools/google_data.py pagina --url /products/performance-gripsokken [--dagen 7]
  python 05_Research/_tools/google_data.py keyevents
  python 05_Research/_tools/google_data.py dashboard   # schrijft 05_Research/_data/{kpi,agenda,cwv,koppelingen}.json
  python 05_Research/_tools/google_data.py agenda | cwv | merchant

Uitvoer is JSON op stdout: huidige periode, vorige periode van gelijke lengte en het verschil.
  pagina:    Search Console voor één pagina (pad of volledige URL, www en zonder www tellen mee):
             klikken, vertoningen, ctr en positie nu vs vorige periode + top 10 zoektermen.
  keyevents: GA4 Admin API, de events die als key event staan: [{eventName, countingMethod, createTime}].
             Vereist dat de Google Analytics Admin API aanstaat in het Cloud-project van de sleutel.
  dashboard: alle onderdelen voor het Research Dashboard; elk onderdeel faalt los (status in het
             bestand), exit 1 alleen als alles faalt. Stdout: korte samenvatting per onderdeel.
             kpi.json    12 ISO-weken (laatste = lopende week t/m gisteren): GA4 + Search Console per week,
                         conversie = aankopen / sessies × 100, plus posities van de kernwoorden uit
                         _data/instellingen.json. Search Console loopt 2-3 dagen achter (gsc_laatste_dag).
             agenda.json komende 14 dagen via de Calendar API (agenda gedeeld met de servicesleutel);
                         hele-dag-items hebben een inclusieve einddatum.
             cwv.json    PageSpeed Insights mobiel voor homepage, productpagina en collectie. Veldwaarden
                         (CrUX) als die er zijn, anders lab; inp_ms bestaat alleen als veldwaarde.
                         Quotum via het project van de sleutel, of env PAGESPEED_API_KEY.
             koppelingen.json  status per bron + hoe je hem koppelt.
  agenda/cwv: alleen dat onderdeel, schrijft het bestand en print het.
  merchant:  productstatussen in Merchant Center (Merchant API v1, terugval Content API v2.1),
             account_id uit _data/instellingen.json. Print JSON, schrijft niets.
Installeren: pip install cffi google-analytics-data google-api-python-client google-auth  (geen --upgrade: cryptography van Debian is niet te vervangen)
"""

import argparse
import base64
import json
import os
import re
import sys
import urllib.parse
import urllib.request
from collections import Counter
from concurrent.futures import ThreadPoolExecutor
from datetime import date, datetime, timedelta
from pathlib import Path

GA4_PROPERTY = "476032345"   # staat ook in 00_Brand_Core/Feiten & Actuele Staat.md
GSC_DOMEIN = "higrip.nl"
SCOPES = [
    "https://www.googleapis.com/auth/analytics.readonly",
    "https://www.googleapis.com/auth/webmasters.readonly",
]
# Funnelstappen zoals Denzel en de conversietest ze rapporteren
FUNNEL = ["view_item_list", "view_item", "add_to_cart", "begin_checkout",
          "add_shipping_info", "add_payment_info", "purchase"]


def credentials(scopes=None):
    from google.oauth2 import service_account
    scopes = scopes or SCOPES
    raw = None
    if os.environ.get("GOOGLE_SA_JSON_B64"):
        raw = base64.b64decode(os.environ["GOOGLE_SA_JSON_B64"]).decode("utf-8")
    elif os.environ.get("GOOGLE_SA_JSON"):
        raw = os.environ["GOOGLE_SA_JSON"]
    if raw:
        return service_account.Credentials.from_service_account_info(json.loads(raw), scopes=scopes)
    pad = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS") or str(Path.home() / ".claude" / "ga4-mcp-key.json")
    if not Path(pad).exists():
        sys.exit("Geen servicesleutel gevonden: zet GOOGLE_SA_JSON_B64 in de omgeving (zie 04_Agent_Infrastructuur/Routines/README.md).")
    return service_account.Credentials.from_service_account_file(pad, scopes=scopes)


def perioden(dagen: int):
    # Search Console loopt 2-3 dagen achter; GA4 is tot gisteren compleet
    eind = date.today() - timedelta(days=1)
    start = eind - timedelta(days=dagen - 1)
    v_eind = start - timedelta(days=1)
    v_start = v_eind - timedelta(days=dagen - 1)
    return (start, eind), (v_start, v_eind)


def verschil(nu, toen):
    if not toen:
        return None
    return round((nu - toen) / toen * 100, 1)


# ── GA4 ────────────────────────────────────────────────────────────────────────
def ga4(dagen: int) -> dict:
    from google.analytics.data_v1beta import BetaAnalyticsDataClient
    from google.analytics.data_v1beta.types import (
        DateRange, Dimension, Filter, FilterExpression, Metric, RunReportRequest,
    )
    client = BetaAnalyticsDataClient(credentials=credentials())
    (s, e), (vs, ve) = perioden(dagen)
    bereiken = [DateRange(start_date=str(s), end_date=str(e), name="nu"),
                DateRange(start_date=str(vs), end_date=str(ve), name="vorige")]

    def rapport(dims, metrics, filt=None, limit=25):
        req = RunReportRequest(
            property=f"properties/{GA4_PROPERTY}",
            # Bij twee datumbereiken voegt GA4 zelf "dateRange" toe als laatste dimensiewaarde
            dimensions=[Dimension(name=d) for d in dims],
            metrics=[Metric(name=m) for m in metrics],
            date_ranges=bereiken, dimension_filter=filt, limit=limit * 2,
        )
        rijen = {}
        for r in client.run_report(req).rows:
            sleutel = " | ".join(v.value for v in r.dimension_values[:-1]) or "totaal"
            periode = r.dimension_values[-1].value
            rijen.setdefault(sleutel, {"nu": {}, "vorige": {}})
            for m, v in zip(metrics, r.metric_values):
                rijen[sleutel][periode][m] = float(v.value)
        return rijen

    totaal = rapport([], ["sessions", "totalUsers", "screenPageViews", "engagementRate", "keyEvents", "purchaseRevenue"])
    kanalen = rapport(["sessionDefaultChannelGroup"], ["sessions", "engagementRate", "keyEvents"])
    landen = rapport(["country"], ["sessions", "engagementRate"], limit=10)
    landing = rapport(["landingPagePlusQueryString"], ["sessions", "bounceRate", "keyEvents"], limit=15)
    apparaat = rapport(["deviceCategory"], ["sessions", "bounceRate", "keyEvents"])
    funnel = rapport(["eventName"], ["eventCount", "totalUsers"], FilterExpression(
        filter=Filter(field_name="eventName", in_list_filter=Filter.InListFilter(values=FUNNEL))))
    # Vermoedelijk botverkeer: Direct uit VS/China met bijna geen engagement
    bots = rapport(["country", "sessionDefaultChannelGroup"], ["sessions", "engagementRate"], FilterExpression(
        filter=Filter(field_name="country", in_list_filter=Filter.InListFilter(values=["United States", "China"]))))
    return {
        "bron": "GA4", "property": GA4_PROPERTY,
        "periode": {"nu": [str(s), str(e)], "vorige": [str(vs), str(ve)]},
        "totaal": totaal, "kanalen": kanalen, "landen": landen, "landingspaginas": landing,
        "apparaat": apparaat, "funnel": {k: funnel.get(k, {"nu": {}, "vorige": {}}) for k in FUNNEL},
        "vermoedelijk_bot": bots,
        "let_op": "Filter botverkeer (Direct uit VS/China, engagement < 5%) uit conclusies. Onder ~100 echte sessies per week: indicatief, geen trend.",
    }


# ── Search Console ─────────────────────────────────────────────────────────────
def gsc_service():
    from googleapiclient.discovery import build
    return build("searchconsole", "v1", credentials=credentials(), cache_discovery=False)


def gsc_site(svc) -> str:
    sites = [s["siteUrl"] for s in svc.sites().list().execute().get("siteEntry", [])]
    for voorkeur in (f"sc-domain:{GSC_DOMEIN}", f"https://www.{GSC_DOMEIN}/", f"https://{GSC_DOMEIN}/"):
        if voorkeur in sites:
            return voorkeur
    sys.exit(f"Search Console: geen toegang tot {GSC_DOMEIN}. Voeg het serviceaccount toe als gebruiker "
             f"(Instellingen → Gebruikers en rechten, recht 'Beperkt'). Zichtbare sites: {sites or 'geen'}")


class GscVergelijking:
    """Search Console-query's voor een periode en de vorige periode van gelijke lengte."""

    def __init__(self, dagen: int, filters=None):
        self.svc = gsc_service()
        self.site = gsc_site(self.svc)
        self.filters = filters or []
        # Search Console-data is pas na 2-3 dagen compleet: schuif het venster op
        eind = date.today() - timedelta(days=3)
        self.s, self.e = eind - timedelta(days=dagen - 1), eind
        self.ve = self.s - timedelta(days=1)
        self.vs = self.ve - timedelta(days=dagen - 1)

    def periode(self) -> dict:
        return {"nu": [str(self.s), str(self.e)], "vorige": [str(self.vs), str(self.ve)]}

    def query(self, start, end, dims, limit):
        body = {"startDate": str(start), "endDate": str(end), "dimensions": dims, "rowLimit": limit}
        if self.filters:
            body["dimensionFilterGroups"] = [{"filters": self.filters}]
        return self.svc.searchanalytics().query(siteUrl=self.site, body=body).execute().get("rows", [])

    def samen(self, dims, limit, top=None):
        nu = {tuple(r.get("keys", ["totaal"])): r for r in self.query(self.s, self.e, dims, limit)}
        toen = {tuple(r.get("keys", ["totaal"])): r for r in self.query(self.vs, self.ve, dims, limit * 4)}
        uit = []
        for k, r in nu.items():
            o = toen.get(k)
            uit.append({
                "sleutel": " | ".join(k), "klikken": r["clicks"], "vertoningen": r["impressions"],
                "ctr": round(r["ctr"] * 100, 2), "positie": round(r["position"], 1),
                "vorige_positie": round(o["position"], 1) if o else None,
                "positie_verschil": round(o["position"] - r["position"], 1) if o else None,  # + = gestegen
                "nieuw": o is None,
            })
        uit.sort(key=lambda x: -x["vertoningen"])
        return uit[:top] if top else uit

    def totaal(self) -> dict:
        leeg = {"clicks": 0, "impressions": 0, "ctr": 0, "position": 0}
        t_nu = (self.query(self.s, self.e, [], 1) or [leeg])[0]
        t_toen = (self.query(self.vs, self.ve, [], 1) or [leeg])[0]
        return {
            "klikken": [t_nu["clicks"], t_toen["clicks"], verschil(t_nu["clicks"], t_toen["clicks"])],
            "vertoningen": [t_nu["impressions"], t_toen["impressions"], verschil(t_nu["impressions"], t_toen["impressions"])],
            "ctr_pct": [round(t_nu["ctr"] * 100, 2), round(t_toen["ctr"] * 100, 2)],
            "positie": [round(t_nu["position"], 1), round(t_toen["position"], 1)],
        }


def gsc(dagen: int, top: int) -> dict:
    v = GscVergelijking(dagen)
    zoektermen = v.samen(["query"], top)
    paginas = v.samen(["page"], top)
    return {
        "bron": "Search Console", "site": v.site,
        "periode": v.periode(),
        "totaal": v.totaal(),
        "zoektermen": zoektermen,
        "paginas": paginas,
        "striking_distance": [z for z in zoektermen if 5 <= z["positie"] <= 20 and z["vertoningen"] >= 20],
        "lage_ctr": [p for p in paginas if p["vertoningen"] >= 100 and p["ctr"] < 2],
        "zoekterm_pagina": v.samen(["query", "page"], top * 2),   # voor kannibalisatie
        "let_op": "Data loopt 3 dagen achter. Onder ~100 vertoningen per zoekterm: geen conclusies.",
    }


def re2_escape(tekst: str) -> str:
    # Search Console gebruikt RE2; re.escape escapet ook '-', dus alleen echte regex-tekens
    return re.sub(r"([.^$*+?()\[\]{}|\\])", r"\\\1", tekst)


def pagina(url: str, dagen: int) -> dict:
    """Eén pagina: pad of URL, met en zonder www en met of zonder slash aan het eind."""
    if re.match(r"^[A-Za-z]:[/\\]", url):
        sys.exit(f"--url {url!r} is een Windows-pad (Git Bash zet /pad om): gebruik MSYS_NO_PATHCONV=1 of de volledige URL.")
    pad = urllib.parse.urlsplit(url).path if "://" in url else url.split("?")[0]
    pad = "/" + pad.strip().strip("/")
    patroon = rf"^https?://(www\.)?{re2_escape(GSC_DOMEIN)}{re2_escape(pad) if pad != '/' else ''}/?$"
    v = GscVergelijking(dagen, [{"dimension": "page", "operator": "includingRegex", "expression": patroon}])
    return {
        "bron": "Search Console", "site": v.site, "pagina": pad, "patroon": patroon,
        "periode": v.periode(),
        "totaal": v.totaal(),
        "zoektermen": v.samen(["query"], 500, top=10),
        "let_op": "Data loopt 3 dagen achter. Onder ~100 vertoningen: geen conclusies.",
    }


# ── GA4 Admin ──────────────────────────────────────────────────────────────────
def keyevents() -> list:
    from googleapiclient.discovery import build
    svc = build("analyticsadmin", "v1beta", credentials=credentials(), cache_discovery=False)
    uit, token = [], None
    while True:
        resp = svc.properties().keyEvents().list(
            parent=f"properties/{GA4_PROPERTY}", pageSize=200, pageToken=token).execute()
        uit += [{"eventName": k.get("eventName"), "countingMethod": k.get("countingMethod"),
                 "createTime": k.get("createTime")} for k in resp.get("keyEvents", [])]
        token = resp.get("nextPageToken")
        if not token:
            return sorted(uit, key=lambda k: k["eventName"] or "")

# ── Dashboard-data (05_Research/_data) ─────────────────────────────────────────
DATA_DIR = Path(__file__).resolve().parents[1] / "_data"
SA_EMAIL = "ga4-mcp@higrip-analytics.iam.gserviceaccount.com"
PROJECT = "higrip-analytics"
SITE = f"https://www.{GSC_DOMEIN}"
CWV_PADEN = ["/", "/products/performance-gripsokken", "/collections/gripsokken"]
KPI_WEKEN = 12
AGENDA_DAGEN = 14
SCOPE_AGENDA = ["https://www.googleapis.com/auth/calendar.readonly"]
SCOPE_CONTENT = ["https://www.googleapis.com/auth/content"]
SCOPE_PSI = ["openid"]  # geen data-scope nodig; het token zet het quotum op het project van de sleutel
API = {"ga4": "Google Analytics Data API", "gsc": "Google Search Console API", "agenda": "Google Calendar API",
       "merchant": "Merchant API", "pagespeed": "PageSpeed Insights API"}
HOE = {
    "ga4": f"{SA_EMAIL} als Viewer op GA4-property {GA4_PROPERTY} (Beheer → Toegangsbeheer voor property) "
           f"en 'Google Analytics Data API' aan in Google Cloud-project {PROJECT}.",
    "gsc": f"{SA_EMAIL} als gebruiker (Beperkt) in Search Console → Instellingen → Gebruikers en rechten, "
           f"en 'Google Search Console API' aan in project {PROJECT}.",
    "agenda": f"1) 'Google Calendar API' aanzetten in project {PROJECT}. 2) Google Agenda van info@higrip.nl → "
              f"Instellingen en delen → Delen met specifieke personen → {SA_EMAIL} toevoegen met 'Alle "
              f"afspraakdetails bekijken'. Andere agenda: agenda.calendar_id in 05_Research/_data/instellingen.json.",
    "merchant": f"1) 'Merchant API' aanzetten in project {PROJECT}. 2) Merchant Center → Instellingen → Mensen en "
                f"toegang → {SA_EMAIL} toevoegen (standaardtoegang). 3) Het Merchant Center-ID invullen als "
                f"merchant.account_id in 05_Research/_data/instellingen.json.",
    "pagespeed": f"'PageSpeed Insights API' aanzetten in project {PROJECT} (of een API-sleutel als omgevingsvariabele "
                 f"PAGESPEED_API_KEY). Zonder een van beide deelt het script het openbare quotum en krijgt het 429.",
    "site": "Netwerktoegang tot www.higrip.nl in de omgeving van de routine (cloud: sta het domein toe).",
}
CONNECTORS = (("shopify", "Shopify"), ("meta", "Meta"), ("klaviyo", "Klaviyo"), ("buffer", "Buffer"),
              ("gmail", "Gmail"), ("drive", "Google Drive"))


class ApiFout(Exception):
    def __init__(self, code: int, tekst: str):
        super().__init__(f"HTTP {code}: {tekst}")
        self.code = code


def nu() -> datetime:
    try:
        from zoneinfo import ZoneInfo
        moment = datetime.now(ZoneInfo("Europe/Amsterdam"))
    except Exception:  # geen tzdata
        moment = datetime.now().astimezone()
    return moment.replace(microsecond=0)


def tijdstempel() -> str:
    return nu().isoformat()


def lees_json(pad: Path):
    try:
        return json.loads(pad.read_text(encoding="utf-8"))
    except FileNotFoundError:
        return None
    except ValueError as e:
        print(f"waarschuwing: {pad.name} is geen geldige JSON ({e})", file=sys.stderr)
        return None


def schrijf_json(pad: Path, data: dict):
    pad.parent.mkdir(parents=True, exist_ok=True)
    tmp = pad.with_name(pad.name + ".tmp")
    tmp.write_text(json.dumps(data, ensure_ascii=False, indent=1) + "\n", encoding="utf-8", newline="\n")
    os.replace(tmp, pad)


def instellingen(data_map: Path) -> dict:
    data = lees_json(data_map / "instellingen.json")
    return data if isinstance(data, dict) else {}


def foutmelding(e) -> str:
    tekst = str(e.code) if isinstance(e, SystemExit) else (str(e) or type(e).__name__)
    return re.sub(r"\s+", " ", tekst).strip()[:300]


def status_van(e, bron: str) -> tuple:
    """(status, detail) voor een fout: niet_gekoppeld als het aan rechten of een uitgezette API ligt."""
    tekst = foutmelding(e)
    code = getattr(e, "code", None)
    if not isinstance(code, int):
        code = getattr(e, "status_code", None) or getattr(getattr(e, "resp", None), "status", None)
    if re.search(r"has not been used in project|it is disabled|SERVICE_DISABLED|accessNotConfigured", tekst):
        return "niet_gekoppeld", f"{API.get(bron, bron)} staat uit in Google Cloud-project {PROJECT}."
    if tekst.startswith("Geen servicesleutel"):
        return "niet_gekoppeld", tekst
    if code in (401, 403, 404) or re.search(r"PERMISSION_DENIED|permission|geen toegang|notFound", tekst, re.I):
        return "niet_gekoppeld", f"Geen toegang: {tekst}"
    return "fout", tekst


def sessie(scopes):
    from google.auth.transport.requests import AuthorizedSession
    return AuthorizedSession(credentials(scopes))


def http_json(s, url: str, params=None, timeout: int = 60) -> dict:
    r = s.get(url, params=params, timeout=timeout)
    if r.status_code >= 400:
        try:
            tekst = r.json()["error"]["message"]
        except Exception:
            tekst = r.text[:300]
        raise ApiFout(r.status_code, tekst)
    return r.json()


def iso_week(d: date) -> str:
    j, w, _ = d.isocalendar()
    return f"{j}-W{w:02d}"


# ── KPI per week ───────────────────────────────────────────────────────────────
GA_VELDEN = ("sessies", "sessies_nl", "gebruikers", "aankopen", "omzet", "conversie")
GSC_VELDEN = ("gsc_klikken", "gsc_vertoningen", "gsc_ctr", "gsc_positie")


def ga4_per_week(start: date, eind: date) -> dict:
    from google.analytics.data_v1beta import BetaAnalyticsDataClient
    from google.analytics.data_v1beta.types import (
        DateRange, Dimension, Filter, FilterExpression, Metric, RunReportRequest,
    )
    client = BetaAnalyticsDataClient(credentials=credentials())

    def rapport(metrics, filt=None) -> dict:
        req = RunReportRequest(
            property=f"properties/{GA4_PROPERTY}", dimensions=[Dimension(name="isoYearIsoWeek")],
            metrics=[Metric(name=m) for m in metrics], dimension_filter=filt, limit=100,
            date_ranges=[DateRange(start_date=str(start), end_date=str(eind))],
        )
        return {f"{r.dimension_values[0].value[:4]}-W{r.dimension_values[0].value[4:]}":
                [float(v.value) for v in r.metric_values] for r in client.run_report(req).rows}

    alle = rapport(["sessions", "totalUsers", "ecommercePurchases", "purchaseRevenue"])
    nl = rapport(["sessions"], FilterExpression(filter=Filter(
        field_name="countryId", string_filter=Filter.StringFilter(value="NL"))))
    return {w: {"sessies": int(a[0]), "sessies_nl": int(nl.get(w, [0])[0]), "gebruikers": int(a[1]),
                "aankopen": int(a[2]), "omzet": round(a[3], 2),
                "conversie": round(a[2] / a[0] * 100, 2) if a[0] else 0.0} for w, a in alle.items()}


def gsc_per_week(svc, site: str, start: date, eind: date, filters=None) -> tuple:
    body = {"startDate": str(start), "endDate": str(eind), "dimensions": ["date"], "rowLimit": 1000}
    if filters:
        body["dimensionFilterGroups"] = [{"filters": filters}]
    rijen = svc.searchanalytics().query(siteUrl=site, body=body).execute().get("rows", [])
    weken = {}
    for r in rijen:
        t = weken.setdefault(iso_week(date.fromisoformat(r["keys"][0])), [0, 0, 0.0])
        t[0] += r["clicks"]
        t[1] += r["impressions"]
        t[2] += r["position"] * r["impressions"]  # positie gewogen naar vertoningen
    return weken, max((r["keys"][0] for r in rijen), default=None)


def maak_kpi(inst: dict) -> tuple:
    """(kpi-object, {bron: (status, detail)}). Faalt nooit als geheel."""
    eind = nu().date() - timedelta(days=1)
    laatste_maandag = eind - timedelta(days=eind.weekday())
    maandagen = [laatste_maandag - timedelta(weeks=i) for i in range(KPI_WEKEN - 1, -1, -1)]
    labels = [iso_week(m) for m in maandagen]
    status, ga, gs, kern, laatste_dag = {}, None, None, [], None
    try:
        ga = ga4_per_week(maandagen[0], eind)
        status["ga4"] = ("ok", f"{sum(v['sessies'] for v in ga.values())} sessies in {KPI_WEKEN} weken")
    except (Exception, SystemExit) as e:
        status["ga4"] = status_van(e, "ga4")
    try:
        svc = gsc_service()
        site = gsc_site(svc)
        gs, laatste_dag = gsc_per_week(svc, site, maandagen[0], eind)
        status["gsc"] = ("ok", f"{site}, data t/m {laatste_dag}")
        for term in inst.get("kernwoorden") or []:
            pw, _ = gsc_per_week(svc, site, maandagen[0], eind,
                                 [{"dimension": "query", "operator": "equals", "expression": term.lower()}])
            kern.append({"term": term, "weken": [
                {"week": w, "positie": round(pw[w][2] / pw[w][1], 1) if w in pw and pw[w][1] else None,
                 "vertoningen": int(pw[w][1]) if w in pw else 0} for w in labels]})
    except (Exception, SystemExit) as e:
        status["kernwoorden" if "gsc" in status else "gsc"] = status_van(e, "gsc")

    weken = []
    for m, w in zip(maandagen, labels):
        rij = {"week": w, "start": str(m)}
        if ga is None:
            rij.update(dict.fromkeys(GA_VELDEN))
        else:
            rij.update(ga.get(w) or {"sessies": 0, "sessies_nl": 0, "gebruikers": 0, "aankopen": 0,
                                     "omzet": 0.0, "conversie": 0.0})
        t = (gs or {}).get(w)
        if gs is None:
            rij.update(dict.fromkeys(GSC_VELDEN))
        elif t is None:
            rij.update({"gsc_klikken": 0, "gsc_vertoningen": 0, "gsc_ctr": 0.0, "gsc_positie": None})
        else:
            rij.update({"gsc_klikken": int(t[0]), "gsc_vertoningen": int(t[1]),
                        "gsc_ctr": round(t[0] / t[1] * 100, 2) if t[1] else 0.0,
                        "gsc_positie": round(t[2] / t[1], 1) if t[1] else None})
        weken.append(rij)
    fouten = {b: d for b, (st, d) in status.items() if st != "ok"}
    alles_fout = status["ga4"][0] != "ok" and status["gsc"][0] != "ok"
    kpi = {"bijgewerkt": tijdstempel(), "status": "fout" if alles_fout else "ok", "fouten": fouten,
           "gsc_laatste_dag": laatste_dag, "weken": weken, "kernwoorden": kern}
    return kpi, status


# ── Agenda ─────────────────────────────────────────────────────────────────────
def maak_agenda(inst: dict) -> dict:
    cal = (inst.get("agenda") or {}).get("calendar_id") or "info@higrip.nl"
    start = nu()
    uit = {"bijgewerkt": start.isoformat(), "status": "ok", "uitleg": "", "items": []}
    try:
        s = sessie(SCOPE_AGENDA)
        url = f"https://www.googleapis.com/calendar/v3/calendars/{urllib.parse.quote(cal)}/events"
        params = {"timeMin": start.isoformat(), "timeMax": (start + timedelta(days=AGENDA_DAGEN)).isoformat(),
                  "singleEvents": "true", "orderBy": "startTime", "maxResults": 250}
        data = http_json(s, url, params)
        for ev in data.get("items", []):
            if ev.get("status") == "cancelled":
                continue
            hele_dag = "date" in ev.get("start", {})
            if hele_dag:
                begin = ev["start"]["date"]
                einde = str(date.fromisoformat(ev["end"]["date"]) - timedelta(days=1))  # Google: exclusief
            else:
                begin, einde = ev["start"].get("dateTime"), ev.get("end", {}).get("dateTime")
            # zonder titel = alleen vrij/bezet gedeeld
            uit["items"].append({"start": begin, "eind": einde, "titel": ev.get("summary") or "Bezet",
                                 "hele_dag": hele_dag})
        uit["items"] = uit["items"][:100]
    except (Exception, SystemExit) as e:
        status, detail = status_van(e, "agenda")
        if getattr(e, "code", None) == 404:
            detail = f"Agenda {cal} is niet gedeeld met {SA_EMAIL}."
        uit.update(status=status, uitleg=f"{detail} Koppelen: {HOE['agenda']}")
    return uit


# ── Core Web Vitals (PageSpeed Insights) ───────────────────────────────────────
def psi_pagina(s, key, url: str) -> dict:
    params = {"url": url, "strategy": "mobile", "category": "performance"}
    if key:
        params["key"] = key
    data = http_json(s, "https://www.googleapis.com/pagespeedonline/v5/runPagespeed", params, timeout=150)
    lh, le = data["lighthouseResult"], data.get("loadingExperience") or {}
    audits, veld = lh["audits"], le.get("metrics") or {}

    def pct(k):
        return (veld.get(k) or {}).get("percentile")

    lcp, inp, cls = pct("LARGEST_CONTENTFUL_PAINT_MS"), pct("INTERACTION_TO_NEXT_PAINT"), pct("CUMULATIVE_LAYOUT_SHIFT_SCORE")
    score = lh["categories"]["performance"].get("score")
    return {
        "url": url,
        "score": round(score * 100) if score is not None else None,
        "lcp_ms": lcp if lcp is not None else round(audits["largest-contentful-paint"]["numericValue"]),
        "inp_ms": inp,
        "cls": round(cls / 100, 3) if cls is not None else round(audits["cumulative-layout-shift"]["numericValue"], 3),
        "tbt_ms": round(audits["total-blocking-time"]["numericValue"]),
        "meting": ("domein" if le.get("origin_fallback") else "veld") if lcp is not None else "lab",
    }


def maak_cwv() -> dict:
    key = os.environ.get("PAGESPEED_API_KEY")
    urls = [SITE + pad for pad in CWV_PADEN]
    uit = {"bijgewerkt": tijdstempel(), "status": "ok", "uitleg": "", "paginas": []}

    def meet(s):
        def een(url):
            try:
                return psi_pagina(s, key, url), None
            except Exception as e:
                return None, e
        with ThreadPoolExecutor(len(urls)) as pool:
            return list(pool.map(een, urls))

    sleutel_fout = None
    try:
        import requests
        if key:
            resultaten = meet(requests.Session())
        else:
            from google.auth.transport.requests import AuthorizedSession, Request
            cred = credentials(SCOPE_PSI)
            cred.refresh(Request())  # één keer vooraf, dan delen de threads een geldig token
            resultaten = meet(AuthorizedSession(cred))
            if all(e and status_van(e, "pagespeed")[0] == "niet_gekoppeld" for _, e in resultaten):
                sleutel_fout = status_van(resultaten[0][1], "pagespeed")[1]
                resultaten = meet(requests.Session())  # terugval: openbaar quotum
    except (Exception, SystemExit) as e:
        resultaten = [(None, e)] * len(urls)

    fouten = [(url, e) for url, (_, e) in zip(urls, resultaten) if e]
    for url, (r, e) in zip(urls, resultaten):
        uit["paginas"].append(r or {"url": url, "score": None, "lcp_ms": None, "inp_ms": None, "cls": None,
                                    "fout": foutmelding(e)})
    if len(fouten) == len(urls):
        status, detail = status_van(fouten[0][1], "pagespeed")
        if isinstance(fouten[0][1], ApiFout) and fouten[0][1].code == 429:
            status, detail = "niet_gekoppeld", "Openbaar quotum op (429)."
        if sleutel_fout:
            detail = f"{sleutel_fout} {detail}"
        uit.update(status=status, uitleg=f"{detail} Koppelen: {HOE['pagespeed']}")
    elif fouten:
        uit["uitleg"] = f"{len(fouten)} van {len(urls)} pagina's mislukt: {foutmelding(fouten[0][1])}"
    return uit


# ── Merchant Center ────────────────────────────────────────────────────────────
ERNST = {"disapproved": "afgekeurd", "demoted": "beperkt", "unaffected": "geen impact", "not_impacted": "geen impact"}


def _product(bestemmingen: list, problemen: list) -> dict:
    if any(b.get("disapprovedCountries") for b in bestemmingen):
        status = "afgekeurd"
    elif any(b.get("approvedCountries") for b in bestemmingen):
        status = "goedgekeurd"
    else:
        status = "in_behandeling"
    return {"status": status, "problemen": {(i.get("code"), ERNST.get(str(i.get("ernst")).lower(), i.get("ernst")),
                                             i.get("description")) for i in problemen}}


def merchant_producten(s, account: str) -> tuple:
    """Merchant API v1; staat die uit, dan Content API for Shopping v2.1."""
    url, sleutel, api = f"https://merchantapi.googleapis.com/products/v1/accounts/{account}/products", "products", "merchantapi v1"
    params = {"pageSize": 1000}
    try:
        pagina = http_json(s, url, params)
    except ApiFout as e:
        if not re.search(r"has not been used in project|it is disabled", str(e)):
            raise
        url, sleutel, api = f"https://shoppingcontent.googleapis.com/content/v2.1/{account}/productstatuses", "resources", "content v2.1"
        params = {"maxResults": 250}
        pagina = http_json(s, url, params)
    producten = []
    while True:
        for p in pagina.get(sleutel, []):
            st = p.get("productStatus", p)  # Merchant API nest de status, Content API niet
            producten.append(_product(st.get("destinationStatuses") or [], [
                {"code": i.get("code"), "ernst": i.get("severity") or i.get("servability"),
                 "description": i.get("description")} for i in st.get("itemLevelIssues") or []]))
        token = pagina.get("nextPageToken")
        if not token:
            return producten, api
        pagina = http_json(s, url, {**params, "pageToken": token})


def merchant(inst: dict) -> dict:
    account = str((inst.get("merchant") or {}).get("account_id") or "").strip()
    uit = {"bijgewerkt": tijdstempel(), "status": "niet_gekoppeld", "account_id": account or None, "uitleg": ""}
    if not account:
        uit["uitleg"] = f"Geen merchant.account_id in 05_Research/_data/instellingen.json. Koppelen: {HOE['merchant']}"
        return uit
    try:
        producten, api = merchant_producten(sessie(SCOPE_CONTENT), account)
    except (Exception, SystemExit) as e:
        status, detail = status_van(e, "merchant")
        uit.update(status=status, uitleg=f"{detail} Koppelen: {HOE['merchant']}")
        return uit
    tel = Counter(p["status"] for p in producten)
    problemen = Counter(pr for p in producten for pr in p["problemen"])
    uit.update(status="ok", api=api, producten=len(producten), goedgekeurd=tel["goedgekeurd"],
               afgekeurd=tel["afgekeurd"], in_behandeling=tel["in_behandeling"],
               problemen=[{"code": c, "ernst": e, "beschrijving": b, "aantal": n}
                          for (c, e, b), n in problemen.most_common(20)])
    return uit


# ── Koppelingen en het dashboard-commando ──────────────────────────────────────
def site_bereikbaar() -> tuple:
    try:
        req = urllib.request.Request(SITE + "/", method="HEAD", headers={"User-Agent": "HI-Grip-dashboard/1.0"})
        with urllib.request.urlopen(req, timeout=20) as r:
            return "ok", f"HTTP {r.status}"
    except Exception as e:
        return "fout", foutmelding(e)


def maak_koppelingen(status: dict, data_map: Path) -> dict:
    bronnen = []
    for bid, naam in (("ga4", "Google Analytics 4"), ("gsc", "Search Console"), ("agenda", "Google Agenda"),
                      ("merchant", "Merchant Center"), ("pagespeed", "PageSpeed Insights")):
        st, detail = status.get(bid, ("onbekend", "Niet gecontroleerd in deze run."))
        detail = detail.split(" Koppelen: ")[0]  # de uitleg staat al in hoe_koppelen
        bronnen.append({"id": bid, "naam": naam, "soort": "servicesleutel", "status": st, "detail": detail,
                        "hoe_koppelen": HOE[bid]})
    st, detail = status.get("site") or site_bereikbaar()
    bronnen.append({"id": "site", "naam": "Live site higrip.nl", "soort": "script", "status": st, "detail": detail,
                    "hoe_koppelen": HOE["site"]})
    shop = lees_json(data_map / "shopify.json") or {}
    for bid, naam in CONNECTORS:
        st, detail = "onbekend", "Connector op claude.ai: alleen een routine op info@ kan hem gebruiken en controleren."
        if bid == "shopify" and str(shop.get("bijgewerkt", ""))[:10]:
            try:
                dagen = (nu().date() - date.fromisoformat(str(shop["bijgewerkt"])[:10])).days
                st, detail = ("ok" if dagen <= 3 else "onbekend"), f"shopify.json door de Actiecontrole bijgewerkt op {shop['bijgewerkt'][:10]}"
            except ValueError:
                pass
        bronnen.append({"id": bid, "naam": naam, "soort": "connector", "status": st, "detail": detail,
                        "hoe_koppelen": f"claude.ai op info@ → Instellingen → Connectors → {naam} koppelen"})
    return {"bijgewerkt": tijdstempel(), "bronnen": bronnen}


def dashboard(data_map: Path) -> tuple:
    """Schrijft kpi, agenda, cwv en koppelingen; geeft (samenvatting, exitcode)."""
    inst = instellingen(data_map)
    kpi, status = maak_kpi(inst)
    pad = data_map / "kpi.json"
    if kpi["status"] == "fout" and (vorige := lees_json(pad)):
        # alles mislukt: vorige cijfers laten staan, alleen de poging en de fout vastleggen
        vorige.update(status="fout", fouten=kpi["fouten"], laatste_poging=kpi["bijgewerkt"])
        kpi = vorige
    schrijf_json(pad, kpi)

    agenda = maak_agenda(inst)
    status["agenda"] = (agenda["status"], agenda["uitleg"] or f"{len(agenda['items'])} items komende {AGENDA_DAGEN} dagen")
    schrijf_json(data_map / "agenda.json", agenda)

    cwv = maak_cwv()
    status["pagespeed"] = (cwv["status"], cwv["uitleg"] or f"{len(cwv['paginas'])} pagina's gemeten")
    pad = data_map / "cwv.json"
    if cwv["status"] != "ok" and (vorige := lees_json(pad)) and vorige.get("status") == "ok":
        vorige.update(status=cwv["status"], uitleg=cwv["uitleg"], laatste_poging=cwv["bijgewerkt"])
        cwv = vorige
    schrijf_json(pad, cwv)

    m = merchant(inst)
    status["merchant"] = (m["status"], m["uitleg"] or f"{m.get('producten', 0)} producten, {m.get('afgekeurd', 0)} afgekeurd")
    schrijf_json(data_map / "koppelingen.json", maak_koppelingen(status, data_map))

    samenvatting = {k: f"{st} — {detail.split(' Koppelen: ')[0]}"[:200] for k, (st, detail) in status.items()}
    samenvatting["geschreven"] = [f"{data_map.name}/{n}.json" for n in ("kpi", "agenda", "cwv", "koppelingen")]
    alles_mis = all(status[k][0] != "ok" for k in ("ga4", "gsc", "agenda", "pagespeed", "merchant"))
    return samenvatting, 1 if alles_mis else 0


def check() -> dict:
    uit = {}
    try:
        g = ga4(7)
        uit["ga4"] = f"ok — {int(g['totaal'].get('totaal', {}).get('nu', {}).get('sessions', 0))} sessies laatste 7 dagen"
    except SystemExit as e:
        uit["ga4"] = f"FOUT — {e}"
    except Exception as e:  # toegang of netwerk
        uit["ga4"] = f"FOUT — {type(e).__name__}: {str(e)[:200]}"
    try:
        uit["gsc"] = f"ok — {gsc_site(gsc_service())}"
    except SystemExit as e:
        uit["gsc"] = f"FOUT — {e}"
    except Exception as e:
        uit["gsc"] = f"FOUT — {type(e).__name__}: {str(e)[:200]}"
    return uit


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("bron", choices=["check", "ga4", "gsc", "pagina", "keyevents", "dashboard", "agenda", "cwv", "merchant"])
    p.add_argument("--dagen", type=int, default=7)
    p.add_argument("--top", type=int, default=25)
    p.add_argument("--url", help="bij pagina: pad of volledige URL")
    p.add_argument("--data-map", type=Path, default=DATA_DIR, help="map voor de dashboardbestanden (standaard 05_Research/_data)")
    a = p.parse_args()
    if a.bron == "pagina" and not a.url:
        p.error("pagina vereist --url")
    sys.stdout.reconfigure(encoding="utf-8")
    if a.bron in ("dashboard", "agenda", "cwv"):
        if a.bron == "dashboard":
            data, code = dashboard(a.data_map)
        else:
            data = maak_agenda(instellingen(a.data_map)) if a.bron == "agenda" else maak_cwv()
            schrijf_json(a.data_map / f"{a.bron}.json", data)
            code = 0 if data["status"] == "ok" else 1
        print(json.dumps(data, ensure_ascii=False, indent=1))
        sys.exit(code)
    data = {
        "check": check,
        "ga4": lambda: ga4(a.dagen),
        "gsc": lambda: gsc(a.dagen, a.top),
        "pagina": lambda: pagina(a.url, a.dagen),
        "keyevents": keyevents,
        "merchant": lambda: merchant(instellingen(a.data_map)),
    }[a.bron]()
    print(json.dumps(data, ensure_ascii=False, indent=1))


if __name__ == "__main__":
    main()
