# HSEPID.NP upgrade — what changed and what you still need to do

## Files
New: `updates.html`, `data/hsepid-data.js`, `backup/index.original.html` (rollback: copy it over `index.html`), this README.
Modified: `index.html` (11 changed lines: Updates link in header, hero button, link in the store view, search entry, footer link).
Nothing else was touched. Upload these next to your existing `logo.png`, `cover.png`, `projects.js` and `hsepid-intro/`.

## How to manage content
Edit only `data/hsepid-data.js`. It holds `announcements`, `products`, `offers`, `roadmap` (all empty now) and has commented examples and the allowed status/category values. Redeploy after editing. This is a static site, so there is no online editor.

## Rules the page enforces
- Discount = original − discounted; percent = discount ÷ original × 100. No percent is shown if the original price is missing, zero, or not higher than the offer price.
- Offer state (active / upcoming / expired) is calculated from start and end dates in the visitor's browser. Expired offers show no discounted price.
- Only "Published" and "Completed" count as confirmed. Roadmap entries with those statuses are rejected.
- Invalid entries are skipped and logged in the browser console. All text is inserted as plain text; `javascript:` links are dropped.

## Not built (needs your decision or a backend)
- Real purchasing, stock, orders: products link to their own `productUrl` (e.g. Daraz). No cart or payment exists.
- Owner dashboard / login: not created, because a fake one gives no security. A real one needs a host with authentication plus a database or CMS (e.g. Supabase, Firebase, or a Git-based CMS).
- Updates page is English only; it uses the saved theme but not the language switcher.
- Optical store products appear on `updates.html#store`; there is no separate store page.
- The four earlier prompts were not included in what you sent, so only this master prompt was implemented.
