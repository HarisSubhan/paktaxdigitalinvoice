# Portal links rework and new logo

## What changes

### 1. Three portals replace the old links
Remove the old "Try free" button and both existing software links (paktaxdigitalinvoice.com.pk and the old taxflow button placement). In their place, three clearly named portals used consistently across the site:

- Client Portal — portal.paktaxdigitalinvoice.com.pk
- Digital Invoicing Portal — fbr.paktaxdigitalinvoice.com.pk
- Stock Invoicing Portal — taxflow.flowezee.com

### 2. Where they appear
- Top menu: a "Client Portal" item in the navigation (also in the mobile menu), plus a "Digital Invoicing Portal" button as the main header action.
- Hero: two main buttons, "Digital Invoicing Portal" and "Stock Invoicing Portal", with a quieter "Client Portal" link beside them.
- A new short "Our portals" band with three cards, one per portal, each with a one line description of what it is for and its own button.
- Inside matching sections: the invoicing/FBR feature area links to the Digital Invoicing Portal, the stock and products area links to the Stock Invoicing Portal, and the client/support area links to the Client Portal.
- Final call to action and footer updated to the three portals.

All portal links open in a new tab.

### 3. New logo
Redo the logo from scratch with a cleaner, sharper invoicing mark: a simple folded invoice sheet with a rupee symbol and a check, flat and geometric so it stays legible at small sizes, in the deep blue and teal already used on the site. Regenerate the favicon from it and update the header mark.

## Technical notes
- `src/routes/index.tsx`: replace `INVOICE_URL` / `TAXFLOW_URL` with `CLIENT_PORTAL_URL`, `FBR_PORTAL_URL`, `STOCK_PORTAL_URL`; update nav, hero, new portals section, contextual section links, final CTA, footer.
- New `public/logo.png` and regenerated `public/favicon.png`.
- No copy rewrite beyond button labels and the new portals band; no em dashes.
