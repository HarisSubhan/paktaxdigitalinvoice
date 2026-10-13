# Make the site bolder, more interactive, no pricing

## What changes

### 1. Pricing removed
The whole pricing section goes away, along with its link in the top menu. Anyone who wants numbers is pushed to contact instead, so the page ends on conversation rather than price tags.

### 2. Brand new logo idea
A single strong mark instead of a plain invoice sheet: a rupee symbol built out of stacked invoice lines, sitting inside a rounded shield that reads as both a receipt and a verification tick. Blue to teal gradient, crisp at small sizes, with a subtle scan line that animates on the site header. Browser icon regenerated to match.

### 3. Always-visible conversion buttons
- A floating pair of buttons in the bottom corner on every screen size: green WhatsApp chat and a call button, both wired to +92 323 509 0140. WhatsApp opens with a prefilled message in Urdu-English.
- On mobile, a slim sticky bottom bar with Call, WhatsApp, and Digital Invoicing Portal.
- Call and WhatsApp buttons also repeated inside the contact section and the closing call to action.

### 4. Every section becomes interactive
- Hero: parallax layers that shift with the mouse, animated typing headline, live counting stats, floating invoice card that stamps FBR Posted on a loop.
- Portals: three big cards that lift, glow and reveal a short benefit list on hover, each with its own accent colour.
- Features: clickable list on the left that swaps the illustration on the right, so it behaves like a mini product tour.
- How it works: a progress line that fills as you scroll, steps lighting up one by one.
- Industries: colour-tinted chips that pop on hover.
- Testimonials: an auto-advancing slider with dots and pause on hover.
- FAQ: smooth animated open and close with a rotating plus icon.
- Numbers throughout count up when they scroll into view.

### 5. More images
Generate a few more on-brand pictures: a Rawalpindi trader scanning stock, an accountant desk with an FBR return on screen, a restaurant counter issuing an invoice, plus an abstract blue and teal texture for section backdrops. Used inside feature cards and industry tiles, not just as decoration.

### 6. Colour and structure refresh
Add a warm accent (deep amber) and a signal green alongside the existing blue and teal so sections stop looking identical. Alternate section backgrounds, add section eyebrow labels and a clearer rhythm, so scrolling feels like moving through chapters rather than one long wall.

### 7. Footer credit
Footer gains a "Powered by origami99.com" line linking to https://origami99.com/ in a new tab.

## Technical notes
- `src/routes/index.tsx` split into section components; new `src/components/` files for the floating contact buttons, feature tour, testimonial slider, and animated FAQ.
- New tokens in `src/styles.css` for the extra accents plus keyframes for parallax, marquee, progress line, and stamp motion. All motion respects reduced-motion.
- New logo written to `public/logo.png`, favicon regenerated from it.
- Three portal links stay exactly as they are; contact details unchanged.
