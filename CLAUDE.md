# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

South Florida State College LibGuides — migrating from Bootstrap 3 to Bootstrap 5 with WCAG 2.1 Level AA compliance.

## AI Role in the process

You are a senior UI designer and frontend developer.
Build premium interfaces.
Use proper spacing, and visual hierarchy.
No inline styles. 

## Key Constraint

Code is never edited on the server directly. All changes are submitted through the LibGuides backend CMS. Write complete, self-contained code snippets ready to paste in.

## Stack

- **CMS:** Springshare LibGuides (hosted platform — no direct server access)
- **CSS Framework:** Bootstrap 5.3.0
- **Accessibility Standard:** WCAG 2.1 Level AA

## Files

| File | Purpose |
|------|---------|
| `sfsccustom.css` | Bootstrap 5 custom style overrides |
| `sfsccustom.js` | JavaScript for new BS5 header nav and active page detection |
| `header.html` | New BS5 header |
| `footer.html` | New BS5 footer |
| `homepagelayout.html` | homepage template for Libguides using their custom language |
| `template-bs5.html` | Full-page BS5 template reference |
| `newhomepage-bs5.html` | Upcoming BS5 homepage |
| `oldhomepage-bs3.html` | Current BS3 homepage (reference) |
| `boxandtabcoloroptions.png` | Current LibGuides color settings |
| `Visual Identity Guide 04.25.2025.pdf` | SFSC visual/brand standards |
| `april2026releasenotes.md` | LibGuides April 2026 release notes |
| `Bootstrap 5 Template.pdf` | Accessibility evaluation (4/3/2026) |
| `primosearchbox.html` | Primo catalog search widget (paste into LibGuides content box) |
| `scholarsearchbox.html` | Google Scholar search widget — same pill style as Primo box (paste into LibGuides content box) |
| `floridaopenacademic.html` | Florida Open Academic Library (FOAL/FALSC) search widget — pill style with leading search-type select; FALSC logo above form (paste into LibGuides content box) |
| `childrenslitnavbar.html` | Sample of LibGuides-generated side nav HTML (reference for CSS targeting) |
| `homepagelist.html` | Actual LibGuides-generated HTML for the guide list page (ALL GUIDES / BY SUBJECT tab bar) |
| `libraryhours.html` | LibCal hours widget embed — paste into a LibGuides HTML content box |
| `sidebardatehead.html` | Focused LibCal sidebar widget snippet used for date-label contrast fixes |
| `hourswidget.html` | Full rendered HTML output of the LibCal widget (reference for CSS targeting) |

## Guidelines

- Use Bootstrap 5.3.0 classes and components — do not use BS3 patterns.
- All UI must meet WCAG 2.1 Level AA: proper heading hierarchy, sufficient color contrast, ARIA labels on interactive elements, keyboard navigability.
- When migrating BS3 → BS5: replace deprecated classes (e.g., `hidden-xs` → `d-none d-sm-block`), update grid system, replace `.panel` with `.card`, update form classes.
- Follow SFSC visual identity standards (see `Visual Identity Guide 04.25.2025.pdf`) for colors, typography, and logo usage. Except we are going to use the Poppins font for now,}
- Output clean, paste-ready HTML/CSS/JS snippets — no build tools, no npm dependencies.

## CSS Scoping — Critical

LibGuides uses Bootstrap class names internally (e.g. `.dropdown-item`, `.navbar-nav .nav-link`, `.nav-link`) for its own UI components like the guide side nav. **Any CSS rule targeting a generic Bootstrap class will bleed into LibGuides' internal components and break their layout.**

Always scope Bootstrap class selectors to our own elements:
- Use `.sfsc-nav .dropdown-item` not `.dropdown-item`
- Use `.sfsc-nav .navbar-nav .nav-link` not `.navbar-nav .nav-link`
- Use `#s-lg-guide-tabs .nav-link` to target the guide side nav specifically

When a CSS fix has no visible effect, suspect that LibGuides' system stylesheet (which loads after ours) is overriding it — try adding `!important` and/or a more specific selector.

**`background-color` overrides are not enough when LibGuides uses `background-image`.** LibGuides sets `background-image: linear-gradient(#e8eaf6, #c5cae9)` on `#s-lg-hp-nav-bottom` (and likely other nav-bottom elements). A gradient renders above `background-color`, making the color invisible. Always pair background overrides with `background-image: none !important` when targeting these elements.

## LibGuides Look & Feel — Paste Fields

- CSS field accepts raw CSS — no `<style>` tags needed. If pasting into an HTML field, `@import` must be the first line inside `<style>`.
- All three fields (Header HTML, CSS, JS) can get wiped together by a LibGuides CMS bug. If the page breaks, check all three.
- After pasting, always hard refresh (Ctrl+Shift+R) to bypass browser cache.
- The A-Z Databases page has its own separate Look & Feel settings — CSS/JS must be pasted there independently.

## Nav Bar

- Nav link font size must be set with high specificity: `.sfsc-nav .sfsc-nav-link { font-size: 16px !important; }` — LibGuides system CSS sets it to 12px and wins against single-class or `rem`-based rules.
- Active nav link uses orange background — use dark text (`#1a1a1a`) not white; white on orange is only 2.72:1 contrast (WCAG fail).
- Active page detection is handled by JS in `sfsccustom.js` — do not hardcode `active` class in `header.html`.
- Always scope header nav rules to `.sfsc-nav .sfsc-nav-link` (two-class specificity) to beat LibGuides' own `.nav-link` overrides.
- The nav has **two dropdowns**: Resources (Research Guides, A-Z Databases, Citation Style Guides, Library Catalog, Laptop Borrowing, Ask a Librarian) and Services (Study Rooms, Tutoring, Writing Center, Open Educational Resources, Panther Pathways).

## Skip Link

- The skip link in `header.html` ships with `href="#s-lg-guide-main"`, but Springshare generates a different main-content ID per page type: `#s-lg-guide-main` on guide pages, `#s-lib-public-main` on the homepage/guide list. We cannot edit that generated markup.
- `fixSkipLink()` in `sfsccustom.js` resolves the target at load: it points the link at the first candidate ID that exists on the page and adds `tabindex="-1"` to the target so focus moves reliably.
- On page types where no candidate ID exists (e.g. uncataloged Springshare pages), the function hides our skip link instead of leaving it dead — LibGuides' native `#s-lg-public-skiplink` still provides the skip.
- Verified against the live site (2026-07-06): guide pages (`/laptops`, `/oer`) use `#s-lg-guide-main`; the homepage, subject landing pages (`/writing`), A-Z Databases (`/az/databases`), and search results (`/srch.php`) all use `#s-lib-public-main`. Both IDs ship with `tabindex="-1"` already. All known page types are covered by the two candidates.

## Nav Bar — Hamburger Icon

- The hamburger SVG must be set on `.sfsc-nav-toggler .navbar-toggler-icon`, **not** on `.sfsc-nav-toggler` (the button). Bootstrap renders the icon through the inner `<span>`, not the button background. Setting `background-image` on the button causes a large boxy icon on mobile.

## Nav Bar — Dropdown JavaScript

- Do **not** use `data-bs-toggle="dropdown"` on the dropdown toggles. LibGuides' own click handlers close the dropdown before it renders, making it appear broken.
- Dropdowns are handled with capture-phase event delegation in `sfsccustom.js`, not by cloning toggles or binding each toggle during init. This keeps working when LibGuides injects/replaces header markup.
- Mobile requires listening on `pointerdown` before `click`. LibGuides/legacy Bootstrap handlers can close the menu before a normal click handler gets a useful open state.
- Use `touchstart` only as a fallback when `window.PointerEvent` is unavailable. Listening to both `pointerdown` and `touchstart` can double-toggle the menu on modern mobile browsers.
- Suppress the synthetic follow-up `click` that mobile browsers fire after `pointerdown`/`touchstart`; otherwise the menu opens and immediately closes.
- `e.preventDefault()`, `e.stopPropagation()`, and `e.stopImmediatePropagation()` are required on dropdown toggle events. Without them, LibGuides' outside-click and legacy dropdown handlers can immediately close the menu.
- Future dropdown JS must scope menu lookup to the toggle's own parent dropdown: `toggle.closest('.dropdown').querySelector('.dropdown-menu')`. Do not use `document.querySelector('.dropdown-menu')`, which always finds the first menu.
- Keep dropdown CSS scoped and strong: use `.sfsc-nav .dropdown-menu { display: none !important; }` and `.sfsc-nav .dropdown-menu.show { display: block !important; }`. Generic `.dropdown-menu` rules can bleed into LibGuides components and may lose to LibGuides system CSS.
- **Resolved issue (2026-04-28):** Resources and Services did not open on mobile because the JS only handled `click` and the CSS `.show` state was not specific enough. The working fix is capture-phase `pointerdown` handling plus scoped `!important` dropdown visibility rules in `sfsccustom.css`.

## Images in Content Boxes

- Wrap banner images in `<p style="margin: 0;">` to eliminate Bootstrap's default paragraph margin-bottom gap at the bottom.
- Always add `display: block` to images to eliminate the inline baseline gap.
- Full image style: `style="width: 100%; height: auto; display: block;"`
- BS5 content column inner width = outer column width minus 24px (Bootstrap gutter). Banner images should be sized to the inner width.
- Current guide content column inner width: ~896px. Banner proportions: 896 × 316px (equivalent to old BS3 850 × 300px).

## LibGuides Generated HTML — Critical

LibGuides generates its own markup for components like the side nav, breadcrumbs, and guide tabs. **Never write CSS selectors for these components based on assumptions — always inspect the actual generated HTML first.** Ask the user to paste the generated markup if needed before writing selectors.

## LibGuides Side Nav (`#s-lg-guide-tabs`)

- Top-level items use `.nav-link`; sub-items use `.d-block` — they have different default padding.
- Use `#s-lg-guide-tabs .nav-link { font-size: 16px !important; }` and `#s-lg-guide-tabs .d-block { font-size: 16px !important; }` to set font size on both levels.
- Use `#s-lg-guide-tabs .nav-link { padding-top: 0.25rem !important; padding-bottom: 0.25rem !important; }` for balanced hierarchy.
- Use `#s-lg-guide-tabs .s-lg-subtab-ul li:last-child { margin-bottom: 0 !important; }` to prevent trailing gap after sub-item groups.
- The ID selector `#s-lg-guide-tabs` provides enough specificity to override LibGuides' own styles.

## Guide List Tab Bar (`#s-lg-hp-nav`)

The "ALL GUIDES / BY SUBJECT" tab bar on the guide list page uses this structure:

```html
<div id="s-lg-hp-nav">
  <ul class="list-unstyled">
    <li>
      <ul class="nav nav-pills flex-wrap mb-3">
        <li id="s-lg-index-all-btn" class="s-lg-index-nav-btn active">
          <button class="btn">ALL GUIDES</button>
        </li>
        <li id="s-lg-index-subject-btn" class="s-lg-index-nav-btn">
          <button class="btn">BY SUBJECT</button>
        </li>
        <!-- hidden: #s-lg-index-group-btn, #s-lg-index-guidetype-btn, #s-lg-index-owner-btn -->
      </ul>
    </li>
    <li id="s-lg-hp-nav-bottom"> <!-- search form row --> </li>
  </ul>
</div>
```

- Active state is `li.s-lg-index-nav-btn.active` — target with `#s-lg-hp-nav .s-lg-index-nav-btn.active .btn`.
- Buttons are `<button class="btn">`, not `.nav-link` — do not use `.nav-pills .nav-link.active` selectors here.
- The bar is styled to match the header nav: `var(--sfsc-blue)` background, 4px orange bottom border, orange active button with `#1a1a1a` text.
- Do **not** use unscoped `.nav-pills .nav-link.active` rules — they bleed into LibGuides' own components. That legacy BS3 rule has been removed.

## Link Color Overrides

- LibGuides/Bootstrap default links can appear as teal/blue (`#337ab7` family). They may show up wherever custom CSS has not explicitly scoped link colors.
- Individual guide content lives under `#s-lg-guide-main`; use `#s-lg-guide-main a { color: var(--sfsc-blue) !important; }` for guide-body links.
- The homepage uses a different wrapper: `#s-lib-public-main`. Homepage sidebar widgets are in `#s-lib-public-main #col2 .txt`, so guide-page selectors will not affect them.
- To recolor homepage sidebar links without breaking buttons, use `#s-lib-public-main #col2 .txt a:not(.btn)`.
- Be careful with broad sidebar hover/focus rules. The LibCal hours widget Week/Month controls are also links inside `.txt`; active `.nav-pills` links need a more specific exception to keep readable white-on-blue text.

## Body Text Link Styling

- `text-underline-offset: 0.2em` and `text-decoration-thickness` are both scoped per context — do not apply either globally. LibGuides generates links in nav components and other UI elements that should not have underlines; a global `a` rule surfaces underlines on elements that don't need them.
- **Use `p a` to distinguish body text links from LibGuides link-list boxes.** LibGuides generates two structurally different link types: body text links land in `<p>` tags; navigation-style link boxes (app guides, resource lists, etc.) generate `<ul><li><a>` markup. Scoping to `p a` targets only inline prose links and leaves list-style links untouched — no class inspection needed.
- Content box links use `.s-lib-box-content p a` — scoped to `p` to exclude LibGuides link-list boxes (which are `<ul><li><a>` and should not be underlined). The full treatment:
  - Color: `#007698` (Cerulean) — the only SFSC brand palette color that passes WCAG AA on white (5.19:1)
  - `text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 0.2em; text-decoration-skip-ink: auto`
  - Hover: `color: var(--sfsc-orange-dark); text-decoration-thickness: 2px` — dual cue (color + weight), not color alone
  - Focus-visible: `outline: 2px solid currentColor; outline-offset: 2px; border-radius: 2px` — keyboard users get a clear ring
- **SFSC palette WCAG AA contrast on white** (for future link color decisions):
  - `#007698` Cerulean — 5.19:1 **PASS**
  - `#333366` Twilight Indigo — ~10.7:1 **PASS**
  - All other brand palette colors (`#F37B20`, `#508FCC`, `#00B0AF`, `#00928F`, `#8BC53F`, `#4C901D`, `#FFC121`, `#FFEDBA`) fail 4.5:1 for normal-size body text.

## Orange as a Text Color — Use the Derived Tokens

Full-strength SFSC orange `#F37B20` is **decorative only** (borders, accent bars, background tints). As a text color it fails WCAG AA everywhere: 2.74:1 on white, 4.24:1 on `--sfsc-blue`, 2.74:1 with white text on it. The legacy `--sfsc-orange-strong: #c95c07` from the BS3 homepage also fails (4.19:1) — do not reuse it. `sfsccustom.css` defines two AA-safe derivatives:

- `--sfsc-orange-dark: #B45309` — orange text/hover on white or light backgrounds (5.02:1); also the button hover fill with white text (5.02:1)
- `--sfsc-orange-light: #F9A55F` — orange text/hover on `--sfsc-blue` backgrounds, e.g. footer links (5.86:1)

All hover states (guide-body links, content-box links, homepage sidebar links, `.btn-primary`/`.btn-info`, footer links, `.sfsc-library-link`) use these tokens. Never use `var(--sfsc-orange)` directly for text or hover text.

## Search Results Page

- LibGuides renders search results asynchronously into `#s-lg-srch-content`; the initial page source does not contain the final result summary line.
- The generated summary can include an unwanted space before the comma: `Showing 20 of 158 Pages , Sorted By`.
- `sfsccustom.js` fixes this with `normalizeSearchResultSummary()`, which walks text nodes in `#s-lg-srch-content` and replaces `/\bPages\s+,/g` with `Pages,`.
- `observeSearchResults()` attaches a `MutationObserver` to `#s-lg-srch-content` so the cleanup reruns after initial AJAX render, sorting, pagination, or filter changes.
- This is a JavaScript fix, not CSS, because the extra space is literal generated text rather than spacing between styleable elements.

## LibCal Hours Widget (`#s-lc-fhw3652`)

The LibCal hours widget (`hours_full.js`) generates BS3-style markup inside the BS5 page. Two nav components need CSS overrides:

- **Hours of Operation / Location tabs** — generated as `<ul class="nav nav-tabs">` with `<li class="active"><a data-toggle="tab">`. BS5 renders the active `<li>` as a bordered box. Fix by resetting `border`, `border-radius`, and `background` on `#s-lc-fhw3652 .nav-tabs > li > a` and using a bottom-border underline for the active state.
- **Week View / Month View pills** — generated as `<ul class="nav nav-pills s-lc-fhw-pills">` with `<li class="active"><a>`. BS5 bleeds a dark filled-button style onto the active item. Fix by overriding `#s-lc-fhw3652 .nav-pills > li.active > a` with `var(--sfsc-blue)` background.
- If the hours widget appears in the homepage sidebar, `#s-lib-public-main #col2 .txt a` rules can override active pill text on hover/focus. Add a scoped exception such as `#s-lib-public-main #col2 .nav-pills > li.active > a { color: #ffffff !important; background-color: var(--sfsc-blue) !important; }`.
- Weekly date labels use `.s-lc-whw-head-date`. Springshare's default gray (`#999` / `#999999`) fails WCAG AA on white at small text size. Set the color inside the widget's own `<style>` block to `#555555` (`.s-lc-whw-head-date { color: #555555; }`) rather than relying only on `sfsccustom.css`, because the accessibility checker may inspect the widget snippet/output directly.
- The widget uses `data-toggle="tab"` (BS3 syntax). Tab-switching still works because LibGuides ships jQuery/BS3 alongside BS5.
- Always scope all rules to `#s-lc-fhw3652` to avoid bleeding into other LibGuides nav components.
- See `libraryhours.html` for the working paste-ready snippet with all overrides.

## Form Controls (WCAG 1.4.11 Non-text Contrast)

- Bootstrap's default `.form-control` border (`#dee2e6`) is only 1.61:1 on white — fails WCAG 1.4.11 (requires 3:1).
- Use `.sfsc-search-input { border-color: var(--sfsc-blue) !important; }` — SFSC blue is 10.7:1 on white.
- The Primo and Google Scholar search boxes both use the pill design: `.sfsc-primo-search` wrapper with rounded input/button ends and a focus ring on the container via `:focus-within`. No extra CSS is needed for Scholar — it reuses the same classes.
