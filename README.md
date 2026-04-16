# SFSC LibGuides — Bootstrap 5 Migration

Custom CSS, JavaScript, and HTML templates for the **South Florida State College** LibGuides platform. This repository tracks an ongoing migration from Bootstrap 3 to Bootstrap 5 with WCAG 2.1 Level AA accessibility compliance.

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
| `Visual Identity Guide 04.25.2025.pdf` | SFSC brand standards (colors, typography, logo usage) |
| `april2026releasenotes.md` | LibGuides April 2026 release notes |
| `SFSC LibGuides - Bootstrap 5 Template.pdf` | Accessibility evaluation (4/3/2026) |
| `boxandtabcoloroptions.png` | LibGuides color settings screenshot |
| `CLAUDE.md` | AI assistant guidance for this project |

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

> **Note:** The A-Z Databases page has its own separate Look & Feel settings — CSS and JS must be pasted there independently.

> **Warning:** LibGuides has a known bug where all three Look & Feel fields (HTML, CSS, JS) can be wiped simultaneously. If the page breaks unexpectedly, check all three fields and re-paste from this repository.

## Accessibility

All UI components are built to WCAG 2.1 Level AA standards:

- Color contrast ratios meet or exceed 4.5:1 for normal text, 3:1 for large text and UI components
- Interactive elements have ARIA labels
- Keyboard navigability throughout
- Proper heading hierarchy on all pages

Active navigation state uses `#70709d` (medium slate) with white text — 4.67:1 contrast ratio, passing AA. The orange accent (`#F37B20`) is reserved for decorative borders only, as white-on-orange fails AA contrast.
