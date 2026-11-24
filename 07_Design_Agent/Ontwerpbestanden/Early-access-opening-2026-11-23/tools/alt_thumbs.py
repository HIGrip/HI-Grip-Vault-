"""Thumbnails van de twee alternatieve concepten (schetsniveau, geen volledige mail)."""
import sys
sys.argv = [sys.argv[0], sys.argv[1], sys.argv[2]]
exec(open(sys.argv[0].replace("alt_thumbs.py", "build_assets.py")).read().split("STEPS_MAP =")[0].replace("STEPS = sys.argv[3:] or", "STEPS = []  #"))
from PIL import Image
def altB():
    # Concept B 'Gastenlijst': tennisbeeld halftone-gecrop, code als toegangskaart/ticket-strook die de beeldrand passeert
    im = Image.new("RGB", (640, 900), BLACK); d = ImageDraw.Draw(im)
    ph = crop_fill(SP + "/TENNIS/Wit 2.0/IMG_4148.JPG", (600, 0, 3600, 3000), (640, 640)); ph = grade(ph, 1.25, 0.0, 0.9)
    im.paste(ph, (0, 0))
    a = Image.new("L", (640, 200)); 
    for y in range(200): a.paste(int(255 * ease(y / 200)), (0, y, 640, y + 1))
    im.paste(Image.new("RGB", (640, 200), BLACK), (0, 440), a)
    tracked(d, (30, 560), "TOEGANG", font(BLACKIT, 84), WHITE, -0.04)
    tracked(d, (30, 640), "VOOR JOU.", font(BLACKIT, 84), WHITE, -0.04)
    d.rounded_rectangle((30, 760, 610, 850), radius=14, fill=WHITE)
    d.text((54, 782), "[ CODE ]   [ % KORTING ]", font=font("Poppins-SemiBold.ttf", 28), fill=BLACK)
    save(im, "alt-B-gastenlijst.jpg", 80)
def altC():
    # Concept C 'Gripmeting': macro van het patroon vult het scherm, één stoere regel + code in de witte pill
    im = Image.new("RGB", (640, 900), BLACK)
    src = Image.open(PF + "/Performance Gripsokken 2.0 Zwart voorkant.jpg").convert("RGB"); w, h = src.size
    ph = src.crop((int(w * .25), int(h * .5), int(w * .25) + 1500, int(h * .5) + 2100)).resize((640, 900)); ph = grade(ph, 1.35, 0.4, 0.9)
    im.paste(ph, (0, 0)); d = ImageDraw.Draw(im)
    tracked(d, (30, 60), "EERDER", font(BLACKIT, 120), WHITE, -0.04)
    tracked(d, (30, 170), "DAN DE REST.", font(BLACKIT, 70), WHITE, -0.04)
    d.rounded_rectangle((30, 780, 610, 860), radius=40, fill=WHITE)
    d.text((70, 800), "Shop met jouw code   >", font=font("Poppins-SemiBold.ttf", 28), fill=BLACK)
    save(im, "alt-C-gripmeting.jpg", 80)
altB(); altC()
