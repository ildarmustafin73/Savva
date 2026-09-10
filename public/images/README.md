# Images — placeholders and brand assets

## Logo (`public/images/brand/`)

The four `savva-*.png` files are **not generic placeholders** — they're a
transparency-keyed crop taken directly from SAVVA's own official PDF menu
(the only source of the real wordmark available so far), served through
`components/ui/Logo.tsx`. They already carry SAVVA's real colours and
lettering.

**TODO: replace with an official vector logo asset** (AI/SVG/EPS) as soon as
one is available — swap the four files in this folder for re-exports of the
vector file at the same names, or update the `sources` map in `Logo.tsx` to
point at new filenames. Nothing else needs to change.

## Photography (`public/images/`, via `ImageSlot.tsx`)

Every photo on the site goes through `components/ui/ImageSlot.tsx`. Until
real photography exists, each slot renders a **deliberately abstract,
geometric placeholder** (arches, bands, grid lines, concentric rings, in the
olive/cream ramp) — never a figurative drawing of a cup, pastry, or interior
detail. Nothing in the placeholder claims to depict a real SAVVA object; the
`alt` text names the *intended future photo subject* for planning purposes
only. Each placeholder ships with the same finished chrome a real photo
would get — a neutral 1px outline (`outline-black/10`, never brand-tinted)
and a soft shadow-as-border (`shadow-border` — see `globals.css`) — plus a
scroll-triggered clip-path reveal, so the section looks complete today and
simply gets stronger once real images land.

To swap in a real photo:

1. Add the file to this folder (e.g. `public/images/hero.jpg`).
2. Open the component that renders that slot and pass `src="/images/hero.jpg"`
   to the `<ImageSlot />` call. No other changes needed — the placeholder
   disappears automatically once `src` is set, and it inherits the same
   outline/shadow/reveal treatment.

### Slot map

| Location (component)              | Suggested filename       | Aspect ratio |
| ---------------------------------- | ------------------------- | ------------ |
| `SignatureDrinks.tsx` (SAVVA Selection) — 5 items | `savva-selection-1.jpg` … `-5.jpg` | 3:4 |
| `PastrySection.tsx`                 | `pastry.jpg`                | 4:5 |
| `MoodGallery.tsx` — item 1          | `mood-wide.jpg`             | 16:10 |
| `MoodGallery.tsx` — item 2          | `mood-wood-detail.jpg`      | 1:1 |
| `MoodGallery.tsx` — item 3          | `mood-plant-light.jpg`      | 3:4 |
| `MoodGallery.tsx` — item 4          | `mood-tables.jpg`           | 4:3 |
| `MoodGallery.tsx` — item 5          | `mood-cup-detail.jpg`       | 1:1 |
| `MoodGallery.tsx` — item 6          | `mood-natural-light.jpg`    | 16:9 |
| `Visit.tsx`                         | `visit-location.jpg`        | 4:5 |

`Hero.tsx` deliberately has **no** photo slot — the first viewport is built
entirely from real brand material (the wordmark, the botanical branch
graphic, and colour), so it doesn't depend on photography to look finished.
A real interior/product photo can be added behind that composition later as
an enhancement, not a requirement.

Every current photo-slot usage is also marked in code with:

```
// TODO: replace with official SAVVA photography
```

Use real SAVVA photography only — no stock photos of other coffee shops,
and no invented figurative illustrations standing in as if they were
official brand imagery.

## Botanical branch (`components/ui/BotanicalBranch.tsx`)

This is the one illustrated element on the site, developed from the
coffee-branch line art on SAVVA's own printed menu — not a new invented
brand object. Do not add further figurative illustrations (cups, pastries,
interior scenes) alongside it; those stay as abstract placeholders above
until real photography replaces them.
