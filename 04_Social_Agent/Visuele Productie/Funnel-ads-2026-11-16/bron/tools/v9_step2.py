import sys, pathlib, numpy as np
from PIL import Image, ImageDraw, ImageFilter
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from imgops import grain, saturation, luma
W = pathlib.Path(sys.argv[1]); L = int(sys.argv[2]) if len(sys.argv) > 2 else 160
img = np.asarray(Image.open(W/'v9_base_rt.png')).astype(np.float32)/255
H, Wd = img.shape[:2]
M = np.asarray(Image.open(W/'v9_mask_human.png')).astype(np.float32)/255

def hblur(a, L):
    # horizontal box blur, edge-normalised, works on HxW or HxWxC
    pad = [(0,0),(L,L)] + ([(0,0)] if a.ndim == 3 else [])
    c = np.cumsum(np.pad(a, pad, mode='edge'), axis=1)
    c = np.concatenate([np.zeros_like(c[:, :1]), c], axis=1)
    x = np.arange(Wd)
    lo = x + L - L//2; hi = x + L + (L - L//2)
    return (c[:, hi] - c[:, lo]) / L

def gblur(a, r):
    if a.ndim == 2:
        return np.asarray(Image.fromarray((a*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(r))).astype(np.float32)/255
    return np.asarray(Image.fromarray((np.clip(a,0,1)*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(r))).astype(np.float32)/255

# planted lower leg + shoe of the main player
P = Image.new('L', (Wd, H), 0)
ImageDraw.Draw(P).polygon([(860,1120),(1250,1120),(1340,1500),(1420,1760),(1450,2150),(930,2150),(950,1760),(1040,1500)], fill=255)
P = np.asarray(P.filter(ImageFilter.GaussianBlur(28))).astype(np.float32)/255
ramp = np.clip((np.arange(H, dtype=np.float32)[:, None] - 1000) / 260, 0, 1)
P = P * ramp * np.clip(M*1.15, 0, 1)

# shallow depth of field on the far background (boards, floodlights): static, focus is foreground
horizon = np.clip((1060 - np.arange(H, dtype=np.float32)[:, None]) / 120, 0, 1) * np.ones((1, Wd), np.float32)
bg_soft = gblur(img, 7)
base = img*(1-horizon[..., None]) + bg_soft*horizon[..., None]

# motion: everything that is a person and not the planted leg streaks horizontally
Mmov = np.clip(M - P, 0, 1)
B = hblur(gblur(base, 1.2), L)
spread = hblur(Mmov, L)
m = np.clip(np.maximum(Mmov, spread*1.25), 0, 1)
out = base*(1-m[..., None]) + B*m[..., None]
out = out*(1-P[..., None]) + img*P[..., None]

# mute the orange cones (static, keep sharp, just quieter)
r, g, b = img[..., 0], img[..., 1], img[..., 2]
orange = np.clip((r - b - 0.18) * 5, 0, 1) * np.clip((r - g - 0.04) * 8, 0, 1)
orange = np.asarray(Image.fromarray((orange*255).astype(np.uint8)).filter(ImageFilter.MaxFilter(7)).filter(ImageFilter.GaussianBlur(2.5))).astype(np.float32)/255
orange = orange * (1 - m)  # cones are static; moving streaks keep their own colour
y = luma(out)[..., None]
muted = np.clip(0.06 + y * 0.62, 0, 1) * np.array([0.98, 0.99, 1.02], np.float32)
out = out*(1-orange[..., None]) + muted*orange[..., None]

np.save(W/'v9_P.npy', P)
Image.fromarray((np.clip(out,0,1)*255).astype(np.uint8)).save(W/'v9_motion.png')
Image.fromarray((np.clip(out,0,1)*255).astype(np.uint8)).resize((540, 675), Image.LANCZOS).save(W/'v9_motion_prev.jpg', quality=88)
print('ok', L)

# grade: calmer grass, cooler night, legibility at top and bottom, film grain
from imgops import grad_v, darken, vignette, scurve
g = np.clip(out, 0, 1)
g = saturation(g, 0.82)
g = scurve(g, 0.12)
g = g * np.array([0.97, 0.99, 1.03], np.float32)
g = darken(g, grad_v(H, Wd, 0, 900, 0.45, 0.0))
g = darken(g, grad_v(H, Wd, 2050, 2700, 0.0, 0.72))
g = vignette(g, 0.22, radius=0.9)
img_s = Image.fromarray((np.clip(g,0,1)*255).astype(np.uint8)).resize((1080, 1350), Image.LANCZOS)
fin = np.asarray(img_s).astype(np.float32)/255
fin = grain(fin, 0.016, seed=11)
Image.fromarray((np.clip(fin,0,1)*255+0.5).astype(np.uint8)).save(W/'v9_bg.jpg', quality=93, subsampling=0)
Image.fromarray((np.clip(fin,0,1)*255+0.5).astype(np.uint8)).resize((540,675), Image.LANCZOS).save(W/'v9_bg_prev.jpg', quality=88)
print('final ok')
