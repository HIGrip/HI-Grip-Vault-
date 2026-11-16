import sys, pathlib, numpy as np
from PIL import Image, ImageFilter
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from retouch import inpaint, dilate, texture
from imgops import luma, saturation
W = pathlib.Path(sys.argv[1])
full = np.asarray(Image.open(W/'v9_base.png')).astype(np.float32)/255
x0, y0 = 940, 1700
a = full[y0:y0+460, x0:x0+520].copy()
r, g, b = a[...,0], a[...,1], a[...,2]
yy, xx = np.mgrid[0:460, 0:520]
blue = (b - r > 0.06) & (b - g > 0.02)
logo = blue & (xx > 240) & (xx < 430) & (yy > 180) & (yy < 345) & (luma(a) > 0.22)
logo = dilate(logo.astype(np.float32), 4)
a2 = inpaint(a, logo, 900)
a2 = texture(a2, logo, sigma=0.02)
# remaining blue/navy (heel counter, sole tip): neutralise colour, keep shading
rest = (b - r > 0.04) & ~logo & (yy > 150)
rest = np.asarray(Image.fromarray((rest*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(2))).astype(np.float32)/255
a2 = a2*(1-rest[...,None]) + saturation(a2, 0.05)*rest[...,None]
full[y0:y0+460, x0:x0+520] = a2
Image.fromarray((np.clip(full,0,1)*255).astype(np.uint8)).save(W/'v9_base_rt.png')
Image.fromarray((np.clip(a2,0,1)*255).astype(np.uint8)).save(W/'v9_shoe_rt.png')
print('logo px', int(logo.sum()))
