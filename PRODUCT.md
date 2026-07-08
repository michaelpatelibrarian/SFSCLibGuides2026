# Product

## Register

product

## Users

SFSC students first — many commuters and first-generation college students with a wide range
of tech comfort, on both desktop and phones, usually mid-task: finding a database for a paper,
borrowing a laptop, booking a study room, citing a source, or asking a librarian for help.
Faculty and librarians are secondary users who link to and maintain guides.

## Product Purpose

The public face of the SFSC Library: a Springshare LibGuides site serving research guides,
A-Z databases, the catalog, hours, and help channels. Currently migrating Bootstrap 3 → 5.
Success looks like: a student finds the resource or help channel they need without friction,
on any device, regardless of ability — and no accessibility checker finding ever ships twice.

## Brand Personality

Approachable, credible, calm. The interface should feel like a helpful librarian: welcoming
to a nervous first-time researcher, trustworthy enough for faculty, never flashy. Warmth is
carried by the orange accent motif and typography — never by shouting.

## Anti-references

- **The default Springshare LibGuides look** — the unstyled vendor template every college
  library has: generic, dated, obviously not designed. Everything we ship should read as
  SFSC's library, not Springshare's product.
- Orange-heavy recruitment-marketing energy: this is a working tool, not a campaign page.

## Design Principles

1. **Accessibility is the design.** WCAG 2.1 AA is the floor, verified not assumed — every
   color pairing computed, every interaction keyboard-tested, before it ships.
2. **Disappear into the task.** Students arrive mid-assignment. Chrome guides them to
   content and help; it never performs for its own sake.
3. **One system, three renderers.** CMS Look & Feel settings, sfsccustom.css, and paste-in
   snippets must read as one design; when they disagree, that's drift to fix, not variety.
4. **Work with the host, never against it.** Springshare generates markup we cannot edit;
   design decisions must survive it (scoped selectors, resilient JS, verified live).
5. **Approachable authority.** Friendly enough for a first-gen freshman, credible enough
   for a citation-checking professor — the same surface earns both.

## Accessibility & Inclusion

- WCAG 2.1 Level AA site-wide (college requirement; externally evaluated).
- All contrast pairings pre-verified and documented in DESIGN.md; hover/focus states included.
- Full keyboard operability: skip link (self-resolving per page type), Enter + Space on
  dropdowns, Escape to close, visible focus everywhere.
- Screen-reader support: landmarks, `aria-current`, `aria-expanded`, hidden "(opens in a new
  window)" annotations, no headings used for visual styling.
- Third-party embeds (LibCal, LibAnswers, askalibrarian.org) are audited too; when a vendor
  widget fails AA and can't be restyled, replace it with a native equivalent.
