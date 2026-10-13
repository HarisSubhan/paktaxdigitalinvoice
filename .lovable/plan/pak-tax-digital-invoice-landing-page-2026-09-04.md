# PAK TAX DIGITAL INVOICE Landing Page

## Goal
Build a single, polished landing page for PAK TAX DIGITAL INVOICE — a Pakistan-localized, FBR-connected invoicing and tax-filing software service run by Mr Jawad Haider in Rawalpindi.

## Design Direction
Use the selected **"Frosted government blue"** direction: dark aurora background, glass cards, government-blue brand palette, Space Grotesk / IBM Plex Sans / JetBrains Mono typography, restrained motion, official and trustworthy tone.

## Content Requirements
- Brand: PAK TAX DIGITAL INVOICE
- Hero headline emphasizing FBR-connected invoicing + tax filing automation
- Two primary CTAs linking to:
  - https://paktaxdigitalinvoice.com.pk
  - https://taxflow.flowezee.com/
- Feature section: Generate FBR e-invoices, File tax returns, Live FBR pipeline
- How it works: 4 steps
- Localization/trust section: Made for Pakistan
- Contact section with:
  - Name: Mr Jawad Haider
  - Phone: +923235090140
  - Email: jawadhaider2009@gmail.com
  - Address: Suite No. 4417, Gali No. 14, Anandpura Gawalmandi, Rawalpindi
- Footer with quick links and copyright

## Technical Plan
1. Generate a blue-themed brand logo and favicon.
2. Update `src/styles.css` with the selected direction's design tokens (HSL background, foreground, brand, aurora accents, fonts, glass border).
3. Load Google Fonts in `src/routes/__root.tsx`.
4. Replace `src/routes/index.tsx` placeholder with the full landing page, matching the selected direction's composition: sticky glass nav, hero with invoice card, feature strip, how-it-works, trust section, contact, footer.
5. Add SEO head metadata to the home route (title, description, og tags, twitter card).
6. Set favicon in `src/routes/__root.tsx` and replace `public/favicon.ico`.
7. Verify build passes and preview renders correctly.

## Deliverables
- `src/routes/index.tsx` landing page
- Updated `src/styles.css` tokens
- Updated `src/routes/__root.tsx` fonts, favicon, shell
- Generated logo/favicon assets in `public/`
- SEO metadata on home route
