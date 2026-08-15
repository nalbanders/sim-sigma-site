# STATE.md — Sim Sigma Golf
*Update this before ending every session. Read this at the start of any session after CONTEXT.md.*

---

## Last updated
2026-08-15 — Session: Armen + Claude (Cowork). Phase 3 BUILT: Telegram invoicing bot code complete in NEW repo folder `../sim-sigma-ops/` (own private repo — decided with Armen; site repo is public, bot state carries customer data). Launch = manual steps in `sim-sigma-ops/SETUP.md`. This repo unchanged except docs.

Prior: 2026-08-14 — Phase 2 COMPLETE: Stripe invoicing live, first invoice PAID ($3,000, Hochan Chung).

---

## Entity correction (2026-08-14) ⚠️

Sim Sigma is **NOT an LLC**. It is a **sole proprietorship: Sarko Nalband, DBA "Sim Sigma"**.
- EIN 41-4080163 (IRS LTR 147C dated 3/2/2026: line 1 "SARKO NALBAND", line 2 "SIM SIGMA")
- Fictitious Business Name Statement filed LA County 1/23/2026 (expires 1/23/2031)
- CDTFA Seller's Permit: 0-055-876-928
- Any verification (Stripe, Shopify) must use legal name SARKO NALBAND, not "Sim Sigma LLC"

---

## What's live ✅

- **simsigmagolf.com** — static HTML site on GitHub Pages (hero, services, shop, about, contact)
- **Shop section** — Shopify Buy Button embedded (collection component, 4 products)
- **Carl's Place branding** — "Authorized Carl's Place Reseller" badge, logo, brand mentions
- **Shopify Payments** — active and accepting credit cards (reseller track)
- **Stripe account (direct-business track)** — NEW 2026-08-14:
  - Account: SIM SIGMA (acct_1U4PLRRrKMyn92UG), login nalbana@gmail.com, admin.stripe.com
  - Sole prop under Sarko Nalband, DBA SIM SIGMA, statement descriptor "SIM SIGMA"
  - Bank: U.S. Bank (routing 122235821, acct ••••2468) connected for payouts
  - Payment methods enabled: Cards (pending account review), ACH Direct Debit (0.8% capped $5, $20k/wk starting limit), Apple Pay, Link, Affirm, Klarna, Cash App Pay, Amazon Pay
  - Invoice template "Custom Build Invoice" — memo (steer to ACH) + footer (CA surcharge disclosure, labor-not-taxed note, seller's permit)
  - Manual tax rate: "Sales tax 9.5%" (US–California, exclusive) — LA County placeholder; VERIFY against install city before each invoice
  - Radar fraud protection: on ($0.05/txn)
  - Stripe Tax: OFF (deliberate — manual rate is free; revisit if selling out of state)
  - Adaptive Pricing: OFF (was showing foreign-currency conversion on payment pages — disabled 8/14)
  - Sarko invited as Administrator (sarkology@yahoo.com) — invite pending acceptance, check spam
- **FIRST REVENUE ✅ 2026-08-14** — Invoice GC4WCGYY-0002, $3,000, Hochan Chung (Hochan44@gmail.com, McKinney TX). PAID by card ••9967 (~$87 fee absorbed; surcharge feature not yet live). No tax (out-of-state, no TX nexus). Original 0001 voided/revised to 0002. Payout to U.S. Bank ••2468 expected in 2-3 business days.

---

## Pending / in progress ⚠️

- [ ] **Stripe account review** — "Some capabilities are paused while we review your information. This takes 2–3 days." Cards show "pending approval" until it clears. Check dashboard banner.
- [ ] **Stripe surcharge feature** — automatic card surcharging not yet exposed on this account (likely gated during review). Re-check after review clears: invoice editor / invoice template for surcharge option. Footer disclosure already in place. Until then, ACH steering via memo does the work.
- [ ] **Sarko's Stripe invite** — pending at sarkology@yahoo.com (check spam; resend from Settings → Team if needed). Sensitive-action restrictions apply for 2 days after new members join.
- [ ] **First payout** — watch for $2,913 net landing at U.S. Bank ••2468.
- [ ] **Shopify Payments verification mismatch** — submitted as "Sim Sigma LLC" but entity is sole prop. May be why payout verification is stuck. Recheck admin.shopify.com → Settings → Payments; LTR 147C + FBN statement available if docs requested.
- [ ] **HotShot mat pricing** — 5×8 ($579.95), 4×9 ($599.95), 6×10 ($699.95) unverified. MAP risk.
- [ ] **Curved Enclosure freight** — still $7.31 standard (wrong); needs ~$700 flat freight profile in Shopify.
- [ ] **Shopify account email** — still nalbana@gmail.com → simsigma@protonmail.com.
- [ ] **Footer copyright** — "© 2025" → "© 2026" in index.html.
- [ ] **HTTPS enforcement** — enable once GitHub Pages TLS cert provisioned.

---

## Next phase

**Telegram invoicing bot — BUILT 2026-08-15**, lives in its own private repo: `../sim-sigma-ops/` (Gleamery chassis + Stripe). Not yet launched — Armen's manual steps in `sim-sigma-ops/SETUP.md` (repo create, restricted key + probe, BotFather, secrets, webhook, live $1 test). Orientation: `sim-sigma-ops/README.md`; state: `sim-sigma-ops/STATE.md`.

---

## How to create future invoices (Stripe)

1. Dashboard → Invoices → Create invoice (or Stripe iOS app)
2. Pick/create customer (name + email)
3. Add line items — keep equipment and labor SEPARATE (labor itemized = not taxed in CA)
4. Item options on equipment/freight lines → apply "Sales tax (9.5%)" (verify rate for install city at cdtfa.ca.gov)
5. Additional options → Template → "Custom Build Invoice" (attaches memo + disclosure footer)
6. Payment collection: due date + payment methods (ACH/card/Apple Pay/BNPL on by default)
7. Review invoice → Send. Stripe emails a hosted payment link; ACH has no fee to customer, card fee ~2.9% (surcharge once feature is live)
8. For 50/50 deposit builds: "Request in multiple payments" option in the editor

Draft ready: Hochan's invoice (GC4WCGYY-DRAFT) — placeholder $0 line items for equipment / labor / freight, tax rate on equipment line, template applied. Fill amounts + email, then send.

---

## Fee reference (why Stripe for direct track)

- ACH: 0.8% capped at $5 (a $10k invoice costs $5)
- Cards: 2.9% + 30¢ (offset by surcharge when feature is live)
- Invoicing: 0.4% per paid invoice (dashboard plan, no monthly fee)
- Affirm ~6%, Klarna ~3.3–6% merchant fee — only if customer chooses BNPL
- vs Square ACH 1% uncapped, vs Shopify Starter +5% — both rejected for high-ticket

---

## Session rules reminder
- Claude edits files; Armen runs `git add … && git commit … && git push` in Terminal
- No git commands from Claude's sandbox
- No secrets in files (`From Sarko/` is gitignored — contains IDs/bank info; keep it that way)
- Update this file before ending session
