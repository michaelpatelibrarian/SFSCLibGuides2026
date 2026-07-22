# SFSC LibGuides — Bootstrap 5 Migration

<p align="center">
  <img src="./assets/readme/hero.svg" width="100%" alt="SFSC LibGuides Bootstrap 5 migration: paste-ready CSS, JavaScript, and HTML snippets for South Florida State College's Springshare LibGuides site, WCAG 2.1 AA verified.">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Bootstrap-5.3.0-333366" alt="Bootstrap 5.3.0">
  <img src="https://img.shields.io/badge/WCAG-2.1%20AA-B45309" alt="WCAG 2.1 AA">
  <img src="https://img.shields.io/badge/license-GPL--3.0-333366" alt="License: GPL-3.0">
</p>

Custom CSS, JavaScript, and HTML templates for the **South Florida State College** LibGuides platform. This repository tracks an ongoing migration from Bootstrap 3 to Bootstrap 5 with WCAG 2.1 Level AA accessibility compliance.

> This repository also carries a companion Bootstrap 3 skin for **LibCal**, a separate Springshare product — see [LIBCAL.md](LIBCAL.md) for those files and screenshots.

## Background

SFSC Library uses [Springshare LibGuides](https://springshare.com/libguides/), a hosted CMS with no direct server access. All customizations are applied by pasting code into the LibGuides **Look & Feel** admin panel (Header HTML, CSS, and JavaScript fields). This repository serves as version control for those snippets.

## Files

### Core customization files (paste into LibGuides)

| File | Where to paste |
|------|---------------|
| `sfsccustom.css` | Look & Feel → CSS |
| `sfsccustom.js` | Look & Feel → JavaScript |
| `header.html` | Look & Feel → Header HTML |
| `footer.html` | Look & Feel → Footer HTML |
| `primosearchbox.html` | Content box (HTML) — Primo catalog search widget |
| `scholarsearchbox.html` | Content box (HTML) — Scholar search widget |

### Templates & layouts

| File | Purpose |
|------|---------|
| `template-bs5.html` | Full-page Bootstrap 5 template reference |
| `homepagelayout.html` | Homepage layout using LibGuides template language |
| `newhomepage-bs5.html` | Upcoming BS5 homepage |
| `oldhomepage-bs3.html` | Original BS3 homepage (reference/rollback) |

### Reference HTML (LibGuides-generated markup)

These files contain actual HTML output from LibGuides, used to write accurate CSS selectors without guessing class names.

| File | Purpose |
|------|---------|
| `homepagelist.html` | Guide list page — ALL GUIDES / BY SUBJECT tab bar |
| `childrenslitnavbar.html` | Side nav example |
| `sidenavexample.html` | Additional side nav reference |

### Reference documents

| File | Purpose |
|------|---------|
| `DESIGN.md` | Design system: brand colors + verified WCAG ratios, typography, components, logo rules |
| `PRODUCT.md` | Strategic context: users, purpose, design principles |
| `april2026releasenotes.md` | LibGuides April 2026 release notes |
| `SFSC LibGuides - Bootstrap 5 Template.pdf` | Accessibility evaluation (4/3/2026) |
| `boxandtabcoloroptions.png` | LibGuides color settings screenshot |
| `LIBCAL.md` | LibCal Bootstrap 3 port: files and live-site screenshots (separate Springshare product) |
| `AGENTS.md` | AI agent guidance for this project (`CLAUDE.md` just imports it) |

## Stack

- **CMS:** Springshare LibGuides (hosted — no direct server access)
- **CSS Framework:** Bootstrap 5.3.0
- **Fonts:** Poppins (via Google Fonts)
- **Accessibility Standard:** WCAG 2.1 Level AA
- **Brand colors:** SFSC Blue `#333366` · SFSC Orange `#F37B20`

## How to deploy

1. Open the file you want to paste in this repository.
2. Copy the full contents.
3. Log in to LibGuides Admin → **Look & Feel** → **Customize**.
4. Paste into the appropriate field (CSS, JavaScript, or Header HTML).
5. Save, then hard-refresh the public page with **Ctrl+Shift+R** to bypass browser cache.

> [!NOTE]
> The A-Z Databases page shares the main site's Look & Feel CSS/JS (no separate paste needed since the BS5 rollout) — it just has a few additional settings in the admin panel that only apply to those pages.

> [!WARNING]
> LibGuides has a known bug where all three Look & Feel fields (HTML, CSS, JS) can be wiped simultaneously. If the page breaks unexpectedly, check all three fields and re-paste from this repository.

<details>
<summary>LibGuides admin color settings (reference screenshot)</summary>

<img src="./boxandtabcoloroptions.png" width="600" alt="LibGuides Look & Feel admin panel showing box and tab color configuration fields referenced in DESIGN.md.">

</details>

## Accessibility

All UI components are built to WCAG 2.1 Level AA standards:

- Color contrast ratios meet or exceed 4.5:1 for normal text, 3:1 for large text and UI components
- Interactive elements have ARIA labels
- Keyboard navigability throughout
- Proper heading hierarchy on all pages

Active navigation state uses `#70709d` (medium slate) with white text — 4.67:1 contrast ratio, passing AA. The orange accent (`#F37B20`) is reserved for decorative borders only, as white-on-orange fails AA contrast.
