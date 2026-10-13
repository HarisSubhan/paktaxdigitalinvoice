# Fix and expose the staff mail login

The current mail control is the tiny faint envelope directly after “origami99.com” at the very bottom of the page. I tested it in the live preview and confirmed that clicking the icon opens the PIN window, but its 24 px click area and very low contrast make it look absent and easy to miss.

## Changes

- Replace the tiny envelope with a clearly readable **lock icon + “Staff Login”** button in the footer on every page.
- Give it a larger click area, visible border, and clear hover/focus feedback while keeping it visually secondary for normal visitors.
- Keep the existing PIN window and PIN `12345@6789@`.
- After a correct PIN, open the mail server in a new tab using a browser-safe flow that avoids popup blocking.
- Keep incorrect-PIN feedback and allow closing with Cancel, Escape, or clicking outside.

## Verification

- Confirm the Staff Login control is visible and clickable on desktop and mobile.
- Test incorrect and correct PIN paths.
- Confirm the correct PIN opens the configured mail server in a new tab.
- Check both the home-page footer and shared footer used by the Digital Invoicing and Demo pages.

## Security note

This remains a convenience lock only because the PIN and mail address are currently delivered in page code. Proper secrecy would require moving validation to the server and storing the PIN as a protected secret; that can be added separately if required.
