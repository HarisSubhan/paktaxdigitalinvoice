# FBR mark everywhere, new POS-style logo, creative hero background

## 1. FBR mark, visible and repeated

The official FBR emblem is government property, so I cannot copy it. I will build a close, respectful "FBR Integrated" crest in the same visual family (green and gold state crest look, star and crescent motif, circular text ring reading "FBR INTEGRATED / DIGITAL INVOICING") and use it consistently:

- Header: small crest next to the brand name with a live green "connected" dot.
- Hero: bigger crest inside the badge row, with the PRAL, IRIS, ATL and PKR chips grouped around it.
- Floating invoice card: crest stamped in the corner beside "FBR Posted".
- How it works: crest on the FBR posting step.
- Contact and footer: a compliance strip with the crest and the line "Integrated with FBR digital invoicing".

If you send me the official FBR logo file and confirm you are allowed to use it, I will swap it in everywhere in one go.

## 2. Logo completely redone, POS and tax themed

New mark: a thermal POS receipt curling out of a small terminal slot, with a torn zigzag bottom edge, three receipt lines and a rupee symbol on the total line, plus a tiny tick where the tax is verified. Flat and geometric, deep blue with a teal accent, readable at 20 pixels. Browser icon regenerated from it.

## 3. Hero background rebuilt

The square grid goes away. In its place:

- A slow moving "ledger flow": faint invoice lines and rupee glyphs drifting upward and fading, like receipts streaming to FBR.
- A soft aurora glow that reacts slightly to mouse movement.
- Animated data beams travelling from a shop icon on the left to the crest on the right, showing invoices posting live.
- A subtle paper texture and top light so it reads as a document surface rather than a tech grid.

All of it sits behind the content, is not clickable, and stops moving when the visitor prefers reduced motion.

## Technical notes

- New `public/logo.png` and regenerated `public/favicon.png`.
- `FbrCrest` in `src/components/site-kit.tsx` redrawn as an inline SVG crest with size variants; used in nav, hero, invoice card, steps, contact strip, footer.
- Remove the `grid-lines` overlay from `src/routes/index.tsx`; add a `HeroBackdrop` component in `src/components/interactive.tsx` (canvas free, CSS and SVG only) with new keyframes and tokens in `src/styles.css`.
- No content or portal link changes; no em dashes.
