// Usage : node scripts/download-assets.mjs   (Node 18+)
// Télécharge les images/fichiers de l'ancien site Wix vers public/assets/{images,files}.
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';

const IMG_BASE = 'https://static.wixstatic.com/media/7ff1c1_';
const FILES = {
  'hero.mp4': 'https://video.wixstatic.com/video/11062b_77378fc0da68439ebd8fd24a2f51e50c/720p/mp4/file.mp4',
  'certificate-1.pdf': 'https://www.lmjenterprise.com/_files/ugd/7ff1c1_5f5dcca314bb4b559788ea288e25da9b.pdf',
  'certificate-2.pdf': 'https://www.lmjenterprise.com/_files/ugd/7ff1c1_656160d463c94fb99976457024a02402.pdf',
};

// Les identifiants d'images sont lus directement dans src/data/site.ts
const src = await readFile('src/data/site.ts', 'utf8');
const ids = [...new Set([...src.matchAll(/'([0-9a-f]{32}~mv2\.(?:jpg|png|webp))'/g)].map((m) => m[1]))];

const jobs = [
  ...ids.map((id) => ({ url: IMG_BASE + id, out: `public/assets/images/${id.replace('~mv2', '')}` })),
  ...Object.entries(FILES).map(([name, url]) => ({ url, out: `public/assets/files/${name}` })),
];

await mkdir('public/assets/images', { recursive: true });
await mkdir('public/assets/files', { recursive: true });
const exists = (f) => access(f).then(() => true, () => false);

let ok = 0, fail = 0;
async function run({ url, out }) {
  if (await exists(out)) return ok++;
  try {
    const r = await fetch(url);
    if (!r.ok) throw new Error(r.status);
    await writeFile(out, Buffer.from(await r.arrayBuffer()));
    ok++; console.log('✔', out);
  } catch (e) { fail++; console.error('✘', out, '←', url, `(${e.message})`); }
}
const queue = [...jobs];
await Promise.all(Array.from({ length: 6 }, async () => { for (let j; (j = queue.shift()); ) await run(j); }));
console.log(`\n${ok} fichiers OK, ${fail} en échec (sur ${jobs.length}).`);
