KINDER KIDZ DAY NURSERY WEBSITE
COMPLETE WEBSITE MANUAL / README
================================

Version status: Finished, tested website
Manual date: 2 September 2026
Main website project: Kinder Kidz Day Nursery
Location: 26 Elizabeth Court, Laindon, SS15 5AG
Ofsted URN: 2695613

PURPOSE OF THIS FILE
--------------------
This README.txt is the main operating and maintenance manual for the Kinder Kidz
Day Nursery website.

Keep this file in the ROOT of the website repository, beside:
- index.html
- about.html
- rooms.html
- learning.html
- fees.html
- gallery.html
- parents.html
- contact.html

This manual explains:
- the story and purpose of the website;
- what every page is for;
- what the main buttons do;
- how the language system works;
- how the navigation works;
- how the five responsive screen versions work;
- how to update text, prices, photos and contact details safely;
- the main website files and what they control;
- important rules for future modifications;
- what to test after every future change;
- important items to verify before the final public launch.


======================================================================
1. THE STORY AND PURPOSE OF THE WEBSITE
======================================================================

The Kinder Kidz Day Nursery website was created as a warm, modern and professional
online home for the nursery in Laindon, Basildon.

The website is designed to give parents and carers a clear understanding of:
- who Kinder Kidz Day Nursery is;
- the nursery's values and approach;
- the rooms and play environments;
- how children learn and develop;
- current fees and funded-place information;
- what the nursery looks like through real photographs;
- how the nursery works with parents;
- how to contact the nursery or arrange a visit.

The design uses a calm nursery-friendly visual identity:
- green as the main brand colour;
- cream / warm off-white backgrounds;
- soft rounded cards;
- real nursery photographs;
- simple decorative animations;
- clear large headings;
- child-friendly symbols and illustrations;
- prominent Ofsted trust information;
- clear Book a Visit and Enquire Now actions.

The website was developed and refined for several different devices instead of
treating all screens as one layout.

The completed responsive versions are:

1. Mobile portrait
2. Mobile landscape
3. Tablet portrait
4. Tablet landscape
5. Desktop

The website also supports five languages:

1. English
2. Français
3. Español
4. Português
5. Polski

The site should therefore always be treated as a MULTI-LANGUAGE and
MULTI-RESPONSIVE website.

A future correction must never be judged only on one screen size or one language.


======================================================================
2. IMPORTANT NURSERY INFORMATION DISPLAYED ON THE WEBSITE
======================================================================

Nursery:
Kinder Kidz Day Nursery

Address:
26 Elizabeth Court
Laindon
SS15 5AG

Telephone:
07886 017430
01268 425881

Email:
kinderkidzdaynursery@hotmail.com

Opening hours:
7:30am - 6:30pm
Monday - Friday

Operation:
51 weeks a year

Age range shown on the website:
3 months - 5 years

Ofsted:
Rated Good
Latest inspection shown: September 2025
Ofsted URN: 2695613
Registered with Ofsted since 2022

Funded places:
The website explains that funded places are available for eligible children and
refers to a 38-week funded period.

IMPORTANT:
If any nursery information changes in the future, update it everywhere it appears
on the website, not only on one page.


======================================================================
3. WEBSITE PAGE LIST
======================================================================

The website has eight main public pages:

1. index.html       - Home
2. about.html       - About Us
3. rooms.html       - Our Rooms
4. learning.html    - Learning & Development
5. fees.html        - Fees & Funding
6. gallery.html     - Gallery
7. parents.html     - Parents
8. contact.html     - Contact


======================================================================
4. GLOBAL HEADER AND NAVIGATION
======================================================================

Every main page uses the same general navigation structure.

MAIN LOGO
---------
The Kinder Kidz logo normally appears at the top of the website.

Purpose:
- identifies the nursery;
- acts as a link back to the Home page where applicable.

MAIN NAVIGATION LINKS
---------------------
The navigation contains:

Home
About Us
Our Rooms
Learning & Development
Fees & Funding
Gallery
Parents
Contact

The current page is visually marked as active.

DESKTOP / WIDE SCREEN
---------------------
On larger screens the navigation links are shown across the header.

MOBILE / TABLET PORTRAIT
------------------------
On smaller screens the navigation becomes a burger menu.

The burger button:
- opens the menu;
- closes the menu;
- the menu also closes when the user selects a page;
- clicking outside the menu should close it;
- the current active page is highlighted.

LANGUAGE SELECTOR
-----------------
The language selector is displayed near the navigation.

Available languages:
- English - UK flag
- Français - French flag
- Español - Spanish flag
- Português - Portuguese flag
- Polski - Polish flag

When a language is selected:
- translated website text is displayed;
- the selected language is stored in the browser;
- the selected language should continue when the visitor moves to another page.

HEADER BOOK A VISIT BUTTON
--------------------------
On desktop, a Book a Visit button may also be shown in the header.

Destination:
contact.html?mode=visit#enquiry-form

Its purpose is to take the visitor directly to the Contact page and prepare the
form for a visit request.


======================================================================
5. GLOBAL BUTTONS AND WHAT THEY DO
======================================================================

BOOK A VISIT
------------
Typical destination:
contact.html?mode=visit#enquiry-form

Purpose:
Takes the visitor to the Contact page and switches the enquiry form into
visit-request mode.

In visit mode:
- the form heading becomes "Book a Visit";
- the submit button becomes "Request a Visit";
- the subject is prepared as "Book a visit".

ENQUIRE NOW
-----------
Typical destination:
contact.html?mode=enquiry#enquiry-form

Purpose:
Takes the visitor directly to the enquiry form.

In enquiry mode:
- the form heading is "Send Us an Enquiry";
- the subject is prepared as a general enquiry.

CONTACT US
----------
Typical destination:
contact.html

Purpose:
Takes the visitor to the Contact page.

CALL / PHONE BUTTONS
--------------------
Telephone links use tel: links.

Examples:
07886 017430
01268 425881

On a supported mobile device, tapping a telephone link should open the phone
dialler.

EMAIL US
--------
Email links use:
mailto:kinderkidzdaynursery@hotmail.com

On a device with an email application, tapping the link should start a new email.

VIEW OUR OFSTED RECORD
----------------------
The Home page contains a link to the nursery's Ofsted provider record.

Purpose:
Lets parents verify the nursery's Ofsted information.

GET DIRECTIONS
--------------
The Contact page contains a Get Directions button.

IMPORTANT:
The inspected website code uses a general Google Maps address/link.
Before final public launch, confirm that this opens the exact nursery location.
If necessary, replace it with a direct Google Maps link to:
26 Elizabeth Court, Laindon, SS15 5AG.

GREEN CIRCULAR SCROLL ARROW
---------------------------
A green circular arrow appears on many pages.

Behaviour:
- when the visitor is near the top, it can move the visitor down;
- after the visitor has scrolled, it changes behaviour and can return the visitor
  toward the top;
- it provides quick page navigation on long pages.


======================================================================
6. PAGE 1 - HOME (index.html)
======================================================================

PURPOSE
-------
The Home page is the main introduction to Kinder Kidz Day Nursery.

It should quickly communicate:
- the nursery identity;
- who the nursery is for;
- the caring and welcoming atmosphere;
- trust and Ofsted information;
- the available rooms;
- reasons families may choose Kinder Kidz;
- how to arrange a visit or make an enquiry.

MAIN HERO
---------
Main message:
"Where Every Child Feels Valued & Inspired"

Supporting message:
Nurturing childcare and early years education for children aged 3 months to
5 years in Laindon, Basildon.

Main actions:
- Book a Visit
- Enquire Now

The hero includes a real nursery image.

TRUST / INFORMATION STRIP
-------------------------
The Home page shows key information such as:
- Ofsted Good;
- Registered with Ofsted;
- age range;
- opening hours;
- 51 weeks a year;
- funded places.

OUR ROOMS & PLAY SPACES
-----------------------
Introduces:
- Baby Room;
- Toddler Room;
- Pre-School Room;
- Outdoor Play Area.

Purpose:
Gives parents a quick preview before they open the full Our Rooms page.

WHY FAMILIES CHOOSE KINDER KIDZ
-------------------------------
Includes cards such as:
- Safe & Secure Environment;
- Caring & Qualified Staff;
- Learning Through Play;
- Outdoor Learning;
- Strong Parent Partnership.

Purpose:
Explains the nursery's main strengths in an easy-to-scan format.

PARENTS & FAMILIES / QUALITY YOU CAN TRUST
------------------------------------------
This area combines:
- parent-focused information;
- Ofsted trust messaging;
- link to the Ofsted record.

FINAL CALL TO ACTION
--------------------
"Let's Start Their Journey Together"

Includes:
- Book a Visit;
- Enquire Now.

FOOTER
------
The Home footer includes:
- nursery logo and short description;
- Quick Links;
- Information;
- Contact Us;
- copyright;
- Ofsted URN.


======================================================================
7. PAGE 2 - ABOUT US (about.html)
======================================================================

PURPOSE
-------
The About Us page explains the nursery's story, values and personality.

HERO
----
Main message:
"A Loving Start, A Bright Future"

Buttons:
- Book a Visit
- Enquire Now

OUR STORY
---------
Explains that Kinder Kidz Day Nursery was established in 2022 with a vision to
create a nurturing place where every child can thrive.

The section describes:
- care;
- confidence;
- curiosity;
- family partnership;
- inclusive and welcoming support.

OUR VALUES
----------
Main value cards:
- Care
- Respect
- Growth
- Partnership
- Fun

Purpose:
Explains the principles that guide the nursery.

WHAT MAKES US DIFFERENT
-----------------------
Highlights:
- qualified, experienced and caring staff;
- warm and stimulating learning environment;
- focus on communication and development;
- support for children with additional needs;
- outdoor play and healthy lifestyle.

FINAL CALL TO ACTION
--------------------
"Ready to see Kinder Kidz for yourself?"

Buttons:
- Book a Visit
- Contact Us


======================================================================
8. PAGE 3 - OUR ROOMS (rooms.html)
======================================================================

PURPOSE
-------
The Our Rooms page gives parents more detail about the nursery's age-appropriate
spaces and what children experience in them.

HERO
----
Main message:
"Rooms Designed for Every Stage of Early Learning"

Buttons:
- Book a Visit
- Enquire Now

FEATURE STRIP
-------------
Includes:
- Age-Appropriate Rooms;
- Safe & Nurturing Spaces;
- 3 Months - 5 Years;
- Indoor & Outdoor Play;
- Qualified & Caring Staff.

OUR ROOMS & PLAY SPACES
-----------------------
BABY ROOM
Age:
3 months - 2 years

Focus:
- calm and nurturing space;
- sensory play;
- secure relationships;
- individual routines;
- gentle care;
- early discovery.

TODDLER ROOM
Age:
2 - 3 years

Focus:
- movement;
- imaginative play;
- hands-on learning;
- language development;
- independence.

PRE-SCHOOL ROOM
Age:
3 - 5 years

Focus:
- early literacy;
- maths;
- creativity;
- confidence;
- social development;
- school readiness.

OUTDOOR PLAY AREA
Focus:
- movement;
- fresh air;
- exploration;
- confidence;
- friendships.

WHAT CHILDREN EXPERIENCE IN EVERY ROOM
--------------------------------------
Examples include:
- Warm & Loving Care;
- Learning Through Play;
- Communication & Language;
- Healthy Routines;
- Safe & Secure Environment.

FINAL CALL TO ACTION
--------------------
"Come and See Our Rooms for Yourself"

Buttons:
- Book a Visit
- Enquire Now


======================================================================
9. PAGE 4 - LEARNING & DEVELOPMENT (learning.html)
======================================================================

PURPOSE
-------
This page explains how Kinder Kidz supports learning through play, everyday
experiences and age-appropriate development.

HERO
----
Main message:
"Learning, Play & Discovery Every Day"

Buttons:
- Book a Visit
- Enquire Now

OUR LEARNING APPROACH
---------------------
Main areas shown:
- Communication & Language;
- Personal, Social & Emotional;
- Physical Development;
- Literacy;
- Mathematics;
- Understanding the World;
- Expressive Arts & Design.

HOW CHILDREN LEARN AT KINDER KIDZ
---------------------------------
Examples:
- Learning Through Play;
- Creative Activities;
- Story Time;
- Sensory Play;
- Outdoor Learning;
- Role Play;
- Music & Movement;
- Independence & Confidence.

LEARNING EXPERIENCES IN ACTION
------------------------------
Uses nursery photographs to show real activity environments.

FINAL CALL TO ACTION
--------------------
"See Learning in Action - We'd Love to Welcome You!"

Buttons:
- Book a Visit
- Enquire Now


======================================================================
10. PAGE 5 - FEES & FUNDING (fees.html)
======================================================================

PURPOSE
-------
The Fees & Funding page explains current session prices, registration/deposit
information and funded-place support.

IMPORTANT MAINTENANCE NOTE
--------------------------
This page contains a significant amount of PAGE-SPECIFIC CSS inside fees.html in
addition to the shared CSS files.

When modifying this page:
DO NOT add a new override simply because an old rule is difficult to locate.
Find the original Fees rule and change/remove it.

HERO
----
Main message:
"Quality Care, Affordable for Families"

Buttons:
- Book a Visit
- Enquire Now

CURRENT FEES SHOWN
------------------

3 MONTHS TO 2 YEARS
Daily Fees: £72
Full week Fees: £340
Full week session Fees: £190
Morning Session, 7:30 to 12:30: £42
Afternoon Session, 13:30 to 18:30: £42

2 YEARS
Daily Fees: £67
Full week Fees: £300
Full week session Fees: £180
Morning Session, 7:30 to 12:30: £40
Afternoon Session, 13:30 to 18:30: £40

3 YEARS TO 5 YEARS
Daily Fees: £65
Full week Fees: £290
Full week session Fees: £170
Morning Session, 7:30 to 12:30: £38
Afternoon Session, 13:30 to 18:30: £38

ADDITIONAL INFORMATION CARDS
----------------------------
- £20 non-refundable registration fee;
- refundable deposit;
- open 51 weeks;
- funded places.

Refundable Deposit:
The website states that a one-week deposit is required and returned as stated in
the parent handbook.

Funded Places:
The website states that funded places are available for eligible children for
38 weeks.

FUNDING SUPPORT FOR FAMILIES
----------------------------
Explains that the nursery can help families understand funded-place options.

Buttons:
- Enquire Now
- Email Us

FAQ AREA
--------
Questions include:
- Are meals and snacks included in the fees?
- What is your payment policy?
- How do I secure a place?
- What is your cancellation policy?
- Do you accept government funding?

IMPORTANT:
Fees, funding rules, deposits and policies can change.
Always confirm new information with the nursery owner before changing this page.


======================================================================
11. PAGE 6 - GALLERY (gallery.html)
======================================================================

PURPOSE
-------
The Gallery page gives parents a visual view of the real nursery environment.

HERO
----
Main message:
"A Glimpse Into Our Nursery Life"

Buttons:
- Book a Visit
- Enquire Now

GALLERY THEMES
--------------
The page explains that visitors may see:
- Bright Learning Spaces;
- Real Play Experiences;
- Outdoor Discovery;
- Cosy Corners;
- Creative Activities;
- Small Group Learning.

PHOTO AREA
----------
The page contains real photographs from the nursery.

Purpose:
- build trust;
- show the physical environment;
- help families understand the nursery before visiting.

FINAL CALL TO ACTION
--------------------
"Come and See Kinder Kidz in Person"

Buttons:
- Book a Visit
- Contact Us


======================================================================
12. PAGE 7 - PARENTS (parents.html)
======================================================================

PURPOSE
-------
The Parents page explains the nursery's relationship with parents and carers.

HERO
----
Main message:
"Working Together for Your Child's Happiness"

Buttons:
- Book a Visit
- Enquire Now

PARENT PARTNERSHIP CARDS
------------------------
Includes:
- Open Communication;
- Safe & Secure;
- Trusted Partnerships;
- Parent Involvement;
- Flexible & Supportive.

Purpose:
Shows that parents are part of the child's nursery journey and that the nursery
values communication, safety, trust, parent observations and family needs.

HOW WE SUPPORT YOU
------------------
Uses real nursery imagery and supporting content.

FINAL CALL TO ACTION
--------------------
"We're here for you and your family."

Buttons:
- Contact Us
- Book a Visit


======================================================================
13. PAGE 8 - CONTACT (contact.html)
======================================================================

PURPOSE
-------
The Contact page is the main action page for:
- general enquiries;
- visit requests;
- fees and funding questions;
- availability questions;
- telephone contact;
- email contact;
- nursery address and directions.

HERO
----
Main action buttons:
- Book a Visit
- Call Us Now

GET IN TOUCH CARD
-----------------
Displays:
Address:
26 Elizabeth Court, Laindon, SS15 5AG

Telephone:
07886 017430
01268 425881

Email:
kinderkidzdaynursery@hotmail.com

Opening hours:
7:30am - 6:30pm
Monday - Friday

ENQUIRY FORM
------------
The form contains:

1. Parent Name
2. Email
3. Phone Number
4. Child Age
5. Preferred Visit Date
6. Subject
7. Message

Child-age options include:
- 3 months to 2 years;
- 2 years;
- 3 years to 5 years.

Subject options include:
- Book a visit;
- General enquiry;
- Fees & funding;
- Availability.

FORM MODES
----------
The website uses URL parameters.

Visit:
contact.html?mode=visit#enquiry-form

Result:
- form title changes to Book a Visit;
- submit button changes to Request a Visit;
- subject is prepared as Book a visit.

General enquiry:
contact.html?mode=enquiry#enquiry-form

Result:
- form title remains an enquiry;
- subject is prepared as General enquiry.

IMPORTANT FORM DELIVERY NOTE
----------------------------
In the inspected website code, the enquiry form does not currently show a server
endpoint, email API, database endpoint or third-party form action.

This means the visible form interface should be tested carefully before public
launch to confirm that messages are actually delivered somewhere.

If no submission service has been connected, a future launch step must connect
the form to an appropriate backend/form service before relying on it for real
parent enquiries.

Do not assume that a form is sending emails just because the button is visible.

FIND US
-------
Displays the nursery address and a Get Directions button.

WE'RE HERE TO HELP
------------------
Explains that the nursery team can answer questions about:
- nursery;
- fees;
- sessions;
- admissions.


======================================================================
14. LANGUAGE SYSTEM
======================================================================

FILES
-----
Main language logic:
js/language.js

Language styling:
css/language.css

SUPPORTED LANGUAGES
-------------------
en = English
fr = Français
es = Español
pt = Português
pl = Polski

PREFERRED LANGUAGE
------------------
The language choice is stored in browser local storage using:

kkPreferredLanguage

This allows the selected language to continue when the visitor navigates through
the website.

HOW TRANSLATION WORKS
---------------------
The website starts from English content.
js/language.js contains translation mappings for the other languages.

IMPORTANT:
Translations often depend on the exact original English text.

If an English sentence is changed in an HTML file but the corresponding
translation key in js/language.js is not updated, the translation may stop
working for that sentence.

WHEN CHANGING TEXT
------------------
For any text that is translated:

1. Change the English text carefully.
2. Find the corresponding entry in js/language.js.
3. Update all required translations.
4. Test English.
5. Test French.
6. Test Spanish.
7. Test Portuguese.
8. Test Polish.

Do not change only the English page and assume all languages will update
automatically.


======================================================================
15. RESPONSIVE / DEVICE SYSTEM
======================================================================

This website must be treated as FIVE protected screen versions.

A. MOBILE PORTRAIT
------------------
Phone held upright.

Important features:
- compact header;
- logo;
- language button;
- burger menu;
- stacked/phone-friendly content;
- large touch-friendly buttons.

B. MOBILE LANDSCAPE
-------------------
Phone turned sideways.

This version has its own layout corrections and decorative animations designed
to use otherwise empty landscape spaces.

Important file:
css/mobile-landscape.css

Do not assume a portrait rule will also look correct in landscape.

C. TABLET PORTRAIT
------------------
Tablet held upright.

Important file:
css/tablet-portrait.css

This version has its own:
- menu layout;
- hero arrangement;
- footer layout;
- spacing.

D. TABLET LANDSCAPE
-------------------
Tablet turned sideways.

The approved layout is closer to the desktop layout.

E. DESKTOP
----------
Full wider navigation and desktop hero layouts.

IMPORTANT RESPONSIVE RULE
-------------------------
A correction for one version must not unintentionally modify another approved
version.

After EVERY future change test all five:
1. mobile portrait;
2. mobile landscape;
3. tablet portrait;
4. tablet landscape;
5. desktop.


======================================================================
16. MAIN WEBSITE FILE STRUCTURE
======================================================================

ROOT HTML FILES
---------------
index.html
about.html
rooms.html
learning.html
fees.html
gallery.html
parents.html
contact.html
README.txt

CSS FOLDER
----------
css/style.css
Shared styling used by several pages.

css/language.css
Language-selector and language-related styling.

css/tablet-portrait.css
Dedicated tablet portrait rules.

css/mobile-landscape.css
Dedicated mobile landscape rules and landscape-only decorative treatments.

NOTE:
Some pages also contain substantial page-specific CSS inside the HTML file.
Fees, Gallery, Contact and Parents in particular may contain page-specific
styling.

JS FOLDER
---------
js/script.js
General interaction logic, including burger-menu opening/closing and scroll
behaviour where used.

js/language.js
Five-language translation system and language persistence.

IMAGES FOLDER
-------------
Contains:
- logo;
- nursery photographs;
- gallery photographs;
- room / activity images;
- other image assets used by the pages.

Keep file names and paths unchanged unless the HTML/CSS references are also
updated.


======================================================================
17. MOST IMPORTANT DEVELOPMENT RULE - NO OVERRIDE CHAINS
======================================================================

THIS IS A PERMANENT MAINTENANCE RULE FOR THIS WEBSITE.

If something is wrong:
DO NOT keep adding new CSS rules at the bottom simply to override older rules.

Instead:

1. Identify the element that is wrong.
2. Find the original HTML/CSS/JS controlling it.
3. Search for conflicting rules.
4. Check style.css.
5. Check page-specific CSS inside the HTML.
6. Check tablet-portrait.css if tablet portrait is involved.
7. Check mobile-landscape.css if phone landscape is involved.
8. Check language.css if language UI is involved.
9. Check script.js for menu/interaction behaviour.
10. Check language.js if translation or language layout is involved.
11. Edit or remove the original conflicting rule.
12. Retest all approved versions.

Reason:
Repeated override layers make the website increasingly difficult to maintain and
can cause one fix to break another device or language.


======================================================================
18. HOW TO CHANGE COMMON WEBSITE CONTENT SAFELY
======================================================================

CHANGE A PHONE NUMBER
---------------------
Search all HTML files for the old number.
Also check:
- tel: links;
- footer;
- Contact page;
- top contact bar;
- language mappings if the surrounding text changes.

CHANGE EMAIL ADDRESS
--------------------
Search all pages for:
kinderkidzdaynursery@hotmail.com

Update:
- visible text;
- mailto: link.

CHANGE ADDRESS
--------------
Search all pages for:
26 Elizabeth Court

Update:
- Contact page;
- footer;
- map/directions link;
- any SEO/local-information text.

CHANGE OPENING HOURS
--------------------
Search for:
7:30am
6:30pm
Monday - Friday

Update everywhere.

CHANGE FEES
-----------
Edit fees.html.

Check:
- each age-group price card;
- morning fee;
- afternoon fee;
- daily fee;
- full-week fee;
- full-week session fee;
- translations.

After updating Fees:
test all five screen versions and all five languages.

CHANGE A PHOTO
--------------
Best method:
1. Use the same image file name and replace the file in /images.
2. Keep a similar aspect ratio where possible.
3. Compress large images before uploading.
4. Test image cropping on all screen sizes.

If using a new file name:
update every HTML/CSS reference to the old file.

CHANGE A NAVIGATION LABEL
-------------------------
This affects every page.

Update:
- all 8 HTML navigation menus;
- footer links where applicable;
- language.js translations.

Do not change one page only.

ADD A NEW PAGE
--------------
A new page requires:
- new HTML;
- navigation update on all pages;
- footer update;
- translation entries;
- desktop styling;
- mobile portrait styling;
- mobile landscape styling;
- tablet portrait styling;
- tablet landscape testing;
- active-menu state;
- SEO title and description;
- link testing.


======================================================================
19. NAVIGATION TROUBLESHOOTING
======================================================================

IF THE BURGER MENU IS TOO WIDE / TOO NARROW
-------------------------------------------
Do not immediately add an override.

Check:
- page-specific mobile nav rules;
- style.css;
- tablet-portrait.css;
- mobile-landscape.css;
- whether the page has duplicate .navlinks rules.

IF MENU ITEMS HAVE LARGE GAPS
-----------------------------
Check:
- flex settings;
- justify-content;
- height / min-height;
- gap;
- padding;
- page-specific rules.

IF LANGUAGE BUTTON MOVES WHEN MENU OPENS
----------------------------------------
Compare the affected page header rules to index.html / Home.

Check:
- .nav;
- language-picker sizing;
- burger spacing;
- page-specific header rules.

IF MENU IS SLOW OR DIFFICULT TO OPEN
------------------------------------
Check:
- duplicate menu event listeners;
- overlapping elements / z-index;
- page-specific nav CSS;
- script.js;
- inline menu scripts.

Do not create a second menu system.


======================================================================
20. LANGUAGE TROUBLESHOOTING
======================================================================

FLAG NOT SHOWING
----------------
Check:
- language.js;
- language.css;
- flag data / button markup;
- whether page-specific CSS is hiding or shrinking the flag.

TRANSLATION NOT CHANGING
------------------------
Check:
- exact English source text;
- matching entry in language.js;
- browser local storage;
- JavaScript console errors.

WRONG LANGUAGE REMAINS AFTER PAGE CHANGE
----------------------------------------
Check the localStorage key:
kkPreferredLanguage

Every page must load js/language.js.


======================================================================
21. GITHUB / UPLOAD WORKFLOW
======================================================================

The website has been used through GitHub Pages.

When updating:

1. Keep a backup ZIP before modifying anything.
2. Extract only the intended corrected files.
3. Preserve folder structure:
   css/
   js/
   images/
4. Replace the correct file.
5. Commit/upload changes.
6. Wait for GitHub Pages to deploy.
7. Refresh the live website.
8. If an old version still appears, perform a hard refresh or clear browser cache.
9. Test the changed page.
10. Test neighbouring pages to make sure nothing was affected.


======================================================================
22. FINAL MASTER BACKUP PROCEDURE
======================================================================

Once the owner has approved the finished website:

1. Download the ENTIRE repository.
2. Confirm it contains all HTML, CSS, JS, images and README.txt.
3. Rename the backup clearly, for example:

Kinder-Kidz-Day-Nursery-FINAL-MASTER-2026-09.zip

4. Store at least two copies:
- one local copy;
- one cloud / external backup.

5. Never overwrite the master with an experimental version.

For future work:
- copy the master;
- modify the copy;
- test it;
- only then replace the live version.


======================================================================
23. PRE-LAUNCH ITEMS TO VERIFY
======================================================================

The website design may be finished, but the following should be verified before
the final public/business launch:

[ ] Final .co.uk domain selected and registered
[ ] Custom domain connected to GitHub Pages
[ ] HTTPS working
[ ] Contact form confirmed to DELIVER real enquiries
[ ] Direct Google Maps address confirmed
[ ] Phone links tested
[ ] Email links tested
[ ] Ofsted link tested
[ ] All five languages tested
[ ] Mobile portrait tested
[ ] Mobile landscape tested
[ ] Tablet portrait tested
[ ] Tablet landscape tested
[ ] Desktop tested
[ ] Privacy information reviewed
[ ] Cookie requirements reviewed
[ ] Any required legal/business information reviewed
[ ] Sitemap / search-engine setup completed
[ ] Google Search Console considered
[ ] Google Business Profile link/details checked
[ ] Final master ZIP stored safely


======================================================================
24. QUICK TEST CHECKLIST AFTER ANY FUTURE MODIFICATION
======================================================================

PAGE TEST
---------
[ ] Page loads
[ ] Logo shows
[ ] Images show
[ ] No missing text
[ ] No unwanted blank space
[ ] No horizontal overflow

NAVIGATION
----------
[ ] Home
[ ] About Us
[ ] Our Rooms
[ ] Learning & Development
[ ] Fees & Funding
[ ] Gallery
[ ] Parents
[ ] Contact

LANGUAGES
---------
[ ] English
[ ] Français
[ ] Español
[ ] Português
[ ] Polski

DEVICES
-------
[ ] Mobile portrait
[ ] Mobile landscape
[ ] Tablet portrait
[ ] Tablet landscape
[ ] Desktop

BUTTONS
-------
[ ] Book a Visit
[ ] Enquire Now
[ ] Contact Us
[ ] Call
[ ] Email
[ ] Ofsted
[ ] Get Directions
[ ] Scroll arrow

CONTACT FORM
------------
[ ] Visit mode
[ ] Enquiry mode
[ ] Fields usable
[ ] Submit delivery confirmed


======================================================================
25. FINAL MAINTENANCE PRINCIPLES
======================================================================

1. Keep one master source.
2. Do not build override on top of override.
3. Fix the original rule.
4. Protect approved screen versions.
5. Test every language after translated content changes.
6. Back up before every major update.
7. Keep real nursery information accurate.
8. Keep fees and policies current.
9. Use real, good-quality, appropriately authorised nursery photographs.
10. Keep contact buttons simple and working.
11. Do not remove accessibility basics such as alt text without replacement.
12. Keep the website fast by compressing images.
13. Preserve the calm, warm and professional Kinder Kidz visual style.
14. Never assume a visible form is delivering messages - test it.
15. After a major change, test the live GitHub Pages version, not only a local copy.


======================================================================
26. WEBSITE AT A GLANCE
======================================================================

HOME:
Introduction, rooms preview, reasons to choose the nursery, Ofsted trust and CTA.

ABOUT US:
Story, values, nursery identity and what makes Kinder Kidz different.

OUR ROOMS:
Baby, toddler, pre-school and outdoor spaces.

LEARNING & DEVELOPMENT:
How children learn through play and the main development areas.

FEES & FUNDING:
Prices, registration/deposit information, funded places and FAQs.

GALLERY:
Real nursery photographs and visual introduction to the setting.

PARENTS:
Parent partnership, communication, safety, support and involvement.

CONTACT:
Phone, email, address, visit/enquiry form and directions.


======================================================================
END OF MANUAL
======================================================================

This README.txt should remain with the final Kinder Kidz Day Nursery website
backup so that a future developer, owner or maintainer can understand the
website before making changes.
