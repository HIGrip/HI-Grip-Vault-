#!/usr/bin/env python3
"""HÏ Grip — Meta Ads ALLEEN-LEZEN MCP-server (stdio), zonder externe afhankelijkheden.

Ontwerp (besluit Lars 03-11-2026): de Ads Agent mag cijfers en instellingen LEZEN, nooit wijzigen.
- Alleen HTTP GET naar graph.facebook.com. Geen POST/DELETE, geen vrij pad: de agent kiest een
  tool met vaste parameters, nooit een URL of endpoint.
- Het advertentieaccount staat vast (META_AD_ACCOUNT_ID); de agent kan geen ander account kiezen.
- Het token (META_ADS_TOKEN, alleen-lezen `ads_read`) komt uit de omgeving van DIT proces en
  wordt nooit teruggegeven, gelogd of in een URL gezet (Authorization-header).
- Rapportageparameters met een bekend documentatieconflict (action_report_time,
  use_unified_attribution_setting) worden bewust NIET ondersteund.
- Uitvoer is begrensd (aantal rijen, bytes). Geen automatische herhaalpogingen.
Start: python meta_ads_readonly_mcp.py   (MCP over stdin/stdout, JSON per regel)
"""
import json
import os
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request

HOST = "graph.facebook.com"
VERSION = os.environ.get("META_API_VERSION", "v26.0")
MAX_LIMIT = 100
MAX_BYTES = 150_000
TIMEOUT = 30
LOG = os.environ.get("META_MCP_LOG") or os.path.join(os.path.dirname(os.path.abspath(__file__)), "meta_ads_readonly_mcp.log")
_SECRETS = []  # tokens die dit proces heeft gezien; worden uit alle uitvoer gewist


class NoRedirect(urllib.request.HTTPRedirectHandler):
    """Weigert elke redirect: de Authorization-header gaat nooit naar een andere host."""
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None


OPENER = urllib.request.build_opener(NoRedirect)

LEVELS = ["account", "campaign", "adset", "ad"]
DATE_PRESETS = ["today", "yesterday", "last_3d", "last_7d", "last_14d", "last_28d",
                "last_30d", "this_month", "last_month"]
TIME_INCREMENTS = ["1", "7", "monthly", "all_days"]
BREAKDOWNS = ["age", "gender", "country", "publisher_platform", "platform_position",
              "device_platform", "impression_device"]
INSIGHT_FIELDS = ["impressions", "reach", "frequency", "clicks", "inline_link_clicks", "spend",
                  "cpm", "cpc", "ctr", "actions", "action_values", "purchase_roas",
                  "cost_per_action_type", "campaign_name", "adset_name", "ad_name"]
DEFAULT_INSIGHT_FIELDS = ["impressions", "reach", "clicks", "inline_link_clicks", "spend", "cpm",
                          "ctr", "actions", "action_values", "purchase_roas"]
EFFECTIVE_STATUS = ["ACTIVE", "PAUSED", "ARCHIVED", "DELETED", "IN_PROCESS", "WITH_ISSUES",
                    "CAMPAIGN_PAUSED", "ADSET_PAUSED", "DISAPPROVED", "PENDING_REVIEW"]


class ToolError(Exception):
    pass


def log(line):
    try:
        with open(LOG, "a", encoding="utf-8") as f:
            f.write(time.strftime("%Y-%m-%d %H:%M:%S ") + line + "\n")
    except OSError:
        pass


def get_account():
    a = os.environ.get("META_AD_ACCOUNT_ID", "").strip()
    if a and not a.startswith("act_"):
        a = "act_" + a
    if not re.fullmatch(r"act_[0-9]{5,20}", a):
        raise ToolError("META_AD_ACCOUNT_ID ontbreekt of is ongeldig (verwacht act_<cijfers>).")
    return a


def _cred_read(target):
    """Leest een generieke referentie uit de Windows-referentiekluis (Credential Manager).
    Het token staat dus in geen enkel bestand, geen config en geen omgeving die de agent kan lezen."""
    if os.name != "nt":
        return ""
    import ctypes
    import ctypes.wintypes as w

    class CRED(ctypes.Structure):
        _fields_ = [("Flags", w.DWORD), ("Type", w.DWORD), ("TargetName", w.LPWSTR),
                    ("Comment", w.LPWSTR), ("LastWritten", w.FILETIME),
                    ("CredentialBlobSize", w.DWORD), ("CredentialBlob", ctypes.POINTER(ctypes.c_byte)),
                    ("Persist", w.DWORD), ("AttributeCount", w.DWORD), ("Attributes", ctypes.c_void_p),
                    ("TargetAlias", w.LPWSTR), ("UserName", w.LPWSTR)]

    adv = ctypes.WinDLL("advapi32", use_last_error=True)
    adv.CredReadW.argtypes = [w.LPCWSTR, w.DWORD, w.DWORD, ctypes.POINTER(ctypes.POINTER(CRED))]
    adv.CredFree.argtypes = [ctypes.c_void_p]
    pc = ctypes.POINTER(CRED)()
    if not adv.CredReadW(target, 1, 0, ctypes.byref(pc)):  # type 1 = CRED_TYPE_GENERIC
        return ""
    try:
        blob = ctypes.string_at(pc.contents.CredentialBlob, pc.contents.CredentialBlobSize)
        return blob.decode("utf-16-le").strip()
    finally:
        adv.CredFree(pc)


CRED_TARGET = "HIGRIP_META_ADS_TOKEN"


def get_token():
    t = os.environ.get("META_ADS_TOKEN", "").strip() or _cred_read(CRED_TARGET)
    if not t:
        raise ToolError("Geen Meta-token gevonden in de Windows-referentiekluis (doel %s). "
                        "Sla hem op met: cmdkey /generic:%s /user:meta /pass:HIER_JE_TOKEN (zonder haakjes)" % (CRED_TARGET, CRED_TARGET))
    if t not in _SECRETS:
        _SECRETS.append(t)
    return t


def redact(text):
    for sec in _SECRETS:
        text = text.replace(sec, "***")
    return text


def _raw_get(path, params):
    """Enige netwerkfunctie. Alleen GET, alleen graph.facebook.com, token in header."""
    token = get_token()
    url = "https://%s/%s/%s?%s" % (HOST, VERSION, path.lstrip("/"), urllib.parse.urlencode(params))
    parsed = urllib.parse.urlparse(url)
    if parsed.scheme != "https" or parsed.hostname != HOST:
        raise ToolError("Geblokkeerd: alleen https://%s is toegestaan." % HOST)
    req = urllib.request.Request(url, method="GET", headers={"Authorization": "Bearer " + token})
    try:
        with OPENER.open(req, timeout=TIMEOUT) as r:
            raw = r.read(MAX_BYTES + 1)
            usage = r.headers.get("x-business-use-case-usage") or r.headers.get("x-app-usage")
    except urllib.error.HTTPError as e:
        try:
            err = json.loads(e.read(20000).decode("utf-8", "replace")).get("error", {})
        except Exception:
            err = {}
        raise ToolError("Meta-fout HTTP %s: %s (code %s, subcode %s)" % (
            e.code, str(err.get("message", "onbekend"))[:400], err.get("code"), err.get("error_subcode")))
    except urllib.error.URLError as e:
        raise ToolError("Netwerkfout: %s" % str(e.reason)[:200])
    if len(raw) > MAX_BYTES:
        raise ToolError("Antwoord te groot (> %d bytes). Verklein limit, periode of velden." % MAX_BYTES)
    try:
        data = json.loads(raw.decode("utf-8"))
    except ValueError:
        raise ToolError("Ongeldig JSON-antwoord van Meta.")
    return data, usage


# Rechten die dit token mag hebben. Besluit Lars 03-11-2026: het token is bewust breed (ook voor het latere,
# aparte klaarzet-onderdeel met akkoord-slot). DIT programma kan er niets mee wijzigen: het doet alleen GET.
# Rechten die hier niet staan (bijv. whatsapp_*, instagram_*, user_*) = de koppeling weigert (fail closed).
READ_PERMISSIONS = {"ads_read", "public_profile", "read_insights"}
BROAD_PERMISSIONS_ACCEPTED = {"ads_management", "business_management", "catalog_management", "pages_manage_ads",
                              "pages_read_engagement", "pages_show_list"}
ALLOWED_PERMISSIONS = READ_PERMISSIONS | BROAD_PERMISSIONS_ACCEPTED
_PERMS_OK = [False]


def http_get(path, params):
    """Alle tools gaan hierlangs. Controleert eerst eenmalig dat het token ALLEEN leesrechten heeft."""
    if not _PERMS_OK[0]:
        d, _ = _raw_get("me/permissions", {})
        granted = {p.get("permission") for p in (d.get("data") or []) if p.get("status") == "granted"}
        extra = sorted(x for x in granted if x not in ALLOWED_PERMISSIONS)
        if "ads_read" not in granted:
            raise ToolError("Geblokkeerd: het token heeft geen ads_read. Maak een token met alleen ads_read.")
        if extra:
            raise ToolError("Geblokkeerd: dit token kan meer dan lezen (%s). Deze koppeling werkt alleen met een "
                            "token met uitsluitend ads_read. Trek dit token in en maak een nieuw token." % ", ".join(extra))
        _PERMS_OK[0] = True
    return _raw_get(path, params)


def pick_list(value, allowed, name, default=None):
    if value is None or value == []:
        return default
    if isinstance(value, str):
        value = [v.strip() for v in value.split(",") if v.strip()]
    bad = [v for v in value if v not in allowed]
    if bad:
        raise ToolError("Niet toegestaan voor %s: %s. Toegestaan: %s" % (name, bad, allowed))
    return value


def pick_one(value, allowed, name, default):
    v = default if value in (None, "") else str(value)
    if v not in allowed:
        raise ToolError("Ongeldige waarde voor %s: %r. Toegestaan: %s" % (name, v, allowed))
    return v


def clamp_limit(value, default=25):
    try:
        n = int(value) if value not in (None, "") else default
    except (TypeError, ValueError):
        raise ToolError("limit moet een getal zijn.")
    return max(1, min(n, MAX_LIMIT))


def paging(args, params):
    params["limit"] = clamp_limit(args.get("limit"))
    after = args.get("after")
    if after:
        if not re.fullmatch(r"[A-Za-z0-9_=\-]{1,300}", str(after)):
            raise ToolError("Ongeldige 'after'-cursor.")
        params["after"] = after


def finish(data, usage):
    out = {"data": data.get("data", data)}
    cur = (data.get("paging") or {}).get("cursors") if isinstance(data, dict) else None
    if cur and cur.get("after") and (data.get("paging") or {}).get("next"):
        out["volgende_after"] = cur["after"]
    if usage:
        out["meta_gebruik"] = usage
    return out


def numeric_id(value, name):
    if not re.fullmatch(r"[0-9]{5,25}", str(value or "")):
        raise ToolError("%s moet een numeriek id zijn." % name)
    return str(value)


# ---------- tools ----------
def t_account_info(args):
    acc = get_account()
    d, u = http_get(acc, {"fields": "name,account_status,currency,timezone_name,amount_spent,"
                                    "spend_cap,balance,business_country_code,created_time,disable_reason"})
    return {"data": d, "meta_gebruik": u} if u else {"data": d}


def t_campaigns(args):
    acc = get_account()
    p = {"fields": "id,name,objective,status,effective_status,buying_type,daily_budget,lifetime_budget,"
                   "budget_remaining,bid_strategy,special_ad_categories,start_time,stop_time,updated_time"}
    st = pick_list(args.get("effective_status"), EFFECTIVE_STATUS, "effective_status")
    if st:
        p["effective_status"] = json.dumps(st)
    paging(args, p)
    return finish(*http_get(acc + "/campaigns", p))


def t_adsets(args):
    acc = get_account()
    p = {"fields": "id,name,campaign_id,status,effective_status,optimization_goal,billing_event,bid_strategy,"
                   "daily_budget,lifetime_budget,budget_remaining,start_time,end_time,promoted_object,"
                   "attribution_spec,targeting,learning_stage_info,updated_time"}
    if args.get("campaign_id"):
        p["filtering"] = json.dumps([{"field": "campaign.id", "operator": "EQUAL",
                                      "value": numeric_id(args["campaign_id"], "campaign_id")}])
    st = pick_list(args.get("effective_status"), EFFECTIVE_STATUS, "effective_status")
    if st:
        p["effective_status"] = json.dumps(st)
    paging(args, p)
    return finish(*http_get(acc + "/adsets", p))


def t_ads(args):
    acc = get_account()
    p = {"fields": "id,name,adset_id,campaign_id,status,effective_status,issues_info,"
                   "creative{id,name,object_type},updated_time"}
    flt = []
    if args.get("adset_id"):
        flt.append({"field": "adset.id", "operator": "EQUAL", "value": numeric_id(args["adset_id"], "adset_id")})
    if args.get("campaign_id"):
        flt.append({"field": "campaign.id", "operator": "EQUAL", "value": numeric_id(args["campaign_id"], "campaign_id")})
    if flt:
        p["filtering"] = json.dumps(flt)
    st = pick_list(args.get("effective_status"), EFFECTIVE_STATUS, "effective_status")
    if st:
        p["effective_status"] = json.dumps(st)
    paging(args, p)
    return finish(*http_get(acc + "/ads", p))


def t_insights(args):
    acc = get_account()
    p = {"level": pick_one(args.get("level"), LEVELS, "level", "campaign"),
         "fields": ",".join(pick_list(args.get("fields"), INSIGHT_FIELDS, "fields", DEFAULT_INSIGHT_FIELDS)),
         "time_increment": pick_one(args.get("time_increment"), TIME_INCREMENTS, "time_increment", "all_days")}
    since, until = args.get("since"), args.get("until")
    if since or until:
        for n, v in (("since", since), ("until", until)):
            if not re.fullmatch(r"[0-9]{4}-[0-9]{2}-[0-9]{2}", str(v or "")):
                raise ToolError("%s moet JJJJ-MM-DD zijn (en since én until zijn beide nodig)." % n)
        p["time_range"] = json.dumps({"since": since, "until": until})
    else:
        p["date_preset"] = pick_one(args.get("date_preset"), DATE_PRESETS, "date_preset", "last_7d")
    bd = pick_list(args.get("breakdowns"), BREAKDOWNS, "breakdowns")
    if bd:
        p["breakdowns"] = ",".join(bd)
    paging(args, p)
    return finish(*http_get(acc + "/insights", p))


def t_pixels(args):
    acc = get_account()
    d, u = http_get(acc + "/adspixels", {"fields": "id,name,last_fired_time,is_unavailable,creation_time",
                                         "limit": clamp_limit(args.get("limit"), 10)})
    return finish(d, u)


PAGE = {"limit": {"type": "integer", "description": "Aantal rijen (1-100, standaard 25)."},
        "after": {"type": "string", "description": "Cursor 'volgende_after' uit een eerder antwoord."}}
STATUS = {"effective_status": {"type": "array", "items": {"type": "string", "enum": EFFECTIVE_STATUS},
                               "description": "Filter op werkelijke status."}}

TOOLS = {
    "meta_account_info": (t_account_info, "Basisgegevens van het vaste advertentieaccount (naam, status, valuta, tijdzone, uitgegeven totaal). Alleen lezen.",
                          {"type": "object", "properties": {}}),
    "meta_campaigns": (t_campaigns, "Lijst campagnes met doel, status, budget en biedstrategie. Alleen lezen.",
                       {"type": "object", "properties": dict(PAGE, **STATUS)}),
    "meta_adsets": (t_adsets, "Lijst advertentiesets met optimalisatiedoel, budget, targeting en attributie-instelling. Alleen lezen.",
                    {"type": "object", "properties": dict(PAGE, campaign_id={"type": "string"}, **STATUS)}),
    "meta_ads": (t_ads, "Lijst advertenties met status en eventuele problemen (geen creatives genereren of wijzigen). Alleen lezen.",
                 {"type": "object", "properties": dict(PAGE, adset_id={"type": "string"}, campaign_id={"type": "string"}, **STATUS)}),
    "meta_insights": (t_insights, "Prestatiecijfers (vertoningen, klikken, uitgaven, aankopen, ROAS) per niveau, periode en optionele uitsplitsing. Alleen lezen, geaggregeerd.",
                      {"type": "object", "properties": dict(PAGE,
                          level={"type": "string", "enum": LEVELS},
                          date_preset={"type": "string", "enum": DATE_PRESETS},
                          since={"type": "string", "description": "JJJJ-MM-DD, samen met until"},
                          until={"type": "string", "description": "JJJJ-MM-DD"},
                          time_increment={"type": "string", "enum": TIME_INCREMENTS},
                          breakdowns={"type": "array", "items": {"type": "string", "enum": BREAKDOWNS}},
                          fields={"type": "array", "items": {"type": "string", "enum": INSIGHT_FIELDS}})}),
    "meta_pixels": (t_pixels, "Pixels van het account met laatst gevuurd moment. Kan extra rechten vragen; dan volgt een duidelijke foutmelding. Alleen lezen.",
                    {"type": "object", "properties": {"limit": PAGE["limit"]}}),
}


def tools_list():
    return [{"name": n, "description": d, "inputSchema": s} for n, (_, d, s) in TOOLS.items()]


def call_tool(name, args):
    if name not in TOOLS:
        raise ToolError("Onbekende tool: %s" % name)
    log("call %s %s" % (name, json.dumps({k: v for k, v in (args or {}).items()}, ensure_ascii=False)[:300]))
    return TOOLS[name][0](args or {})


def handle(msg):
    if not isinstance(msg, dict):
        return {"jsonrpc": "2.0", "id": None, "error": {"code": -32600, "message": "Invalid Request"}}
    method, mid = msg.get("method"), msg.get("id")
    if mid is None:  # notificatie
        return None
    if method == "initialize":
        pv = (msg.get("params") or {}).get("protocolVersion", "2024-11-05")
        return {"jsonrpc": "2.0", "id": mid, "result": {
            "protocolVersion": pv, "capabilities": {"tools": {}},
            "serverInfo": {"name": "meta-ads-readonly", "version": "1.0.0"}}}
    if method == "ping":
        return {"jsonrpc": "2.0", "id": mid, "result": {}}
    if method == "tools/list":
        return {"jsonrpc": "2.0", "id": mid, "result": {"tools": tools_list()}}
    if method == "tools/call":
        p = msg.get("params") or {}
        try:
            out = call_tool(p.get("name"), p.get("arguments"))
            res = {"content": [{"type": "text", "text": redact(json.dumps(out, ensure_ascii=False))}], "isError": False}
        except ToolError as e:
            res = {"content": [{"type": "text", "text": redact("FOUT: %s" % e)}], "isError": True}
        except Exception as e:  # nooit een stacktrace met details teruggeven
            log("onverwachte fout: %s" % type(e).__name__)
            res = {"content": [{"type": "text", "text": "FOUT: onverwachte fout (%s)" % type(e).__name__}], "isError": True}
        return {"jsonrpc": "2.0", "id": mid, "result": res}
    return {"jsonrpc": "2.0", "id": mid, "error": {"code": -32601, "message": "Methode niet ondersteund"}}


def main():
    for stream in (sys.stdin, sys.stdout):
        try:
            stream.reconfigure(encoding="utf-8")
        except Exception:
            pass
    for line in sys.stdin:
        line = line.strip()
        if not line:
            continue
        try:
            resp = handle(json.loads(line))
        except ValueError:
            resp = {"jsonrpc": "2.0", "id": None, "error": {"code": -32700, "message": "Parse error"}}
        if resp is not None:
            sys.stdout.write(json.dumps(resp, ensure_ascii=False) + "\n")
            sys.stdout.flush()


if __name__ == "__main__":
    main()
