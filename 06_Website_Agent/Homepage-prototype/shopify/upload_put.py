"""Zet de themabestanden klaar voor themeFilesUpsert via Shopify Bestanden.

1. stagedUploadsCreate (resource FILE, PUT) met de invoer uit `--input` → antwoord opslaan als JSON.
2. python3 upload_put.py put <antwoord.json>   PUT elk bestand naar zijn staged URL.
3. fileCreate met de resourceUrl's; daarna themeFilesUpsert met body type URL naar de cdn-URL.

Bestandsnamen in Bestanden: hpup-<map>__<naam>.txt (platte tekst, zodat Shopify ze als algemeen bestand accepteert).
"""
import json
import os
import subprocess
import sys
import urllib.parse

THEME = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'theme')


def files():
    out = []
    for r, _, xs in os.walk(THEME):
        for x in xs:
            out.append(os.path.relpath(os.path.join(r, x), THEME))
    return sorted(out)


def staged_name(rel):
    return 'hpup-' + rel.replace('/', '__') + '.txt'


def cmd_input():
    print(json.dumps({'input': [{'filename': staged_name(f), 'mimeType': 'text/plain', 'httpMethod': 'PUT',
                                 'resource': 'FILE', 'fileSize': str(os.path.getsize(os.path.join(THEME, f)))}
                                for f in files()]}))


def cmd_put(resp_path):
    data = json.load(open(resp_path))
    targets = data['data']['stagedUploadsCreate']['stagedTargets'] if 'data' in data else data['stagedUploadsCreate']['stagedTargets']
    by_name = {staged_name(f): f for f in files()}
    out = []
    for t in targets:
        name = urllib.parse.unquote(t['url'].split('?')[0].rsplit('/', 1)[-1])
        rel = by_name.get(name)
        if rel is None:
            raise SystemExit('onbekend doel: ' + name)
        # alleen Content-Type meesturen: de ondertekende URL weigert extra headers zoals x-goog-acl
        r = subprocess.run(['curl', '-sS', '-o', '/dev/null', '-w', '%{http_code}', '-X', 'PUT', '-H', 'Content-Type: text/plain',
                            '--data-binary', '@' + os.path.join(THEME, rel), t['url']], capture_output=True, text=True)
        print(r.stdout, rel, file=sys.stderr)
        if r.stdout not in ('200', '201'):
            raise SystemExit('PUT mislukt voor ' + rel + ': ' + r.stdout + r.stderr)
        out.append({'rel': rel, 'resourceUrl': t['resourceUrl']})
    print(json.dumps(out))


if __name__ == '__main__':
    if sys.argv[1] == 'input':
        cmd_input()
    elif sys.argv[1] == 'put':
        cmd_put(sys.argv[2])
