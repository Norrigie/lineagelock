# Credits and data sources

Lineagelock's ruleset and tracker code are original. The game data inside the tracker is not, and
this file records where each piece came from and under what terms.

## Bundled data

| What | Source | Terms |
|---|---|---|
| Nickname theme pools (18 themes) | [Behind the Name](https://www.behindthename.com) | **CC BY-SA 4.0** — see note below |
| Encounter tables, species list, abilities, types | [PokéAPI](https://pokeapi.co/) | Free to use; attribution requested |
| Historical (per-generation) typings | [PokéAPI](https://pokeapi.co/), verified against [Serebii](https://www.serebii.net/) | Factual game data |
| Ace levels for 465 major battles | [Serebii](https://www.serebii.net/), [Bulbapedia](https://bulbapedia.bulbagarden.net/), [Nuzlocke University](https://nuzlockeuniversity.ca/), [Game8](https://game8.co/) | Factual game data, cross-checked between sources |
| Pokémon Decay battle list, areas, roster and typings | The Decay developers' public spreadsheets and the game's own `PBS` files | Factual game data |

**Why the whole project is CC BY-SA 4.0.** Behind the Name publishes its name data under CC BY-SA
4.0, which is a *share-alike* licence. The bundled theme pools are baked into the single HTML file
and can't be meaningfully separated from it, so the licence carries forward to the whole thing.
That's the honest reading, and it costs nothing — attribute it and keep derivatives under the same
terms.

If you want a free personal Behind the Name [API key](https://www.behindthename.com/api/), the
tracker's theme panel will use it to draw from all 250+ of their themes live instead of the
bundled 18.

## Loaded at runtime, not bundled

**Pokémon portraits** come from the [PMD Sprite Collab](https://sprites.pmdcollab.org/) community
project and are requested from their repository when a card is drawn — they are not copied into
this project. Individual spriters are credited per-Pokémon on their site. If the images can't be
reached, the tracker falls back to letter placeholders.

## Deliberately not included

**Pokémon Decay's artwork.** The 560 icons belong to the game's developers. They are not in this
repository and must not be added to it. `tools/build-decay-sprites.mjs` generates the sidecar from
your own installed copy instead, and `.gitignore` keeps the result out of version control.

**Any Nintendo, Creatures Inc. or GAME FREAK asset.** No sprites, music, text or ROM data from an
official game appears here. What the tracker knows about those games is factual — which trainer
you fight where, what level their ace is, what appears in which patch of grass — the same
information any strategy guide records.

## Trademark

Pokémon is © Nintendo / Creatures Inc. / GAME FREAK. This project is unofficial, unaffiliated,
free, and has no commercial component.
