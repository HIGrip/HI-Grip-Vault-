import sys, re, cssedit
sh = cssedit.Sheet(open(sys.argv[1]).read())
pat = re.compile(sys.argv[2]) if len(sys.argv) > 2 else re.compile(r'var\(--hi-|font|px|clamp|padding|gap|radius|height|width|opacity')
for rule, med in cssedit._walk(sh.items):
    for d in cssedit._split_top(rule.body, ';'):
        m = re.match(r'\s*([-\w]+)\s*:\s*(.*?)\s*$', d, re.S)
        if m and pat.search(m.group(1) + ':' + m.group(2)):
            print(f"{(med or '')[:28]:28} {rule.prelude.strip()[:60]:60} {m.group(1)}: {m.group(2)[:90]}")
