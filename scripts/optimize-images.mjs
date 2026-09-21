import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const dir = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(dir, '..');
const imgOut = path.join(root, 'public', 'assets', 'img');
await mkdir(imgOut, { recursive: true });

// 1) Logo: 480x244 PNG -> WebP + optimized PNG fallback
const logoPng = path.join(root, 'logo-miguel.png');
const logoMeta = await sharp(logoPng).metadata();
console.log(`logo-miguel.png: ${logoMeta.width}x${logoMeta.height}`);

await sharp(logoPng).resize(480, 244, { fit: 'cover' }).webp({ quality: 80 }).toFile(path.join(imgOut, 'logo.webp'));
await sharp(logoPng).resize(480, 244, { fit: 'cover' }).png({ compressionLevel: 9, palette: true }).toFile(path.join(imgOut, 'logo.png'));

// 2) Portfolio shots (currently hosted on Google) -> download + compress
const shots = [
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNa98iAElXWMc0jfZ5YoCw-CA-4L5ynMz0Q6ovL0fwPRB8nOOxMdxt95jqdIvyZ-Dzg-wgqqIGfnSAJEe0q3RDO7RkSQilDUQjEgo53NFeaYXnC9hxEteySL69JAEjc1KOI7cCC2lN2UMmIIqn611FqCQd2Hf9aJJSzubZ28tL7HyY-LhCBB4hSI45vYj5biJLMY7uUMfE6gwI94kg4us3_4hrtTFgC6EpyJmRQGjR6GXbys8YIRul',
    out: 'proyecto-1.webp',
    w: 1400,
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKgLJW51D32PrH9dXoLZl365P7lQ4nZSIRluFUK2hDC889sd9lURfjO2CW0j0TJlFhTHYxVoJfYPnJxwlX_nGYpXHmTE4ERjysNQvXRIGC6lzqSCq0p7ohlO6XtX7XB1lsoFwCdscSjkb2-ilEt77QDGun5obtsjrkcqXltyfTM_kaKCfStTPZjW6S92XoMZz0AqbI_qh3dlpxjffE_VrLD5DMKyL3bNx-Q47yUPk4iHg9_p1OnUnq',
    out: 'proyecto-2.webp',
    w: 900,
  },
];

for (const s of shots) {
  const res = await fetch(s.url);
  if (!res.ok) throw new Error(`Download failed ${res.status} for ${s.out}`);
  const buf = Buffer.from(await res.arrayBuffer());
  console.log(`source ${s.out}: ${(buf.length / 1024).toFixed(0)} KB`);
  const meta = await sharp(buf).metadata();
  const { width, height } = await sharp(buf).resize({ width: s.w, withoutEnlargement: true }).metadata();
  let quality = 78;
  let outBuf = await sharp(buf).metadata().then(m => sharp(buf));
  outBuf = await outBuf.rotate().resize({ width: s.w, withoutEnlargement: true }).webp({ quality }).toBuffer();
  // If still > 180KB, drop quality a notch
  if (outBuf.length > 180 * 1024) {
    outBuf = await outBuf.length && sharp(buf).rotate().resize({ width: s.w, withoutEnlargement: true }).webp({ quality: 65 }).toBuffer();
  }
  await sharp(outBuf).toFile(path.join(imgOut, s.out));
  const finalMeta = await sharp(path.join(imgOut, s.out)).metadata();
  console.log(`${s.out} → ${finalMeta.width}x${finalMeta.height} ${(outBuf.length / 1024).toFixed(0)} KB (src ${width}x${height})`);
}

console.log('Images done.');