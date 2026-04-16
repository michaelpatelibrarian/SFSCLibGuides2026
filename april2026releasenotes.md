## **LibGuides April 2026 Release Notes**

**Springy\_Sergio** | SPRINGY CHAMP

Mar 31, 2026 Updated Mar 31, 2026 by Springy\_Sergio

Hi LibGuides community\!

We’re excited to share that a new LibGuides release will be rolling out to all regions by end of day on **Friday, April 10th 2026\.**

This release is fully dedicated to accessibility \- our team has been hard at work resolving a wide range of WCAG 2.1 AA compliance issues across public pages, admin interfaces, search, A-Z pages, and more. This is part of our ongoing commitment to making LibGuides a fully accessible platform ahead of our April 24th compliance target. We've also included a set of bug fixes across several modules. Check out what's coming your way below\!

### **✨ Feature Improvements**

#### **Accessibility**

* **Admin page tab roles:** Tabs across LibGuides admin pages now have proper tablist and tab roles, ensuring screen readers and keyboard users can navigate them correctly.  
* **Status messages on content change:** Public pages now announce status messages when content changes dynamically, meeting WCAG 4.1.3 requirements for assistive technologies.  
* **Info and Relationships in System Settings:** Various structural markup issues across the System Settings admin pages have been resolved, bringing them in line with WCAG 1.3.1.  
* **Guide Search page:** Multiple accessibility issues on the Guide Search page have been fixed, improving compatibility with screen readers and keyboard navigation.  
* **Accordion heading buttons:** Accordion controls now correctly communicate their open/closed state to assistive technologies, and no longer incorrectly apply selection state as they expand and contract.  
* **A-Z pages \- redundant title text:** Redundant title text has been removed from A-Z pages, reducing noise for screen reader users.  
* **WAI-ARIA labels on links:** Links throughout LibGuides now include proper WAI-ARIA labels, giving screen reader users meaningful context when navigating by link.  
* **Guide Builder \- color contrast:** Color contrast issues in the Guide Builder admin interface have been resolved, meeting WCAG AA contrast requirements.  
* **Search placeholder \- color contrast:** The color contrast of search input placeholder text on public pages now meets WCAG AA standards.  
* **"i" icon popover \- keyboard navigation:** The information icon popover can now be accessed and dismissed via keyboard, resolving a previously reported keyboard navigation issue.  
* **A-Z alphabetical index \- color contrast:** The default gray letters in the A-Z alphabetical index have been updated to meet WCAG color contrast standards.  
* **RSS Widget \- missing alt text:** RSS Widget images that do not have alt text provided in the feed are now marked as decorative, preventing screen readers from announcing unhelpful or missing descriptions.  
* **"i" tooltip \- mobile view:** The information tooltip no longer gets cut off on mobile screens, ensuring it is fully visible and accessible on smaller devices.  
* **Home page \- miscellaneous issues:** Several miscellaneous accessibility issues on the LibGuides home page have been resolved.  
* **Gallery/Slideshow images \- decorative handling:** Gallery and slideshow images that are purely decorative are now properly marked as such, preventing screen readers from announcing them unnecessarily.  
* **Old A-Z, Assets, and Blog pages:** A range of accessibility issues across the older A-Z, Assets, and Blogs public pages have been addressed.  
* **Admin discussions page:** Accessibility issues on the admin-side Discussions page have been resolved.  
* **Admin Home page:** Multiple accessibility issues on the LibGuides Admin Home page have been fixed.  
* **"Skip to Main Content" on authoring side:** A "Skip to Main Content" bypass link has been added to the authoring side of LibGuides, meeting WCAG 2.4.1 requirements for keyboard users.  
* **Guide books and link assets:** Accessibility issues related to book and link assets displayed in guides have been resolved, improving screen reader compatibility.  
* **Homepage nav roles:** Navigation landmark roles on the LibGuides homepage have been updated to be fully compliant with WCAG standards.  
* **Discussion Board public page \- table context:** A missing table cell context issue on the public Discussion Board page has been fixed, resolving a WCAG 1.3.1 Info and Relationships error.  
* **Search page \- multiple issues:** Multiple accessibility issues on the LibGuides Search page have been resolved, including landmark, heading, and link errors flagged by accessibility auditing tools.  
* **"Opens in new window" icon for link assets:** Link assets that open in a new window now display an accessible icon indicator, giving users advance notice of the behavior \- a frequently requested improvement from the community.  
* **Gallery box arrows \- aria labels:** The navigation arrows on gallery boxes in guides now have correct ARIA labels, resolving incorrect labeling that confused screen reader users.  
* **Search page \- empty H3 heading:** An empty H3 heading that was loading on the main search page has been removed, eliminating a structural heading error.  
* **A-Z Databases page \- skipped heading level:** A skipped heading level in the H5 modal on the new A-Z Databases public page has been corrected.  
* **Search Results \- empty link error:** Search results no longer include empty links, resolving an error that was flagged by WCAG auditing tools.  
* **Slideshow \- focusable content in hidden element:** A slideshow accessibility issue where hidden elements contained focusable content has been resolved.  
* **Side nav templates \- page title:** The default side navigation template has been updated so that both the guide title and page title are correctly included in the page heading, ensuring the full page context is available to screen readers and assistive technologies.  
* **Search pagination \- SiteImprove flags:** Accessibility issues with the main search pagination flagged by SiteImprove have been resolved.  
* **External link icon \- redundant title text:** Redundant title text on the external link icon has been removed, preventing screen readers from announcing duplicate information.  
* **A-Z public page \- subject specialist images:** Subject specialist images on the public A-Z page now include appropriate alt text.  
* **Inline frames \- duplicate/missing alt text:** Duplicate and missing alt text issues in inline frames have been fixed, meeting WCAG 2.4.1 and 4.1.2 requirements.  
* **Profile page image \- missing text alternative:** A missing text alternative on profile page images has been resolved.  
* **Cover art \- default alt text:** The default alt text for cover art images has been changed to empty (decorative), preventing screen readers from reading out unhelpful default text.  
* **Page title \- missing title error:** Pages that were missing a title element now include one, resolving a WCAG 2.4.2 Page Titled error.  
* **Gallery box links \- redundant links:** Gallery boxes and their associated links no longer generate redundant link errors for screen reader users.  
* **Single page guide \- empty navigation element:** On guides with only one visible page, an empty navigation element was being rendered in the HTML even though it contained no links. This has been fixed \- the page navigation element is now only rendered when there are actual pages to navigate.  
* **Sidebar aria-labelledby on div:** An invalid aria-labelledby attribute that was being auto-added to sidebar div elements has been removed.  
* **Tabbed boxes \- accessibility issues:** Various accessibility issues with tabbed boxes, including keyboard accessibility when embedded as widgets, have been resolved.

### ---

**🐞 Bug Fixes**

#### **Assets**

* Filtering A-Z asset lists using select or multi-select options was not returning correct results. This has been fixed and filters now fetch the proper results.

#### **Bootstrap 5**

* Links with thumbnail images were displaying inconsistent text wrapping on Bootstrap 5 pages. Text wrapping is now consistent.  
* Tabbed boxes were not displaying correctly on Bootstrap 5 pages. This has been resolved.  
* Formatted paragraph text in the rich text editor was not rendering with the correct Bootstrap 3 styling fallback. This has been fixed.  
* Some users were unable to access the Customizations tab in the Bootstrap 5 Look & Feel editor. This has been fixed.

#### **Blogs**

* Blog posts with an invalid created date were blocking search indexing. These entries are now handled correctly and no longer interfere with indexing.

#### **Groups**

* An error was occurring when saving home page customizations in the Groups Look & Feel editor. This has been resolved.

### ---

**Comments**

**Phoenix** | SPRINGY SCHOLAR

Apr 1, 2026

You have listed "**Guide books and link assets:** Accessibility issues related to book and link assets displayed in guides have been resolved, improving screen reader compatibility."

I'm wondering if this will include the issues with having the "Hover item title" option for the book from catalog assets? I'm not certain, but I don't think this option works with non-mouse input or even properly with mouse input. With a standard mouse, if you hover the title to view the description, the description is then not really in focus. You can't select text from the description while staying on the LibGuide page.

**Librarian\_Hui** | LAB COAT

Apr 3, 2026 Updated Apr 3, 2026 by Librarian\_Hui

Hello,

Just to share the home page customizations under pages look and feel is still not saving, but a pop-up error. I cleared the cache, tried on both Firefox and Chrome, but still did not save properly. Will follow up with my ticket.

Thanks for addressing it,

cecilia

**Springy\_Anna** | ADMIN

Apr 3, 2026

Hi Cecilia (@Librarian\_Hui) \- this release hasn't gone out yet, which is why you're not seeing the fix. Sorry for any confusion\! The release will be out to you by end of day on Friday, April 10th, if not before. 😊

Anna