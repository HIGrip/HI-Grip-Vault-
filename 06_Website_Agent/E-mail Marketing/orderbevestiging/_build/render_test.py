# Rendert de drie opties met twee testorders (lokale Liquid-simulatie van Shopify-notificaties)
# en maakt screenshots op 600px (desktop) en 375px (mobiel).
# Gebruik: python -I render_test.py
from pathlib import Path
from liquid import Environment

ROOT = Path(__file__).resolve().parent.parent
OUTR = ROOT / "_build" / "render"
SHOTS = ROOT / "screenshots"
OUTR.mkdir(exist_ok=True)
SHOTS.mkdir(exist_ok=True)

IMG = "https://www.higrip.nl/cdn/shop/files/HI_Grip_gripsokken_wit_grippatroon.jpg"

env = Environment()
env.add_filter("money", lambda c: "€" + f"{int(c)/100:.2f}".replace(".", ","))
from datetime import datetime


def _date(v, fmt):  # Shopify kent %-d/%-m; Windows-strftime niet
    d = datetime.fromisoformat(v)
    return fmt.replace("%-d", str(d.day)).replace("%-m", str(d.month)).replace("%Y", str(d.year))


env.add_filter("date", _date)
env.add_filter("img_url", lambda u, size="": f"{u}?width={size.split('x')[0]}" if u else "")


def fmt_addr(a):
    if not a:
        return ""
    return "<br>".join(x for x in [a.get("name"), a.get("address1"), f"{a.get('zip')} {a.get('city')}", a.get("country")] if x)


env.add_filter("format_address", fmt_addr)


def line(title, variant, qty, orig, final, alloc=None):
    return {"title": f"{title} - {variant}", "product": {"title": title}, "variant": {"title": variant},
            "quantity": qty, "original_line_price": orig, "final_line_price": final, "image": IMG, "groups": [],
            "discount_allocations": [{"amount": orig - final, "discount_application": {"title": alloc, "target_selection": "entitled"}}] if alloc else []}


base = {"order_status_url": "https://www.higrip.nl/account/orders/test", "created_at": "2026-11-24T14:12:00+01:00",
        "billing_address": {"first_name": "Sanne", "name": "Sanne de Vries", "address1": "Factuurweg 9", "zip": "1234 AB", "city": "Utrecht", "country": "Nederland"}}

ORDER1 = dict(base, name="#1042", item_count=4,
              subtotal_line_items=[line("Performance Grip Socks 2.0", "40-46", 3, 5385, 4495, "3-pack"),
                                   line("Performance Grip Socks 2.0", "34-39", 1, 1795, 1795)],
              discount_applications=[{"type": "discount_code", "title": "TESTCODE", "target_selection": "all"}],
              subtotal_price=5790, shipping_price=0, tax_price=1005, total_price=5790,
              shipping_address={"first_name": "Sanne", "name": "Sanne de Vries", "address1": "Teststraat 1", "zip": "1234 AB", "city": "Utrecht", "country": "Nederland"},
              shipping_method={"title": "PostNL"}, delivery_agreements=[{"delivery_method_type": "shipping"}],
              transactions=[{"kind": "sale", "status": "success", "gateway_display_name": "iDEAL", "payment_details": {}}])
# Korting: regels 4495+1795=6290, orderkorting 500 -> subtotal_price 5790.
ORDER1["subtotal_price"] = 5790
ORDER1["total_price"] = 5790

ORDER2 = dict(base, name="#1043", item_count=1,
              subtotal_line_items=[line("Performance Grip Socks 2.0", "40-46", 1, 1795, 1795)],
              discount_applications=[], subtotal_price=1795, shipping_price=500, tax_price=398, total_price=2295,
              shipping_address={"first_name": "Lotte", "name": "Lotte Peeters", "address1": "Teststraat 2", "zip": "2000", "city": "Antwerpen", "country": "België"},
              shipping_method={"title": "Verzending buitenland"}, delivery_agreements=[{"delivery_method_type": "shipping"}],
              transactions=[{"kind": "sale", "status": "success", "gateway_display_name": "Visa", "payment_details": {"credit_card_last_four_digits": "4242"}}])

ORDER3 = dict(ORDER2, name="#1044", shipping_price=0, total_price=1795, shipping_method={"title": "Afhalen in Utrecht"},
              delivery_agreements=[{"delivery_method_type": "pick-up"}])

files = []
import sys
OPTS = [a for a in sys.argv[1:] if not a.startswith("--")] or ["optie-a-bonnetje", "optie-b-dark-hero", "optie-c-raster", "optie-d-statusbalk"]
for opt in OPTS:
    src = (ROOT / f"{opt}.html").read_text(encoding="utf-8")
    if "--lokaal" in sys.argv:  # nog niet geüploade beelden lokaal laden
        src = src.replace("https://cdn.shopify.com/s/files/1/0935/0918/9959/files/higrip-orderbev-", (ROOT / "assets").as_uri() + "/higrip-orderbev-")
    tpl = env.from_string(src)
    for tag, o in [("order1", ORDER1), ("order2", ORDER2), ("afhalen", ORDER3)]:
        p = OUTR / f"{opt}--{tag}.html"
        p.write_text(tpl.render(**o), encoding="utf-8")
        files.append(p)

from playwright.sync_api import sync_playwright
with sync_playwright() as pw:
    b = pw.chromium.launch()
    for p in files:
        for w, lab in [(680, "desktop"), (375, "mobiel")]:
            if "afhalen" in p.name and lab == "desktop":
                continue
            pg = b.new_page(viewport={"width": w, "height": 900})
            pg.goto(p.as_uri(), wait_until="domcontentloaded", timeout=60000)
            pg.wait_for_load_state("load", timeout=20000) if False else None
            pg.wait_for_function("[...document.images].every(i=>i.complete)", timeout=30000); pg.wait_for_timeout(800)
            sw = pg.evaluate("document.documentElement.scrollWidth")
            if sw > w: print(pg.evaluate("[...document.querySelectorAll('*')].filter(e=>e.getBoundingClientRect().right>%d+1).slice(0,4).map(e=>e.tagName+'.'+e.className+' '+Math.round(e.getBoundingClientRect().width))" % w))
            pg.screenshot(path=str(SHOTS / f"{p.stem}--{lab}.png"), full_page=True)
            print(p.stem, lab, "scrollWidth", sw, "OK" if sw <= w else "HORIZONTALE SCROLL")
            pg.close()
    b.close()
