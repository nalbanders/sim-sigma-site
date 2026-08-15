# ROADMAP.md — Sim Sigma Golf
*Backlog and forward plan. Session-sized items. Update when scope shifts.*

---

## Next up (Phase 3): Telegram invoicing bot — "Sim Sigma ops agent"

Full session prompt: `next-phase-prompt.md`. Summary:

Telegram bot with Stripe API access + LLM brain so Sarko can create/send invoices by chatting (text or photo of a quote/order). Modeled on the Nalbana and Gleamery bots — group chat aware, image reading, conversation memory. Designed to expand: Shopify order lookups, Sarko-facing FP&A (revenue, fees, payout tracking) later.

## Near-term (days, not sessions)

- [ ] **Stripe account review clears (~Aug 16-17)** → re-check surcharge feature availability (invoice editor + template). Card surcharging was the point — Hochan's card payment cost ~$87 vs $5 ACH.
- [ ] **Sarko accepts Stripe invite** (pending at sarkology@yahoo.com — check spam). New-member restrictions lift 2 days after acceptance.
- [ ] **First payout lands** — verify U.S. Bank ••2468 receives it (2-3 business days after payment settles).
- [ ] **Shopify Payments entity fix** — verification was submitted as "Sim Sigma LLC"; entity is sole prop (SARKO NALBAND / DBA SIM SIGMA). Likely cause of stuck payout verification. Fix in Shopify admin with LTR 147C + FBN docs.

## Later / nice-to-have

- [ ] "Request a build quote" form or CTA on simsigmagolf.com feeding the invoice pipe
- [ ] Texas sales tax refund follow-up (Sarko filing with TX for the Carl's order tax — his action)
- [ ] Deposit-split workflow (50/50) for larger builds — Stripe "request in multiple payments"
- [ ] Shopify open items (from STATE.md): HotShot variant pricing verification, Curved Enclosure freight profile, account email → simsigma@protonmail.com, HTTPS enforcement
- [ ] Site editing access for Sarko (his original ask #4 — non-developer edit path)

## Done

- ✅ 2026-08-14 — Phase 2: Stripe direct-business track live. Account (sole prop, DBA SIM SIGMA), ACH/Apple Pay/Affirm/Klarna, invoice template + CA disclosure, Adaptive Pricing off, Sarko invited as Administrator. First invoice sent and PAID ($3,000, Hochan Chung, card ••9967).
