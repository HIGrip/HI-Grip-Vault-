"""Maakt de grote ondergrondtexturen (kalksteen, rubber, geborsteld aluminium) als PNG in bron/.
Chrome kapt SVG-filters boven ca. 2500 px hoogte af; deze drie ondergronden vullen het hele beeld (2160x3840)."""
import pathlib

import numpy as np
from PIL import Image

BRON = pathlib.Path(__file__).resolve().parent.parent / "bron"
W, H = 2160, 3840


def ruis(beta, seed, sx=None, sy=None):
    """Gekleurde ruis via FFT. beta = spectrale helling; sx/sy = rek (in pixels) voor geborsteld metaal."""
    rng = np.random.default_rng(seed)
    f = np.fft.fft2(rng.standard_normal((H, W)))
    fy = np.fft.fftfreq(H)[:, None]
    fx = np.fft.fftfreq(W)[None, :]
    r = np.sqrt(fx ** 2 + fy ** 2)
    r[0, 0] = 1
    f = f / r ** (beta / 2)
    if sx:
        f = f * np.exp(-((fx * sx) ** 2) / 2) * np.exp(-((fy * (sy or 1)) ** 2) / 2)
    n = np.real(np.fft.ifft2(f))
    n = (n - n.mean()) / n.std()
    return n


def sla(naam, basis, var, fijn, n):
    rgb = np.array(basis, dtype=float)
    img = rgb[None, None, :] / 255 + (var * n + fijn * np.random.default_rng(99).standard_normal((H, W)))[:, :, None] * np.array([1, .98, .94])
    Image.fromarray((np.clip(img, 0, 1) * 255).astype("uint8")).save(BRON / naam, optimize=True)


if __name__ == "__main__":
    BRON.mkdir(exist_ok=True)
    # kalksteen: zachte grote vlekken plus fijne korrel
    sla("tex_steen.png", (214, 209, 200), .035, .014, .6 * ruis(2.6, 1) + .4 * ruis(1.2, 2))
    # zwart rubber: matte korrel met subtiele variatie
    sla("tex_rubber.png", (24, 24, 24), .010, .010, .5 * ruis(1.0, 3) + .5 * ruis(2.0, 4))
    # geborsteld aluminium: lange horizontale strepen
    sla("tex_alu.png", (30, 30, 31), .012, .004, ruis(0.5, 5, sx=260, sy=2))
    print("klaar")
