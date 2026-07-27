# Sarah Bell Lane Home Loans — Website Documentation

## Project Overview

This is the complete production-ready website for **Sarah Bell Lane Home Loans**, built with HTML5, CSS3, and vanilla JavaScript. The site is fully compatible with GitHub Pages and requires no build process or server-side rendering.

Sarah Bell Lane is a mortgage lending professional with 30 years of industry experience who originates loans through **Preferred Funding Inc.** The site establishes Sarah as a trusted personal point of contact while directing qualified visitors to the Preferred Funding application portal.

---

## File Structure

```
Sarah-Bell-Lane/
├── index.html                    # Homepage
├── about.html                    # About Sarah
├── loan-programs.html            # Loan program overview (8 programs)
├── first-time-homebuyers.html    # First-time buyer guidance
├── refinance.html                # Refinancing options
├── resources.html                # Resources + mortgage glossary
├── faq.html                      # 18-question FAQ with accordion
├── contact.html                  # Contact form + info
├── privacy-policy.html           # Privacy policy (legal review required)
├── disclosures.html              # Required disclosures (compliance review required)
├── 404.html                      # Custom 404 error page
├── site-config.json              # Site variable file (update before launch)
├── robots.txt                    # Search engine crawling rules
├── sitemap.xml                   # XML sitemap for all indexable pages
├── site.webmanifest              # Web app manifest
├── README.md                     # This file
└── assets/
    ├── css/
    │   └── styles.css            # Complete design system (single stylesheet)
    ├── js/
    │   └── main.js               # All shared JavaScript (single file)
    ├── images/
    │   ├── sarah-bell-lane-headshot.png   # Sarah's professional portrait
    │   ├── hero-home.jpg                  # Hero residential image
    │   ├── homebuyer-consultation.jpg     # Consultation scene
    │   ├── closing-day.jpg               # Closing day scene
    │   └── social-share.jpg              # Open Graph / social share image
    └── icons/
        ├── icon-192.png                  # PWA icon (192×192) — add before launch
        └── icon-512.png                  # PWA icon (512×512) — add before launch
```

---

## Local Preview Instructions

Since this is a plain HTML site, you can preview it locally several ways:

### Option 1 — VS Code Live Server Extension
1. Open the project folder in VS Code
2. Install the "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"

### Option 2 — Python HTTP Server
```bash
# Python 3
cd path/to/Sarah-Bell-Lane
python -m http.server 8000
# Then visit http://localhost:8000
```

### Option 3 — npx serve
```bash
cd path/to/Sarah-Bell-Lane
npx serve .
```

> **Note:** Open `index.html` directly via `file://` in a browser will work for basic viewing, but some features (like relative paths for fonts) work better through a local server.

---

## GitHub Pages Deployment Instructions

### Step 1: Create a GitHub Repository
1. Go to [github.com](https://github.com) and sign in
2. Create a new repository named `sarah-bell-lane` (or your preferred name)
3. Set it to **Public** (required for free GitHub Pages)

### Step 2: Push the Files
```bash
cd path/to/Sarah-Bell-Lane
git init
git add .
git commit -m "Initial website build"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Settings → Pages
3. Source: Deploy from branch
4. Branch: `main` | Folder: `/ (root)`
5. Click Save
6. Your site will be live at `https://YOUR_USERNAME.github.io/REPO_NAME/`

### Step 4: Custom Domain (Recommended)
1. Purchase your domain (e.g., `sarahbelllane.com`)
2. In GitHub Pages Settings → Custom domain, enter your domain
3. Create a `CNAME` file in the repository root containing just your domain:
   ```
   www.sarahbelllane.com
   ```
4. Configure DNS with your domain registrar:
   - Create an `A` record pointing to GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or create a `CNAME` record for `www` pointing to `YOUR_USERNAME.github.io`
5. Enable "Enforce HTTPS" in GitHub Pages settings

---

## Before Launch — Required Updates

### 1. Client Contact Information
Update in every HTML file's header, footer, and contact page, **or** update `site-config.json` and configure JavaScript to load it:
- `[PHONE NUMBER]` — Display format, e.g., `(555) 555-5555`
- `[PHONE NUMBER DIGITS]` — Digits only for `tel:` links, e.g., `15555555555`
- `[EMAIL ADDRESS]` — Sarah's professional email
- `[BUSINESS HOURS]` — e.g., `Monday–Friday, 9am–5pm CT`
- `[OFFICE ADDRESS OR REMOVE]` — Full office address or remove if not applicable
- `[CITY, REGION, AND STATES SERVED]` — e.g., `Texas, Oklahoma, and surrounding areas`

### 2. NMLS Information
Search for and replace all of the following:
- `[SARAH NMLS NUMBER]` — Sarah's individual NMLS number
- `[PREFERRED FUNDING NMLS NUMBER]` — Preferred Funding Inc. NMLS number
- `[STATE LICENSE INFORMATION]` — States where licensed

### 3. Application Link
All Apply Now buttons already point to:
```
https://www.preferredfundinginc.com/applications
```
Verify this URL is correct with Preferred Funding before launch.

### 4. Contact Form Endpoint
In `contact.html`, update the form action:
```html
<form id="contact-form" method="POST" action="YOUR_FORM_ENDPOINT">
```

**Recommended services (free tiers available):**
- [FormSubmit](https://formsubmit.co) — Replace with `https://formsubmit.co/your@email.com`
- [Basin](https://usebasin.com) — Copy endpoint from Basin dashboard
- [Formspree](https://formspree.io) — Copy endpoint from Formspree dashboard

Also update in `main.js`: The form currently shows a success message client-side (for development). For real submission, remove the `e.preventDefault()` line in `initContactForm()`.

### 5. Social Media Links
Replace in footer of every page:
- `[FACEBOOK URL]` — Full Facebook page URL
- `[INSTAGRAM URL]` — Full Instagram profile URL
- `[LINKEDIN URL]` — Full LinkedIn profile URL

### 6. Domain and Canonical URLs
Replace in all pages:
- `[FINAL DOMAIN]` — e.g., `sarahbelllane.com`
- `[CANONICAL BASE URL]` — e.g., `https://www.sarahbelllane.com`
- Update `robots.txt` Sitemap URL
- Update `sitemap.xml` all `<loc>` URLs

### 7. Analytics
In every HTML `<head>`, add your Google Analytics 4 tag:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```
Also add Google Search Console verification meta tag.

### 8. Replace Images
The current images are placeholder/generated images. Replace with professional photography:
- `assets/images/sarah-bell-lane-headshot.png` — Sarah's professional portrait
- `assets/images/hero-home.jpg` — Hero background residential image
- `assets/images/homebuyer-consultation.jpg` — Consultation scene image
- `assets/images/closing-day.jpg` — Closing day image
- `assets/images/social-share.jpg` — Open Graph share image (recommended 1200×630px)

### 9. PWA Icons
Add icon files to `assets/icons/`:
- `icon-192.png` — 192×192px PNG icon
- `icon-512.png` — 512×512px PNG icon

---

## Compliance Checklist

> ⚠️ **Complete all compliance items before publishing.** This is a financial services website subject to regulatory requirements.

### Required Before Launch
- [ ] Preferred Funding Inc. compliance department has reviewed and approved all content
- [ ] Licensed attorney has reviewed privacy policy and disclosures page
- [ ] All NMLS numbers are verified and correctly placed
- [ ] All state license numbers are correct and current
- [ ] Equal Housing Opportunity language has been approved by Preferred Funding compliance
- [ ] No guaranteed approval language anywhere on the site (audit carefully)
- [ ] No specific interest rates or APRs stated anywhere
- [ ] No fabricated testimonials or case studies
- [ ] All required state-specific disclosures are included
- [ ] Preferred Funding relationship is correctly described throughout
- [ ] External application link correctly identified as leaving this site
- [ ] Contact form does not collect sensitive financial information

### Items Requiring Preferred Funding Compliance Approval
- `[PREFERRED FUNDING APPROVED DISCLOSURE]` in disclosures.html
- `[PREFERRED FUNDING NMLS NUMBER]` — verify correct number
- NMLS disclosure block language in disclosures.html
- Equal Housing Lender statement language
- State-specific disclosures
- Any additional company-required footer language

---

## Search Engine Optimization Checklist

- [ ] Every page has a unique `<title>` tag
- [ ] Every page has a unique `<meta name="description">` (150–160 characters)
- [ ] Every page has one `<h1>` tag
- [ ] `<link rel="canonical">` updated with final domain on all pages
- [ ] Open Graph tags populated with final domain and correct image URL
- [ ] `sitemap.xml` updated with final domain
- [ ] `robots.txt` Sitemap URL updated
- [ ] Google Search Console ownership verified
- [ ] Google Analytics (GA4) connected
- [ ] JSON-LD structured data validated at [schema.org validator](https://validator.schema.org/)
- [ ] Google's Rich Results Test run on FAQ pages
- [ ] All images have descriptive `alt` attributes
- [ ] Internal links connect relevant pages
- [ ] Page speed tested at [PageSpeed Insights](https://pagespeed.web.dev/)

---

## Launch Checklist

### Pre-Launch
- [ ] All placeholder text replaced (search for `[` to find remaining placeholders)
- [ ] Contact information verified and correct
- [ ] NMLS numbers verified
- [ ] All Apply Now buttons tested (open correct URL in new tab)
- [ ] Contact form tested with a real submission
- [ ] Phone number `tel:` links tested on mobile
- [ ] All internal navigation links tested
- [ ] Mobile layout reviewed on multiple device sizes
- [ ] Keyboard navigation tested (Tab through entire site)
- [ ] Accessibility checked (focus states visible, alt text present)
- [ ] Compliance review completed
- [ ] Legal review of privacy policy and disclosures completed
- [ ] Domain configured and pointing to GitHub Pages
- [ ] HTTPS enforced
- [ ] Social share image tested (use [opengraph.xyz](https://opengraph.xyz))

### Post-Launch
- [ ] Submit sitemap to Google Search Console
- [ ] Test all pages in Google's Mobile-Friendly Test
- [ ] Run Lighthouse audit on homepage (target 90+ all categories)
- [ ] Verify Google Analytics is tracking
- [ ] Set up any conversion goals in Analytics
- [ ] Bookmark and periodically review Google Search Console for errors

---

## Technology Stack

- **HTML** — HTML5 semantic markup
- **CSS** — Single stylesheet (`assets/css/styles.css`) with CSS custom properties
- **JavaScript** — Single shared file (`assets/js/main.js`), no dependencies
- **Fonts** — Google Fonts (Playfair Display + Inter) with system-safe fallbacks
- **Hosting** — GitHub Pages (static file hosting)
- **Forms** — Third-party form service (FormSubmit/Basin/Formspree)

---

## Quick Reference — Key Placeholder Strings

Search for these strings in the codebase to find all locations requiring updates:

| Placeholder | Description |
|---|---|
| `[PHONE NUMBER]` | Display phone number |
| `[PHONE NUMBER DIGITS]` | Digits-only phone for tel: links |
| `[EMAIL ADDRESS]` | Professional email address |
| `[BUSINESS HOURS]` | Business hours text |
| `[OFFICE ADDRESS OR REMOVE]` | Office address |
| `[CITY, REGION, AND STATES SERVED]` | Service area description |
| `[SARAH NMLS NUMBER]` | Individual NMLS number |
| `[PREFERRED FUNDING NMLS NUMBER]` | Company NMLS number |
| `[STATE LICENSE INFORMATION]` | State license details |
| `[FACEBOOK URL]` | Facebook page URL |
| `[INSTAGRAM URL]` | Instagram profile URL |
| `[LINKEDIN URL]` | LinkedIn profile URL |
| `[FORM ENDPOINT]` | Form submission service URL |
| `[FINAL DOMAIN]` | Final domain name |
| `[CANONICAL BASE URL]` | Full canonical URL with https:// |
| `[GA4 ID]` | Google Analytics 4 ID |
| `[RESPONSE TIMEFRAME]` | Typical response time |

---

*Built for Sarah Bell Lane Home Loans. All loan programs subject to borrower qualification, underwriting approval, and program eligibility. This website does not constitute a commitment to lend.*
