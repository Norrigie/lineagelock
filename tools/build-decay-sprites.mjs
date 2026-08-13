#!/usr/bin/env node
// Builds decay-sprites.js from your own copy of Pokémon Decay.
//
// The icons belong to the Decay developers, so this repository does not ship them — it ships
// this script instead. Point it at your install and it writes the sidecar next to index.html.
//
//   node tools/build-decay-sprites.mjs "D:/Games/Pokémon Decay 1.2.3"
//
// Without the sidecar the tracker still works; Decay Pokémon just show letter placeholders.
import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { join, basename, extname } from 'node:path';

const root = process.argv[2];
if (!root){
  console.error('usage: node tools/build-decay-sprites.mjs <path to your Pokémon Decay folder>');
  process.exit(1);
}

async function firstDir(paths){
  for (const p of paths){
    try { if ((await stat(p)).isDirectory()) return p; } catch {}
  }
  return null;
}
const dir = await firstDir([
  join(root, 'Graphics', 'Pokemon', 'Icons'),
  join(root, 'Graphics', 'Pokémon', 'Icons'),
  root,
]);
if (!dir){
  console.error('Could not find Graphics/Pokemon/Icons under: ' + root);
  process.exit(1);
}

// Keys are normalised the way the tracker normalises a species name, so 'δBulbasaur' and
// 'Delta Bulbasaur' both resolve to deltabulbasaur.
const key = s => String(s).replace(/δ/g,'delta').replace(/♀/g,'f').replace(/♂/g,'m')
  .toLowerCase().replace(/[^a-z0-9]/g,'');

// Icon files are named by internal ID, which doesn't always match the species' display name
// (NIDORANfE is Nidoran♀, SHAYMIN1 is Shaymin). PBS/pokemon.txt knows both, so read it and
// register each icon under whichever names apply.
const alias = {};
const pbs = await firstDir([join(root, 'PBS')]);
if (pbs){
  try {
    const txt = await readFile(join(pbs, 'pokemon.txt'), 'utf8');
    let id = null;
    for (const raw of txt.split(/\r?\n/)){
      const line = raw.trim();
      const sec = line.match(/^\[([^\],]+)(?:,.*)?\]$/);
      if (sec){ id = key(sec[1]); continue; }
      const nm = line.match(/^Name\s*=\s*(.+)$/i);
      if (nm && id){ const k = key(nm[1]); if (k && k !== id) alias[id] = k; id = null; }
    }
    console.log(`read PBS/pokemon.txt — ${Object.keys(alias).length} id/name aliases`);
  } catch { console.log('PBS/pokemon.txt not readable — using filenames only'); }
} else {
  console.log('no PBS folder found — using filenames only');
}

const out = {};
let skipped = 0;
for (const f of await readdir(dir)){
  if (extname(f).toLowerCase() !== '.png'){ skipped++; continue; }
  const name = basename(f, extname(f));
  if (/^(egg|000|back)/i.test(name) || /_\d+$/.test(name)){ skipped++; continue; }  // alt forms
  const buf = await readFile(join(dir, f));
  const data = 'data:image/png;base64,' + buf.toString('base64');
  const k = key(name);
  out[k] = data;
  if (alias[k]) out[alias[k]] = data;      // also register the display-name spelling
}

const n = Object.keys(out).length;
if (!n){ console.error('No .png icons found in ' + dir); process.exit(1); }

await writeFile('decay-sprites.js',
  '// Pokémon Decay icon pack, generated locally by tools/build-decay-sprites.mjs.\n' +
  '// The artwork belongs to the Decay developers and is read from your own copy of the game.\n' +
  '// Do not redistribute this file.\n' +
  'window.DECAY_SPRITES = ' + JSON.stringify(out) + ';\n');

console.log(`wrote decay-sprites.js — ${n} icons (${skipped} files skipped)`);
console.log('keep it next to index.html and reload the tracker');
