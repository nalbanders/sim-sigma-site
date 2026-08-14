# CONTEXT.md — Sim Sigma Golf
*Orientation file for any Claude session touching simsigmagolf.com or Shopify.*
*New session? Read this first — under 2 minutes.*

---

## The business
Sim Sigma Golf — Sarko Nalband's golf simulator company based in Los Angeles. Three services:
1. **Equipment Sales** — authorized Carl's Place reseller (dropship model; Sarko orders from Carl's Place after customer buys)
2. **Studio Design & Build** — custom simulator installations in homes/commercial spaces
3. **Event Rentals** — mobile simulator for corporate events, parties, brand activations

Owner: Sarko Nalband (sarkology@yahoo.com, 626-297-2756)
Project managed by: Armen Nalband (nalbana@gmail.com)
Business entity: Sim Sigma LLC (EIN: 41-4080163)
Business address: 4125 S Figueroa St, 317, Los Angeles CA 90037

---

## Architecture

```
simsigmagolf.com  (GitHub Pages — static HTML)
    ← github.com/nalbanders/sim-sigma-site  [main branch]
    ← /Users/nalband/Dropbox/Portfolio Management/sim-sigma-site/

Shopify Buy Button (embedded in index.html)
    ← byg9fh-wt.myshopify.com  (Starter plan, $5/mo)
    ← store handle: sim-sigma-golf
    ← Storefront token: 48e4798db21b47a6da919169fc2cd76c  (Buy Button only)
    ← Admin URL: admin.shopify.com/store/sim-sigma-golf
    ← Shopify Payments: active (accepting payments); payout account pending bank verification
```

**How it works:** Customer browses simsigmagolf.com → adds to cart (Shopify Buy Button, iframe) → checks out on Shopify-hosted page → Sarko receives order notification → Sarko places order with Carl's Place (dropship to customer).

**Deploy = git push.** No build step. Pushing `main` → GitHub Pages auto-deploys within ~60 seconds.

**Golden rule: Claude edits files; Armen commits and pushes from Terminal.**
Never run git commands from Claude's sandbox (leaves lock files, has destroyed state). See WORKFLOW.md.

---

## Key files

| File | Purpose |
|---|---|
| `index.html` | The entire website — one file |
| `CONTEXT.md` | This file — project orientation |
| `STATE.md` | Current session state, what's done, what's next |
| `WORKFLOW.md` | Session rules and git discipline |
| `carls-place-logo.png` | Carl's Place logo (approved asset, in git) |
| `carls-place-products.csv` | Shopify product import reference (not for git push to CDN) |
| `Carls Product Assets/` | Local only — DO NOT push to GitHub (approved reseller image assets) |
| `Carls Product Assets/Ready to Upload/` | Resized images (≤25MP) ready for Shopify upload |

---

## Shopify products (4 active)

| Product | Shopify ID | Price | Notes |
|---|---|---|---|
| Carl's Place DIY Golf Simulator Enclosure Kit | 10462240571576 | $999.95 | Confirmed retail |
| Carl's Place Pro Golf Simulator Enclosure Kit | 10462240604344 | $3,409.95 | Confirmed retail |
| Carl's Place Curved Golf Simulator Enclosure Kit | 10462240637112 | $4,894.95 | Confirmed retail |
| Carl's Place HotShot™ Golf Mat System | 10462240669880 | $499.95+ | 4 size variants; 5x8/4x9/6x10 prices UNVERIFIED |

Collection ID: 657645797560 ("Carl's Place Golf Simulator Products")

---

## Carl's Place reseller relationship

- **Status:** Active authorized reseller (June 12, 2026)
- **Contact:** Olivia @ wholesale@carlofet.com
- **30-day deadline:** July 12, 2026 (website updated with marketing guidelines) ✅ DONE
- **MAP policy:** Must list at or above Carl's Place retail price. Never advertise below retail.
- **Dropship flow:** Sarko orders from carlofet.com after receiving Shopify order → Carl's Place ships to customer
- **Assets:** Approved marketing images in `Carls Product Assets/` (local only)
- **Docs:** Wholesale 101 + Product & Support Guide (Google Slides, linked in original Olivia email)

---

## Shopify open items (as of 2026-07-07)

- [ ] HotShot mat variant pricing: verify 5×8 ($579.95), 4×9 ($599.95), 6×10 ($699.95) against Carl's Place account
- [ ] Curved Enclosure shipping: set ~$700 flat freight rate in Shopify Admin → Settings → Shipping and delivery
- [ ] Payout account: connect bank account after Shopify Payments verification clears (account accepting payments; payouts pending)
- [ ] Switch Shopify account email from nalbana@gmail.com to simsigma@protonmail.com

---

## CSS palette (index.html)

```css
--linen: #f3ede1  --stone: #e6dfd0  --cream: #f8f3e8
--green: #2d5a3d  --green-lt: #4a7c5a  --green-dk: #1a3a27
--sand: #c4a06a   --neon: #39D800    --charcoal: #1c1916
```
Fonts: Bebas Neue (hero), Cormorant Garamond + Montserrat (body)
