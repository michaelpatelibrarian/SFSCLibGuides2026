# DESIGN.md — SFSC Library (LibGuides)

Design system for South Florida State College's LibGuides site (Bootstrap 5.3, WCAG 2.1 AA).
This document supersedes the *Guide to Visual Identity and Graphic Standards* PDF (rev. 4/25/2025)
for this project: all brand facts from that guide that matter to the web work are captured here.
Brand authority remains the SFSC Office of Community Relations and Marketing (ext. 7379,
kuehnlem@southflorida.edu) — contact them for logo files, alternative logo treatments, or
color swatches.

Engineering constraints (CSS scoping against LibGuides internals, paste-field quirks, generated
markup) live in `AGENTS.md`, not here.

---

## 1. Visual Theme & Atmosphere

Institutional, warm, and confident. A college library that feels established but not stuffy:
flat surfaces, generous whitespace, and a disciplined two-color identity — deep indigo blue
chrome with orange reserved for accents that guide the eye (accent bars, active borders,
hover cues). Density is moderate: content pages breathe, navigation is compact.

The print identity guide says "use orange and white prominently while limiting blue to an
accent color." **The web adaptation deliberately inverts this**: full-strength SFSC orange
fails WCAG AA as a text color everywhere (2.74:1 on white), so on the web, blue and white
carry the surfaces and text while orange works as a *decorative* signature — never as text.

---

## 2. Color Palette & Roles

### Core brand tokens (defined in `sfsccustom.css` `:root`)

| Token | Hex | Source | Role |
|---|---|---|---|
| `--sfsc-orange` | `#F37B20` | PMS 166 (CMYK 0-64-100-0) | **Decorative only**: accent bars, active borders, background tints. Never text. |
| `--sfsc-blue` | `#333366` | PMS 295 (CMYK 93-90-31-20) | Primary chrome: nav bar, footer, buttons, form borders, link color in guide bodies. |
| `--sfsc-orange-dark` | `#B45309` | derived (not print brand) | Orange as text/hover on white or light backgrounds (5.02:1); button hover fill under white text (5.02:1). |
| `--sfsc-orange-light` | `#F9A55F` | derived (not print brand) | Orange as text/hover on `--sfsc-blue` backgrounds (5.86:1), e.g. footer links. |
| `--sfsc-blue-light` | `#70709D` | derived (not print brand) | Active/selected chrome surface under white text (4.67:1): nav link, guide-list tab, search row. |
| `--sfsc-border` | `#DEE2E6` | Bootstrap gray-200 | Hairline borders — decorative only (1.6:1), must never carry meaning. Matches the CMS box border. |
| `--sfsc-surface` | `#F8F9FA` | Bootstrap gray-100 | Light fill for box/card/panel title bars. |

### Working colors (used, not tokenized)

| Hex | Role |
|---|---|
| `#007698` | Body/prose link color (PMS 634 "Cerulean" from the complementary palette; 5.19:1 on white) |
| `#222250` | Search pill button hover (darkened blue) |
| `#000000` | Body text |
| `#222222` | Dropdown item text |
| `#444444` | Institutional footer strip text |
| `#555555` | Muted small text on white (e.g. LibCal date labels — minimum gray for AA at small sizes) |
| `#f8f8f8` | Mobile dropdown fill |

(The former working colors `#70709D`, `#dee2e6`/`#e0e0e0`, and `#f8f9fa` were promoted to the
tokens above in sfsccustom.css v1.8; the two hairline grays were consolidated into `--sfsc-border`.)

### Complementary brand palette (from the identity guide)

May be used for variety and visual interest; they are not SFSC identifiers. Contrast ratios
below are computed against white — **only rows marked PASS may be used for normal-size text
on white.**

| Pantone | Hex | On white | Text on white? |
|---|---|---|---|
| 279C | `#508FCC` | 3.42:1 | fail (large text/UI only) |
| 326C | `#00B0AF` | 2.68:1 | fail |
| 7408C | `#FFC121` | 1.63:1 | fail |
| 634C ("Cerulean") | `#007698` | 5.19:1 | **PASS** |
| 327C | `#00928F` | 3.81:1 | fail (large text/UI only) |
| 376C | `#8BC53F` | 2.07:1 | fail |
| 575C | `#4C901D` | 3.95:1 | fail (large text/UI only) |
| 1205C | `#FFEDBA` | 1.16:1 | fail (background tint only) |
| 519C | `#6D276A` | 9.77:1 | **PASS** |
| 269C | `#46166B` | 13.23:1 | **PASS** |
| 1797C | `#E21B23` | 4.76:1 | **PASS** (also `#header-red` seasonal banner) |
| (listed as 575C in the PDF, likely a misprint) | `#B22217` | 6.70:1 | **PASS** |

### Color rules

- Orange (`#F37B20`) is never a text color and never sits under white text. Use the derived
  tokens instead (`--sfsc-orange-dark` on light, `--sfsc-orange-light` on blue).
- Hover states change color *and* a second cue (underline weight, background) — never color alone.
- "Large text/UI only" colors (3:1–4.4:1) are acceptable for icons, borders that carry meaning,
  and text ≥ 24px / 19px bold — not body text.

---

## 3. Typography Rules

- **Primary face:** Poppins — project decision for the web presence.
  Stack: `Poppins, Arial, sans-serif`. Loaded weights: 400 / 500 / 600 / 700 + italic
  400 / 700 (see `headincludes.html`) — don't style with weights outside that set.
- **Print-guide faces (context only):** the logo is set in Minion Pro Semibold ("South Florida")
  and Gibson Regular ("State College"); approved office fallbacks are Arial, Calibri, Constantia,
  Georgia. Do not recreate the logo in type.
- **Readability utility (`.readability`):** Lexend, 20px/26px, weight 600 — easy-reading
  content blocks in guides. Lexend is purpose-built for reading proficiency (a deliberate
  accessibility feature) and is genuinely loaded (weights 400/600) via the fonts `<link>`
  in the Look & Feel CSS block — see `headincludes.html`. Falls back to Poppins.

| Element | Size | Weight | Notes |
|---|---|---|---|
| Body | 1rem (16px) | 400 | color `#000` on white |
| h3 | 24px | 600 | h3–h6 are all weight 600 |
| Nav links | 16px | 600 | white on blue; high-specificity override required (see AGENTS.md) |
| Guide side nav | 16px | 400 | both levels (`.nav-link` and `.d-block`) |
| Box titles | 1.125rem | 600 | `--sfsc-blue` on `#f8f9fa` |
| Guide-list tab buttons | 15px | 600 | UPPERCASE, letter-spacing 0.04em |
| Footer section headings | 0.8rem | 700 | UPPERCASE, letter-spacing 0.06em, 2px orange bottom border |
| Small/meta text | 0.875em | 400 | addresses, footer links, hours |

---

## 4. Component Stylings

### Header (top to bottom)

1. **Skip link** — visually hidden until focused; blue background, white text.
2. **Orange accent bar** — 6px solid `--sfsc-orange`, `aria-hidden`.
3. **Branding bar** — white, 1px `--sfsc-border` bottom border, 0.75rem padding. Full-color SFSC
   logo at 40px height (left); "Library Home" link (right) in blue 600 at 0.875rem, hover
   `--sfsc-orange-dark`.
4. **Nav bar** — `--sfsc-blue` background, 1px white/15% top border, **4px solid orange bottom
   border** (the signature line of the whole site). Links white 600 16px, 0.5rem × 0.875rem
   padding, 0.25rem radius. Hover: white text on `rgba(255,255,255,0.15)`. Active: white text
   on `#70709D` + `aria-current="page"`.

### Dropdown menus

White panel, 1px `--sfsc-border` border with a **3px orange top border**, radius `0 0 0.25rem 0.25rem`,
shadow `0 0.5rem 1rem rgba(0,0,0,0.1)`, min-width 210px. Items `#222222`, 0.5rem × 1rem padding;
hover/focus: blue text on 10% orange tint. Opens with a 0.2s fade/translate. On mobile the menu
renders inline: static position, `#f8f8f8` fill with indent, no shadow (the former orange left
border was removed in v1.8 — side-stripe accents are banned).

### Buttons

| Variant | Rest | Hover/Focus |
|---|---|---|
| `.btn-primary` / `.btn-info` | white on `--sfsc-blue` | white on `--sfsc-orange-dark` |
| `.btn-outline-primary` / `-info` | blue text, blue border, transparent | white on blue |
| Search pill button | white on blue, bold, pill-ended | white on `#222250` |
| Guide-list tab buttons | white on transparent, UPPERCASE | white on white/15%; active: white on `#70709D` |

### Links

| Context | Rest | Hover | Focus |
|---|---|---|---|
| Prose in content boxes (`p a`) | `#007698`, 1px underline, 0.2em offset | `--sfsc-orange-dark`, 2px underline | 2px `currentColor` outline, 2px offset |
| Guide body (general) | `--sfsc-blue` | `--sfsc-orange-dark` | same as hover |
| Homepage sidebar | `--sfsc-blue` | `--sfsc-orange-dark` | same as hover |
| Footer (on blue) | white, no underline | `--sfsc-orange-light` + underline | — |
| Institutional strip (on white) | `--sfsc-blue` | `--sfsc-orange-dark` | — |

LibGuides link-list boxes (`ul li a` markup) are *not* underlined — only prose links in `<p>` are.

### Search pills (Primo / Google Scholar / FOAL)

Fully rounded pill: input with blue border (left-rounded), bold blue button (right-rounded).
Focus ring on the *container* via `:focus-within`: `0 0 0 0.25rem rgba(51,51,102,0.25)`.
FOAL variant adds a leading select (max-width 11rem) sharing the pill's left cap.

### Content boxes / cards

1px `#dee2e6` border, 0.25rem radius, shadow `0 2px 4px rgba(0,0,0,0.05)`. Title bar `#f8f9fa`
with blue 600 text and 1px bottom border. (The BS3-era `#e8eaf6 → #c5cae9` gradient title
bars were removed in sfsccustom.css v1.8 — every box family now uses this flat treatment.
Do not reintroduce gradients.)

### Footer

Two bands:
1. **Content band** — `--sfsc-blue` with a **4px orange top border** (mirrors the nav bar's
   bottom border). White text/links; section headings per typography table; social icons white
   → `--sfsc-orange-light`. Four columns: contact/hours, resources, services, LibCal hours widget.
2. **Institutional strip** — white, 1px top border, `#444444` text: full-color logo at 28px,
   Privacy / Accessibility / About links, copyright.

### Seasonal header variants

`#header-white`, `#header-blue` (`#333366`), `#header-red` (`#E21B23`) with centered 300px
event logos (library calendar, banned books week).

---

## 5. Layout Principles

- Bootstrap 5.3 grid; standard `.container` page width; 24px gutters.
- Guide content column inner width ≈ **896px**; banner images sized 896 × 316px, styled
  `width: 100%; height: auto; display: block;` inside a `margin: 0` paragraph.
- Spacing follows Bootstrap's rem scale (`py-3/4`, `g-4`, `mb-2/3`); no bespoke spacing system.
- Two-column content helpers (`.database-box`, `.references-box`): flex, `wrap`, 20px gap,
  columns `flex: 1 1 280px`.
- No inline styles in new markup (limited legacy exceptions exist for image sizing).

## 6. Depth & Elevation

Three restrained levels — this is a flat design; shadows only separate chrome from content:

| Level | Shadow | Used by |
|---|---|---|
| Content | `0 2px 4px rgba(0,0,0,0.05)` | content boxes/cards |
| Chrome | `0 2px 6px rgba(0,0,0,0.12)` | header |
| Overlay | `0 0.5rem 1rem rgba(0,0,0,0.1)` | dropdown menus |

Focus rings, not shadows, indicate interactivity: `0 0 0 0.25rem rgba(51,51,102,0.25)` for
form containers, `0 0 0 0.2rem rgba(243,123,32,0.35)` for the hamburger toggler.

## 7. Responsive Behavior

- Nav collapses below **992px** (`navbar-expand-lg`) behind a hamburger (white SVG icon on the
  inner `.navbar-toggler-icon` span). Dropdowns become inline lists (see §4).
- Below **768px**: "Library Home" link hidden; footer columns stack with 1.5rem gaps;
  institutional strip left-aligns.
- Below **576px**: decorative homepage sidebar box hidden.
- Touch targets: nav links gain larger padding (0.75rem × 1rem) in the collapsed menu.

## 8. Accessibility Requirements (WCAG 2.1 Level AA)

- **Text contrast ≥ 4.5:1**, non-text/UI ≥ 3:1. Every color pairing in this document is
  pre-verified; new pairings must be checked before use.
- **All states count**: hover and focus text must also meet 4.5:1 (this is why the derived
  orange tokens exist).
- **Dual cues**: hover/focus changes pair color with underline weight, background, or outline.
- **Focus visible everywhere**: `:focus-visible` outline `2px solid currentColor, offset 2px`
  on prose links; ring styles on form/nav controls as in §6.
- **Keyboard**: dropdowns open with Enter *and* Space (toggles are `role="button"`), close with
  Escape; skip link resolves per page type (see AGENTS.md); `aria-current="page"` marks the
  active nav item; `aria-expanded` is maintained on toggles.
- **Form controls**: borders use `--sfsc-blue` — Bootstrap's default `#dee2e6` border fails
  the 3:1 non-text minimum.
- Proper heading hierarchy (`h2` sections in footer; single `h1` per page from LibGuides).
- Icon-only links carry `aria-label`; decorative elements carry `aria-hidden="true"`.

## 9. Logo Usage (from the identity guide)

- One college, one logo. Departments do not create their own; lockups come from the Office of
  Community Relations and Marketing.
- **Horizontal version preferred** (used in our header/footer). Vertical exists.
- Approved general-use colorways: orange-and-blue (full color), solid orange, solid blue,
  solid black, reverse (white). Gold or silver for formal occasions only.
- **White backgrounds only** — this is why the header branding bar and footer institutional
  strip are white. Never place the logo over photos, gradients, or `--sfsc-blue`.
- Never distort, rotate, recolor, add effects (shadows, outlines, glow), use as a background
  image, or set text over it.
- Use high-resolution assets from the Office, not screenshots. Web asset in use:
  `https://d2jv02qf7xgjwx.cloudfront.net/customers/3978/images/sfsc-full-color.png`
- The College Seal is reserved for official/ceremonial use — never in web UI.

## 10. Do's and Don'ts

**Do**
- Use `--sfsc-blue` for chrome and `--sfsc-orange` for decorative accents (bars, borders, tints).
- Use `--sfsc-orange-dark` / `--sfsc-orange-light` whenever orange must be read as text.
- Keep the 4px orange border motif on horizontal chrome edges (nav bottom, footer top,
  guide-list tab bar).
- Underline prose links; leave nav and link-list links underline-free.
- Verify contrast for any new color pairing (script the WCAG formula; don't eyeball).

**Don't**
- Don't use `#F37B20` as a text color or under white text — anywhere, at any size we use.
- Don't reuse the legacy `--sfsc-orange-strong: #c95c07` (4.19:1 — fails).
- Don't use blue as a page background ("don't use blue as the dominant color" — identity guide);
  white pages, blue chrome.
- Don't rely on color alone for any state change.
- Don't introduce new shadows, gradients, or border radii outside §6 and §4.
- Don't write generic Bootstrap-class selectors (`.nav-link`, `.dropdown-item`…) — scope them
  (see AGENTS.md, "CSS Scoping — Critical").

## 11. Agent Prompt Guide

Quick reference for generating UI in this system:

```
Brand: SFSC Library. Bootstrap 5.3, Poppins, WCAG 2.1 AA.
Chrome/primary: #333366 (blue) with white text.
Accent (decorative only): #F37B20 (orange) — 4px border motif; never text.
Orange as text: #B45309 on light, #F9A55F on #333366.
Prose links: #007698 underlined; hover #B45309 + 2px underline.
Active nav: white on #70709D. Buttons: blue → hover #B45309, white text.
Surfaces: white, flat, subtle shadows only (see DESIGN.md §6).
```

Example prompts:
- "Add a card matching DESIGN.md §4 content boxes with a title bar and two prose links."
- "Create a paste-ready LibGuides content box with a pill search form per DESIGN.md §4."
- "Style this widget's tabs like the guide-list tab bar (§4 buttons row)."

## 12. LibGuides CMS Look & Feel Settings (reference)

The values configured in the LibGuides admin (Look & Feel → Design Settings). This is the
site baseline that renders even where `sfsccustom.css` doesn't reach. Verified live via
`https://libguides.southflorida.edu/lookfeel.css` on 2026-07-07. If the panel ever needs to
be reconstructed, re-enter these values.

**Design Settings:** Lock all guides with this design (override individual guide settings).
**Layout:** container max-width 1440px.
**Favicon:** `<link rel="icon" href="https://libapps.s3.amazonaws.com/customers/3978/images/favicon.ico" sizes="any">`

**Text** — all Poppins, all font color `#181c32`:

| Element | Size | Style |
|---|---|---|
| Paragraph | 16px | Normal |
| H1 | 32px | Bold |
| H2 | 26px | Semi Bold |
| H3 | 24px | Medium |
| H4 | 20px | Semi Bold |
| H5 | 18px | Semi Bold |
| H6 | 16px | Medium |

**Links** — Underlined: Yes. Default `#007698` · Hover `#B45309` · Visited `#46166B`.

**Buttons** — all Rounded:

| Variant | Size/Style | Rest | Hover |
|---|---|---|---|
| Primary | 16px Medium | `#ffffff` on `#333366` | `#ffffff` on `#B45309` |
| Secondary | 16px Normal | `#ffffff` on `#3c3c77` | `#ffffff` on `#4d4d99` |
| Light | 16px Normal | `#000000` on `#f8f9fa` | `#0c4376` on `#f9f9f9` |

**Tabs (guides)** — Shape Rounded. Default `#000000` on `#eaeaef` · Active `#000000` on `#f37b20`
(dark text *on* orange passes AA at 7.66:1 — this is the approved use of full orange as a background).

**Boxes (guides)** — Shape Squared, border 1px `#dee2e6`, background `#ffffff`,
header background `#f8f9fa`, header font `#333366`.

> Hand-entry warning: hex typos here have shipped twice (`#B45309` → `#045309`, `#B54309`).
> Copy-paste values; don't retype them.
