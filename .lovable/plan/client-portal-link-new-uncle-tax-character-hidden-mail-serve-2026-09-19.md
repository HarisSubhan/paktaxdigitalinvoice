# Client portal link, new Uncle Tax character, hidden mail server access

## 1. Client Portal address
The Client Portal now points to `password.paktaxdigitalinvoice.com.pk` instead of the old `portal.` address. Updated everywhere it appears: top menu, hero, the three portals band, the closing section and the footer, plus the signup and demo pages. Still opens in a new tab.

## 2. New Uncle Tax character
Replace the current Uncle Tax illustration with the newly uploaded one (white hair, glasses, cream shalwar kameez, ledger book under the arm). The new artwork is cut out from its dark background so he sits cleanly on the paper and ledger surfaces, and is used in every place the old character appears: the opening scene, the guided journey notes, and the contact handoff. Sizing and poses stay as they are.

## 3. Hidden mail server entry in the footer
A discreet, unlabelled mark in the footer (small envelope icon, no wording that hints at webmail). Clicking it opens a small PIN dialog:
- Correct PIN `12345@6789@`: the webmail opens in a new tab and the dialog closes.
- Wrong PIN: a short "Incorrect PIN" message, field clears, no hint about the destination.
- The dialog closes on Escape or clicking outside.

Note on security: this hides the link from casual visitors, but the address and PIN exist in the page code, so anyone technical could find them. It is a convenience shortcut, not real protection. If you want it genuinely protected, that needs a server-side check, which I can add later.

## Technical details
- `src/lib/site.ts`: change `CLIENT_PORTAL_URL`, add `MAIL_SERVER_URL`.
- New character asset registered through the asset pointer flow with the background removed; `src/components/uncle-tax.tsx` updated to the new image.
- New `MailVault` component in `src/components/interactive.tsx`: icon button, PIN prompt, `window.open(..., "_blank", "noopener")` on match.
- Rendered in the footer of both `src/components/page-shell.tsx` and the home page footer in `src/routes/index.tsx`.
- No em dashes, no pricing, no rupee symbol, external links keep `target="_blank" rel="noopener noreferrer"`.
