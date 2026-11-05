"""Tests voor meta_ads_readonly_mcp.py. Geen netwerk, geen echt token.
Draai: python test_meta_ads_readonly_mcp.py
"""
import json, os, subprocess, sys, re

HERE = os.path.dirname(os.path.abspath(__file__))
import tempfile as _tf
os.environ["META_MCP_LOG"] = os.path.join(_tf.gettempdir(), "meta_mcp_test_hoofd.log")
SRV = os.path.join(HERE, "meta_ads_readonly_mcp.py")
ok = fail = 0

def check(name, cond, extra=""):
    global ok, fail
    if cond:
        ok += 1; print("OK    ", name)
    else:
        fail += 1; print("FAIL  ", name, extra)

# --- 1. echte stdio-handdruk, zonder token en zonder account
env = {k: v for k, v in os.environ.items() if not k.startswith("META_")}
msgs = [
    {"jsonrpc": "2.0", "id": 1, "method": "initialize", "params": {"protocolVersion": "2024-11-05"}},
    {"jsonrpc": "2.0", "method": "notifications/initialized"},
    {"jsonrpc": "2.0", "id": 2, "method": "tools/list"},
    {"jsonrpc": "2.0", "id": 3, "method": "tools/call", "params": {"name": "meta_campaigns", "arguments": {}}},
    {"jsonrpc": "2.0", "id": 4, "method": "tools/call", "params": {"name": "meta_delete_campaign", "arguments": {}}},
]
p = subprocess.run([sys.executable, SRV], input="\n".join(json.dumps(m) for m in msgs) + "\n",
                   capture_output=True, text=True, env=env, timeout=30)
out = [json.loads(l) for l in p.stdout.splitlines() if l.strip()]
byid = {o["id"]: o for o in out}
check("initialize geeft serverInfo", byid[1]["result"]["serverInfo"]["name"] == "meta-ads-readonly")
check("notificatie krijgt geen antwoord", len(out) == 4)
names = [t["name"] for t in byid[2]["result"]["tools"]]
check("6 tools, allemaal alleen-lezen namen", len(names) == 6 and all(n.startswith("meta_") for n in names), names)
check("geen schrijf/maak/verwijder-tool",
      not any(re.search(r"create|update|delete|pause|set_|post|write|launch|upload", n) for n in names), names)
check("call zonder account/token = nette FOUT", byid[3]["result"]["isError"] and "META_" in byid[3]["result"]["content"][0]["text"])
check("onbekende (schrijf)tool wordt geweigerd", byid[4]["result"]["isError"] and "Onbekende tool" in byid[4]["result"]["content"][0]["text"])

# --- 2. validatie en gedrag met nagebootste http
sys.path.insert(0, HERE)
import meta_ads_readonly_mcp as m
os.environ["META_AD_ACCOUNT_ID"] = "1234567890"
os.environ["META_ADS_TOKEN"] = "GEHEIM-TESTTOKEN-123"
calls = []
def fake_get(path, params):
    calls.append((path, dict(params)))
    return {"data": [{"id": "1"}], "paging": {"cursors": {"after": "XYZ"}, "next": "https://x"}}, "{\"call_count\":3}"
m.http_get = fake_get

r = m.call_tool("meta_insights", {"level": "campaign", "date_preset": "last_7d", "breakdowns": ["age"], "limit": 500})
check("insights: pad is act_<id>/insights", calls[-1][0] == "act_1234567890/insights", calls[-1][0])
check("limit begrensd op 100", calls[-1][1]["limit"] == 100)
check("paginering + gebruik teruggegeven", r.get("volgende_after") == "XYZ" and r.get("meta_gebruik"))
check("nooit action_report_time/use_unified_attribution_setting",
      not any(k in calls[-1][1] for k in ("action_report_time", "use_unified_attribution_setting")))

def raises(fn, *a):
    try:
        fn(*a); return False
    except m.ToolError:
        return True
check("breakdown buiten whitelist geweigerd", raises(m.call_tool, "meta_insights", {"breakdowns": ["email"]}))
check("veld buiten whitelist geweigerd", raises(m.call_tool, "meta_insights", {"fields": ["spend", "foo"]}))
check("ongeldige datum geweigerd", raises(m.call_tool, "meta_insights", {"since": "2026-1-1", "until": "2026-11-03"}))
check("since zonder until geweigerd", raises(m.call_tool, "meta_insights", {"since": "2026-11-01"}))
check("id met injectie geweigerd", raises(m.call_tool, "meta_adsets", {"campaign_id": "1 OR 1=1"}))
check("cursor met vreemde tekens geweigerd", raises(m.call_tool, "meta_campaigns", {"after": "a&access_token=x"}))
check("agent kan geen ander account kiezen (geen account-parameter)",
      all(not any("account" in prop for prop in t["inputSchema"].get("properties", {})) for t in m.tools_list()))
m.call_tool("meta_adsets", {"campaign_id": "123456789"})
check("filter campagne netjes als JSON", "campaign.id" in calls[-1][1]["filtering"])

# --- 3. statische controle van de broncode
src = open(SRV, encoding="utf-8").read()
check("geen POST/PUT/DELETE/PATCH in code", not re.search(r"""method\s*=\s*["'](POST|PUT|DELETE|PATCH)""", src))
check("geen data= in Request (zou een POST maken)", not re.search(r"Request\([^)]*\bdata\s*=", src))
check("alleen method=GET", re.findall(r"method\s*=\s*[\"'](\w+)", src) == ["GET"], re.findall(r"method\s*=\s*[\"'](\w+)", src))
check("één opener.open-aanroep, geen urlopen", src.count("OPENER.open(") == 1 and "urlopen(" not in src.replace("urllib.request.urlopen", "") )
check("host vast graph.facebook.com", 'HOST = "graph.facebook.com"' in src)
check("token alleen in Authorization-header", "access_token" not in src.replace("'access_token'", ""))
check("geen subprocess/os.system/eval/exec", not re.search(r"\bsubprocess\b|os\.system|\beval\(|\bexec\(", src))

# token mag nergens in uitvoer of fouttekst belanden
def boom(path, params):
    raise m.ToolError("Meta-fout HTTP 400: Invalid OAuth access token (code 190, subcode None)")
m.http_get = boom
resp = m.handle({"jsonrpc": "2.0", "id": 9, "method": "tools/call", "params": {"name": "meta_account_info", "arguments": {}}})
check("fouttekst bevat het token niet", "GEHEIM-TESTTOKEN" not in json.dumps(resp))
logtxt = open(m.LOG, encoding="utf-8").read() if os.path.exists(m.LOG) else ""
check("log bevat het token niet", "GEHEIM-TESTTOKEN" not in logtxt)

# --- 4. echte http_get (met nagebootste opener), redirects, referentiekluis, non-ASCII, rare berichten
import importlib, io, tempfile, urllib.error
m = importlib.reload(m)
os.environ["META_ADS_TOKEN"] = "GEHEIM-TESTTOKEN-123"
check("opener bevat NoRedirect", any(isinstance(h, m.NoRedirect) for h in m.OPENER.handlers))
check("redirect wordt geweigerd", m.NoRedirect().redirect_request(None, None, 302, "", {}, "https://evil.example/x") is None)

class FakeResp:
    def __init__(self, body, headers=None):
        self._b, self.headers = body, headers or {}
    def read(self, n=-1):
        return self._b[:n] if n >= 0 else self._b
    def __enter__(self):
        return self
    def __exit__(self, *a):
        return False

class FakeOpener:
    def __init__(self, fn):
        self.fn, self.req = fn, None
    def open(self, req, timeout=None):
        self.req = req
        return self.fn(req)

def perm_opener(perms, data=b'{"data":[{"id":"9"}]}'):
    seen = []
    def fn(r):
        seen.append(r.full_url)
        if "/me/permissions" in r.full_url:
            return FakeResp(json.dumps({"data": [{"permission": p, "status": "granted"} for p in perms]}).encode())
        return FakeResp(data)
    o = FakeOpener(fn)
    o.seen = seen
    return o

def data_calls(o):
    return [u for u in o.seen if "/me/permissions" not in u]

m._PERMS_OK[0] = False
m.OPENER = perm_opener(["ads_read", "public_profile"])
m.http_get("act_1/campaigns", {})
check("smal token (ads_read) werkt, rechtencontrole eenmalig", len(data_calls(m.OPENER)) == 1 and sum("/me/permissions" in u for u in m.OPENER.seen) == 1)
m.http_get("act_1/ads", {})
check("rechtencontrole wordt onthouden (niet bij elke aanroep)", sum("/me/permissions" in u for u in m.OPENER.seen) == 1)

for label, perms in [("ads_management erbij", ["ads_read", "ads_management"]),
                     ("breed token (Lars' gekozen set)", ["catalog_management", "pages_show_list", "ads_management", "ads_read", "business_management", "pages_read_engagement", "pages_manage_ads", "public_profile"])]:
    m._PERMS_OK[0] = False
    m.OPENER = perm_opener(perms)
    m.http_get("act_1/campaigns", {})
    check("bekend breed token werkt (alleen GET): " + label, len(data_calls(m.OPENER)) == 1)

for label, perms in [("whatsapp_business_management erbij", ["ads_read", "whatsapp_business_management"]),
                     ("instagram_manage_comments erbij", ["ads_read", "instagram_manage_comments"]),
                     ("onbekend recht erbij", ["ads_read", "iets_nieuws"])]:
    m._PERMS_OK[0] = False
    m.OPENER = perm_opener(perms)
    check("onbekend recht geweigerd, geen data: " + label, raises(m.http_get, "act_1/campaigns", {}) and not data_calls(m.OPENER))

m._PERMS_OK[0] = False
m.OPENER = perm_opener(["public_profile"])
check("token zonder ads_read geweigerd", raises(m.http_get, "act_1/campaigns", {}) and not data_calls(m.OPENER))

m._PERMS_OK[0] = False
m.OPENER = perm_opener(["ads_read", "iets_nieuws"])
resp = m.handle({"jsonrpc": "2.0", "id": 8, "method": "tools/call", "params": {"name": "meta_insights", "arguments": {}}})
check("via tool: nette FOUT met reden, geen data", resp["result"]["isError"] and "iets_nieuws" in resp["result"]["content"][0]["text"] and not data_calls(m.OPENER))

m._PERMS_OK[0] = True  # voor de volgende tests: rechtencontrole is dan al geslaagd
fo = FakeOpener(lambda r: FakeResp(b'{"data":[{"id":"9"}]}', {"x-business-use-case-usage": "u"}))
m.OPENER = fo
d, u = m.http_get("act_1234567890/campaigns", {"limit": 5})
check("http_get: methode GET", fo.req.get_method() == "GET")
check("http_get: Authorization-header met token", fo.req.get_header("Authorization") == "Bearer GEHEIM-TESTTOKEN-123")
check("http_get: token niet in de URL", "GEHEIM" not in fo.req.full_url and fo.req.full_url.startswith("https://graph.facebook.com/"))
m.OPENER = FakeOpener(lambda r: FakeResp(b"x" * (m.MAX_BYTES + 10)))
check("te groot antwoord geweigerd", raises(m.http_get, "act_1/ads", {}))
def http_error(r):
    raise urllib.error.HTTPError(r.full_url, 400, "bad", {}, io.BytesIO(b'{"error":{"message":"Invalid token GEHEIM-TESTTOKEN-123","code":190}}'))
m.OPENER = FakeOpener(http_error)
resp = m.handle({"jsonrpc": "2.0", "id": 5, "method": "tools/call", "params": {"name": "meta_account_info", "arguments": {}}})
txt = json.dumps(resp)
check("HTTP-fout: nette FOUT, code 190 zichtbaar", resp["result"]["isError"] and "190" in txt)
check("HTTP-fout: token gewist uit antwoord", "GEHEIM-TESTTOKEN" not in txt and "***" in txt)

os.environ.pop("META_ADS_TOKEN", None)
m._cred_read = lambda target: "KLUISTOKEN-xyz" if target == "HIGRIP_META_ADS_TOKEN" else ""
check("token uit referentiekluis (doelnaam klopt)", m.get_token() == "KLUISTOKEN-xyz")
check("redact wist kluistoken", "KLUISTOKEN" not in m.redact("fout met KLUISTOKEN-xyz erin"))
m._cred_read = lambda target: ""
check("zonder kluis en zonder env: nette FOUT", raises(m.get_token))

code = ("import meta_ads_readonly_mcp as m\n"
        "m.call_tool = lambda n, a: {'data': [{'name': 'Campagne \U0001F680 \u00e9\u00e8'}]}\n"
        "m.main()\n")
lines = [json.dumps({"jsonrpc": "2.0", "id": 6, "method": "tools/call", "params": {"name": "meta_campaigns", "arguments": {}}}),
         "[1,2]", "5", json.dumps({"jsonrpc": "2.0", "id": 7, "method": "ping"})]
env2 = {k: v for k, v in os.environ.items() if k not in ("PYTHONIOENCODING", "PYTHONUTF8")}
env2["META_MCP_LOG"] = os.path.join(tempfile.gettempdir(), "meta_mcp_test.log")
pr = subprocess.run([sys.executable, "-c", code], input=("\n".join(lines) + "\n").encode("utf-8"),
                    capture_output=True, cwd=HERE, env=env2, timeout=30)
outs = [json.loads(l) for l in pr.stdout.decode("utf-8").splitlines() if l.strip()]
check("emoji/accenten in uitvoer: server crasht niet, UTF-8", pr.returncode == 0 and "\U0001F680" in outs[0]["result"]["content"][0]["text"], pr.stderr.decode("utf-8", "replace")[:200])
check("niet-object berichten: Invalid Request, server blijft draaien",
      len(outs) == 4 and outs[1]["error"]["code"] == -32600 and outs[2]["error"]["code"] == -32600 and outs[3].get("id") == 7)

print("\n%d geslaagd, %d mislukt" % (ok, fail))
sys.exit(1 if fail else 0)
