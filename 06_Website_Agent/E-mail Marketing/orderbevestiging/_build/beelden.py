# Tekent de beeldelementen voor optie D (2x resolutie). Uploaden naar Shopify > Content > Bestanden.
from PIL import Image, ImageDraw
from pathlib import Path
OUT = Path(__file__).resolve().parent.parent / "assets"
VOLT=(204,255,0,255); BLK=(10,10,10,255); TIT=(144,145,148,255); LINE=(58,58,60,255)
S=2

# 1. Raster-chevrons: rij pieken (embleemvorm) opgebouwd uit gelijke dots, Volt op zwart
W,H=600*S,44*S
im=Image.new("RGBA",(W,H),BLK); d=ImageDraw.Draw(im)
step=6*S; r=1.5*S
pw=72*S
for x0 in range(-pw//2, W+pw, pw):
    for gx in range(0,pw,step):
        for gy in range(0,H,step):
            px,py=x0+gx+step/2, gy+step/2
            # piek: binnen de driehoek met top midden boven
            rel=abs((px-x0)-pw/2)/(pw/2)
            top=H*rel*0.95
            if py>=top and py<=top+H*0.32:
                d.ellipse([px-r,py-r,px+r,py+r],fill=VOLT)
im.save(OUT/"higrip-orderbev-raster.png")

# 2. Statusbalk: 3 cirkels met lijn; stap 1 Volt met vinkje, 2 vrachtwagen, 3 pakket (line-art)
W,H=520*S,56*S
im=Image.new("RGBA",(W,H),BLK); d=ImageDraw.Draw(im)
cx=[W/6, W/2, 5*W/6]; cy=H/2; R=24*S; sw=2*S
d.line([cx[0]+R,cy,cx[1]-R,cy],fill=VOLT,width=sw)
d.line([cx[1]+R,cy,cx[2]-R,cy],fill=LINE,width=sw)
d.ellipse([cx[0]-R,cy-R,cx[0]+R,cy+R],fill=VOLT)
d.line([(cx[0]-9*S,cy+1*S),(cx[0]-2*S,cy+8*S),(cx[0]+10*S,cy-7*S)],fill=BLK,width=3*S,joint="curve")
for c in cx[1:]:
    d.ellipse([c-R,cy-R,c+R,cy+R],outline=LINE,width=sw)
c=cx[1]  # vrachtwagen
d.rectangle([c-12*S,cy-7*S,c+3*S,cy+5*S],outline=TIT,width=sw)
d.line([(c+3*S,cy-3*S),(c+8*S,cy-3*S),(c+12*S,cy+1*S),(c+12*S,cy+5*S),(c+3*S,cy+5*S)],fill=TIT,width=sw,joint="curve")
for wx in (c-7*S,c+7*S): d.ellipse([wx-3*S,cy+4*S,wx+3*S,cy+10*S],fill=BLK,outline=TIT,width=sw)
c=cx[2]  # pakket
d.polygon([(c,cy-11*S),(c+11*S,cy-5*S),(c,cy+1*S),(c-11*S,cy-5*S)],outline=TIT,width=sw)
d.line([(c-11*S,cy-5*S),(c-11*S,cy+6*S),(c,cy+12*S),(c+11*S,cy+6*S),(c+11*S,cy-5*S)],fill=TIT,width=sw,joint="curve")
d.line([(c,cy+1*S),(c,cy+12*S)],fill=TIT,width=sw)
im.save(OUT/"higrip-orderbev-status.png")
print("ok")
