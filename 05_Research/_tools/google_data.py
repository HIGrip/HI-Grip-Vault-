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

Uitvoer is JSON op stdout: huidige periode, vorige periode van gelijke lengte en het verschil.
  pagina:    Search Console voor één pagina (pad of volledige URL, www en zonder www tellen mee):
             klikken, vertoningen, ctr en positie nu vs vorige periode + top 10 zoektermen.
  keyevents: GA4 Admin API, de events die als key event staan: [{eventName, countingMethod, createTime}].
             Vereist dat de Google Analytics Admin API aanstaat in het Cloud-project van de sleutel.
Installeren: pip install cffi google-analytics-data google-api-python-client google-auth  (geen --upgrade: cryptography van Debian is niet te vervangen)
"""

import argparse
import base64
import json
import os
import re
import sys
import urllib.parse
from datetime import date, timedelta
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


def credentials():
    from google.oauth2 import service_account
    raw = None
    if os.environ.get("GOOGLE_SA_JSON_B64"):
        raw = base64.b64decode(os.environ["GOOGLE_SA_JSON_B64"]).decode("utf-8")
    elif os.environ.get("GOOGLE_SA_JSON"):
        raw = os.environ["GOOGLE_SA_JSON"]
    if raw:
        return service_account.Credentials.from_service_account_info(json.loads(raw), scopes=SCOPES)
    pad = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS") or str(Path.home() / ".claude" / "ga4-mcp-key.json")
    if not Path(pad).exists():
        sys.exit("Geen servicesleutel gevonden: zet GOOGLE_SA_JSON_B64 in de omgeving (zie 04_Agent_Infrastructuur/Routines/README.md).")
    return service_account.Credentials.from_service_account_file(pad, scopes=SCOPES)


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
    p.add_argument("bron", choices=["check", "ga4", "gsc", "pagina", "keyevents"])
    p.add_argument("--dagen", type=int, default=7)
    p.add_argument("--top", type=int, default=25)
    p.add_argument("--url", help="bij pagina: pad of volledige URL")
    a = p.parse_args()
    if a.bron == "pagina" and not a.url:
        p.error("pagina vereist --url")
    data = {
        "check": check,
        "ga4": lambda: ga4(a.dagen),
        "gsc": lambda: gsc(a.dagen, a.top),
        "pagina": lambda: pagina(a.url, a.dagen),
        "keyevents": keyevents,
    }[a.bron]()
    sys.stdout.reconfigure(encoding="utf-8")
    print(json.dumps(data, ensure_ascii=False, indent=1))


if __name__ == "__main__":
    main()
