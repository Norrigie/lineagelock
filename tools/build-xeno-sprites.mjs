#!/usr/bin/env node
// Builds xeno-sprites.js from your own copy of Pokémon Xenoverse.
//
// The icons belong to the XenoTeam, so this repository does not ship them — it ships this script
// instead. Point it at your install and it writes the sidecar next to index.html.
//
//   node tools/build-xeno-sprites.mjs "C:/Program Files (x86)/XenoTeam/Xenoverse/.../Xenoverse"
//
// Without the sidecar the tracker still works; Xenoverse Pokémon just show letter placeholders.
//
// Xenoverse names its icons by dex number (icon042.png), not by species, so PBS/pokemon.txt has
// to be read to know which number is which. The keys written here have to match the names the
// tracker lists, which means repeating one small rule from the import: a species whose internal
// name is another species' name plus X is an "X Pokémon" ("Gastly X"), plus ELDIW is a regional
// form ("Meowth (Eldiw)"), and everything else — VINTAGE, BOSS, one-off NPC copies — is not
// something you can catch and is left out.
import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { join, basename, extname } from 'node:path';

const root = process.argv[2];
if (!root){
  console.error('usage: node tools/build-xeno-sprites.mjs <path to your Xenoverse folder>');
  process.exit(1);
}
async function firstDir(paths){
  for (const p of paths){
    try { if ((await stat(p)).isDirectory()) return p; } catch {}
  }
  return null;
}
const dir = await firstDir([join(root, 'Graphics', 'Icons'), root]);
if (!dir){
  console.error('Could not find Graphics/Icons under: ' + root);
  process.exit(1);
}

// The tracker's own normalisation, so "Nidoran♀" and "Meowth (Eldiw)" land on the same strings.
const key = s => String(s).replace(/♀/g, 'f').replace(/♂/g, 'm')
  .toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '');
const pretty = s => s === s.toUpperCase() ? s.charAt(0) + s.slice(1).toLowerCase() : s;

// --- read the species list ---------------------------------------------------------------------
let mons = [];
try {
  const txt = await readFile(join(root, 'PBS', 'pokemon.txt'), 'utf8');
  let cur = null;
  for (const raw of txt.split(/\r?\n/)){
    const line = raw.trim();
    const head = line.match(/^\[(\d+)\]$/);
    if (head){ cur = { id: +head[1] }; mons.push(cur); continue; }
    if (!cur) continue;
    const kv = line.match(/^(Name|InternalName)\s*=\s*(.*)$/);
    if (kv) cur[kv[1]] = kv[2];
  }
} catch {
  console.error('Could not read PBS/pokemon.txt under: ' + root);
  process.exit(1);
}
// first entry wins: the file repeats some species verbatim
const seen = new Set();
mons = mons.filter(m => m.InternalName && !seen.has(m.InternalName) && seen.add(m.InternalName));

const internals = new Set(mons.map(m => m.InternalName));
const NAMEFIX = { NIDORANfE: 'Nidoran♀', NIDORANmA: 'Nidoran♂' };
const label = m => {
  let base = null;
  for (const c of internals)
    if (c !== m.InternalName && m.InternalName.startsWith(c) && (!base || c.length > base.length)) base = c;
  const suffix = base ? m.InternalName.slice(base.length) : '';
  if (base && suffix !== 'X' && suffix !== 'ELDIW') return null;    // not a catchable form
  const nm = NAMEFIX[m.InternalName] || pretty(m.Name || '');
  if (!nm || nm === '???') return null;
  return nm + (suffix === 'X' ? ' X' : suffix === 'ELDIW' ? ' (Eldiw)' : '');
};

const wanted = new Map();          // dex id -> key
for (const m of mons){
  const nm = label(m);
  if (nm) wanted.set(m.id, key(nm));
}

// --- collect the icons -------------------------------------------------------------------------
const out = {};
let skipped = 0;
for (const f of await readdir(dir)){
  if (extname(f).toLowerCase() !== '.png'){ skipped++; continue; }
  const name = basename(f, extname(f));
  const m = name.match(/^icon(\d+)$/i);        // plain icons only: no "s" (shiny), no "_1" (form)
  if (!m){ skipped++; continue; }
  const k = wanted.get(parseInt(m[1], 10));
  if (!k){ skipped++; continue; }
  const buf = await readFile(join(dir, f));
  out[k] = 'data:image/png;base64,' + buf.toString('base64');
}

const n = Object.keys(out).length;
await writeFile('xeno-sprites.js',
  'window.XENO_SPRITES = ' + JSON.stringify(out) + ';\n');
console.log('wrote xeno-sprites.js — ' + n + ' icons, ' + skipped + ' files skipped');
if (!n) console.error('No icons matched. Is this the folder containing Graphics/ and PBS/?');
