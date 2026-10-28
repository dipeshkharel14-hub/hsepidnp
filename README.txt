HSEPID.NP — STANDALONE WEBSITE
===============================
NEW in this version: contact (2 websites + hsepidnp@gmail.com), 8 languages
(English, Nepali, Hindi, Bengali, Spanish, French, Arabic, Chinese), 7 themes
(Midnight, Daylight, Aurora, Sunset, Royal, Rose, Paper), app-style bottom tabs,
and 'Add to Home Screen' support (manifest.webmanifest). Open the globe button / Settings tab to switch.

Upload EVERYTHING in this folder to a NEW GitHub repository (root level):
  index.html, manifest.webmanifest, projects.js, robots.txt, sitemap.xml, hsepid-intro/ , assets/

1) YOUR LOGO + COVER IMAGE  (put these 2 files in the ROOT, next to index.html; replace the placeholders, keep the names)
   logo.jpg   = your logo (square). Used in the top bar, tab icon, app icon, Google.
   cover.jpg  = your cover image (wide, 1600x900). Used as hero background, About picture and Google/share image.
   (Old notes below about assets/ images are no longer used.)
   assets/logo.svg          your logo (or logo.png: then edit the name in index.html)
   assets/favicon.svg       small tab icon
   assets/hsepid-cover.jpg  big hero background (1600x900, no text on it)
   assets/hsepid-og.jpg     share/Google image (1200x630, can include text)
   The intro's own logo is in hsepid-intro/hsx-config.js.

2) YOUR SITE ADDRESS (important for Google)
   After GitHub Pages gives you the link, e.g. https://yourname.github.io/hsepid
   open index.html, sitemap.xml, robots.txt and replace every
   https://YOUR-SITE-URL   with your real address (no slash at the end).

3) GOOGLE
   Go to search.google.com/search-console -> add your site -> Sitemaps -> submit sitemap.xml

4) PROJECTS: edit projects.js (name, url, use). Then also edit the card list in index.html.
   The final button inside the 3D showcase opens www.dipeshkharel14.com.np
   (change in hsepid-intro/hsx-config.js -> portfolioUrl).


ADD YOUR SOCIAL + DARAZ LINKS (later)
   Open index.html, search for  var LINKS  and paste each address between the quotes:
   var LINKS={youtube:'https://youtube.com/@you',facebook:'',instagram:'',daraz:'https://www.daraz.com.np/shop/yourshop'};
   Empty ones show a "Coming soon" badge automatically. Messages go to hsepidnp@gmail.com.
   NOTE: index.html is NOT inside the zip - upload it separately to the root, next to the unzipped files.

INTRO BEHAVIOUR
   The 3D intro plays automatically when someone opens the site. The visitor chooses Boss / Manager / Employee,
   presses "Let's explore", and lands directly on the website. Returning visitors skip it for 3 days
   (change rememberDays in hsepid-intro/hsx-config.js; 0 = always play). Footer link "Replay intro" plays it again.
   Add ?intro=0 to the address to skip the intro.

STORES, PHONE NUMBERS, DARAZ LINK
   Phone/WhatsApp numbers and addresses are in index.html (search for "Shreekunja Optical" / "wa.me").
   Daraz + YouTube/Facebook/Instagram: search for  var LINKS  and paste each address between the quotes.
   Cards stay visible even before links are added (tapping them does nothing until you add the link).


SEARCH ENGINES (Google + Bing)
   Files: robots.txt, sitemap.xml, llms.txt, BingSiteAuth.xml  (all go in the ROOT next to index.html)
   1) Replace https://YOUR-SITE-URL with your real address in: index.html, sitemap.xml, robots.txt, llms.txt
   2) BING: bing.com/webmasters -> Add site -> choose "XML file". Bing gives a code. Open BingSiteAuth.xml and
      replace PASTE-YOUR-BING-CODE-HERE with that code (or use the meta tag: msvalidate.01 in index.html head). Verify, then submit sitemap.xml.
   3) GOOGLE: search.google.com/search-console -> choose "HTML tag" -> paste the code into the google-site-verification line in index.html -> Verify -> Sitemaps -> sitemap.xml
