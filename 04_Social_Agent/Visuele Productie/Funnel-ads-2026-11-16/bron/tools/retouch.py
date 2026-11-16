import numpy as np
from PIL import Image, ImageFilter

def dilate(m, r):
    return np.asarray(Image.fromarray((m*255).astype(np.uint8)).filter(ImageFilter.MaxFilter(2*r+1))).astype(np.float32)/255 > 0.5

def inpaint(a, mask, iters=600):
    """Diffusion fill of mask (bool HxW) from its surroundings; a float HxWx3."""
    out = a.copy()
    known = ~mask
    # start with the mean of the ring
    out[mask] = a[dilate(mask.astype(np.float32), 3) & known].mean(0)
    for _ in range(iters):
        p = np.pad(out, ((1,1),(1,1),(0,0)), mode='edge')
        avg = (p[:-2,1:-1] + p[2:,1:-1] + p[1:-1,:-2] + p[1:-1,2:]) / 4
        out[mask] = avg[mask]
    return out

def texture(a, mask, seed=3, sigma=0.03):
    rng = np.random.default_rng(seed)
    n = rng.normal(0, sigma, a.shape[:2]).astype(np.float32)
    n = np.asarray(Image.fromarray(((n+0.5)*255).clip(0,255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.8))).astype(np.float32)/255 - 0.5
    out = a.copy(); out[mask] = np.clip(a[mask] + n[mask][:, None], 0, 1)
    return out
