# 🎲 Lineagelock

**A Pokémon challenge run where a six-sided die builds your team — and nobody has to die.**

Roll 1d6 the moment you catch something. That number is its **Slot Number**, permanently. Your
party holds at most one Pokémon per number, so a full team is exactly one 1, one 2, one 3, one 4,
one 5 and one 6. Roll a number you already have on the field and the catch goes straight to the
Box. A boxed Pokémon can only ever come back by swapping with the party member wearing its exact
number.

You're not building one team. You're building **six independent bloodlines**, each competing for
the same chair. Slot 3 might be a proud dragon dynasty. Slot 5 might be four consecutive Zubats
and a Magikarp.

Then you pick what a faint costs you:

- **🔁 Rotation** — nobody ever dies. The team churns because the rules make it churn.
- **☠️ Permadeath** — a faint is final, and each lineage becomes a real line of succession.

**→ [Read the full ruleset](RULES.md)** · **→ [Open the tracker](https://Norrigie.github.io/lineagelock/)**

---

## The tracker

A single HTML file. No install, no build step, no dependencies, no account, no server. Open it and
play; everything saves in your browser.

- **Six-chair lineage grid**, each chair coloured by its holder's type, showing level, nature with
  its stat effect, ability and bench depth at a glance.
- **Animated 1d6** — or six buttons to enter what the die on your desk actually landed on, because
  the physical die is the point.
- **Four encounter rules**: first encounter, Audition (three per area, keep one), a rate-weighted
  encounter wheel, or Catch 'em All.
- **1,128 encounter locations across 15 games** with real appearance rates, floors folded together
  so Mt Moon is one place rather than three.
- **465 major battles across 21 mainline games**, every one with its ace level, for the level cap.
- **Era-correct typings** — Magnemite is pure Electric in Red · Blue, Clefairy is Normal until
  Gen VI. Checked against Serebii's per-generation Pokédexes.
- **Seven optional dials**: level cap, random succession, tour length, bloodline purity, method
  lock, shiny clause and starter style.
- Multiple runs side by side, gender-aware themed nicknames, full history, JSON export/import.

### Running it offline

Download [`index.html`](index.html) and open it. That's the whole program. Two things need the
internet and both degrade gracefully without it:

| | Offline behaviour |
|---|---|
| Pokémon portraits (PMD Sprite Collab) | Letter placeholders instead |
| Live nickname themes (Behind the Name API, needs your own free key) | The 18 bundled themes still work |

Your runs live in the browser's storage, so they're **per origin**: runs you start on the hosted
page are separate from runs you start from a downloaded file. Pick one and stick with it, and use
⚙ → Export to move between them or to back up.

## Playing a fan game

Pick **ROM hack / fan game** and everything works except the battle checklist, which you fill in
as you go.

**Pokémon Decay** ships as a selectable game — 59 major battles, 93 areas of encounter data, its
560-species roster, and its real typings (δBulbasaur is Fire/Rock, not Grass/Poison) read from the
game's own PBS files.

Decay's **artwork is not in this repository**, because it belongs to its developers. To use the
game's own icons, generate the sidecar from your own copy:

```bash
node tools/build-decay-sprites.mjs "path/to/Pokémon Decay 1.2.3"
```

That writes `decay-sprites.js`; keep it next to `index.html` and reload. Without it, Decay
Pokémon show letter placeholders and nothing else changes.

## Contributing

Corrections to the data are the most useful thing. Ace levels, encounter rates and typings were
cross-checked against multiple sources, but 465 battles and 1,128 locations is a lot of numbers —
if you find one that's wrong in play, please open an issue saying which game and which battle.

## Support

Lineagelock is free, complete and unrestricted — there is no paid tier, nothing is gated, and
there never will be. If it made a playthrough more fun and you feel like saying thanks:

[☕ **Buy me a coffee**](https://ko-fi.com/norrigie)

Entirely optional, and it buys you nothing except my gratitude. Corrections to the data are
worth more than money anyway — see *Contributing* above.

## Licence and credits

[CC BY-SA 4.0](LICENSE). See [CREDITS.md](CREDITS.md) for the data sources and their licences.

Not affiliated with Nintendo, Creatures Inc. or GAME FREAK. Pokémon is their trademark and
copyright; this is an unofficial fan ruleset and a tool for playing it.
