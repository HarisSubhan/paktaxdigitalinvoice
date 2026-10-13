# PAK TAX DIGITAL INVOICE — Big Upgrade

## What changes

### 1. New logo (invoicing-first)
Replace the current mark with a clearly invoicing-themed logo: a stylized invoice/receipt sheet with a line-item grid, a tick or QR corner, and a rupee accent, in the government-blue plus teal palette seen in your reference image. Regenerate the favicon from it.

### 2. FBR presence in the hero
Add a compliance badge row directly under the hero headline: an "FBR Connected" crest-style badge plus PRAL-ready, IRIS, and PKR/GST chips, with a live green "posting to FBR" pulse. Note: the official FBR emblem is government property, so I will use a custom crest-style badge that reads "FBR Connected / Integrated" rather than copying the official seal. If you have permission and a copy of the official logo, upload it and I will swap it in.

### 3. Marketing style from your reference
Borrow the structure that works in the image you shared (used as inspiration only, not embedded):
- Left feature list with icon pills: real-time FBR posting status, buyer ATL verification, products/stock and HS codes, sales and tax reports, roles/security and support chat.
- A right-side product dashboard mock-up (invoices count, FBR posted, clients, invoice overview chart, recent activity, top products) built in code so it is crisp and animated.
- A bottom contact strip: phone, email, website, plus secure cloud / role-based access / in-app support.

### 4. Extremely localized content
Rewrite copy for Pakistani businesses with natural Urdu-English mixing in headlines and subheads (in the style of "Ek hi dashboard"), sector mentions (traders, retailers, distributors, manufacturers, restaurants), FBR terms your customers know (NTN, STRN, ATL, IRIS, PRAL, HS codes, sales tax return, withholding), and Rawalpindi/Islamabad local presence. No em dashes anywhere on the site.

### 5. Images
Generate a small set of on-brand images: hero backdrop, a Pakistani business owner using the software, and section illustrations for invoicing, filing, and support. All localized in feel, no stock-photo cliches.

### 6. Dark and light mode
Add a theme toggle in the navigation with a full light palette (soft paper background, deep blue ink, teal accent) alongside the current dark aurora theme. Preference is remembered between visits and respects the system setting on first load.

### 7. 3D effects and animations
- Tilt-on-hover, layered depth and soft shadows on the dashboard mock and feature cards.
- Scroll-reveal for every section, animated counters for the stats, a moving gradient beam under the hero, an animated invoice that stamps "FBR Posted".
- Motion stays restrained and respects reduced-motion settings.

### 8. More sections
Pricing tiers in PKR, industries served, testimonials from Pakistani businesses (clearly placeholder until you send real ones), an FAQ answering common FBR integration questions, and a stronger final call to action with both software links.

## Technical notes
- New/updated: `src/routes/index.tsx` split into section components under `src/components/`, `src/styles.css` (light and dark token sets, 3D and motion utilities), `src/routes/__root.tsx` (theme script and toggle wiring), new logo and favicon in `public/`, generated images as CDN assets.
- Both software links stay exactly as they are: paktaxdigitalinvoice.com.pk and taxflow.flowezee.com.
- Contact details for Mr Jawad Haider unchanged.
- Testimonials, pricing numbers, and client counts will be invented placeholders unless you send real figures. Tell me the real ones and I will replace them.
