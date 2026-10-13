# Staff Login: stop the double open

## Problem
Clicking "Staff Login" in the footer and entering PIN 123456789 opens the mail server in a new tab AND navigates the current tab to it. Only one should happen.

## Root cause (confirmed in code)
`src/components/interactive.tsx`, `MailVault.submit()`:

```ts
const destination = window.open(MAIL_SERVER_URL, "_blank", "noopener");
if (!destination) window.location.assign(MAIL_SERVER_URL);
```

When the features string contains "noopener", the browser spec says `window.open` returns `null` even when the new tab opens successfully. So the code wrongly believes the popup was blocked and also runs `window.location.assign`, opening the same link in the current tab.

## Fix
Keep the new tab as the only behaviour; remove the same-tab fallback:

```ts
window.open(MAIL_SERVER_URL, "_blank", "noopener,noreferrer");
```

If the browser ever blocks the popup for a real reason, nothing happens on the current tab either, which is the safe single-behaviour outcome.

## Files touched
- `src/components/interactive.tsx` — two lines inside `MailVault.submit()`.

## Verification
- Playwright: click Staff Login, enter the PIN, confirm exactly one new page opens to the mail server and the preview tab stays on the current page.
- Confirm no build or console errors.
