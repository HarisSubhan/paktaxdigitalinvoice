# Uncle Tax: Onboarding, Demo Video and Demo Account

## Wording cleanup (home page)
- Remove the "Assalam o Alaikum" greeting line from the opening headline and use a confident local business line instead.
- Delete the sentence "Bas chaar daftar ke qadam." from Uncle Tax's note next to the journey.
- Replace the "qadam" wording in the journey heading and copy with fresher phrasing (for example "Chaar simple steps, zero paperwork").
- Keep the WhatsApp starter message polite but drop the greeting styling from on-page text.

## New page: Digital Invoicing signup (/digital-invoicing)
The "Digital Invoicing Portal" button on the home page and header now opens this page instead of jumping straight to the external portal.

The page contains:
1. A short Uncle Tax intro explaining what happens after signup.
2. A request form: business/seller name, contact person, phone, email, address (city included), what the seller sells (category plus free text), sales tax registration number (optional), monthly invoice volume, notes.
3. On submit, the details are formatted into a readable message and opened in WhatsApp to Mr Jawad Haider's number, pre-filled and ready to send. Nothing is stored anywhere; the form only validates and hands off to WhatsApp.
4. A "Call instead" action with the same number.
5. Two secondary actions: "Watch the demo" and "Create your demo account" (the second opens the software portal at fbr.paktaxdigitalinvoice.com.pk in a new tab, where the demo request option lives, with a short note telling the user what to look for there).

## New page: Demo video (/demo)
- Full walkthrough page built around the uploaded Urdu guide video, presented with a proper player, poster frame and clear framing.
- Alongside the player: a chaptered explanation list (registration, product/stock setup, making an invoice, posting to FBR, IRIS filing) so the video is explained, not just dropped in.
- Closing block: "Create your demo account" going to the software portal, plus Call and WhatsApp actions and a link back to the signup form.

## Home page wiring
- Header keeps Client Portal and adds the Digital Invoicing entry pointing to the new signup page, plus a "Watch demo" link.
- Hero and the three-portal section: the Digital Invoicing card now leads to the signup page; Client Portal and Stock Invoicing Portal keep their existing external links.
- Add a demo teaser near the guided journey with a video thumbnail linking to /demo.
- Mobile action bar's third button points to the signup page.

## Technical details
- The uploaded video is registered through the asset pointer flow and referenced by URL, not committed as a binary; a poster frame is generated from the video.
- Two new TanStack route files (`/digital-invoicing`, `/demo`), each with its own head metadata (title, description, og/twitter tags).
- Form is client-side only with lightweight validation and a shared WhatsApp message builder in the existing interactive module; no backend is required.
- Existing tokens, Uncle Tax components, ledger/paper styling, floating Call and WhatsApp controls, and reduced-motion handling are reused on the new pages.
- Keep: no pricing, no em dashes, no Indian rupee symbol, all external links open in a new tab.
