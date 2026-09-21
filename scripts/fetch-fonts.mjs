import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const dir = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(dir, '..', 'public', 'assets', 'fonts');
await mkdir(outDir, { recursive: true });

const families =
  'family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1';
const cssUrl = `https://fonts.googleapis.com/css2?${families}`;
const ua =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';

const res = await fetch(cssUrl, { headers: { 'User-Agent': ua } });
if (!res.ok) throw new Error(`CSS request failed: ${res.status}`);
const css = await res.text();

const chunks = css.split('/* ');
const got = [];
const seen = new Set();

for (const chunk of chunks) {
  const subset = chunk.slice(0, chunk.indexOf(' */'));
  if (subset !== 'latin') continue;
  const face = chunk.slice(chunk.indexOf('*/') + 2);
  const family = face.match(/font-family:\s*'([^']+)'/)?.[1];
  const weight = face.match(/font-weight:\s*(\d+)/)?.[1] ?? '400';
  const style = face.match(/font-style:\s*(.+?);/)?.[1] ?? 'normal';
  const url = face.match(/url\(([^)]+)\)/)?.[1];
  if (!family || !url) continue;

  const base =
    family === 'Geist Mono'
      ? 'GeistMono'
      : family === 'Instrument Serif'
        ? 'InstrumentSerif'
        : 'Geist';
  const name = `${base}-${style === 'italic' ? 'Italic' : weightToName(weight)}`;
  const file = path.join(outDir, `${name}.woff2`);
  if (seen.has(file)) continue;
  seen.add(file);

  const fontRes = await fetch(url, { headers: { 'User-Agent': ua } });
  if (!fontRes.ok) throw new Error(`Font fetch failed ${fontRes.status} for ${name}`);
  const buf = Buffer.from(await fontRes.arrayBuffer());
  await writeFile(file, buf);
  console.log(`${name}.woff2 — ${(buf.length / 1024).toFixed(1)} KB`);
  got.push(file);
}

function weightToName(w) {
  return { 400: 'Regular', 500: 'Medium', 600: 'SemiBold' }[w] ?? w;
}

if (got.length < 7) console.warn(`Warning: expected 7 fonts, got ${got.length}`);
console.log('Fonts done.');