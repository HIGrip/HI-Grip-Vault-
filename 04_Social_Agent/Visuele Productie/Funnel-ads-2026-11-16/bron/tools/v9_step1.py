import sys, pathlib, numpy as np
from PIL import Image
sys.path.insert(0, str(pathlib.Path(__file__).parent))
import seg
seg.MODELS = pathlib.Path(sys.argv[3])
S = pathlib.Path(sys.argv[1]); W = pathlib.Path(sys.argv[2])
im = Image.open(S / 'IMG_0212.png').convert('RGB').crop((0, 600, 4000, 5600)).resize((2160, 2700), Image.LANCZOS)
im.save(W / 'v9_base.png')
rgb = np.asarray(im)
m1 = seg.segment(rgb, 'isnet'); m2 = seg.segment(rgb, 'human')
Image.fromarray((m1*255).astype(np.uint8)).save(W/'v9_mask_isnet.png')
Image.fromarray((m2*255).astype(np.uint8)).save(W/'v9_mask_human.png')
prev = Image.new('RGB', (1620, 675))
for i, x in enumerate([im, Image.fromarray((m1*255).astype(np.uint8)).convert('RGB'), Image.fromarray((m2*255).astype(np.uint8)).convert('RGB')]):
    prev.paste(x.resize((540, 675)), (i*540, 0))
prev.save(W / 'v9_masks_prev.jpg', quality=85)
print('ok')
