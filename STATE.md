# STATE.md — Sim Sigma Golf
*Update this before ending every session. Read this at the start of any session after CONTEXT.md.*

---

## Last updated
2026-08-14 — Session: Armen + Claude (Cowork). Project standards + footer fix. Pending Armen push.

---

## What's live ✅

- **simsigmagolf.com** — static HTML site on GitHub Pages (hero, services, shop, about, contact)
- **Shop section** — Shopify Buy Button embedded (collection component, 4 products)
- **Carl's Place branding** — "Authorized Carl's Place Reseller" badge, logo, brand mentions in services
- **Shopify Payments** — active and accepting credit cards (Visa, MC, Amex, Shop Pay, +5 more)
- **Shopify Payments verification** — submitted (Sim Sigma LLC, EIN 41-4080163); payout pending verification
- **Product images** — approved Carl's Place Drive assets uploaded to Shopify (replacing CDN placeholders)
- **Copyright year** — ✅ updated to "© 2026" in index.html (pending push)

---

## Pending / in progress ⚠️

- [ ] **HotShot mat pricing** — 5×8 ($579.95), 4×9 ($599.95), 6×10 ($699.95) are estimates. Sarko must verify against carlofet.com reseller account. MAP violation risk if below retail.
- [ ] **Curved Enclosure freight shipping** — currently showing $7.31 standard (wrong). Needs ~$700 flat freight rate in Shopify Admin → Settings → Shipping and delivery → create new shipping profile for Curved product.
- [ ] **Bank account for payouts** — routing + account numbers ready but input blocked until Shopify Payments verification clears. Check back at admin.shopify.com/store/sim-sigma-golf/settings/payments.
- [ ] **Shopify account email** — still nalbana@gmail.com. Change to simsigma@protonmail.com (Settings → Account).
- [ ] **Footer copyright** — says "© 2025", should be "© 2026". One-line fix in index.html.
- [ ] **HTTPS enforcement** — enable once GitHub Pages TLS cert fully provisioned (Settings → Pages).

---

## Next phase (Sarko's requests, 2026-08-14)

From Sarko's message (via Armen):
1. **Invoicing + payment processing for custom builds** — needs a way to invoice customers for Studio Design & Build projects (not through Shopify Buy Button; these are bespoke projects). Wants ACH option (lowest fees) and credit card with fee pass-through.
2. **Payment processor research** — find lowest-fee processor for high-ticket items ($1k–$5k). Credit card surcharge feasibility in CA.
3. **Hochan's order** — first real customer order for a simulator build. Use to test the end-to-end fulfillment workflow.
4. **Site editing access for Sarko** — Sarko wants to be able to make edits to the website himself. Need to document or implement a path for non-developer edits.

---

## Session rules reminder
- Claude edits files; Armen runs `git add … && git commit … && git push` in Terminal
- No git commands from Claude's sandbox
- No secrets in files (tokens, passwords, EINs in docs are OK as reference)
- Update this file before ending session
