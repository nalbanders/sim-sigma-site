# WORKFLOW.md — Sim Sigma Session Rules

---

- **Starting a session** → read CONTEXT.md then STATE.md. Nothing else until oriented.
- **Golden rule: Claude edits files; Armen commits.** Never run git from Claude's sandbox — it leaves lock files. Armen runs `git add <files> && git commit -m "…" && git push` from Terminal.
- **Deploy = push.** Pushing `main` → GitHub Pages auto-deploys simsigmagolf.com within ~60 seconds. No build step.
- **End of session** → update STATE.md before handing back commit commands. The commit block must include STATE.md.
- **After Armen pushes** → update STATE.md "Last updated" line to reflect deployed status.
- **No secrets in files.** Token names and reference IDs (Storefront token, EIN) are OK in CONTEXT.md. Never commit passwords or private API keys.
- **One session, one focus.** Note any second-module work in STATE.md and stop.
- **`Carls Product Assets/` is local only** — never push to GitHub. It's in `.gitignore`.
- **Shopify admin changes** (products, shipping, settings) are not in git — document what was changed in STATE.md.
- **Before any HTML edit** → self-review: every `getElementById` exists, new CSS classes are defined, no value interpolated into inline handlers.
