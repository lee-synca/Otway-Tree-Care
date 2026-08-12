# Otway Tree Care — static site

A fully self-contained static copy of **otwaytreecare.com**, exported off the
GoHighLevel (LeadConnector) website builder. All pages, images, fonts, and CSS
are local — there is **no JavaScript and no external backend dependency**, so it
can be hosted anywhere that serves plain files (GitHub Pages, Netlify, Cloudflare
Pages, any web server).

## Structure

```
index.html                     Home page (also home.html)
about-us.html
contact.html
blog.html                      Blog listing
tree-removal.html              ┐
tree-pruning.html              │
stump-grinding.html            │
emergency-tree-removal.html    │ Service pages
forestry-mulching.html         │
hedging.html                   │
property-maintenance.html      │
waste-removal.html             │
arborist-reports-consulting.html ┘
post/                          Blog post(s)
blogs/                         Blog category / tag / author listing pages
assets/                        All images, fonts, and CSS (flat folder)
.nojekyll                      Tells GitHub Pages to serve files as-is
```

Internal links use relative `.html` paths, so the whole folder works when opened
from any subpath.

## Preview locally

Opening `index.html` directly with `file://` works, but a local server is more
reliable (matches how a host serves it):

```bash
# from inside this folder
python -m http.server 8080
# then open http://localhost:8080
```

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `otway-tree-care`).
2. From inside this folder:

   ```bash
   git init
   git add .
   git commit -m "Initial static site export"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```

3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a
   branch**, pick `main` / `/ (root)`, save. The site publishes at
   `https://<you>.github.io/<repo>/` within a minute or two.
4. **Custom domain (otwaytreecare.com):** add a file named `CNAME` containing
   `otwaytreecare.com`, then point the domain's DNS at GitHub Pages
   (A records to GitHub's IPs, or a CNAME on `www`). See GitHub's "Managing a
   custom domain" docs. Note the domain is currently on Cloudflare in front of
   GoHighLevel — you'll switch that DNS when you're ready to cut over.

## Known limitations (things that need wiring up after migration)

- **Contact form** — rebuilt as a clean HTML form wired to **Formspree**
  (`contact.html`). It POSTs first name, last name, email, phone, service, suburb,
  and message. **One step to activate:** create a form at
  [formspree.io](https://formspree.io) (free tier is fine), copy your form's
  endpoint (looks like `https://formspree.io/f/abcdwxyz`), and replace the
  placeholder `YOUR_FORMSPREE_ID` in `contact.html`'s `<form action="...">`.
  Submit once yourself to confirm the address on first use. Formspree emails each
  submission to you; no server needed. (File uploads / "site photos" aren't
  included — Formspree's free tier doesn't support attachments.)
- **Blog** — captured as a snapshot (1 published post + auto-generated tag/
  category pages). New posts would be added as static HTML, or by moving the blog
  to a static generator later.
- **Dynamic bits** — live chat widget, analytics, and any GHL tracking were part
  of the removed JavaScript and are not included.
- The contact phone numbers, email (otwaytc@gmail.com), address (3 Arthur Court,
  Apollo Bay), Facebook link, and Google Maps link are all preserved and live.

---
Exported 2026-08-08.
