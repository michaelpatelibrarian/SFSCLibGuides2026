# SFSC LibCal — Bootstrap 3 Port

[LibCal](https://libcal.southflorida.edu) is a separate Springshare product from LibGuides. It remains on Bootstrap 3 — Springshare hasn't announced a BS5 date for it — so this repository carries a thin, token-driven BS3 skin for it, sharing the same brand system as the LibGuides Bootstrap 5 migration documented in [README.md](README.md) and [DESIGN.md](DESIGN.md).

## Files

| File | Where to paste |
|------|---------------|
| `libcalheadincludes.html` | LibCal Look & Feel → Custom JS/CSS Code |
| `libcalheader.html` | LibCal Look & Feel → Custom Header Code |
| `libcalfooter.html` | LibCal Look & Feel → Custom Footer Code |
| `sfsccalcustom.css` | Uploaded via LibCal customization files (served from CloudFront) |
| `sfsccalcustom.js` | Uploaded alongside `sfsccalcustom.css` |
| `libraryhours.html` | LibCal hours widget embed — paste into a LibGuides HTML content box |

## Proof

Current live LibCal pages (Bootstrap 3 skin), styled with the same SFSC brand tokens and contrast rules documented in [DESIGN.md](DESIGN.md):

<table>
  <tr>
    <td align="center">
      <img src="./currentscreenshots/libcal.png" width="280" alt="LibCal homepage on the SFSC Library site, showing the Bootstrap 3 skin using SFSC blue chrome and orange accent border"><br>
      <sub>LibCal homepage</sub>
    </td>
    <td align="center">
      <img src="./currentscreenshots/bookastudyroom.png" width="280" alt="Book a study room booking flow styled with SFSC brand colors and accessible form controls"><br>
      <sub>Book a study room</sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="./currentscreenshots/openinghours.png" width="280" alt="Library opening hours widget with high-contrast hour labels meeting WCAG 2.1 AA"><br>
      <sub>Opening hours widget</sub>
    </td>
    <td align="center">
      <img src="./currentscreenshots/librarianappointment.png" width="280" alt="Book a librarian appointment page with keyboard-accessible date and time selection"><br>
      <sub>Book a librarian appointment</sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="./currentscreenshots/monthlyhours.png" width="280" alt="Monthly hours calendar view with accessible date and status contrast"><br>
      <sub>Monthly hours calendar</sub>
    </td>
    <td align="center">
      <img src="./currentscreenshots/tutorappointment.png" width="280" alt="Book a tutor appointment page matching the SFSC LibCal Bootstrap 3 skin"><br>
      <sub>Book a tutor appointment</sub>
    </td>
  </tr>
</table>
