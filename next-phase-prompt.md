# Sim Sigma — Next Phase Session Prompt
*Copy-paste this to start a new Claude session for Phase 2 work.*

---

## Orient first

Read these in order before doing anything:

1. `/Users/nalband/Dropbox/Portfolio Management/sim-sigma-site/CONTEXT.md` — business overview, architecture, Shopify IDs, Carl's Place relationship
2. `/Users/nalband/Dropbox/Portfolio Management/sim-sigma-site/STATE.md` — what's live, what's pending, what's next
3. `/Users/nalband/Dropbox/Portfolio Management/sim-sigma-site/WORKFLOW.md` — session rules (golden rule: Claude edits, Armen commits)

---

## Session goal: Phase 2 — Invoicing, Payments, and Sarko's Access

Sarko Nalband (owner of Sim Sigma Golf) needs three things to turn this into a real operating business. Work through them in priority order:

---

### 1. Invoicing + payment processing for custom builds

The Shopify Buy Button handles equipment sales (Carl's Place dropship). It can't handle Studio Design & Build or Event Rental projects — those are bespoke, high-ticket, and need proper invoicing.

**What Sarko needs:**
- A way to send customers a professional invoice for a custom project
- Customer pays via ACH (lowest fees) or credit card
- Credit card transactions: pass the processing fee through to the customer (surcharge)
- First real use case: Hochan's simulator build order (use as end-to-end test)

**Research and recommend the best tool.** Consider:
- Wave (free invoicing + payments, ACH supported)
- Invoice Ninja (open-source, ACH, credit card surcharge built-in)
- QuickBooks (overkill but familiar)
- Shopify invoicing (if available on Starter plan)
- Helcim / Stripe (as payment processors with invoicing)

**CA surcharge rules:** California prohibits no-surcharge-disclosure credit card surcharges but allows them if disclosed properly. Research current CA law before recommending a surcharge approach.

**Deliverable:** A clear recommendation with reasoning (1–2 tools), setup steps, and what Sarko needs to do to get the first invoice out the door.

---

### 2. Payment processor research for high-ticket items

Carl's Place products range from $999 (DIY kit) to $4,894 (Curved enclosure). Custom builds will be $2k–$10k+. Sarko wants lowest possible fees.

**Research and answer:**
- What's the cheapest credit card processor for low-volume, high-ticket B2C sales (not retail swipe)?
- ACH options: what processors offer ACH, what are the fees (flat vs %)? (Helcim ~$0.25 flat is a benchmark)
- Credit card surcharge: which processors allow it, what are the compliance requirements, and what's the math (Stripe: 2.9%+30¢; passing full CC fee to customer — legal in CA if disclosed)?
- Does the invoicing tool from item #1 already solve this, or is a separate processor needed?

**Deliverable:** Fee comparison table + recommendation. If the same tool solves items #1 and #2, say so.

---

### 3. Sarko's site editing access

Sarko wants to make edits to simsigmagolf.com himself without needing Armen or Claude. The site is currently a single `index.html` on GitHub Pages — no CMS.

**Options to research and recommend:**

**Option A: Document a "how to edit" guide for Sarko using GitHub's web editor.** No new infrastructure. Sarko edits `index.html` directly on github.com, commits from the browser. Limitations: raw HTML editing requires technical comfort.

**Option B: Migrate to Netlify CMS or Decap CMS.** Open-source CMS layer on top of the GitHub repo. Sarko gets a simple UI to edit content. Still deploys to the same domain. Medium complexity to set up.

**Option C: Migrate to a simple hosted site builder (Squarespace, Webflow).** Sarko gets a full visual editor. Tradeoff: monthly cost (~$16–$25/mo), loses custom code flexibility, migration effort.

**Option D: Keep as-is + define an "edit request" workflow.** Sarko texts/emails Armen what to change → Armen opens Claude Cowork → Claude edits → Armen pushes. Current state. Zero Sarko friction.

**Deliverable:** Recommendation with clear tradeoffs. If recommending a migration, outline what breaks (Shopify Buy Button embed) and what carries over.

---

## Constraints and rules for this session

- **Golden rule:** Claude edits files; Armen commits and pushes from Terminal. Never run git from the Claude sandbox.
- **Deploy = git push to `main`.** GitHub Pages auto-deploys in ~60 seconds.
- **No secrets in files.** API keys, passwords → never committed.
- **Update STATE.md before ending the session.** The commit block must include STATE.md.
- **No Shopify Admin API needed** for this phase — this is invoicing/payments research + potential CMS setup, not product management.

---

## Known context you'll need

- Site: simsigmagolf.com (GitHub Pages static HTML)
- Shopify: byg9fh-wt.myshopify.com / sim-sigma-golf (Starter plan, $5/mo)
- Shopify Payments: active and accepting; payout pending bank verification
- Business entity: Sim Sigma LLC (EIN: 41-4080163), Los Angeles CA
- Sarko: sarkology@yahoo.com, non-technical, Apple ecosystem
- Armen manages the project (nalbana@gmail.com)
- First real order: Hochan's simulator build (amount TBD)
