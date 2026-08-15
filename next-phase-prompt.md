# Sim Sigma — Next Phase Session Prompt
*Copy-paste this to start a new Claude session for Phase 3: the Telegram invoicing bot.*

---

## Orient first

Read these in order before doing anything:

1. `/Users/nalband/Dropbox/Portfolio Management/sim-sigma-site/CONTEXT.md` — business overview, architecture, entity facts (sole prop, DBA Sim Sigma)
2. `/Users/nalband/Dropbox/Portfolio Management/sim-sigma-site/STATE.md` — what's live (Stripe account, first paid invoice), what's pending
3. `/Users/nalband/Dropbox/Portfolio Management/sim-sigma-site/ROADMAP.md` — where this session fits
4. `/Users/nalband/Dropbox/Portfolio Management/Nalbana_FPA/ARCHITECTURE.md` — **the reference implementation.** The Nalbana and Gleamery Telegram bots already solved group chat handling, image reading, and conversation memory. Reuse those patterns (and code where practical); don't reinvent.

---

## Session goal: Telegram bot — Sim Sigma ops agent

A Telegram bot Sarko chats with to run the invoicing side of Sim Sigma, built on the Stripe API with an LLM brain.

### Core v1: conversational invoicing

- Sarko types (or forwards a photo of) order details → bot extracts customer, line items, amounts → **shows a preview → waits for explicit confirm** → creates the invoice via Stripe API → returns the payment link
- **Finalize-only, never auto-send** — the bot never emails a customer; Sarko forwards the link himself (established practice)
- Status queries: "did Hochan pay?" / "what's outstanding?" → invoice + payment status
- Line-item discipline baked in: equipment vs. labor separated (labor untaxed if itemized); CA tax rate applied only to in-state installs (ask install location); out-of-state = no tax
- Payment-method steering: bot reminds that ACH costs $5 flat vs ~2.9% card (~$87 on a $3k invoice — this actually happened with the first invoice)

### Design intent: the bot will grow. Architect for it.

Not a single-purpose script — an ops agent with tool/skill modularity so future sessions can bolt on:

- **Shopify** (reseller track): order lookups, "what sold this week"
- **FP&A for Sarko**: revenue, fees paid, payouts landed, tax collected — his own lightweight version of the Nalbana FP&A function
- Whatever Sarko starts asking it for

### Feature parity with the Nalbana/Gleamery bots (non-negotiable)

- **Group chat capable** — works in a group with Armen + Sarko, not just DMs
- **Image reading** — photo of a Carl's Place order/quote → extracted line items
- **Conversation memory** — multi-turn context; "make it $2,500 instead" works
- LLM-driven intent parsing (not rigid slash-command syntax), though `/invoice` etc. can exist as shortcuts

---

## Access and secrets

- **Stripe:** create a **restricted API key** (Invoices: write, Customers: write, Payment Intents: read — nothing more) at dashboard.stripe.com → Developers → API keys. Account: acct_1U4PLRRrKMyn92UG (login nalbana@gmail.com).
- **Telegram:** new bot via @BotFather. Sarko's Telegram = his phone number (626-297-2756); add him and Armen at launch.
- **LLM:** same provider/pattern as the Nalbana/Gleamery bots.
- **Secrets live as env vars on the bot host — never in files, never in git.** (WORKFLOW.md rule.)
- Hosting: same place the other bots run, per ARCHITECTURE.md.

---

## Constraints and session rules

- **Golden rule:** Claude edits files; Armen commits/pushes from Terminal. No git from the sandbox.
- Decide with Armen early: does the bot code live in the sim-sigma-site repo, Nalbana_FPA, or its own repo? (Recommend its own repo or Nalbana_FPA extension — it's ops infrastructure, not website.)
- **Update STATE.md and ROADMAP.md before ending.** Commit block must include them.
- Bias toward done: v1 = create invoice + return link + status query, working end-to-end with a real (small) test invoice. Expansion hooks are architecture, not features, in v1.

---

## Known context

- Stripe live and proven: first invoice PAID 8/14 ($3,000, Hochan Chung — card, ~$87 fee; ACH would've been $5)
- Surcharge feature: re-check availability once account review clears (~Aug 16-17) — if available, enable on template; bot should mention surcharge status when quoting card vs ACH
- Invoice template "Custom Build Invoice" exists (memo + CA disclosure footer) — bot-created invoices should apply it
- Entity: sole prop, SARKO NALBAND, DBA SIM SIGMA, EIN 41-4080163, CDTFA permit 0-055-876-928
- Sarko: sarkology@yahoo.com, 626-297-2756, non-technical, Apple ecosystem; Stripe dashboard invite pending acceptance
- Armen manages: nalbana@gmail.com
