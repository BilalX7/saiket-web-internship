# Chunk 4 validation and release checklist

## Status

- **Project:** SaiKet Systems Web Development Internship — Task 1 portfolio
- **Validation date:** 2026-11-23 (Asia/Beirut)
- **Scope:** Local production polish and GitHub Pages deployment preparation
- **Deployment:** **NOT PERFORMED**
- **Repository state:** This workspace is not currently a Git repository; no branch or remote could
  be confirmed and no GitHub state was changed.

The owner-provided Chunk 4 brief reports that the previous ChatGPT review passed 65/65 isolated
Chromium interaction/responsiveness checks plus six-section scroll-spy and menu resize/link checks.
That review is useful regression evidence, but it was not reproduced as a production-browser audit
in this environment.

## Environment and methods

- Windows workspace with PowerShell.
- Local static server: `python -m http.server 8765 --bind 127.0.0.1`.
- Source checks: Python/BeautifulSoup, Pillow, TinyCSS2, PyYAML, XML parsing, and `node --check`.
- External publication-gate checks: anonymous web requests on 2026-11-23.
- Browser automation host: unavailable.
- Native PDF viewer launch: attempted, but application approval timed out.
- Lighthouse: unavailable; no score is reported.
- HTML standards validator: `html5lib` was unavailable; structural source checks were used instead.

## Automated and static evidence

### Source integrity

| Check | Result | Evidence |
|---|---|---|
| JavaScript syntax | PASS | `node --check task-1-portfolio/js/main.js` exited successfully. |
| CSS parsing | PASS | TinyCSS2 reported zero parse errors. |
| HTML structure | PASS | Exactly one H1, no heading-level jumps, 45 unique IDs, and no missing internal targets. |
| Inline behavior | PASS | One deferred external script and no inline event handlers. |
| Local file references | PASS | No missing local stylesheet, script, image, favicon, social-preview, or CV path. |
| Intrinsic image sizes | PASS | Every `<img>` width/height matches the real source dimensions. |
| No-JS source state | PASS | Native navigation and four projects remain visible; filters, gallery triggers, theme/menu controls, and enhanced form remain hidden until ready; direct email remains visible. |
| 1088px menu contract | PASS | CSS uses `max-width: 67.99rem` and `min-width: 68rem`; JavaScript uses the matching `max-width: 67.99rem` media query. |
| Contact privacy | PASS | Visitor values are not stored or inserted as HTML; subject and body use `encodeURIComponent`; copy states that the site does not send/store mail. |

### Content contracts

| Check | Result | Evidence |
|---|---|---|
| Project order | PASS | Dolarji → Raki → Kaleem → Bank Exam System. |
| Screenshot distribution | PASS | 3 / 4 / 1 / 1; exactly nine project screenshots. |
| Filter counts | PASS | All 4; AI/ML 1; Full-stack 3; Client work 2; Education 2. |
| Achievement values | PASS | `5,000+`, `6`, `17`, `223`; no fifth counter. |
| Skills | PASS | 24 displayed skills, no duplicates; Next.js appears only under Learning. |
| Raki privacy | PASS | Four approved sample-data images remain; no Raki repository CTA is rendered. |

### Assets and HTTP

All listed paths returned HTTP 200 from the local static server: `/`, CSS, JavaScript, favicon,
social preview, headshot, all nine project images, and the CV.

| Asset | Dimensions | Bytes | Result |
|---|---:|---:|---|
| Headshot WebP | 1254×1254 | 238,146 | PASS |
| Dolarji screenshots | 591×1280, 591×1280, 1280×772 | 262,196 total | PASS |
| Raki screenshots | 1280×609, 1280×603, 1280×605, 1280×610 | 524,176 total | PASS |
| Kaleem screenshot | 1907×949 | 387,586 | PASS |
| Bank Exam screenshot | 1901×888 | 70,088 | PASS |
| Social preview JPEG | 1200×630 | 98,181 | PASS; visually inspected after export |
| BK favicon SVG | 64×64 viewBox | 505 | PASS XML/HTTP; 16px/32px browser rendering pending |
| CV PDF | n/a | 748,649 | PASS signature/HTTP; visual PDF review pending |

The deployable artifact is 2,418,437 bytes. HTML + CSS + JavaScript + headshot + favicon total
327,561 bytes. The nine lower-page project screenshots total 1,244,046 bytes and remain lazy-loaded.
The social preview and CV are not fetched during ordinary page rendering.

### Contrast calculations

Static WCAG contrast calculations for principal solid token combinations passed the 4.5:1 normal
text target. Representative results:

- Dark text/background: 15.93:1; dark muted/surface: 8.04:1; dark accent/background: 10.40:1.
- Light text/background: 15.22:1; light muted/surface: 7.41:1; light accent/background: 5.88:1.
- Light warm/background: 5.44:1; white/light-accent button: 6.16:1.

This is not a WCAG certification. Browser rendering, transparency, focus appearance, zoom, and
assistive-technology behavior still require manual review.

## Public-link gates checked on 2026-11-23

| Destination | Result | Site decision |
|---|---|---|
| `https://github.com/BilalX7` | Public profile loaded anonymously | Retained. |
| `https://github.com/BilalX7/kaleemco` | Public repository loaded anonymously | Existing Kaleem source CTA retained. |
| `https://github.com/BilalX7/counterfeit-detector-webapp` | Anonymous request returned 404 | CTA omitted. |
| `https://github.com/BilalX7/raki-academy` | Anonymous request returned 404 | CTA omitted; owner has not authorized source publication. |
| `https://github.com/BilalX7/bank-exam-system` | Anonymous request returned 404 | CTA omitted. |
| `https://kaleemco.netlify.app/` | Could not be verified with the available tool | Demo CTA omitted. |
| Kaleem repository-listed Vercel URL | Could not be verified with the available tool | Demo CTA omitted pending owner choice. |
| LinkedIn owner URL | Tool could not retrieve the page | Owner-provided profile link retained; manual check pending. |

A 404 does not prove that a repository does not exist; it may be private. No repository visibility,
remote, or external account setting was changed.

## SEO and identity

- PASS — approved title, description, English language, viewport metadata, one H1, and logical headings.
- PASS — original BK SVG favicon is linked with `type="image/svg+xml"`.
- PASS — original portrait-based social preview is a real, inspected 1200×630 JPEG.
- PASS — Open Graph and Twitter large-image metadata include title, description, image type,
  dimensions, and alternative text.
- PASS — no canonical URL or `og:url` is published before deployment confirmation.
- **Release gate:** the absolute social-image URL is preconfigured as
  `https://bilalx7.github.io/saiket-web-internship/assets/images/social-preview.jpg`. Verify or
  update it if the final account/repository/path differs.

## GitHub Pages workflow verification

The workflow stages this exact deployable subset into `_site`:

```text
_site/
├── index.html
├── css/
├── js/
├── assets/
└── .nojekyll
```

It excludes `docs/`, READMEs, other internship tasks, and repository source material. A local
simulation produced 17 files totaling 2,418,437 bytes with all required files present and no
`docs/` or README. PyYAML parsed the workflow successfully.

The workflow uses current stable major versions checked against official GitHub repositories on
2026-11-23: `actions/checkout@v7`, `actions/configure-pages@v6`,
`actions/upload-pages-artifact@v5`, and `actions/deploy-pages@v5`. Permissions are limited to
`contents: read`, `pages: write`, and `id-token: write`; the deployment environment is
`github-pages`; concurrency prevents overlapping deployments.

The trigger targets `main`, but the local directory is not a Git repository. Confirm the real
default branch before publication. The workflow has not run on GitHub.

## Browser and responsive QA

### Locally unavailable

The supported browser-access host was unavailable, so the following are **NOT TESTED in this final
environment**:

- Screenshots at 320, 360, 390, 480, 768, 1024, 1088, and 1440 CSS pixels.
- Both themes at every viewport and true theme persistence across reload.
- Blocked-storage behavior in a production browser.
- Full keyboard-only and screen-reader pass.
- 200% zoom, browser text scaling, and horizontal-overflow inspection.
- Live console monitoring, browser back/forward, direct-fragment navigation, and native mail-app launch.
- Lighthouse mobile/desktop scores.
- Chrome/Firefox/Safari cross-browser comparison.
- Visual CV rendering in a PDF viewer.

The owner-provided prior review's isolated Chromium checks passed before these Chunk 4 additions.
Chunk 4 changes affect head metadata, identity assets, documentation, and deployment staging; the
approved layout and JavaScript behavior were not redesigned.

### Required manual release QA

1. Serve `task-1-portfolio/` over local HTTP and open a private browser window.
2. Test 320, 360, 390, 480, 768, 1024, 1088, and 1440 CSS-pixel widths in dark and light themes.
3. At 320/360px, confirm Bilal Koubar, Menu/Close, and Light/Dark stay on one row and every nav label
   remains readable; at 1088px confirm the inline desktop menu appears.
4. Tab from the skip link through menu, theme, filters, nine gallery triggers, close button, form,
   and Back to top. Confirm focus remains visible and returns after Escape closes menu/dialog.
5. Disable JavaScript and confirm the full navigation, four projects, nine screenshots, direct
   contact links, CV, counters, and Back to top remain usable.
6. Emulate reduced motion and missing IntersectionObserver; confirm no content stays transparent or
   translated and counters show final values.
7. Test system dark/light, a saved manual theme across a true reload, and blocked localStorage.
8. Submit empty and invalid-email form states; verify error focus/associations. Use safe test values
   to inspect the encoded mail draft without sending it.
9. Test 200% zoom and increased text size for clipping, overlap, or horizontal scrolling.
10. Open the CV and inspect every page for readable text, clipping, and corruption.
11. Run Lighthouse mobile and desktop against the local HTTP URL; record real scores without
    converting targets into claims.
12. After deployment, verify HTTPS, the favicon, social image, internal anchors, external links,
    downloaded CV, and artifact contents at the final URL.

## Acceptance checklist

| Status | Requirement | Evidence / limitation |
|---|---|---|
| PASS | Only authorized Task 1, repo documentation, and workflow files changed | No other task directory was created or edited. |
| PASS | Real photos/screenshots and CV exist and load | All returned HTTP 200; PDF signature valid. PDF visual inspection remains pending. |
| PASS | Four projects and 3/4/1/1 screenshot distribution | Automated DOM audit. |
| PASS | Approved duplicate-free skills; Next.js only under Learning | Automated text audit. |
| PASS | Keyboard/accessibility implementation remains present | Semantic/source audit and owner-provided 65/65 reviewer result; native manual pass pending. |
| PASS | No-JS, missing observer, and reduced-motion fallbacks retain content | Static fallback states and guarded code verified; native simulation pending. |
| NOT TESTED | Theme persistence across a real reload and blocked storage | Code path verified; supported browser unavailable. |
| PASS | Menu breakpoint and state contract | CSS/JS match at 67.99rem/68rem; prior isolated interaction checks passed. |
| PASS | Filters, galleries, counters, scroll spy, Back to top | Source contracts and prior isolated interaction review passed. |
| PASS | Honest validated mailto composition | Required errors, limits, encoding, and no delivery claim verified statically. Native mail app not launched. |
| NOT TESTED | Final viewport matrix, both themes, overflow, 200% zoom | Supported browser unavailable; manual steps above. |
| PASS | JS syntax, CSS parse, IDs, anchors, image paths, local HTTP | Command evidence recorded above. Formal HTML validator and browser console unavailable. |
| PASS | Image alternatives, labels, token contrast, no known critical source issue | Static accessibility and contrast audit; not a certification. |
| PASS | Original favicon, social preview, and metadata without unverified canonical | Assets and markup verified; deployed absolute URL pending. |
| NOT TESTED | Lighthouse performance/accessibility/best-practices/SEO scores | Lighthouse unavailable; no fabricated scores. |
| PASS | Safe Pages artifact and permissions | Local staging simulation and YAML parsing passed; live Action not run. |
| PASS | Public/authorized links only | Kaleem source verified public; gated source/demo links omitted; Raki distinction preserved. |
| PASS | README, release guide, validation report, and LinkedIn outline | Created and reviewed locally. |
| PASS | No GitHub/publication changes occurred | No Git repository, remote, push, Pages run, or deployment was created. |

## Owner decisions required before launch

1. Confirm the GitHub repository owner/name and actual default branch.
2. Approve creating/linking the GitHub repository and pushing the reviewed files.
3. Confirm the expected Pages URL and update the absolute social-image metadata if needed.
4. Complete the manual browser, zoom, keyboard/screen-reader, PDF-visual, and Lighthouse checks.
5. Decide whether either Kaleem deployment URL is canonical and suitable; leave the demo omitted
   until decided.
6. Keep Dolarji, Raki, and Bank Exam source CTAs omitted unless public access and publication
   permission are separately confirmed. Raki screenshot approval is not source-publication approval.
