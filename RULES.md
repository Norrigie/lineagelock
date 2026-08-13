# 🎲 LINEAGELOCK

### The 1d6 Slot Lineage Challenge — a Nuzlocke with no funerals

---

## The Pitch

Every Nuzlocke run eventually becomes the same story: you get attached, something dies, you post about it, you quit in Route 10 for the fourth time. **Lineagelock** keeps the chaos and throws out the grief. Here's the whole idea: the moment you catch a Pokémon, you roll a real six-sided die, and whatever comes up is that Pokémon's **Slot Number**. Your party can only ever hold *one* Pokémon per number, so a full team is exactly one 1, one 2, one 3, one 4, one 5, and one 6. Roll a number you already have on the field? Straight to the Box, no negotiation. And a boxed Pokémon can *only* come back by trading places with the party member wearing its exact number. What that means in practice is that you're not building one team — you're building **six independent bloodlines**, six little dynasties, each one fighting for the same chair. Slot 3 might be a proud dragon lineage. Slot 5 might be four consecutive Zubats and a Magikarp. It starts before you've taken a single step, too: the die picks your starter *and* its number. The one freedom you keep is *order* — a number tells you which chair a Pokémon competes for, never where it stands, so you can lead off with your 3 and bury your 1 at the back. Then you choose how much a faint costs: **🔁 Rotation** mode, where nobody ever dies and the team churns because the rules make it churn, or **☠️ Permadeath**, where a faint is final and each lineage becomes a line of succession with real stakes. Your team composition is decided by a plastic cube on your desk, and you have to *actually make it work*.

---

## 1. Setup

**You need:**

- Any mainline Pokémon game (Gen 1 through Gen 9, remakes included — this works everywhere).
- One physical six-sided die. A real one. Rolling it is the ritual; do not skip the ritual.
- The **Lineagelock Tracker** app (or a notebook, if you're a purist).

**Before you take your first step:**

1. **Setup 1 — Declare your game, not your starter.** Pick your game in the tracker before you do anything else — it lays out that game's entire major-battle run so you always know what the next wall is. Playing a ROM hack, fan game or randomiser? Choose **ROM hack / fan game** and the checklist steps aside; every other rule works identically. What you do *not* get to pick is your starter — the die does that (Rule 14). Do not decide in advance who you're hoping for. It won't help.
2. **Setup 2 — Choose your mode: 🔁 Rotation or ☠️ Permadeath.** This is the one decision you make before anything else and it's locked for the run (Rule 8). Rotation is the relaxed version where a faint costs you nothing. Permadeath is the Nuzlocke version where a faint is final and your team can shrink. Set it in the tracker on the run-setup screen; it refuses to let you change it once you've caught your first Pokémon.
3. **Setup 3 — Choose your encounter rule: 👣 First Encounter, 🎬 Audition, 🎡 Spin the Wheel or 🌍 Catch 'em All.** Also locked for the run (Rule 15). First Encounter is the classic and works on anything. Audition gives you three encounters per area and lets you keep one of them — choice without abundance. Catch 'em All lifts the per-area limit entirely and lets the die alone do the filtering — the friendly option for a first run. The wheel uses each area's real encounter table and appearance rates to name your target — bundled for 15 mainline games; if your game isn't one of them the tracker says so and you use First Encounter.
4. **Setup 4 — Clear the decks.** Start a fresh save file. No trading in outside Pokémon, no item transfers from other saves, no Pokémon HOME care packages.
5. **Setup 5 — The die lives on your desk.** In view, in reach, all run. Every catch is a roll, and the roll happens *immediately* — before you name it, before you box it, before you look at its IVs.
6. **Setup 6 — Log everything.** Species, nickname, slot number, level, **gender**, **ability**, nature, and where you caught it. Check the nature and ability the moment you catch something — the tracker tells you what the nature does to that Pokémon's stats and offers only the abilities that species can legally have. In a run where the die decides your team, you want to know early whether your only Slot 4 is a Modest physical attacker.
7. **Setup 7 — The optional dials.** Seven switches, all set before your first catch and all locked for the run. Everything in **Section F**, plus the two that live in Section E:

   | Dial | What it does |
   |---|---|
   | 📏 **Level Cap** (29) | Nobody may out-level the next major's ace; whoever does is benched |
   | 🎲 **Random Succession** (30) | The die picks who inherits an open chair, not you |
   | 📜 **Tour Length** (32) | Roll tours on 1d4, 1d6 or 1d8 — the churn dial |
   | 🧬 **Bloodline Purity** (33) | A lineage's founder fixes its type; off-type catches are Strays |
   | 🎣 **Method Lock** (34) | The die decides *how* you may look in an area — grass, surf or rod |
   | ✨ **Shiny Clause** (35) | Shinies are always catchable and never spend an area |
   | 🔥 **Starter Style** (36) | How much of your starter the die decides |

   None of them are needed. Every one of them changes the run more than it looks like it will, so add them one at a time rather than switching on all seven for your first go.
8. **Setup 8 — Optional difficulty floor.** Turn off the EXP Share / affection boosts / EXP All if your game has them, purely because the challenge is more interesting when your rotating bench isn't wildly overleveled. Not mandatory. Nobody's checking.

---

## 2. The Rules

### A. The Core Mechanic

**Rule 1 — Every catch gets a roll.** The instant a Poké Ball clicks, you roll 1d6. The result is that Pokémon's **Slot Number**, and it is permanent — branded to it for the rest of the game. Not "until it evolves," not "until I box it," not "unless I really need a 2." Permanent. There is no mechanism anywhere in this ruleset for changing a Pokémon's number.

**Rule 2 — One number, one chair.** Your active party may contain **at most one Pokémon of each Slot Number**. A full party of six is exactly one Pokémon of each number, 1–6. There is no seventh slot, no "extra," no exceptions. **This invariant is absolute and every other rule in this document bends around it.** A number is an **identity, not a position**: it decides which chair you compete for, never where you stand. Arrange your six in whatever marching order you like, whenever you like — that's pure tactics and changes nothing about who holds which chair.

**Rule 3 — Occupied means boxed.** If you roll a number that a current *party* member already holds, the newly caught Pokémon goes **directly to the Box**. It does not bump the incumbent. It does not get a courtesy battle. It sits down and waits its turn.

**Rule 4 — Empty means promoted.** If you roll a number no party member holds, the new Pokémon **joins the active party immediately** in that slot.

**Rule 5 — Lineages never mix.** A boxed Pokémon may enter the party by **exactly one** route: swapping places with the party member that shares its **exact** Slot Number. That party member goes to the Box in the same motion. A 4 can never swap in for a 2. Numbers do not borrow, sublet, or negotiate. Each number is a closed **lineage** — an independent line of succession competing for one seat.

**Rule 6 — Swaps happen at a PC.** Lineage swaps may only be performed at a Pokémon Center / PC / Box access point, and never mid-battle or mid-dungeon. You commit to your six on the way out the door.

**Rule 7 — An empty lineage is an empty chair.** If a number has no Pokémon in it yet (or every member is boxed and you choose to field none), you simply travel with fewer than six. You are not entitled to a full party. Slot 2 not showing up until Route 11 is part of the story.

### B. Choose Your Mode

**Rule 8 — Pick a mode before you take a single step, and it's binding.** Lineagelock runs in one of two modes, chosen at setup and locked for the whole run. Declare it in the tracker before your first catch. No switching halfway because a gym went badly.

| | **🔁 Rotation** | **☠️ Permadeath** |
|---|---|---|
| A Pokémon faints | Heals up, keeps its chair | It's **Fallen** — out of the run for good |
| Your team shrinks | Never | Yes, until the die replaces it |
| The run can be lost | No | Yes |
| Feels like | A relaxed, chaotic team-builder | A Nuzlocke with a dice-driven roster |

Everything else in this document — the die, the six lineages, the encounter rules, the naming, the battle order — is **identical in both modes**. The mode only decides what a faint costs you.

#### 🔁 Rotation mode

**Rule 9 — Fainting is just fainting.** A Pokémon that faints is healed at a Pokémon Center like in any normal playthrough. It is never released, never dead, never boxed against your will, never marked unusable. It keeps its slot, keeps its number, and keeps its job. Your six only ever change because *you* rotate them.

#### ☠️ Permadeath mode

**Rule 10 — A faint is final.** A Pokémon that faints in battle is **Fallen**: permanently ineligible for the party for the rest of the run. It stays yours and stays in the Box forever as a memorial — you just can't field it again, ever.

**Rule 11 — Succession runs down the lineage.** When a Pokémon falls, its chair may only be refilled by **another living Pokémon of that same Slot Number** (Rule 5, unchanged — numbers still never mix). If that lineage has no living members left, the chair stays **empty** until the die hands that number to a new catch. A stacked lineage is now literal insurance; a lineage one deep is a single point of failure.

**Rule 12 — The run can actually end.** If every Pokémon you own is Fallen, the run is over — write it up and post the death toll. Short of that, an empty chair or three is survivable: you fight understrength and hope the die is kind.

**Rule 13 — Nothing is ever released.** Both modes. Not for fainting, not for being bad, not for being your ninth Zubat. In Rotation mode the Box is a bench; in Permadeath mode it's a bench *and* a graveyard. Nobody gets thrown away.

### C. Catching

**Rule 14 — The starter is two rolls.** You don't choose your starter and you don't choose its number. Standing in front of the table, roll twice:

- **Roll 1 — which starter?** Take the three on offer in your game's canonical order (Grass, then Fire, then Water). **1–2 → Grass. 3–4 → Fire. 5–6 → Water.**
- **Roll 2 — which slot?** Roll again for its Slot Number, 1–6, exactly like any other catch.

Your run's identity is decided by two dice before you've fought anything. If your game hands you a fixed starter instead of a choice (Yellow's Pikachu, Let's Go, a story-mandated gift), skip Roll 1 and just roll for the number. If your game offers more or fewer than three (a 4-option romhack, say), split 1–6 as evenly as you can and re-roll leftovers.

**Rule 15 — One Pokémon per area, and you choose *how* it's decided.** Each distinct route / cave / forest / body of water / town-with-encounters gives you exactly **one** catchable Pokémon, ever. Which one is decided by whichever of these four methods you picked at setup — locked for the run, like the mode:

**👣 First Encounter.** The classic. The first wild Pokémon you meet in an area is the only one you may catch there. Zero setup, works on any game, any ROM hack, any randomiser.

**🎬 Audition.** You get **three** encounters in an area and may catch whichever one of the three you prefer — then the area is spent, exactly as it would be under First Encounter. Walk away from the first two and they're gone; you can't bank them and come back. It's the option for people who find First Encounter too arbitrary and Catch 'em All too generous: you still can't have what the area didn't offer, but you're never handed a Zubat and told that's your Route 4. No dupes clause — you already had a choice, so a tray of three Pidgeys is just a bad audition.

**🎡 Spin the Wheel.** The tracker holds each area's **real encounter table with its true appearance rates**. Spin once when you arrive and the wheel names your target; that species — and only that species — is catchable there. Then you go hunt it.

**Dupes clause (First Encounter only).** If your first encounter in an area is from an evolution family you already own, it doesn't count — skip it and take the next new family instead. It exists so you don't spend a run catching the same three species. The Wheel doesn't need it (it picks your target for you), Audition doesn't need it (you have three to choose from) and Catch 'em All switches it off by definition.

**🌍 Catch 'em All.** No limit per area at all: you may catch **every species you don't already own**, anywhere, all game. Rule 18 and the dupes clause switch off — a failed encounter costs you nothing, because "don't catch what you already have" *is* the rule. Everything else stands, and that's the trick: **the die still decides who gets a chair**. Catching a hundred Pokémon doesn't get you a better team, it gets you six lineages dozens deep and a Box full of contenders you have to choose between. Use this for a first playthrough of a game you want to see all of, or any time you'd rather the challenge be about *selection* than scarcity.

Why the wheel exists: "first encounter" secretly depends on which patch of grass you happened to step in. Areas where a Pokémon only appears in one corner, or only while surfing, or only on a specific tile, get silently excluded from your run forever. The wheel gives every species in the area its honest shot, weighted exactly as the game weights it — so the 1% Clefairy in Mt. Moon really can come up, and when it does you've earned it.

**Rule 16 — Wheel rulings.** Three things the wheel needs pinned down:

- **Spin once, per area, per method.** Walking, surfing and each rod are separate tables in the games, so they're separate spins — but you still only get **one catch in the area total**. Choose which table you're spinning before you spin; you can't spin the grass, dislike it, and then try the water.
- **The wheel names a target, not a gift.** You still have to find and catch it. Spinning a 1% Pokémon means a genuine hunt.
- **Re-spin when the hunt stops being fun.** A 1% roll can be a long hunt. If you've stopped enjoying it, re-spin once or declare the area burned — your call, no counting required.

**Rule 17 — How Rules 15 and 1 interact (read this one twice).** The two mechanics answer two different questions and never overrule each other:

> **The encounter rule decides *whether* you may catch it. The die decides *where it goes*.**

You do not get to re-roll a bad number, and you do not get to re-encounter to fish for a species that suits an empty slot. First encounter, one ball, one roll, live with both. Yes, this means the shiny-looking Route 3 Abra can absolutely roll a 4 and go sit in the Box behind your starter for nine hours. That's the game.

**Rule 18 — Failed encounters burn the area.** If your first encounter flees, faints, or you run out of balls, the area is spent — no catch, no roll, no second attempt. Move on. *(Under Audition a fled encounter simply costs you one of your three. Off entirely in Catch 'em All — there is nothing to burn.)*

**Rule 19 — Gifts, statics, and in-game trades: rolled the same as anything else.** Every Pokémon that enters your possession gets a 1d6 roll, no matter how it got there. The Eevee handed to you in a lab, the Snorlax asleep in a road, the Lapras from a guy in a building, the Farfetch'd you got for a Spearow — all of them roll on arrival, all of them can land in an occupied slot and go straight to the Box. Gift and static Pokémon do **not** consume an area's first-encounter allowance (they aren't wild encounters), so you can take them freely — you just can't choose their number.

**Rule 20 — Legendaries and mythicals: no special treatment, and that's the joke.** Box legendaries, roamers, event mons, the whole pantheon — they roll 1d6 like a Caterpie. If Rayquaza rolls a 2 and your Slot 2 is currently a Bibarel you're fond of, you may absolutely leave Rayquaza in the Box. You are also allowed to catch a legendary purely to deepen a weak lineage; that's smart play, not cheating. The only concession: legendary encounters are **not** subject to Rule 15 (they aren't route encounters), so failing one and resetting is fine.

**Rule 21 — Odds and ends.** Three small rulings that would otherwise each eat a number:

- **Trading a Pokémon away frees its slot.** Hand one over in an in-game trade and it leaves the run entirely; its lineage is one member lighter. Whatever you get back rolls fresh.
- **Breeding is off.** No hatching eggs to farm favourable species into weak lineages. Story-mandated eggs (Togepi, the Wonder Egg) are fine and roll on hatching.
- **Field moves are free.** Any Pokémon you own, party or Box, can be used for HMs, Ride Pokémon, Secret Techniques, fishing, flying and surfing without taking a slot — as long as it doesn't battle. Traversal is a chore, not a challenge.

### D. Naming

**Rule 22 — Nicknaming is mandatory.** Everything gets a nickname. You know why: it's much funnier when the Box is full of names. Name it whatever you like — there's no requirement to encode the Slot Number in the name, because the tracker permanently records every Pokémon's number and the full history of each lineage. Let the app do the bookkeeping and spend your naming budget on jokes.

**Rule 23 — Pick a naming theme and let it name them for you.** Optional, but it's the single cheapest way to make a run feel like a story: choose one theme for the whole run and draw every nickname from it. Norse gods. Greek myth. Astronomy. Welsh. Nahuatl. Roman emperors. The tracker has a 🎲 button that pulls a real themed name from **Behind the Name**, so your Box reads like a saga instead of a spreadsheet. Roll the name, don't pick it — you're already letting the die choose your team, so let it choose the names too.

Set the gender first and the roll respects it, using the same masculine / feminine / unisex split Behind the Name itself publishes: a male Pokémon draws from masculine and unisex names, a female from feminine and unisex, and a genderless one from the whole pool. So your Nidoran♀ gets `Thaleia` and never `Achilleus`.

### E. Battling & Stakes

What a battle costs you depends entirely on the mode you picked in Rule 8, so this section splits two ways.

In **☠️ Permadeath** the pressure is the obvious one: a faint is final, the team shrinks, and the run really can end (Rules 10–12). Nothing below changes that.

In **🔁 Rotation** there's no death to be afraid of, so "loss" can't be the pressure. Instead it comes from the thing this ruleset is actually about: **you don't get to keep the same six forever.** Rules 26–28 and 32 all push you toward rotating your lineages, which is the fun part, rather than punishing you for playing badly, which is the part everyone quits over. There's no scorecard in either mode, and in Rotation the only way to fail is to never finish.

Rules 24, 25, 28, 29 and 31 apply to both modes. Rules 26, 27, 30 and 32 are **Rotation only** — they're about tours, and Permadeath doesn't have tours.

**Rule 24 — Set mode / no items.** Battle Style: Set (no free switch on faint). No healing items, X-items, or Revives *during* battle. Between battles, heal all you like. This is the only real "difficulty" rule and it's the one that makes rotation matter.

**Rule 25 — Major battles.** A **Major Battle** is any Gym Leader, Grand Trial, Titan, Team Star base, Noble, **Rival battle**, Team-Whatever boss, Elite Four member, or Champion — any story wall the game builds up to. These are the only battles the stakes rules care about. The tracker ships the full checklist for all 21 mainline games plus Decay, so you don't have to decide what counts: pick your game at the start of the run and tick them off as you go.

**Rivals count, every time.** Your rival is the one trainer who keeps turning up with a team built to answer yours, so those fights carry the same weight as a gym — including for Winded (Rule 27). Every mainline game lists its rival battles **by location, in story order**: Blue's seven ambushes across Kanto, Silver's five, Barry's six in Diamond·Pearl and seven in Platinum, Hop's Postwick-to-Circhester run, Cheren and Bianca's twelve between them, Trace, Hugh, Calem/Serena, Hau and Nemona. Post-game rematches are excluded — that's a different, much stronger team, and a cap built on it would be meaningless.

The one exception to "fights *against* them": a few rivals turn up in a **multi battle at a story wall** where they fight alongside you against someone else — Barry at the Spear Pillar is the clearest case. Those are on the list, because the wall is real even if the rival is on your side of it. Ordinary tag-alongs on a route are not.

**Rule 26 — Tour of Duty (🔁 Rotation mode only).** The moment a Pokémon takes a chair — caught into an empty slot, or rotated in from the Box — **roll 1d6**. That's its **tour**: the number of Major Battles it will serve before it hands the chair to the next in its lineage.

- Write it on the card the day it arrives. A Pokémon that rolls a 6 is an institution; one that rolls a 1 is a cameo. You know from the start which is which.
- Its tour ticks down by one each time you win a Major Battle. At **zero**, it steps down at the next PC and its successor rolls a fresh tour of its own.
- **An only child re-enlists.** If its lineage has nobody else, it simply rolls a new tour and keeps serving. Nothing ever stalls.

This is the engine of Rotation mode, and it is deliberately **not** a punishment. It fires whether you win comfortably or scrape through, so a clean run turns over exactly as much as a messy one — and because you can see every term counting down, you're planning the handover for hours before it happens rather than being ambushed by it.

**Rule 27 — A faint ends a tour early (🔁 Rotation mode only).** Any Pokémon that faints during a Major Battle is **Winded**: its tour is over as of that moment, regardless of how many majors it had left. It hands the chair over **at the very next PC** — before the next gym, before the next route, before anything else. An only child stays and re-enlists as usual.

"Before your next Major Battle" would let you ride the fainted Pokémon through every route and trainer in between and rotate one step from the gym door, which is no penalty at all. Doing it immediately means the loss actually costs you the Pokémon you were leaning on, right when you were leaning on it. *(Reordering the party doesn't clear it — moving a tired Pokémon to sixth place isn't a rotation.)*

**Rule 28 — Catch-Up Clause (both modes).** A Pokémon taking an open chair — rotated in, or succeeding one that Fell — may be trained up to the **level of the one it replaced**, no penalty and no grinding guilt. Bench members fall behind through no fault of their own, and a rotation rule that hands you an under-levelled Pokémon in front of the next gym isn't variety, it's a fine. Level it up and get on with the run. **With the Level Cap on (Rule 29), catch up only as far as the cap** — the two rules together mean your successor arrives exactly at the ceiling, which is the healthiest place for it to be.

**Rule 29 — Level Cap (optional, chosen at setup).** No Pokémon may be **higher level than the next Major Battle's ace**. Cross that line before the battle and it is over-levelled: it hands its chair over at the next PC and **its tour ends**, exactly as if the term had run out.

- **Over-levelling *during* the major is fine.** Beat the gym at level 24 with a cap of 24, come out at 26, and nothing happens — the new cap is whatever the *next* wall's ace is, and you carry on.
- **In 🔁 Rotation** it stacks with everything else: tours still tick, faints still discharge, and the cap is simply a third way a tour can end.
- **The Elite Four is the exception.** The whole gauntlet is one wall with one cap and no benching (Rule 37) — read that before you walk in, because a per-battle cap there would leave you with nothing legal to field.
- **In ☠️ Permadeath** there are no tours, so an over-levelled Pokémon is just benched — it sits in the Box, still perfectly alive, until the next wall's ace is high enough to make it legal again. Its lineage carries on without it in the meantime, and if the lineage is empty you fight the wall a Pokémon short. Being too strong costs you exactly as much as being too weak, which is the joke.
- Practically it stops you steamrolling the game, and it turns your bench into a resource: the under-levelled Pokémon you've been ignoring are suddenly the *legal* ones.
- **The tracker knows the numbers.** Every major battle in all 21 mainline games and in Decay ships with its ace level, so the cap moves itself from wall to wall without ever asking. On a ROM hack or fan game with no bundled list it asks once per wall and remembers.

**Rule 30 — Random Succession (optional, 🔁 Rotation mode).** When a chair opens, you don't choose who fills it — **the lineage does**. Number that lineage's benched Pokémon and roll 1d6 to pick one, re-rolling anything higher than the count.

You still control everything else: who you catch, who you bench, what order you field them in. What you give up is the ability to hand-pick your successor, which means your Box stops being a shelf of options and becomes a genuine line of succession. Turn it off (the default) if you'd rather choose.

**Rule 31 — Fair play.** No revisiting an area to re-encounter, no save-scumming a die roll, no "I rolled it on the floor so it doesn't count." The die is the die. Roll it in the open, on a table, where you can see it.

### F. The Optional Dials

Five more switches, all set at Setup 7 and locked for the run, all off by default. They join **Level Cap** (29) and **Random Succession** (30), which live in Section E because they're about stakes. Nothing here is needed to play Lineagelock — each one takes a part of the run the default rules leave alone and hands it to the die.

**Rule 32 — Tour Length (🔁 Rotation mode only).** Rule 26 rolls tours on 1d6. You may set that die to **1d4**, **1d6** or **1d8** instead, for the whole run.

- **1d4** — average tour of 2½ majors. Brutal churn: in a normal-length game you will field nearly everything you catch, and a deep lineage is a genuine advantage rather than a curiosity. This is the setting for people who found the default too static.
- **1d6** — the default, average 3½.
- **1d8** — average 4½. A Pokémon that rolls well is with you for most of a region, and handovers become events rather than routine. Best paired with Bloodline Purity, where losing a chair-holder actually costs you something specific.

The die you pick changes the *feel* of the run more than any other dial, and it costs nothing to try. It has no effect in Permadeath, which has no tours.

**Rule 33 — Bloodline Purity.** The first Pokémon ever to *hold* a lineage's chair is its **founder**, and it fixes that lineage's **type**. If the founder has two types, you choose which one at the moment it takes the chair; that choice is permanent for as long as the dynasty lives.

- From then on, any Pokémon that rolls that number joins the lineage **only if it shares the dynasty's type.** If it doesn't, it's a **Stray**: it keeps the number, it's yours forever, it goes in the Box — and it can never take the chair. Not now, not later, not if the lineage is empty.
- A Stray is not a punishment and not a mistake. It's a relative who isn't in the line of succession.
- **A dynasty can end.** If a chair opens and no eligible Pokémon of that number is left, the dynasty is over: the number goes dormant and the *next* Pokémon to roll it becomes a new founder with a new type. Strays are always judged against the *current* dynasty, so a Water Stray sitting in Slot 3 becomes a legitimate heir the day Slot 3 refounds as Water.
- Species the tracker has no type data for — fan-game Pokémon, Decay's Deltas — are waved through rather than guessed at, and the tracker asks you to name the type yourself when such a Pokémon founds a lineage.

This is the dial that turns six numbers into six *houses*. Slot 3 stops being "whatever rolled a 3" and becomes the Flying dynasty, with a real history and a real risk of dying out. It also quietly makes catching more interesting: an off-type roll into a strong dynasty is a genuine disappointment in a way that a normal boxed catch never is.

**Rule 34 — Method Lock.** When you arrive in an area, roll to decide **how you are allowed to look for your encounter** — walking in the grass, surfing, or each rod separately. Whatever the die says is the only method that counts there; a Pokémon found any other way isn't your encounter and doesn't roll.

Roll one die with as many faces as that area has methods (the tracker does this for you and lists them in order). An area with only one method needs no roll. This composes with every encounter rule: under the Wheel it narrows the spin to the locked table, and under First Encounter or Audition it decides where you're standing when the encounter happens.

Its real job is the Old Rod. In an ordinary run you fish maybe twice a game; under Method Lock, water routes stop being "grass with extra steps" and half your Box comes out of places you'd otherwise never have cast a line.

**Rule 35 — Shiny Clause.** A shiny Pokémon may be caught **anywhere, at any time**, whether or not that area is spent, and it does not consume the area's encounter — the area stays exactly as open or as burned as it was before it appeared.

It still **rolls 1d6 like anything else** (Rule 1), and it can absolutely roll into an occupied chair and go straight to the Box. That's the point: the clause protects your right to *own* the shiny, not your right to use it. Every other rule applies to it normally, including Bloodline Purity — a shiny of the wrong type is still a Stray, and yes, that will happen to you eventually.

**Rule 36 — Starter Style.** Rule 14 rolls twice for your starter. You may soften that:

- **Full** — the default. Two rolls: which starter, then which lineage.
- **Half** — you pick the species you actually want, the die still decides its number. The starter is the one Pokémon in the run you'll use for forty hours, and some people would rather that particular decision be theirs.
- **Traditional** — you pick your starter and it takes **lineage 1**, no rolls at all. It's the first Pokémon you ever own; it should be the 1. Guarantees you an anchor and removes the run's single most annoying opening (a starter that rolls a 4 and sits behind nothing at all).

Everything after the starter is unaffected — every other catch in the run still rolls both ways.

**Rule 37 — A run of fights you can't leave is one wall.** Wherever the game marches you from one Major Battle straight into the next **without letting you reach a Box**, the whole run counts as **a single Major Battle** for every rule in this document.

The Elite Four is the obvious case and the reason the rule exists. You walk in with six and you walk out with the same six: there is no Pokémon Centre between Lorelei and Bruno, so a ruleset that tries to bench somebody halfway through is asking for something you physically cannot do. It follows that:

- **One cap for the whole run, and it's the highest ace in it** — the Champion's, in practice. Set it before you go in and it does not move until you're out. Otherwise you'd be legal against the first member, illegally over the cap by the second, and holding a Pokémon you're neither allowed to use nor able to swap.
- **Levelling up inside is free**, exactly as it is during any single major (Rule 29). Five hard battles will push your team up several levels and none of it counts against you.
- **One faint question, asked at the end.** A Pokémon that goes down against the second Elite Four member is Winded (Rule 27) — but you're told once, after the last fight, not five times during it. Being asked to hand a chair over between members is asking for the impossible.
- **One tour tick.** The run is one major, so it costs every serving Pokémon exactly **one** major off its tour, not one per member. A 1d4 tour would otherwise be spent entirely on the League.
- **Handovers wait.** Spent tours, Winded Pokémon and anyone over the ceiling are **owed, not cancelled**. The debt is paid at the first PC on the far side.
- It applies to **both modes**. Permadeath changes nothing: a Pokémon that falls in there is Fallen as normal and its chair stays empty for the rest of the run, because you cannot go and fetch the heir.

**Which runs count.** Every game's Elite Four → Champion block, plus two the story bolts on:

| Game | The one wall |
|---|---|
| All 19 games with an Elite Four | the four members → the Champion |
| **Black · White** | …→ Alder → **N → Ghetsis**, because N's Castle rises the moment Alder falls |
| **Sun · Moon** | **Guzma → Lusamine** at Aether Paradise, back to back |

Deliberately *not* on the list, because you reach a PC first and they keep their own caps: **Black 2 · White 2**'s Ghetsis, **ORAS**'s Zinnia, **Sword · Shield**'s Rose and **Scarlet · Violet**'s Sada / Turo. Sword · Shield has no Elite Four at all — its Champion Cup is a tournament you can rotate between, and Gen VIII lets you reach your boxes from the menu anyway.

If you're playing a ROM hack or a fan game and it marches you through two majors with no Centre between them, treat that as one wall too. You'll know, because you won't have been offered one.

---

## 3. Quick Reference

*Everything you need mid-run, on one screen. Rule numbers in brackets if you want the detail.*

**The loop**
> Catch → **roll 1d6 immediately** → that number is permanent [1] → slot empty? it joins the party [4] → slot taken? straight to the Box [3].

**Your six**
- Exactly one Pokémon per number, 1–6. A full party is one of each [2].
- Boxed Pokémon only ever swap with **their own number**, at a PC [5, 6].
- Fewer than six is fine — an empty lineage is an empty chair [7].
- Party *order* is free. The number says which chair, never where you stand [2].

**Set once, before you start**
| | Options |
|---|---|
| **Mode** [8] | 🔁 Rotation — a faint is just a faint · ☠️ Permadeath — a faint is final [10–12] |
| **Encounter rule** [15] | 👣 First encounter · 🎬 Audition · 🎡 Spin the wheel [16] · 🌍 Catch 'em all |
| **Game** | Sets your major-battle checklist [25] |
| **Dials** — all off by default | 📏 Level cap [29] · 🎲 Random succession [30] · 📜 Tour length [32] · 🧬 Bloodline purity [33] · 🎣 Method lock [34] · ✨ Shiny clause [35] · 🔥 Starter style [36] |

**The five things people forget**
1. The **starter is two rolls** — which one, then which slot [14, 36].
2. **Gifts, statics, in-game trades and legendaries all roll** like anything else [19, 20].
3. **Evolving never changes a number.** Nothing does [1].
4. **Nothing is ever released**, in either mode [13].
5. **Tours** [26] — every Pokémon rolls a die when it takes a chair; that's how many majors it serves before handing over. A faint in a major ends its tour on the spot [27]. Whoever takes the chair may be levelled to match [28].

**The Elite Four** (and any run with no Box between fights) counts as **one** Major Battle: one cap, free levelling, one faint question, **one** tour tick, and every handover deferred to the far side [37].

**Battling** — Set mode, no items in battle [24]. Field moves are free, no slot needed [21].

**Losing** — Rotation mode can't be lost. Permadeath ends only when every Pokémon you own has fallen [12].

---

## 4. Worked Example

**Turn 1.** New game, Kanto. Standing at Oak's table, I roll for the starter (Rule 14). **Roll 1: a 6** — Water. So it's Squirtle, whether or not I wanted Squirtle. **Roll 2: a 1** — Slot 1. Nickname: `Wonshell`. Party: `[1: Wonshell] [2: —] [3: —] [4: —] [5: —] [6: —]`.

**Route 1.** First encounter is a Pidgey. Catch it, roll the die — **4**. Slot 4 is empty, so Pidgey joins the party as `Fourgey`. Party: `[1] [4]`.

**Route 2.** First encounter: Rattata. Caught. Roll — **4** again. Slot 4 is taken by Fourgey, so Rattata goes **straight to the Box** as `Rat Pack IV`. Slot 4 now has a two-deep lineage and I have a bench for the first time.

**Viridian Forest.** First encounter: Caterpie. Caught, roll — **6**. Empty! `Sixteen Legs` joins. Party: `[1] [4] [6]`.

**Route 3.** First encounter is *another* Pidgey. Rule 15 (dupes clause) — same evolution family as Fourgey, so it doesn't count. Next new-family encounter is a Mankey. Caught, roll — **2**. Empty. `Two Fisted` joins. Party: `[1] [2] [4] [6]`.

**Mt. Moon.** First encounter: Zubat. Caught, roll — **1**. Slot 1 is my Wartortle. Boxed as `Wonebat`. My starter now has a successor waiting, which is an extremely funny sentence.

**Pewter Gym.** Brock. Set mode, no items. I put Two Fisted in the lead because Low Kick wins this fight — that's free under Rule 2. Fourgey still faints to a Rock Tomb before Two Fisted closes it out. Win — but Fourgey is now **Winded** (Rule 27), and Slot 4 *does* have another member. So I walk into the Pokémon Center on the way out, Fourgey goes to the Box, and `Rat Pack IV` gets called up on the spot — I don't get to keep using Fourgey across Mt. Moon and swap at the last second. My Slot 4 seat just changed hands for the first time, entirely because of how the Brock fight went.

**Route 24.** Abra, first encounter, caught. Roll — **6**. Caterpie's slot. Boxed. I will think about this Abra every day for the rest of the run.

**Route 25.** Oddish, caught, roll — **6**. *Also* Caterpie's slot. Slot 6 is now three deep and Slot 3 and Slot 5 remain completely empty. This is a normal Lineagelock problem.

**Cerulean PC.** Slot 6 is three deep now, so I rotate: Metapod goes to the Box and `Abracadabra-6` takes the slot-6 chair. Metapod's number is still a 6 and always will be — it's just benched behind a better 6. Then I fix my **battle order** (Rule 2), which is completely free: Abra leads off so it can Teleport-scout, Wonshell goes second, and my Slot 4 Rattata drops to last because it dies to a stiff breeze. The party still holds exactly one of each number — 1, 2, 4, 6 — but they now *stand* in the order 6, 1, 2, 4. Nothing about the numbers changed. Nothing about the numbers ever changes.

**Later, Cerulean Gym.** Party wipes to Misty. Nothing is taken from me and nothing is forced on me — I heal up, rotate a couple of lineages at the PC, reshuffle the marching order, and walk back in. In Rotation mode a loss costs you time and pride, nothing else.

That's the rhythm: catch, roll, react. You never lose anyone — you just never get to keep the same six for long.

---

## 5. Optional House Rules

Mix and match. Announce which ones you're running before you start. Unlike the dials in Section F, none of these are tracked by the app — they're on your honour.

The starter options and the level cap used to live here; they're now Rules 36 and 29, because the tracker can enforce them.

### Easier / friendlier

- **Second Wind.** If your first encounter in an area flees or faints, you get one more encounter there. Kills the most annoying dead-ends without touching the core mechanic.
- **Open Bench.** Lineage swaps can happen anywhere, any time, not just at a PC. Best for handheld play in short sessions.
- **Mercy Roll.** Once per gym badge, you may re-roll one catch's die. Use it when a legendary rolls into your favorite slot. This is the one house rule that openly overrules a numbered rule — Rule 17 says you never re-roll a bad number — so announce it or don't run it.
- **Tours Off.** Drop Rule 26 and let Rule 27 do the work alone: nobody rotates unless they faint in a major. Closer to how the ruleset used to play, and much less churn.
- **No Set Mode.** Drop Rule 24 entirely. Lineagelock still works fine as a pure team-composition challenge; you just lose some of the Winded drama.

### Harder / spicier

- **Marching Order.** Give up the free marching order in Rule 2: your party must always *stand* in ascending Slot Number order, so your lowest-numbered Pokémon always leads off. Suddenly rolling a 1 is a real burden and rolling a 6 is a bodyguard.
- **Locked Lead.** You may reorder freely between battles, but whoever leads off a Major Battle must lead the next one too, unless they were Winded. No re-leading to dodge a matchup.
- **Themed Names Only.** Rule 23 becomes mandatory: one theme, chosen before the run, every nickname rolled from it — no hand-picking, no exceptions.
- **Loyalty Roll.** When a Winded Pokémon rotates out, roll 1d6: on a 1, it's **Retired** — permanently ineligible for the party (still yours, still safe in the Box, just done competing). The closest thing to permadeath without anyone actually dying.
- **Locked Lineage.** Once a lineage has 3+ members, you must rotate the seat after *every* Major Battle, win or lose. Deep benches should get used.
- **Hard Six.** You may never travel with an empty slot if the Box could fill it. If Slot 5 has a member available, Slot 5 is occupied — no benching a lineage because you dislike everyone in it.
- **Dupes Off.** Delete the dupes clause in Rule 15. Catch the sixth Zubat. Build the Zubat dynasty. Embrace it.

---

## 6. The Tracker

`index.html` — open it in any browser (or use the hosted copy), no install, no build, no account. Keep `decay-sprites.js` next to it if you want Pokémon Decay's own artwork; everything else works without it. Runs are saved in that browser, so bookmark the file and use the same browser all run — and **export a backup** now and then (below).

- **Multiple runs at once** — tap the run name in the header to switch. Every run keeps its own party, Box, history, game, mode, encounter rule and naming theme, so a relaxed Rotation run through FireRed and a Permadeath Decay run can sit side by side without touching each other. Rename, reset or delete any of them from the same screen.

- **Run setup** — four steps before your first catch: **mode** (🔁 Rotation or ☠️ Permadeath), **game**, **encounter rule** (👣 First encounter · 🎬 Audition · 🎡 Spin the wheel · 🌍 Catch 'em all) and the **dials**. Everything locks itself the moment you catch something, exactly as Rules 8 and 15 require.
- **The seven dials** (⚙️ on the setup screen) — level cap, random succession, tour length, bloodline purity, method lock, shiny clause and starter style, per Rules 29–30 and 32–36. Each one says what it does before you switch it on, and the setup card lists whichever you've enabled.
- **The encounter wheel** — pick your area and how you're looking (grass, surfing, each rod), then spin a weighted wheel built from that area's real encounter table. It names your target, logs the odds it came up at, and hands the species straight into the catch flow. **1,128 locations across 15 games**, floors already folded together.
- **Game picker** — choose from all 21 mainline games, or **ROM hack / fan game** to play without a preset battle list.
- **Permadeath handling** — a 💀 *mark as Fallen* action on each Pokémon (Permadeath runs only). Marking one logs the death, empties its chair, and immediately opens that lineage so you can crown the heir. The fallen move to a **Fallen** memorial in the Box: visible forever, never swappable, never released. If everything you own has fallen, the tracker tells you the run is over.
- **Level and evolve from the card** — every occupied chair has a **+1**, a tappable **Lv** box for direct entry, and an **⤴ Evolve** button that only appears when that species actually has somewhere to go. Evolution branches are offered as a picker, and the list is filtered to what your game has: Red · Blue's Eevee offers three eeveelutions, Diamond · Pearl's offers seven. Evolving carries the level, the tour and above all the **Slot Number** — nothing changes that (Rule 1) — and updates the typing to match. If it evolves out of its own dynasty's type under Bloodline Purity it keeps the chair, with a note in the log, because growing up can't evict you.
- **Lineage grid** — all six chairs at a glance. Each occupied chair shows its holder's portrait, level, **nature with its stat effect** (`Adamant +Atk / −SpA`), **ability**, typing and bench depth — everything you'd otherwise open the card to check, on its own line so nothing gets truncated.
- **Catch flow** — species picker, location dropdown for that game, and an automatic verdict: party or Box.
- **Your die or the app's** — the roll screen has an animated 1d6 *and* six big buttons to enter what your own die landed on. Setup 5 says the die on your desk is the ritual, so the app takes its word (Rule 1). Rolls that aren't d6 — a 1d4 or 1d8 tour, a three-way method lock — swap the cube for a numeric tumbler with the right number of buttons.
- **Natures** — record it on catch and the app shows exactly what it does: all five stats laid out with the +10% and −10% marked, plus the flavour it likes and dislikes. Editable later for anything you caught before checking.
- **Typings, everywhere** — every Pokémon's type shows as a badge on its lineage card, in the catch form as you type the species, on the roll verdict, in the Box and on its detail sheet. The badges use [Pokémon Database](https://pokemondb.net/type/grass)'s own palette and squared-off shape, so they read the way you're used to. **Typings are correct for the era you're playing in**, not just the modern ones — see below. **The chair takes the colour too:** the numbered shape on each occupied lineage is filled with its holder's type — split diagonally for a dual type — and the card carries a wash of the same colour, so the party grid can be read by type at a glance.
- **Gender & ability** — ♂ / ♀ / genderless shown beside every nickname, and an ability dropdown that offers only the abilities that species can actually have, hidden ones flagged. Type your own for a fan game, and the list re-offers correctly when a Pokémon evolves.
- **Gender-aware names** — the 🎲 draws from Behind the Name's masculine / feminine / unisex split to match the Pokémon in front of you (Rule 23). **Set the gender first**, or it draws from the whole theme and tells you so; change the gender afterwards and it re-rolls, unless you typed the name yourself. Each roll says which pool it came from and links the entry, because a correct name can still look wrong — *Papa* is feminine, it's the Māori earth goddess.
- **Starter flow** — both rolls from Rule 14, one after the other, or a single roll / no roll at all if you changed the starter style (Rule 36).
- **Bloodline purity** — the founder of a lineage is asked which of its types the dynasty follows, and from then on off-type catches of that number are logged as **🧬 Strays**: shown in the Box, greyed out of every rotation screen, and skipped by random succession. When a chair opens with no eligible heir left the app announces the dynasty's end and frees the number to be refounded (Rule 33).
- **Method lock** — a 🎲 chip on every multi-method location on the Routes tab. Tap it, roll, and that area is fixed to grass, surfing or one specific rod; the wheel then only spins the locked table (Rule 34).
- **Shiny clause** — a ✨ box on the catch form. Ticking it keeps the area unspent and marks the Pokémon in the Box and the log (Rule 35).
- **Themed nicknames** — 🎲 pulls a real name from your chosen theme, per Rule 23.
- **Progress** — one tab, two lists: **Major battles** and **Routes**. Post-league rematches are labelled and kept out of the progress bar, so 37 story battles don't read as 59.
- **Routes** (same tab) — every location where something is catchable, cities you can only fish or surf in included, with a search box and All / Remaining / Used filters. In First Encounter mode the app warns you if you log a second catch somewhere you've already used. **Floors are not separate locations:** Mt Moon 1F/B1F/B2F is one *Mt Moon*, and the same goes for towers, mansions, ruins and every other multi-floor place — one entry, one encounter, its whole table pooled into a single spin. Anywhere you log a catch **ticks itself**; tap any other location to cycle it **open → caught → burned**, so a spent area (Rule 18) is visible at a glance and you always know where you still have an encounter owed. Each row shows which methods that place supports and how many species are in its table. **+ Add a location** covers fan games. In 🌍 Catch 'em All the tab becomes a dex checklist instead: each location shows how many of its species you've caught, plus a running total for the whole game.
- **Lineage history** — tap any number to see every Pokémon that has ever carried it, oldest first. This is why Rule 22 doesn't make you put the number in the name.
- **Box** — grouped by lineage, one tap to rotate anyone in.
- **Tours, tracked for you** — every Pokémon rolls its tour on the die screen the moment it takes a chair, and its card shows the majors it has left (📜 3, 📜 2…). Beat a major and every tour ticks down automatically.
- **No-switch runs, handled as one wall** — tick the first Elite Four member and the tracker stops treating the rest as separate fights (Rule 37): the cap freezes at the run's highest ace, the over-levelled warning goes quiet, the rotation gate stops firing, the faint question waits until the last fight, and tours tick **once** for the whole run instead of five times. Each battle you tick logs what's being held and until when. The runs are listed per game — five battles almost everywhere, **seven in Black · White** (Alder → N → Ghetsis), and **Guzma → Lusamine** in Sun · Moon. Fights you reach with a PC first keep their own caps.
- **Handovers, enforced on the spot** — when a tour runs out, or a faint ends one early, a **locked rotation screen** opens listing that lineage's bench. No skip button; it won't close until the chair has changed hands. Only children re-enlist by themselves, and the screen tells you the level to train the successor to (Rule 28).
- **Next major** — the party screen always shows the next wall you haven't beaten, so you know what you're preparing for.
- **Run summary** — majors beaten, caught, fallen, areas used, deepest lineage, longest-serving Pokémon, your final six and the memorial. It opens itself when you beat the Champion or lose your last Pokémon, and there's a **copy as text** button for posting it.
- **History** — filterable by catches / rotations / battles, newest 50 by default.
- **Backup & transfer** — export a single run or all of them as a JSON file, and import them back on another machine or after a browser wipe. Imports are added alongside what you already have; nothing is ever overwritten.

The tracker deliberately does **not** track battle order. Rule 2 leaves it completely free and it changes a dozen times a gym — that belongs in the game, not in a log.

**Wheel coverage.** Real rate-weighted tables are bundled for **Red · Blue, Yellow, Gold · Silver, Crystal, Ruby · Sapphire, Emerald, FireRed · LeafGreen, Diamond · Pearl, Platinum, HeartGold · SoulSilver, Black · White, Black 2 · White 2, X · Y, Sun · Moon** and **Ultra Sun · Ultra Moon** — 1,128 locations. Rates are per-location and per-method, aggregated across time-of-day and seasonal variants, so treat them as very close rather than frame-perfect.

Two more games are covered by equivalence, and the tracker says so on the wheel screen: **BDSP** borrows Diamond · Pearl (the route tables are the same), and **ORAS** borrows Ruby · Sapphire (accurate base pools, missing a few ORAS-only additions).

Still uncovered: **Let's Go, Sword · Shield, Legends: Arceus and Scarlet · Violet.** The first three have published tables but no clean machine-readable source; Scarlet · Violet genuinely has no percentage tables at all, because it replaced fixed encounter slots with a dynamic biome spawn system. On those four the tracker tells you and you run First Encounter.

**Fan games.** **Pokémon Decay** ships as a selectable game, built from the developers' own public spreadsheets: 59 major battles in story order (8 gyms, the Elite Four, Cynthia, 28 team-boss fights and 5 rival battles) and 93 areas of encounter data. One caveat the tracker repeats on screen — the dev sheet records *where* each species lives, not how often, so Decay's wheel gives **every species in an area equal odds**.

**Decay sprites and roster.** Pick Decay and the tracker uses **the game's own icons** — all 560 of them, taken from its `Graphics/Pokemon/Icons` folder — so Delta forms, the 44 original species and everything else look exactly as they do in-game rather than borrowing a vanilla lookalike.

The species field changes too: instead of typing freely against the National Dex, you get a **searchable, sprite-led list of the 560 species that actually exist in Decay**, and nothing else can be logged. Type `delta bulb`, tap the sprite, done — no way to record a Pokémon the game doesn't have, and no way to mistake a Delta for its vanilla counterpart.

**Era-correct typings.** A type chart is not a fixed thing. Steel and Dark didn't exist until Gen II, and Fairy not until Gen VI, so the modern typing is simply wrong for an older game: in Red · Blue, **Magnemite is pure Electric** and **Clefairy is Normal**. The tracker resolves every typing against the generation of the game you picked, so a Kanto run shows Kanto's type chart and a Paldea run shows Paldea's. Where a species changed, its detail sheet says what it became and when ("Fairy from Gen VI onward").

Twenty-four species are affected: the Magnemite line, which gained Steel in Gen II, and the twenty-two that became part- or full-Fairy in Gen VI — the Clefairy, Jigglypuff, Marill, Ralts, Togepi, Snubbull, Cottonee and Mr. Mime families, plus Mawile and Azurill. The list was checked against **[Serebii](https://www.serebii.net/)'s separate Pokédex for each generation**, which is the only source that records what a Pokémon *was* rather than what it is: every one of the 151 entries in the Gen I dex and all 251 in the Gen II dex agree with what the tracker shows, and the changeover cases were verified on both sides of the boundary.

Fan games are left alone — Decay's own PBS data is already final for its era, and a ROM hack has no knowable generation, so both use current typings.

**Decay typings.** Types matter twice over — the badges on every card, and Bloodline Purity (Rule 33) — and in Decay the National Dex is not merely unhelpful but actively wrong: **δBulbasaur is Fire/Rock**, not Grass/Poison. So the tracker reads Decay's own PBS files and uses them in place of the mainline table whenever Decay is the active game. **All 560 species are typed**: 547 from the live `pokemon.txt`, 9 taken from their Delta (the nine that exist in Decay only as a Delta), and 4 — δPlusle, Luvfish, Samurott, Virizion — from the dev's own `pokemonORIGINAL.txt` reference list, which is the only place they're recorded.

Matching is done on each entry's display name rather than its internal ID, because those don't always agree (`[SHAYMIN1]`), with δ, ♀ and ♂ transliterated rather than stripped — otherwise δBulbasaur folds onto Bulbasaur and the two Nidorans collide into one.

One inference worth knowing: where the dev sheet lists a species that ships **only** as a Delta (Ekans, Snubbull, Slowpoke, Tangela and 70 others), the wheel names the Delta, because that's the only version in the game. So Cinnabar Volcano correctly reads *Delta Bulbasaur*, not Bulbasaur.

**Ace level coverage — 465 of 465 major battles.** Every gym, trial, grand trial, titan, Team Star base, noble, villain-team boss, rival battle, Elite Four member and Champion in all 21 mainline games, plus Decay. There are no gaps and no prompts: pick a game, switch the cap on, and it moves itself from wall to wall for the whole run.

Values are the **first** encounter with each trainer, never a post-league rematch — the two differ by twenty levels or more in some games, and a cap built on the rematch would do nothing at all.

Five sources were cross-checked rather than trusted individually; where two disagreed it was almost always the rematch/first-encounter confusion above.

If you play a ROM hack or fan game with no bundled list, the cap asks you for each wall's ace once and remembers it.

**Credits.** Nickname themes use name data from [Behind the Name](https://www.behindthename.com), licensed [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/); paste a free personal [API key](https://www.behindthename.com/api/) into the tracker's theme panel to roll from all 250+ of their themes live instead of the bundled 18. Portraits come from the [PMD Sprite Collab](https://sprites.pmdcollab.org/) community project — spriters are credited per-Pokémon on their site. Encounter tables and species/ability data come from [PokéAPI](https://pokeapi.co/); ace levels come from [Serebii](https://www.serebii.net/), [Nuzlocke University](https://nuzlockeuniversity.ca/), [Bulbapedia](https://bulbapedia.bulbagarden.net/) and [Game8](https://game8.co/), cross-checked against each other. Type badge colours and shape follow [Pokémon Database](https://pokemondb.net/type/grass); historical typings were verified against Serebii's per-generation Pokédexes, and Decay's against the game's own PBS files. Pokémon is © Nintendo / Creatures Inc. / GAME FREAK; this is an unofficial fan ruleset.

---

*Nobody dies in Lineagelock. They just get benched, and the die decides who by. Go roll something.*
