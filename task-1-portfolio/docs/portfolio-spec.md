# Bilal Koubar Portfolio — Product and Implementation Specification

## Document status

- **Internship:** SaiKet Systems Web Development Internship — Task 1
- **Chunk:** 4 — final local polish and deployment preparation
- **Owner:** Bilal Koubar
- **Implementation status:** Chunks 1–4 are implemented locally: semantic HTML, responsive CSS, vanilla JavaScript, approved media, original identity assets, documentation, validation evidence, and a staged GitHub Pages workflow are present. Public deployment has not occurred.
- **Authority:** Owner decisions and supplied CV facts in the Chunk 0 brief are the source of truth. Editorial proposals and unresolved facts are explicitly labeled.
- **Review gate:** Owner and reviewer approval is required before any GitHub push or public deployment.

## Product definition

Create an original, professional, single-page, English-language portfolio for Bilal Koubar, a software engineer, full-stack developer, and freelancer in Lebanon. The portfolio will present grounded technical work, experience, education, certifications, and contact options through an editorial visual system inspired by software-engineering precision.

The final site must:

- Use semantic HTML, modern CSS, and vanilla JavaScript only.
- Remain readable and navigable if CSS or JavaScript fails.
- Be responsive, mobile-first, keyboard accessible, and respectful of reduced-motion preferences.
- Offer dark and light themes, initially following the system preference and remembering an explicit visitor choice.
- Use only owner-supplied content and images; it must not fabricate claims, outcomes, endorsements, media, or case studies.
- Deploy as a static GitHub Pages artifact without a framework, dependency installation, bundler, transpiler, or build step.
- Keep the project sequence **Dolarji → Raki → Kaleem → Bank Exam System** in every view and filtered result.

Excluded content includes the eCommerce project, Hifz Coach, community work, unrelated projects, stock media, fabricated demo links, and unscreened private client data.

## Design rationale

The visual direction is calm editorial engineering: an intentional column grid, strong typographic hierarchy, generous whitespace, hairline rules, compact mono technical labels, and carefully framed real project imagery. Project screenshots are the principal visual evidence rather than decorative effects. A slightly offset outline around the portrait and numbered labels such as `01 / 04` form the recognizable visual signature.

The design must avoid glowing gradients, excessive glassmorphism, animated particles, generic wave shapes, code rain, stock workspace photography, and animation that competes with the content. This creates a distinctive result without copying another portfolio and keeps attention on Bilal's real work.

## Technology and content constraints

| Area | Decision |
|---|---|
| Architecture | One static, anchor-linked page |
| Language | English only |
| Front end | Plain semantic HTML, modern CSS, vanilla JavaScript |
| Dependencies | None; no framework, component library, build tool, or icon pack |
| Hosting | GitHub Pages via a custom Actions workflow in Chunk 4 |
| Themes | System preference by default; dark/light manual choice persisted in `localStorage` |
| Content | Supplied facts and approved editorial copy only |
| Media | Owner-supplied portrait, screenshots, and CV only |
| Contact delivery | Accessible `mailto:` composition; no backend and no claim that the website sent a message |
| Project order | Dolarji, Raki, Kaleem, Bank Exam System — immutable across layouts and filters |

## Repository and deployment plan

### Complete planned layout

```text
saiket-web-internship/
├── README.md                              # Multi-task internship overview
├── task-1-portfolio/
│   ├── index.html                         # Chunk 1
│   ├── README.md                          # Local preview, maintenance, and release guide
│   ├── css/
│   │   └── style.css                      # Chunk 2
│   ├── js/
│   │   └── main.js                        # Chunk 3
│   ├── assets/
│   │   ├── images/
│   │   │   ├── bilal-headshot.webp
│   │   │   ├── social-preview.jpg
│   │   │   └── projects/
│   │   │       ├── dolarji-hero.webp
│   │   │       ├── dolarji-compare.webp
│   │   │       ├── dolarji-results.webp
│   │   │       ├── raki-subscriptions.webp
│   │   │       ├── raki-receivables.webp
│   │   │       ├── raki-voucher.webp
│   │   │       ├── raki-annual-report.webp
│   │   │       ├── kaleem-hero.webp
│   │   │       └── bank-exam-search.webp
│   │   ├── documents/
│   │   │   └── Bilal_Koubar_CV_SoftwareEngineer.pdf
│   │   └── icons/
│   │       └── favicon.svg                # Designed in Chunk 4; not a supplied asset
│   └── docs/
│       ├── portfolio-spec.md              # Chunk 0
│       ├── portfolio-content.md           # Chunk 0
│       └── chunk-4-validation.md           # Final verification evidence
├── task-2-ecommerce-product-page/         # Future separate task; do not create now
├── task-3-navigation-menu/                # Future separate task; do not create now
└── .github/
    └── workflows/
        └── deploy-portfolio.yml           # Chunk 4
```

Only `task-1-portfolio/docs/portfolio-spec.md` and `task-1-portfolio/docs/portfolio-content.md` are created in Chunk 0. Future internship tasks remain sibling folders so their code and evaluation stay separate.

The final Pages workflow stages only `index.html`, `css/`, `js/`, and `assets/` into `_site`, adds
`.nojekyll`, verifies the artifact contents, and uploads `_site` so `index.html` is at the artifact
root. Source documentation, READMEs, and future sibling tasks are excluded from the public artifact.
The workflow targets `main`, which must be confirmed as the actual default branch before release.

### Deployment-path reasoning

GitHub Pages branch publishing can normally expose the repository root or a `/docs` folder, not an arbitrary nested `task-1-portfolio/` directory. In Chunk 4, a GitHub Actions static-site workflow will upload **the contents of** `task-1-portfolio/` as the Pages artifact. Consequently, `index.html` will be at the artifact root even though it stays inside the task folder in source control. No framework or build step is required.

The expected project URL is `https://bilalx7.github.io/saiket-web-internship/` if the account and repository names remain unchanged and Pages is enabled. This is an expectation, not a claim that the site is live. Source files will use deployment-safe relative paths such as `./css/style.css` and `./assets/images/...`, plus same-page fragments such as `#projects`. Root-relative paths must be avoided because they can break on a GitHub project site.

Official implementation references:

- [Configuring a publishing source for GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Using custom workflows with GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

## Information architecture

The semantic reading order is fixed:

1. Skip link, header, and primary navigation
2. Hero
3. About
4. Skills
5. Projects
6. Experience and education
7. Achievements and certifications
8. Contact
9. Footer

Primary navigation labels and fragments are `About` (`#about`), `Skills` (`#skills`), `Projects` (`#projects`), `Experience` (`#experience`), `Achievements` (`#achievements`), and `Contact` (`#contact`). The single H1 belongs in the hero. Section titles use H2, with cards and timeline entries using H3 where needed.

## Design tokens

These tokens are the default art direction pending visual review. They will be implemented in Chunk 2 and contrast-tested rather than assumed compliant.

### Color roles

| Token | Dark theme | Light theme | Usage |
|---|---:|---:|---|
| `--color-bg` | `#0B1922` | `#F8FAF9` | Page background |
| `--color-surface` | `#142B35` | `#FFFFFF` | Cards and navigation surfaces |
| `--color-surface-alt` | `#1A3640` | `#ECF3F1` | Alternate surface and grouped content |
| `--color-text` | `#EAF4F4` | `#13242C` | Primary text and headings |
| `--color-muted` | `#AEC3CB` | `#415963` | Secondary text |
| `--color-accent` | `#40DDB6` | `#006E62` | Links, highlights, and active controls |
| `--color-on-accent` | `#0B1922` | `#FFFFFF` | Text on a filled accent control |
| `--color-border` | `#36515C` | `#D5E1E1` | Hairlines, dividers, and input borders |
| `--color-warm` | `#E8B47F` | `#925927` | Small supporting detail only |
| `--color-focus` | `#82EBD1` | `#006E62` | High-visibility focus indicator |

Main text, muted text, link states, and button labels target WCAG AA contrast of at least 4.5:1 for standard text. Large text may use the applicable 3:1 threshold. Focus indicators and meaningful UI boundaries must remain perceptible in both themes. Actual combinations will be measured in Chunk 2 and adjusted if any fail.

### Typography

| Role | Token/decision | Value |
|---|---|---|
| Primary family | `--font-sans` | `Manrope`, `Inter`, `system-ui`, `sans-serif` |
| Technical labels | `--font-mono` | `IBM Plex Mono`, `ui-monospace`, `monospace` |
| Hero title | `--text-hero` | approximately `clamp(2.6rem, 5.8vw, 5.4rem)` |
| Body | `--text-body` | approximately `1rem` to `1.125rem` |
| Body leading | `--leading-body` | `1.6` |
| Heading leading | `--leading-heading` | `1.08` to `1.2` |

Manrope and IBM Plex Mono may be loaded from Google Fonts with robust local fallbacks. Font loading must not hide text. The title scale must be verified at 360px so it never forces horizontal overflow.

### Spacing, sizing, and layout

- Spacing scale: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128px`.
- Content maximum width: `1200px`.
- Horizontal content padding: `20px` phone, `32px` tablet, `48px` desktop, clamped where useful.
- Radius scale: `8px` small, `14px` cards, `22px` feature/image frames, and full-pill chips.
- Touch targets: target at least `44 × 44` CSS pixels for primary interactive controls where practical.
- Breakpoint test widths: `360`, `390`, `768`, `1024`, and `1440px`. Breakpoints should follow content needs rather than device names.
- Desktop composition: intentional grid, generally 12 columns or equivalent CSS Grid tracks, while preserving DOM reading order.
- Mobile composition: one content column unless a small paired item remains readable without crowding.

### Borders, shadows, and motion

- Use hairline borders and restrained shadows. Light theme may use minimal layered shadows; dark theme relies primarily on subtle borders rather than glow.
- Ordinary hover, focus, and control feedback lasts approximately `150–250ms`.
- Section entrances may fade/translate once; counters may animate once; neither may conceal fallback content.
- Under `prefers-reduced-motion: reduce`, remove nonessential transforms, counter animation, and smooth scrolling while preserving immediate state changes.

## Written wireframes

All layouts preserve the same document and project order. Responsive changes must happen in CSS without duplicating meaningful content.

### 1. Header and navigation

**Desktop:** A narrow sticky header spans the viewport with a constrained inner row. `Bilal Koubar` sits at the left as the wordmark/home link. The six anchor links form the center/right navigation; the theme toggle is the final control. A slim border separates the header from content after scrolling. The skip link is the first focusable element and appears visibly when focused. Scroll spy marks one active section without relying on color alone.

**Mobile:** The wordmark and two controls—theme toggle and labeled menu button—fit on one row without clipping. The menu opens as a clear surface below the header, with vertically stacked, generous link targets in document order. It closes on link selection or Escape and returns focus appropriately. No page content is trapped behind an inaccessible overlay.

### 2. Hero

**Desktop:** A spacious two-column composition places the eyebrow, one H1, introduction, actions, and supporting caption on the left. `Explore Projects` is primary, `Get in Touch` is secondary, and `Download CV` is a quieter text link. The edited head-and-shoulders portrait sits on the right in a large, restrained frame with an offset outline and subtle technical metadata. The face remains the focal point.

**Mobile:** Text comes first, followed by actions that wrap or stack without overlap, then the portrait. The image frame becomes full-width within page padding and preserves the face without clipping. The supporting caption remains legible and does not become a decorative floating badge.

### 3. About

**Desktop:** The section label and heading occupy a narrow column; the biography occupies a wider reading column. Two compact specialty panels—`Full-stack applications` and `Applied AI`—sit beside or below the biography. `Based in Lebanon` may appear as supporting metadata.

**Mobile:** Heading, biography, location metadata, and the two specialty panels stack in that order. Paragraph width and spacing prioritize comfortable reading; the specialty panels do not become a tiny two-column grid.

### 4. Skills

**Desktop:** An introductory legend explains `Strong`, `Working knowledge`, and `Learning`. Three clearly labeled groups use compact columns or chips. If the Working knowledge group is subdivided by Web/Backend, AI/Data, and Tools for scanning, the proficiency label remains visible. No percentages, bars, stars, or invented experience durations appear.

**Mobile:** Proficiency groups stack, with wrapped chips and comfortable spacing/tap areas. The legend precedes the lists. Next.js appears only under Learning. The owner-approved classification must remain consistent across viewport sizes.

#### Approved skills classification

- **Strong:** Laravel, Livewire, PHP, MySQL, Python, React, JavaScript, HTML5, CSS3, Tailwind CSS.
- **Working knowledge:** FastAPI, Alpine.js, REST APIs, Supabase, Firebase, PostgreSQL, Node.js, OpenCV, TensorFlow, scikit-learn, Docker, Git/GitHub, Odoo/Python ORM.
- **Learning:** Next.js.

Working-knowledge items may be subdivided into Web and backend, AI and data, and Tools and platforms for scanning, but the visible `Working knowledge` level must continue to apply to every item. This owner-approved classification replaces the earlier editorial proposal.

### 5. Projects

**Desktop:** The section introduction is followed by filters in this order: `All`, `AI / ML`, `Full-stack`, `Client work`, `Education`. Project cards use a two-column grid or alternating editorial rows while the DOM and visual reading order remain Dolarji, Raki, Kaleem, Bank Exam System. Each shows a mono index (`01 / 04` through `04 / 04`), title, type, role, concise description, selected technology tags, supported evidence highlights, one primary screenshot, any approved repository/demo action, and gallery controls where multiple approved images exist. Images have enough room to remain readable and are not forced into a uniform crop.

**Mobile:** A one-column list preserves the exact order. Each screenshot spans the card width within its natural aspect ratio, followed by text and actions. Filters may wrap but remain keyboard reachable and visually selected. Filtering hides nonmatching cards without reordering the matching cards. Gallery thumbnails or buttons remain large enough to operate.

**Viewer behavior:** In Chunk 3, approved project images may open in a native accessible dialog with a visible close button, Escape support, focus placement/restoration, a descriptive title/caption, and no loss of access to the underlying project content. The four supplied Raki screenshots contain fake/sample data and are approved for public display.

### 6. Experience and education

**Desktop:** A section heading introduces two balanced columns: Experience on the left and Education on the right, or a clearly separated paired timeline. Experience is newest first: SaiKet Systems, freelance work, BanoPuratos, then Kun Mostakbalak. Dates align consistently without implying unknown start dates.

**Mobile:** Experience and then Education stack as full-width timeline groups. Each entry presents title, organization, date/status, and one factual description. Timeline decoration never replaces semantic headings or text.

### 7. Achievements and certifications

**Desktop:** Four equally weighted counters appear first: `5,000+`, `6`, `17`, and `223`, each paired with a precise label. A compact certification grid/list follows with exact issuer and year wording. The layout distinguishes Dolarji figures from Raki figures.

**Mobile:** Counters use a readable one- or two-column arrangement depending on available width, followed by a stacked certification list. Final numeric values are present in HTML and exposed directly to assistive technology even if sighted animation is used later.

### 8. Contact

**Desktop:** A warm invitation and direct actions (email, phone, GitHub, LinkedIn) occupy one column; the form occupies the other. The form has Name, Email, Subject, and Message fields, clear required indicators/hints, inline error locations, and an honestly labeled `Compose email` control. Supporting text explains that the visitor's email app opens and the website does not send the message.

**Mobile:** Invitation, direct links, explanation, and form stack. Labels remain above fields, error messages stay adjacent to their fields, and the primary action fills or nearly fills the available width. Direct email remains available if the visitor has no configured mail application.

### 9. Footer

**Desktop:** A light divider precedes a row containing name/role and copyright on the left, with section shortcuts, social links, and Back to top on the right. The current year may be enhanced dynamically but must have a sensible visible fallback.

**Mobile:** Content stacks into short groups with Back to top as an obvious final control. Link targets remain comfortable, and the footer does not repeat a dense copy of the whole header menu.

## Image and screenshot treatment

- Preserve each source image's native aspect ratio; never stretch it.
- Frame screenshots consistently with a border, radius, and restrained background, but do not force mobile Dolarji captures and desktop dashboards into the same crop.
- Keep important interface text visible. Use full-image views or `object-fit: contain` where cropping would hide evidence.
- Prioritize the hero portrait if testing shows it is part of the initial viewport; lazy-load noncritical gallery images.
- Provide intrinsic dimensions or an aspect ratio to prevent layout shift.
- Convert approved sources to WebP at a quality that retains readable UI text. Responsive variants may be added where they materially reduce transfer size.
- Strip unnecessary metadata during final optimization.
- Alt text describes the meaningful interface shown; adjacent captions provide project context. Decorative framing receives empty alternative text or is implemented in CSS.
- Never hotlink ChatGPT attachments. Only copied, approved repository assets may be published.
- Use only the four approved Raki sample-data screenshots currently in the repository. Their display approval does not authorize publication of the Raki source-code repository or future unscreened client captures.

## Asset manifest

The files listed below are present in the repository and match the approved manifest.

| Current path under `task-1-portfolio/assets/` | Supplied attachment | Purpose/status |
|---|---|---|
| `images/bilal-headshot.webp` | `polished_corporate_headshot.png` | Edited professional portrait; convert without stretching |
| `images/social-preview.jpg` | Original Chunk 4 composition using the approved portrait | 1200×630 social preview; expected absolute public URL must be verified after deployment |
| `images/projects/dolarji-hero.webp` | `WhatsApp Image 2026-07-27 at 17.56.25(3).jpeg` | Dolarji mobile landing page |
| `images/projects/dolarji-compare.webp` | `WhatsApp Image 2026-07-27 at 18.05.46.jpeg` | Dolarji mobile model-selection view |
| `images/projects/dolarji-results.webp` | `WhatsApp Image 2026-07-27 at 17.56.25(4).jpeg` | Dolarji desktop comparison results |
| `images/projects/raki-subscriptions.webp` | `image(20261122-171834).png` | Arabic subscriptions dashboard with fake/sample data; approved for public display |
| `images/projects/raki-receivables.webp` | `image(20261122-171919).png` | Overdue receivables with fake/sample data; approved for public display |
| `images/projects/raki-voucher.webp` | `image(20261122-172014).png` | Payment voucher with fake/sample data; approved for public display |
| `images/projects/raki-annual-report.webp` | `image(20261122-172030).png` | Annual report with fake/sample data; approved for public display |
| `images/projects/kaleem-hero.webp` | `image(20261122-161419).png` | Kaleem full-width landing page |
| `images/projects/bank-exam-search.webp` | `image(20261122-203052).png` | Bank Exam System search interface |
| `documents/Bilal_Koubar_CV_SoftwareEngineer.pdf` | `Bilal_Koubar_CV_SoftwareEngineer.pdf` | Owner's real CV; required for download action |
| `icons/favicon.svg` | Original Chunk 4 BK monogram | Lightweight site identity favicon |

All **nine project screenshots** are available: three Dolarji, four Raki, one Kaleem, and one Bank Exam System, plus the professional headshot and CV. No tenth Bank Exam image is available and none will be fabricated. Chunk 4 added the original BK favicon and portrait-based social preview without replacing approved project media.

## Link manifest and publication status

| Destination | Intended label/use | Status and gate |
|---|---|---|
| `#projects` | Explore Projects | Internal; implement in Chunk 1 |
| `#contact` | Get in Touch | Internal; implement in Chunk 1 |
| `./assets/documents/Bilal_Koubar_CV_SoftwareEngineer.pdf` | Download CV | Present in the repository and validated as a PDF during Chunk 1 |
| `mailto:bilalkoubar014@gmail.com` | Email me / form fallback | Owner-authorized |
| `tel:+96176865776` | Call me | Owner-authorized public phone |
| `https://github.com/BilalX7` | GitHub profile | Anonymous access verified on 2026-11-23 |
| `https://www.linkedin.com/in/bilal-koubar-2424a1241/` | LinkedIn profile | Supplied; verify before release |
| `https://github.com/BilalX7/counterfeit-detector-webapp` | Dolarji source | Anonymous request returned 404 on 2026-11-23; CTA remains omitted |
| `https://github.com/BilalX7/raki-academy` | Raki source | Anonymous request returned 404 on 2026-11-23; CTA remains omitted and source publication is not authorized |
| `https://github.com/BilalX7/kaleemco` | Kaleem source | Public anonymous access verified on 2026-11-23; existing CTA retained |
| `https://kaleemco.netlify.app/` | Kaleem live demo candidate | **Candidate only; verify availability and canonical deployment before rendering** |
| `https://github.com/BilalX7/bank-exam-system` | Bank Exam source | Anonymous request returned 404 on 2026-11-23; CTA remains omitted |
| `https://bilalx7.github.io/saiket-web-internship/` | Expected portfolio URL | Not live/confirmed until Pages is configured and tested |

If external links open a new tab, they must use safe opener isolation and descriptive accessible labels. A 404 on a private GitHub repository does not prove the repository is nonexistent.

## Interaction specification

| Feature | Behavior | Keyboard/accessibility and fallback | Chunk |
|---|---|---|---|
| Anchor navigation | Navigate to semantic section fragments; smooth scrolling only when allowed | Native links work without JS; focused section is not hidden behind sticky header | 1/3 |
| Skip link | Move focus past repeated navigation to main content | First focusable item; visible on focus | 1 |
| Sticky navigation and scroll spy | Header remains available after scrolling; active section updates robustly | Active state is not color-only; native navigation works if observer is unavailable | 3 |
| Responsive menu | Toggle navigation, close after selection and on Escape | Real button with expanded/control state; managed focus and sensible restoration | 3 |
| Theme switcher | Follow system initially; persist explicit light/dark choice in `localStorage` | Labeled button, visible focus, state announced, storage errors tolerated, no layout shift | 3 |
| Project filters | All/AI / ML/Full-stack/Client work/Education; preserve relative source order | Buttons expose selected state; result count/status announced politely; all cards visible without JS | 3 |
| Project gallery | Open approved image in native dialog with caption | Visible close button, Escape, initial focus, focus restoration; ordinary images remain usable without JS | 3 |
| Reveal on scroll | Subtle, one-time entrance enhancement | Content starts visible; disabled for reduced motion and remains visible without JS | 3 |
| Achievement counters | Animate verified display values once | Full final values exist in HTML and are read once by assistive technology; no animation under reduced motion | 3 |
| Contact validation | Native constraints plus clear inline guidance; build a `mailto:` draft | Labels and error associations; focus first invalid field; direct email fallback; never claim server delivery | 3 |
| Back to top | Appears after meaningful scroll and returns to page start | Keyboard/touch operable; immediate movement under reduced motion | 3 |
| External links | Use verified URLs and descriptive wording | Clear new-tab behavior if used; safe opener isolation | 1/4 |
| CV download | Open/download the supplied real PDF | Accessible filename/label; omit or clearly disable until the file exists | 1/4 |
| Dynamic footer year | Replace fallback year when JS loads | A correct, readable fallback remains without JS | 3 |

No backend, authentication, analytics, metrics API, chat widget, database, live contact delivery, or fake interactive demo is required. Formspree is not enabled and may only be evaluated later as an optional service.

## Accessibility, performance, SEO, and security targets

### Accessibility

- Semantic landmarks: `header`, `nav`, `main`, meaningful `section` elements, and `footer`.
- Exactly one H1, with a logical H2/H3 hierarchy.
- Complete keyboard access and visible focus; no icon-only control without an accessible name.
- Meaningful alt text for content images and empty alt text for decoration.
- Native form labels, instructions, required states, and programmatically associated inline errors.
- Filters communicate selection and results without excessive live-region announcements.
- Target WCAG 2.2 AA contrast and approximately 44px primary touch targets where practical.
- Respect `prefers-reduced-motion`; never hide content behind animation initialization.

### Performance

- Optimize and size images; lazy-load noncritical gallery media.
- Reserve image space to reduce cumulative layout shift.
- Keep CSS/JS small and dependency-free; defer noncritical script execution.
- Avoid console errors, missing files, broken anchors, and unnecessary third-party requests.
- Aim for Lighthouse scores of 90+ in Performance, Accessibility, Best Practices, and SEO after implementation; this is a target, not a current result or guarantee.

### SEO and sharing

- Use the approved title and description from `portfolio-content.md`.
- Provide clean heading structure, canonical deployment URL after confirmation, favicon, and Open Graph/Twitter-style metadata in Chunk 4.
- Create a real portrait-based social preview in Chunk 4; do not use stock or fabricated imagery.
- Do not expose draft/private pages or claim unverified deployments are live.

### Security and privacy

- Publish only static client-side code; never embed credentials, API secrets, private repository tokens, or client access details.
- Treat all visitor input as untrusted when constructing a mail draft; encode field values and do not inject them as HTML.
- Do not persist contact-form contents without explicit consent.
- For links opened in a new tab, isolate `window.opener`.
- Do not use inline event handlers or unsafe third-party scripts.
- Keep source maps, original private screenshots, image metadata, and confidential financial/student/donor data out of the deployment artifact.
- Preserve the approved Raki sample-data screenshots; do not substitute unscreened client captures or expose the private/unverified Raki repository.

## Validation matrix

Later chunks must verify:

- Viewport widths: 360, 390, 768, 1024, and 1440px.
- At 360px: no horizontal scroll, clipped navigation, overlapping actions, or oversized images.
- Light and dark themes, first visit with system preference, remembered explicit preference, and unavailable storage.
- Keyboard-only flow: skip link, menu, theme, filters, gallery, form errors, external links, and Back to top.
- Reduced-motion mode and JavaScript-disabled content access.
- Current Chrome and Firefox, plus Safari where actually available. Test reports must distinguish tested from untested platforms.
- All internal fragments, external URLs, image paths, CV path, and deployed artifact root.
- Console, HTML validity, accessibility audit, and Lighthouse results after implementation.

## Chunk boundaries and acceptance gates

### Chunk 0 — Specification and content planning (current)

Create only these two documents. Agree on facts, copy, layout, tokens, assets, links, interactions, and gates. Do not create site code or placeholder media.

### Chunk 1 — Semantic structure (after explicit review approval)

Create a valid `index.html` containing the supplied copy, semantic landmarks, headings, native controls, verified links, and references to identified real assets. The page must remain readable with CSS disabled. Do not implement the visual system or JS behavior yet.

### Chunk 2 — Styling

Create `css/style.css`; implement the token system, original editorial layout, both themes, mobile-first responsive states, image framing, focus/hover states, and measured contrast corrections. No inline CSS.

### Chunk 3 — Interactivity

Create `js/main.js`; implement menu, theme persistence, scroll spy, filtering, accessible dialog gallery, reveals, verified counters, mail composition/validation, Back to top, and dynamic year. Ensure graceful no-JS and reduced-motion fallbacks. No inline event handlers.

### Chunk 4 — Polish and deployment preparation (implemented locally)

Review and optimize the approved real assets without replacing the approved Raki sample-data screenshots; verify public links and the CV; add favicon and portrait-based social preview; add metadata; test and fix; document results; create the GitHub Pages workflow that stages the deployable subset of `task-1-portfolio/` with `index.html` at the artifact root. A short LinkedIn demo-video script uses `#saiketsystems #saiket #saiketsys`, with `#WebDevelopment #HTML #CSS #JavaScript` as optional additions. Deployment remains owner-gated.

Each later chunk stops for review. It must not silently absorb work assigned to a subsequent chunk.

## Open items, fact-check gates, and owner decisions

| Priority | Item | Required resolution |
|---|---|---|
| Blocking before related CTA | Dolarji, Raki, and Bank Exam repositories are not anonymously verified | Test each in a logged-out/private browser and show source CTA only when public use is confirmed |
| Before Kaleem CTAs | Repository must be reverified and canonical demo is unclear | Check anonymous repository access; decide whether the Netlify URL or repository-mentioned deployment is canonical and currently appropriate |
| Before release | Exact internship/freelance start dates are intentionally unknown | Keep `Current` and `Ongoing`; add dates only if the owner supplies them |
| Before release | Social preview and favicon are created locally | Verify the deployed favicon and absolute social-preview URL after the final Pages URL is confirmed |
| Before deploy | GitHub account/repository name and Pages availability may change | Confirm repository slug, expected URL, Actions permissions, and Pages source |

No open item authorizes invented substitute content. If an item is unresolved, the related optional CTA/media stays omitted while the rest of the page remains truthful.

Resolved owner decisions:

- The Strong, Working knowledge, and Learning skills classification is approved as documented in the Skills wireframe and `portfolio-content.md`; Next.js remains Learning.
- All nine project screenshots and the professional headshot are available in the repository.
- The four Raki screenshots contain fake/sample data and are approved for public display. This screenshot approval does not authorize publication of the Raki source-code repository.
- The phone number `+961 76 865 776` is approved for public display.

## Raki publication status

- [x] The owner confirms that all four supplied screenshots contain fake/sample data.
- [x] The owner approves those four screenshots for public portfolio display.
- [x] The approved WebP screenshots are present in the repository and use sample-data captions and alt text.
- [ ] Keep the Raki repository link absent unless the owner separately authorizes source publication and anonymous access is verified.
- [ ] Do not replace the approved screenshots with unscreened client captures.

## Tiny glossary

- **Semantic HTML:** Choosing elements such as navigation and main-content landmarks for their meaning and assistive-technology value instead of using generic containers for everything.
- **Design tokens:** Named values for colors, spacing, typography, radii, and related decisions that keep the interface consistent.
- **Scroll spy:** A navigation behavior that indicates which content section is currently in view.
- **Responsive / mobile-first:** Starting with the small-screen layout and enhancing it as space becomes available.
- **IntersectionObserver:** A browser API that efficiently detects when an element enters or leaves a viewport, useful for active-section and reveal behavior.
- **Reduced motion:** An accessibility preference asking websites to minimize nonessential movement and animation.
- **`mailto:` fallback:** A link that prepares a draft in the visitor's configured email application; it does not send mail itself.
- **GitHub Pages artifact:** Static files uploaded by an Actions workflow for publication; `index.html` must be at the artifact root.

## Chunk 0 specification sign-off

This document records the implemented layout, design system, behavior, deployment approach, quality targets, and remaining publication gates. Chunk 4 is prepared locally; owner and reviewer approval is still required before pushing or deploying.
