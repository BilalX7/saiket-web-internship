# Bilal Koubar Portfolio — Content Source of Truth

## Document status and editorial rules

- **Scope:** Approved English copy and final publication gates for SaiKet Systems Internship Task 1.
- **Owner:** Bilal Koubar.
- **Status:** Chunks 1–4 are implemented locally and await final owner/reviewer approval before any public push or deployment. Approved owner decisions in this document remain authoritative.
- Supplied facts and wording are retained wherever possible. Text marked **Pending owner approval** is a proposed editorial or classification choice, not a new fact.
- Unknown dates, private client identities, unverified links, and unsupported outcomes must not be inferred.
- Project order is fixed everywhere: **1. Dolarji; 2. Raki; 3. Kaleem; 4. Bank Exam System**.
- Exclude eCommerce, Hifz Coach, community work, and unrelated personal projects.

## Site-wide identity

| Field | Approved content |
|---|---|
| Name / wordmark | Bilal Koubar |
| Professional headline | Software Engineer · Full-Stack Engineer · Freelance Developer |
| Location | Lebanon |
| Email display | bilalkoubar014@gmail.com |
| Email link | `mailto:bilalkoubar014@gmail.com` |
| Phone display | +961 76 865 776 |
| Phone link | `tel:+96176865776` |
| GitHub | `https://github.com/BilalX7` |
| LinkedIn | `https://www.linkedin.com/in/bilal-koubar-2424a1241/` |
| CV path | `./assets/documents/Bilal_Koubar_CV_SoftwareEngineer.pdf` |
| Portrait path | `./assets/images/bilal-headshot.webp` |

Phone publication is explicitly approved by the owner for public display.

## Global navigation and control copy

### Skip and home

- Skip link: `Skip to main content`
- Wordmark/home label: `Bilal Koubar`
- Accessible home label if clarification is needed: `Bilal Koubar — back to top`

### Primary navigation

1. `About`
2. `Skills`
3. `Projects`
4. `Experience`
5. `Achievements`
6. `Contact`

### Controls

- Closed mobile menu label: `Open navigation menu`
- Open mobile menu label: `Close navigation menu`
- Light-theme action: `Switch to light theme`
- Dark-theme action: `Switch to dark theme`
- Theme state labels: `Light theme` and `Dark theme`
- Back-to-top label: `Back to top`

The implementation should update control names/states accurately instead of displaying all variants at once.

## Hero

- **Eyebrow:** `SOFTWARE ENGINEERING / FULL-STACK DEVELOPMENT`
- **H1:** `Building thoughtful software, from interface to infrastructure.`
- **Introduction:** `I'm Bilal Koubar, a software engineer and freelance full-stack developer based in Lebanon. I build practical web applications and AI-powered systems with a focus on clear user experiences and reliable backend architecture.`
- **Primary action:** `Explore Projects` → `#projects`
- **Secondary action:** `Get in Touch` → `#contact`
- **Text action:** `Download CV` → `./assets/documents/Bilal_Koubar_CV_SoftwareEngineer.pdf`
- **Supporting caption:** `Full-stack · AI/ML · Real-world client projects`
- **Portrait alt-text draft:** `Portrait of Bilal Koubar, a software engineer and full-stack developer based in Lebanon.`

The CV action must not point to a fake or empty file. If the real PDF is unavailable during implementation, keep the action out of the released interface until the asset is present and tested.

## About

### Section label and heading

- Label: `ABOUT`
- Heading: `Engineering useful, maintainable products.`

**Heading status: Pending owner approval.** It is an editorial section heading, not an achievement claim.

### Biography

`I graduated in Computer & Communications Networks Engineering and work across modern web development and applied AI. I enjoy taking a project from an initial problem through implementation, testing, and deployment—whether that means a Laravel-based financial platform, a React learning experience, or a Python-powered computer vision application. My focus is on building software that is useful, understandable, and maintainable.`

### Supporting metadata

- Label: `Location`
- Value: `Based in Lebanon`

### Specialty panels

1. **Full-stack applications**
   - `User-focused interfaces, backend workflows, APIs, databases, and reporting.`
2. **Applied AI**
   - `Computer vision models, model comparison, and explainable results.`

## Skills

### Section label and heading

- Label: `SKILLS`
- Heading: `A practical toolkit across the stack.`

**Heading status: Pending owner approval.**

### Proficiency legend

The proficiency classification and the following explanatory wording are **approved by the owner**.

- **Strong:** `Technologies used substantially in Bilal's development work and showcased projects.`
- **Working knowledge:** `Technologies Bilal has used or studied and can apply with appropriate project context.`
- **Learning:** `Technology currently being developed and not presented as a core strength.`

These labels are qualitative organization only. Do not add percentages, star ratings, years of experience, or the word `expert`.

### Approved homepage grouping

#### Strong

- Laravel
- Livewire
- PHP
- MySQL
- Python
- React
- JavaScript
- HTML5
- CSS3
- Tailwind CSS

#### Working knowledge

If displayed in subgroups, keep `Working knowledge` as the visible proficiency level.

- **Web and backend:** FastAPI, Alpine.js, REST APIs, Supabase, Firebase, PostgreSQL, Node.js
- **AI and data:** OpenCV, TensorFlow, scikit-learn
- **Tools and platforms:** Docker, Git/GitHub, Odoo/Python ORM

#### Learning

- Next.js

Next.js remains under Learning in the owner-approved classification and must not be presented as a core strength.

### Valid CV skills held outside the initial homepage

Java, C, C++, C#, networks/VoIP, Linux, and other CV-supported skills may remain available for later editorial consideration. They must not be inserted into an already crowded homepage without owner approval.

## Projects

### Section introduction

- Label: `SELECTED PROJECTS`
- Heading: `Software shaped around real problems.`
- Introductory copy: `A selection of full-stack, applied AI, client, and educational work. Each project is presented with source-grounded details and real interface imagery.`

**Heading and introduction status: Pending owner approval.** They are editorial framing only.

### Filter copy and category rules

Filters appear in this exact order:

1. `All` — Dolarji, Raki, Kaleem, Bank Exam System
2. `AI / ML` — Dolarji
3. `Full-stack` — Dolarji, Raki, Bank Exam System
4. `Client work` — Raki, Kaleem
5. `Education` — Kaleem, Bank Exam System

Counts may be shown only if generated from these exact assignments. Filtering must preserve the fixed relative order.

Suggested accessible status patterns:

- `Showing all 4 projects.`
- `Showing 1 project in AI / ML.`
- `Showing 3 projects in Full-stack.`
- `Showing 2 projects in Client work.`
- `Showing 2 projects in Education.`
- Empty fallback, if categories ever change: `No projects match this filter.`

### 01 / 04 — Dolarji

- **Title:** `Dolarji — AI-Powered Counterfeit Bill Detection`
- **Short card title if space is constrained:** `Dolarji`
- **Type:** `AI/ML + Full-stack · Final-year engineering project`
- **Completion note:** `Completed and defended`
- **Role label:** `Role`
- **Role:** `Full-stack and AI/ML development`
- **Description:** `An AI-powered application for analyzing US $100 bills. Users can submit a bill image, explore model-driven security-feature detection, and compare multiple detection approaches through a clear web dashboard.`
- **Technologies:** Python, React, FastAPI, YOLO26s, RT-DETR, ResNet50, Supabase
- **Categories:** AI / ML; Full-stack

#### Evidence highlights

- `5,000+ collected images`
- `6 security features`
- `Multi-model comparison`
- `Scan history and explainable insights`

#### Ordered gallery and alt-text drafts

1. `dolarji-hero.webp`
   - Caption: `Dolarji mobile landing page.`
   - Alt: `Dolarji mobile landing page introducing AI-powered analysis of US $100 bills.`
2. `dolarji-compare.webp`
   - Caption: `Dolarji model-selection view.`
   - Alt: `Dolarji mobile interface for choosing between counterfeit-detection models.`
3. `dolarji-results.webp`
   - Caption: `Dolarji desktop comparison results.`
   - Alt: `Dolarji desktop dashboard comparing model results and detected banknote security features.`

#### Actions and verification

- Supplied repository: `https://github.com/BilalX7/counterfeit-detector-webapp`
- Planned CTA if verified: `View source code`
- **Status:** Unverified for anonymous visitors. Do not render the CTA unless the repository opens without authentication and public sharing is appropriate. A 404 may indicate a private repository and is not evidence that it never existed.
- No demo URL is approved.

### 02 / 04 — Raki Quran Academy

- **Title:** `Raki Quran Academy — Financial Management System`
- **Short card title if space is constrained:** `Raki Quran Academy`
- **Type:** `Real client · Full-stack business application`
- **Role label:** `Role`
- **Role:** `Full-stack development for a real-world organization`
- **Description:** `A financial operations platform for a Lebanese Quran academy, with Arabic right-to-left dashboards for subscriptions, donations, staff payments, expenses, receipts, and reporting.`
- **Technologies:** Laravel 13, Livewire 3, Alpine.js, MySQL
- **Categories:** Full-stack; Client work

#### Evidence highlights

- `17 functional modules`
- `223 passing tests`
- `7 report types with Excel export`
- `Arabic RTL interface`

#### Ordered gallery and alt-text drafts

All four supplied images contain fake/sample data and are approved by the owner for public portfolio display. This media approval does not authorize publication of the Raki source-code repository.

1. `raki-subscriptions.webp`
   - Caption: `Arabic student subscriptions dashboard using sample data.`
   - Alt: `Arabic right-to-left Raki dashboard for managing student subscriptions with sample records.`
2. `raki-receivables.webp`
   - Caption: `Overdue receivables view using sample data.`
   - Alt: `Raki receivables interface showing overdue items and summary information with sample records.`
3. `raki-voucher.webp`
   - Caption: `Payment voucher preview using sample data.`
   - Alt: `Raki Arabic payment-voucher preview populated with sample payment information.`
4. `raki-annual-report.webp`
   - Caption: `Annual financial report using sample data.`
   - Alt: `Raki annual financial-report interface populated with sample organizational figures.`

#### Actions, verification, and publication status

- Supplied repository: `https://github.com/BilalX7/raki-academy`
- Planned CTA only if separately authorized and verified: `View source code`
- **Repository status:** Unverified and potentially private. Screenshot approval does not authorize publication of the repository; do not display a source link unless the owner separately authorizes it and anonymous access is verified.
- **Media status:** The four supplied screenshots contain fake/sample data, are present in the repository, and are approved for public portfolio display.
- No demo URL is approved.
- Do not reveal private repository access details.

### 03 / 04 — Kaleem

- **Title:** `Kaleem — Arabic Learning Platform`
- **Short card title if space is constrained:** `Kaleem`
- **Type:** `Real client · Educational web platform`
- **Role label:** `Role`
- **Role:** `Frontend and application development`
- **Description:** `A responsive Arabic-language learning platform developed for a real client, presenting educational offerings and supporting an engaging, accessible browsing experience.`
- **Technologies:** React, Firebase (Firestore and Authentication)
- **Categories:** Client work; Education

#### Evidence highlights

- `Real client project`
- `Responsive learning experience`
- `Firebase-backed capabilities`

#### Ordered gallery and alt-text draft

1. `kaleem-hero.webp`
   - Caption: `Kaleem educational landing page.`
   - Alt: `Full-width Arabic landing page for Kaleem, presenting its learning platform and educational offerings.`

#### Actions and verification

- Repository: `https://github.com/BilalX7/kaleemco`
- Planned repository CTA after recheck: `View source code`
- **Repository status:** Reported publicly viewable at planning time; reverify anonymously before publishing.
- Candidate demo: `https://kaleemco.netlify.app/`
- Planned demo CTA if verified and selected as canonical: `View live project`
- **Demo status:** Candidate only. Verify that it works, is suitable for public traffic, and is the canonical deployment; the repository reportedly mentions another URL.
- Do not invent enrollment counts, student outcomes, or a production LMS backend.

### 04 / 04 — Bank Exam System

- **Title:** `Bank Exam System`
- **Type:** `Full-stack · Education tool`
- **Role label:** `Role`
- **Role:** `Full-stack web development`
- **Description:** `An exam-resource management platform with Tutor and Student roles, supporting academic materials, course resources, and searchable exam content.`
- **Technologies:** PHP, MySQL, HTML, CSS, JavaScript, AJAX
- **Categories:** Full-stack; Education

#### Evidence highlights

- `Tutor/Student roles`
- `Exam and material organization`
- `Search by major, year, and semester`

#### Ordered gallery and alt-text draft

1. `bank-exam-search.webp`
   - Caption: `Bank Exam System search interface.`
   - Alt: `Bank Exam System interface for finding academic exam resources by major, year, and semester.`

Only one Bank Exam System screenshot was supplied. Do not create or imply a tenth project screenshot.

#### Actions and verification

- Supplied repository: `https://github.com/BilalX7/bank-exam-system`
- Planned CTA if verified: `View source code`
- **Status:** Unverified and potentially private. Do not render a public CTA until anonymous access is verified.
- No demo URL is approved.

### Shared project/gallery labels

- Gallery button pattern: `View [project name] image: [caption]`
- Dialog close label: `Close image viewer`
- Previous image label: `Previous image`
- Next image label: `Next image`
- Image position pattern: `Image 1 of 3`

Previous/next controls are only needed if the implemented viewer supports sequence navigation; do not present disabled fictional gallery items.

## Experience and education

### Section label and heading

- Label: `EXPERIENCE & EDUCATION`
- Heading: `Learning through building and teaching.`

**Heading status: Pending owner approval.**

### Experience — newest first

#### Web Development Intern — SaiKet Systems

- Date/status: `Current`
- Description: `Participating in a structured web development internship, building original web projects and documenting implementation decisions.`
- Accuracy note: Do not state that Task 1 or the internship is complete before completion/deployment.

#### Freelance Full-Stack Developer

- Date/status: `Ongoing`
- Description: `Independent web development work for clients in Lebanon, translating requirements into practical web experiences and application features.`
- Accuracy note: Do not guess a start year or name clients beyond project-card information already approved.

#### IT Intern — BanoPuratos Lebanon

- Date: `Jan 2026 – Feb 2026`
- Description: `Developed a custom Event Staffing module for Odoo 19 using Python ORM and XML views, contributed to ERP workflows, and built a responsive corporate website while collaborating with a development team.`

#### Private Programming Tutor — Kun Mostakbalak

- Date: `Sep 2022 – Jun 2024`
- Description: `Taught Python, JavaScript, problem solving, and front-end fundamentals through individual and small-group lessons.`

### Education

#### Bachelor of Engineering — Computer & Communications Networks

- Date: `2022–2026`
- Institution/location: `Islamic University of Lebanon, Faculty of Engineering · Wardenieh, Lebanon`

#### License of Engineering — Computer & Communications Networks

- Date: `2019–2022`
- Institution/location: `Lebanese University, Faculty of Technology · Saida, Lebanon`

No employment start dates, client outcomes, formal titles, honors, grades, or endorsements may be added without owner-supplied evidence.

## Achievements and certifications

### Section label and heading

- Label: `ACHIEVEMENTS & CERTIFICATIONS`
- Heading: `Verified figures and continued learning.`

**Heading status: Pending owner approval.**

### Verified counters

Use the final values as visible source content even when animation is unavailable.

1. **Value:** `5,000+`
   - Label: `Images in the Dolarji dataset`
2. **Value:** `6`
   - Label: `Security features analyzed by Dolarji`
3. **Value:** `17`
   - Label: `Functional modules in Raki`
4. **Value:** `223`
   - Label: `Passing tests in Raki`

The `7 report types with Excel export` fact stays in the Raki project evidence and must not become a fifth counter.

### Certifications

Use this exact order and wording unless the owner requests a change:

1. `Laravel 13 — Udemy (2026)`
2. `React JS — Udemy (2025)`
3. `Android Development — 1MillionCoders (2021)`
4. `HTML5 — University of Michigan / Coursera (2020)`
5. `CSS3 — University of Michigan / Coursera (2020)`
6. `Python — University of Michigan / Coursera (2020)`

No credential links, badge images, certificate IDs, or verification claims are approved.

## Contact

### Introductory copy

- Label: `CONTACT`
- Heading: `Let's build something useful.`
- Body: `Have a software project, freelance opportunity, or engineering role in mind? I'd be glad to hear about it.`

### Direct actions

- `Email me` → `mailto:bilalkoubar014@gmail.com`
- `Call me` → `tel:+96176865776`
- `GitHub` → `https://github.com/BilalX7`
- `LinkedIn` → `https://www.linkedin.com/in/bilal-koubar-2424a1241/`

### Contact form

#### Form explanation

`Complete the form to prepare an email in your default email app. The website does not send or store your message.`

#### Fields

| Label | Input intent | Proposed helper/validation copy |
|---|---|---|
| `Name` | Sender's name | Required error: `Enter your name.` |
| `Email` | Sender's email address | Required error: `Enter your email address.` Invalid error: `Enter a valid email address.` |
| `Subject` | Email subject | Required error: `Enter a subject.` |
| `Message` | Email body | Required error: `Enter a message.` |

#### Action and honest statuses

- Button: `Compose email`
- Pre-action hint: `Your email app will open with a draft for you to review and send.`
- If fields need attention: `Review the highlighted fields before composing your email.`
- If a mail app cannot be opened or is not configured: `If your email app did not open, email bilalkoubar014@gmail.com directly.`

Do not use `Sent successfully`, `Message delivered`, or any similar server-delivery claim. The website has no submission backend. Formspree is not enabled.

## Footer

- Name: `Bilal Koubar`
- Role: `Software Engineer · Full-Stack Engineer · Freelance Developer`
- Copyright pattern: `© [current year] Bilal Koubar. Built with HTML, CSS, and JavaScript.`
- Shortcut labels: `Projects`, `Experience`, `Contact`
- Social labels: `GitHub`, `LinkedIn`
- Control: `Back to top`

The implementation may update the year with JavaScript, but a correct static fallback must remain.

## SEO and social copy

| Field | Copy/status |
|---|---|
| Page title | `Bilal Koubar \| Software Engineer & Full-Stack Developer` |
| Meta description | `Explore Bilal Koubar's software engineering portfolio: full-stack web applications, AI-powered systems, real-client projects, and technical experience.` |
| Social share title | `Bilal Koubar — Software Engineering Portfolio` |
| Social share description | Use the approved meta description unless the owner requests a separate version. |
| Social share image | `./assets/images/social-preview.jpg` — original 1200×630 portrait-based design created in Chunk 4 |
| Site language | `en` |
| Expected site URL | `https://bilalx7.github.io/saiket-web-internship/` — unconfirmed until deployment |

The approved meta description is reused for social metadata. The expected absolute social-image URL is preconfigured for the planned repository path and must be verified or corrected before public sharing. No canonical URL is published until the repository slug and live Pages URL are confirmed.

## Asset inventory and alt-text coverage

The available approved set contains:

- One portrait with an alt-text draft in Hero.
- Three Dolarji screenshots with ordered captions and alt-text drafts.
- Four Raki sample-data screenshots with ordered captions and alt-text drafts, approved for public display.
- One Kaleem screenshot with caption and alt-text draft.
- One Bank Exam System screenshot with caption and alt-text draft.
- One real CV PDF requiring a descriptive download label.
- One original BK SVG favicon and one original 1200×630 portrait-based social preview created in Chunk 4.

All nine project screenshots, the professional headshot, and the CV are present in the repository. That is exactly three Dolarji screenshots, four Raki screenshots, one Kaleem screenshot, and one Bank Exam System screenshot. Chunk 4 adds only the authorized original favicon and social preview; no blank files, stock replacements, invented tenth screenshot, credential badge, or client logo is included.

## Copy approval and verification register

### Pending owner approval

- About, Skills, Projects, Experience/Education, and Achievements section headings proposed in this document.
- Project section introductory sentence.

### Approved owner decisions

- The skills classification and legend are approved.
- **Strong:** Laravel, Livewire, PHP, MySQL, Python, React, JavaScript, HTML5, CSS3, Tailwind CSS.
- **Working knowledge:** FastAPI, Alpine.js, REST APIs, Supabase, Firebase, PostgreSQL, Node.js, OpenCV, TensorFlow, scikit-learn, Docker, Git/GitHub, Odoo/Python ORM.
- **Learning:** Next.js.
- Working-knowledge items may remain subdivided into Web and backend, AI and data, and Tools and platforms for readability without changing their proficiency level.
- All nine project screenshots and the professional headshot are available in the repository.
- The four Raki screenshots contain fake/sample data and are approved for public portfolio display; this does not authorize publication of the Raki source-code repository.
- The phone number `+961 76 865 776` is approved for public display.

### Requires verification before related content is published

- Dolarji, Raki, and Bank Exam repository URLs returned 404 to an anonymous check on 2026-11-23; their CTAs remain omitted and their visibility/permission must be resolved separately before any future publication.
- Kaleem repository access was anonymously verified as public on 2026-11-23; the existing source CTA remains.
- The Kaleem canonical live URL must be selected and tested; the Netlify address is only a candidate.
- The final GitHub Pages repository name, live URL, and availability must be confirmed. The expected social-image URL is preconfigured but not claimed live.

### Intentionally unresolved, with safe current wording

- SaiKet Systems internship start date: use `Current`; do not invent a date.
- Freelance start date: use `Ongoing`; do not invent a year.
- Unverified repositories/demos: omit the public CTA until verified.

## Content integrity checklist for later chunks

- [ ] Preserve Dolarji → Raki → Kaleem → Bank Exam System in the document, desktop layout, mobile layout, filters, and gallery associations.
- [ ] Keep Next.js under Learning according to the approved classification unless the owner later revises it.
- [ ] Keep the four achievement values attached to the correct projects.
- [ ] Keep `7 report types with Excel export` as Raki evidence, not a counter.
- [ ] Do not add project metrics, testimonials, client logos, visitor counts, performance claims, enrollments, or demo status without evidence.
- [ ] Do not imply a company client for Dolarji.
- [ ] Do not name additional freelance clients without permission.
- [ ] Do not claim contact-form delivery; explain the email-app behavior.
- [ ] Do not display repository/demo actions that have not passed their gates.
- [ ] Use only the approved Raki sample-data screenshots; do not publish the Raki source-code repository without separate owner authorization and anonymous-access verification.

## Chunk 0 content sign-off

This document contains the planned English copy for every portfolio section, ordered project data, gallery labels and alt-text drafts, experience, education, skills, certifications, contacts, and metadata. Proposed editorial text and unresolved facts are visibly marked. Owner and reviewer approval is required before this copy is implemented in Chunk 1.
