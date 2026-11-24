# Bilal Koubar — Professional Portfolio

This single-page portfolio is SaiKet Systems Web Development Internship Task 1. It presents Bilal
Koubar's approved experience, skills, projects, achievements, and contact information through an
original editorial engineering design.

The project uses only semantic HTML, modern CSS, and vanilla JavaScript. It has no package manager,
framework, runtime dependency, analytics, backend, or build step.

## Preview locally

Serving the folder over HTTP is more reliable than opening `index.html` directly because browsers
apply different restrictions to `file://` pages.

From the repository root:

```powershell
cd task-1-portfolio
python -m http.server 8000
```

Then open `http://127.0.0.1:8000/`. Stop the server with `Ctrl+C`.

An editor's local static server is also suitable. No dependency installation is required.

## Structure

```text
task-1-portfolio/
├── index.html                    Semantic content, metadata, and interaction hooks
├── css/style.css                 Design tokens, themes, responsive layout, and states
├── js/main.js                    Progressive vanilla JavaScript enhancements
├── assets/
│   ├── documents/               Downloadable CV
│   ├── icons/favicon.svg        Original BK favicon
│   └── images/                  Portrait, project evidence, and social preview
└── docs/
    ├── portfolio-spec.md        Product and implementation decisions
    ├── portfolio-content.md     Approved content source of truth
    └── chunk-4-validation.md    Verification evidence and release checklist
```

Semantic elements keep the reading order and landmarks useful to browsers and assistive
technology. CSS custom properties centralize the color, spacing, type, radius, and motion system.
`main.js` progressively enhances the native page only after each feature is ready.

## Features and accessibility

- System-aware dark/light theme with a stored manual preference when browser storage is available.
- Responsive menu below 1088px. Press `Escape` to close it and return focus to the menu button.
- Active-section navigation, project filters, restrained one-time reveals, and verified counters.
- Native project-image dialog for all nine screenshots. Press `Escape` or use the visible close
  button; focus returns to the image trigger.
- Contact validation that opens an encoded `mailto:` draft in the visitor's configured email app.
  The website does not send or store the message. The direct email link remains available when no
  mail application is configured.
- Visible keyboard focus, a skip link, reduced-motion handling, and meaningful image alternatives.
- With JavaScript disabled, navigation, all projects, all screenshots, direct contact links, final
  counter values, and the native Back-to-top link remain available.

## Maintaining project media

Keep the fixed project order: Dolarji, Raki, Kaleem, Bank Exam System.

When replacing an approved screenshot:

1. Export a readable WebP without stretching or cropping important interface evidence.
2. Record its real intrinsic `width` and `height` in the corresponding `<img>`.
3. Write meaningful `alt` text and keep the adjacent caption accurate.
4. Keep `data-gallery-src`, `data-gallery-caption`, and the trigger's accessible label synchronized.
5. Do not add client originals, private data, fabricated images, or unapproved repository links.

The four Raki screenshots contain owner-approved sample data. That approval does not authorize
publishing the Raki source repository or other client files.

## Verification status

Static source, asset, HTTP, syntax, structure, metadata, and deployment-artifact checks are recorded
in [`docs/chunk-4-validation.md`](./docs/chunk-4-validation.md). Browser screenshots, Lighthouse,
200% zoom, and a full native keyboard/screen-reader pass remain release checks when a supported
browser test environment is available.

## Prepare GitHub Pages publication

The repository workflow stages only `index.html`, `css/`, `js/`, and `assets/` from this directory.
It deliberately excludes `docs/`, this README, and future sibling internship tasks from the Pages
artifact.

Before publication:

1. Confirm that the repository will be named `saiket-web-internship` under `BilalX7`, or update the
   preconfigured social-image URL in `index.html`.
2. Confirm the default branch. The prepared workflow currently targets `main`.
3. Review `.gitignore` and `git status`; do not commit credentials, source ZIPs, or private client
   material.
4. Initialize Git and connect the approved remote if the repository is not already initialized.
5. Commit locally, then push only after owner/reviewer approval.
6. In GitHub, open **Settings → Pages → Build and deployment** and choose **GitHub Actions**.
7. Confirm Actions workflow permissions, inspect the workflow run, and verify the reported Pages URL.
8. After deployment, verify HTTPS, the favicon, the absolute social-preview URL, all anchors and
   contact links, mobile layouts, and the downloaded CV.

If the site URL differs from `https://bilalx7.github.io/saiket-web-internship/`, update the Open
Graph and Twitter image URL before sharing the site. No canonical URL is included until the actual
deployment URL is confirmed.

## Troubleshooting

- **Menu remains visible without JavaScript:** expected progressive-enhancement behavior.
- **Theme is not remembered:** verify that browser storage is enabled and the page is served over
  HTTP rather than opened in a restricted context.
- **Contact button does not open an app:** configure a default mail handler or use the visible email
  address directly.
- **Social preview is missing:** confirm the deployed absolute image URL returns the 1200×630 JPEG,
  then refresh the target platform's link-preview cache.
- **Workflow does not run:** confirm the default branch is `main`, Pages uses GitHub Actions, and the
  workflow file is on that branch.

## 60–90 second LinkedIn demo outline

**0–10 seconds — Introduction**
“Hi, I'm Bilal Koubar. This is my professional portfolio for SaiKet Systems Web Development
Internship Task 1, built from scratch with semantic HTML, modern CSS, and vanilla JavaScript.”

**10–22 seconds — Hero and themes**
Show the hero, professional portrait, responsive header, and dark/light theme control. Mention that
the theme follows the system preference and can remember a visitor's choice.

**22–48 seconds — Projects**
Navigate to Projects and show the fixed order: Dolarji, Raki, Kaleem, and Bank Exam System. Use a
filter, then open one real screenshot in the accessible image viewer. Explain that the Raki images
use approved sample data and that private client source code is not published.

**48–68 seconds — Experience and contact**
Briefly show Experience, verified achievement figures, and the contact section. Demonstrate that
the form prepares an email draft rather than claiming to send data from the website.

**68–80 seconds — Closing**
“This project helped me practice responsive design, progressive enhancement, accessibility, and
deployment preparation. Thank you to SaiKet Systems for the opportunity to build and document it.”

When the project is approved and published, tag SaiKet Systems and use:
`#saiketsystems #saiket #saiketsys #WebDevelopment #HTML #CSS #JavaScript`

Do not describe the internship as completed, claim a live deployment, or quote performance scores
until those statements have been independently verified.
