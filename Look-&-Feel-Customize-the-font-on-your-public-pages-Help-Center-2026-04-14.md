# Look & Feel: Customize the font on your public pages - Help Center

**Source:** https://ask.springshare.com/libguides/faq/2331
**Saved:** 2026-04-14T21:20:13.503Z

*Generated with [markdown-printer](https://github.com/levz0r/markdown-printer) (v1.1.1) by [Lev Gelfenbuim](https://lev.engineer)*

---

Topics:

-   [Customizing & Managing LibGuides](/libguides/search/?t=0&adv=1&topics=Customizing%20%26amp%3B%20Managing%20LibGuides)

For these users:

-   Admin

For these systems:

### In this article

By default, the LibGuides public pages use a font-family of Arial, Helvetica, and Verdana (with Arial being used first and the others used if a browser does not support the earlier fonts). But, as with all aspects of the public interface of LibGuides, Admin users can customize the fonts used in your site. 

In this article, we'll walk through getting the font(s) to use, how to embed/add the font in your site, some example CSS rules that you can use to change the fonts of specific elements, and where to add your code. 

* * *

### Find the fonts to use

The first step in customizing the fonts used in your LibGuides site is to determine what those fonts are. You may be planning to use the same fonts that are used by your institution's primary website, a font that's been purchased by your institution, or you are just looking to use something other than the default Arial font.

If you plan on using the same fonts as your institution, you will want to coordinate with your IT or Web Development department (or whoever manages your webpages) about getting access to the font files. If you plan on using a font of your own, one that you've purchased or an open source resource, you will also need to know where the font files live—you may have to download the files so that you can upload them to LibGuides (more on that below) or if they're hosted on another site you will need to know their URLs. 

Once you have your font files—whether the actual files or their URLs—the next step is to embed those fonts into your site's custom code. 

**Pro Tip**: If you are looking for custom fonts to use, check out [Google Fonts](https://fonts.google.com/). This robust, open source collection of fonts is free to use on any webpage and very easy to use! Also check out our [Springy Tech Tip video on using Google Fonts](http://buzz.springshare.com/videohighlights/techtip/using-google-fonts).

* * *

### Embed your fonts in your site's custom code

Before you can set up the CSS rules to change your site's fonts, you will need to embed the files for your fonts in your LibGuides site. While there are a number of methods for calling your font files in your custom code (exs: [@import](https://www.w3schools.com/cssref/pr_import_rule.asp) or [@font-face](https://www.w3schools.com/css/css3_fonts.asp) rules), we recommend linking to them with a `<link>` tag added to your system-level custom—from **Admin > Look & Feel > Custom JS/CSS** tab. 

#### Format a <link> tag

If your font files are hosted on another site, you'll either have been provided the full link tag already—Google Fonts, for example, provides this automatically—or you will have the URL for the font. With that URL, you'll add it to the `href` attribute of a `<link>` tag. For example: 

`<link rel="stylesheet" type="text/css" href="**https://springyfonts.com/fonts/yourcustomfont.woff**">`

#### Upload your font files to LibGuides

If your font files are not hosted elsewhere, or you would prefer to host them in your LibGuides site, you can upload those files to the Upload Customization Files space—from Admin > Look & Feel > Custom JS/CSS tab > Upload Customization Files panel. For complete instructions on uploading your own customization files, see our [FAQ on that process](https://ask.springshare.com/libguides/faq/820#upload). 

Once you've uploaded the file, LibGuides will automatically generate the appropriate HTML code you'll need to include it in your site's Custom JS/CSS code.

#### Add the <link> tag to your custom code

With your tag in hand, paste the include code at the top of the **JS/CSS Code** text box above, and _outside_ of any `<style></style>` or `<script></script>` tags already in your custom code.

Note: if you only plan on using this font in one group in your site and that group has been set up to exclude the system-level JS/CSS code, you should add the include code to the [group-level JS/CSS code](https://ask.springshare.com/libguides/faq/821) instead. 

![placeholder](https://libapps.s3.amazonaws.com/customers/1/images/LG_LookFeel_FontIncludeExample.png)

An example link-tag font URL added to the JS/CSS code box.

* * *

### How to customize the font for specific elements of your public pages

To adjust the font used by specific elements of your public page, you will need to add CSS rules to your custom code to set the appropriate font family. The rule(s) you set will depend on what elements you want to customize and what font(s) you will be using.  

Below are some examples of the most common areas/elements of the public pages where you can apply a custom font—keeping in mind that the font families used in the examples will differ from those that you will be using.

#### Body of your public pages

To change the font for all of your public pages, the code you would need may look like this:

<style>
/\* set the font-family for the entire body tag \*/
body {
   font-family: 'Font one', Arial, sans-serif;
}

/\* override the font-family for the side-column headers on the homepage, A-Z page, 
subject pages, profile pages, and E-Reserves pages\*/
.s-lib-public-side-header h2 {
   font-family: 'Font one', Arial, sans-serif;
}
</style>

#### Public page and guide titles

To change the font for page titles for your public pages and your guide, the code you would need may look like this:

<style>
/\* set the font-family for guide page titles \*/
#s-lg-guide-name {
   font-family: 'Font one', Arial, sans-serif;
}

/\* set the font-family for all non-guide page titles\*/
#s-lib-public-header-title {
   font-family: 'Font one', Arial, sans-serif;
}
</style>

#### Guide Navigation

To change the font for the guide navigation—the links for your pages in the guides, the code you would need may look like this:

<style>
/\* set the font-family for guide navigation links \*/
#s-lg-guide-tabs {
   font-family: 'Font one', Arial, sans-serif;
}
</style>

#### Box Titles

To change the font for all of your box titles, the code you would need may look like this:

<style>
/\* set the font-family for box titles \*/
.s-lib-box .s-lib-box-title {
   font-family: 'Font one', Arial, sans-serif;
}
</style>

#### Box Content

To change the font for the content of your boxes, the code you would need may look like this:

<style>
/\* set the font-family for the entire body tag \*/
.s-lib-box-content {
   font-family: 'Font one', Arial, sans-serif;
}
</style>

Note: if a [font has been specified in any Rich Text/HTML content items](https://ask.springshare.com/libguides/faq/904#fonts) within your boxes, that font will override the above CSS. If you want to have your font applied instead, you will need to [clear the formatting](https://ask.springshare.com/libguides/faq/904#remove-text-formatting) for the rich text to remove the inline CSS that had been set via the editor.

* * *

### Where to add the code for your font customizations

 There are three areas (in LibGuides CMS) where you can add your CSS code. Once you've determined where you want to customize the fonts, copy and paste your CSS code into the appropriate Custom JS/CSS Code box.

-   To change the fonts used for your entire system, add your code to your [system-level Custom JS/CSS Code](https://ask.springshare.com/libguides/faq/820).
-   If you have LibGuides CMS:
    -   You can change the fonts used in every page of a group by adding your code to the [group's Custom JS/CSS Code](https://ask.springshare.com/libguides/faq/821).
    -   You can change the fonts used on just a single guide by adding your code to the [guide's Custom JS/CSS Code](https://ask.springshare.com/libguides/faq/799).

Related links

-   [font-family - CSS: Cascading Style Sheets | MDN Opens in new window](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
-   [Google Fonts Opens in new window](https://fonts.google.com/)
-   [Upload CSS, JavaScript, font, and other files to use in your Custom JS/CSS Opens in new window](https://ask.springshare.com/libguides/faq/820#upload)

Related articles

-   [Look & Feel: Customize or hide the breadcrumbs on your public LibGuides pages](/libguides/faq/1838)
-   [Look & Feel: Customize your LibGuides favicon](/libguides/faq/3024)
-   [(New) Look & Feel: Customize the look and feel of your (Bootstrap 5) public pages](/libguides/faq/3333)
-   [(New) Groups & Look & Feel: Customize the look and feel of the Bootstrap 5 public pages for your groups](/libguides/faq/3800)
-   [(New) Look & Feel: Prepare to migrate your public pages to Bootstrap 5](/libguides/faq/3774)
-   [Look & Feel: Customize your LibGuides page footer](/libguides/faq/1069)
-   [Look & Feel: Add custom CSS & JavaScript code to your public pages](/libguides/faq/820)
-   [Look & Feel: Customize the user privacy alert](/libguides/faq/942)
-   [Look & Feel: Customize the search results page layout](/libguides/faq/1096)