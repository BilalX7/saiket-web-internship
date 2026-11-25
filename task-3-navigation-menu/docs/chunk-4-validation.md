# Task 3 final validation and release readiness

## Scope and environment

**Checks performed November 25, 2026.** This review covers the fictional WAYMARK Studio navigation demo and its local release readiness. The reviewed sources were `index.html`, `css/style.css`, `docs/navigation-spec.md`, and `docs/navigation-content.md`. The planning documents are retained as historical design records. Their original provisional wording does not change the later approvals.

- Repository `saiket-web-internship`, branch `main`, HEAD `5c5d10c7e71c2989b62122a4bf749d84c02b2206`.
- Windows build `10.0.26300.0`, Chrome `157.0.8103.79` (Chromium), and Firefox `161.0` (Gecko). Fresh headless runs used isolated temporary profiles and native browser navigation and input through DevTools Protocol and WebDriver BiDi.
- A temporary loopback HTTP server served the actual workspace bytes at `http://127.0.0.1:63902/saiket-web-internship/task-3-navigation-menu/`. It was scoped to the two Task 3 runtime files with a no-content response for the browser's optional favicon request.
- Static checks used Beautiful Soup for parsed HTML assertions, tinycss2 and Soup Sieve for CSS syntax and selector checks, and an sRGB relative-luminance calculation for contrast. Test harness code ran outside the application and is absent from the repository and review archive.

## Working tree and hashes

Created `README.md` and `docs/chunk-4-validation.md` inside Task 3. The four pre-existing Task 3 source files are byte-for-byte unchanged. The Git index stayed empty of staged changes, and targeted diffs for Tasks 1 and 2, the Pages workflow, root README, and `.gitignore` were empty.

Preflight `git status --short --untracked-files=all`:

```text
?? task-3-navigation-menu.zip
?? task-3-navigation-menu/css/style.css
?? task-3-navigation-menu/docs/navigation-content.md
?? task-3-navigation-menu/docs/navigation-spec.md
?? task-3-navigation-menu/index.html
```

Final `git status --short --untracked-files=all`:

```text
?? task-3-navigation-menu.zip
?? task-3-navigation-menu/README.md
?? task-3-navigation-menu/css/style.css
?? task-3-navigation-menu/docs/chunk-4-validation.md
?? task-3-navigation-menu/docs/navigation-content.md
?? task-3-navigation-menu/docs/navigation-spec.md
?? task-3-navigation-menu/index.html
```

The root `task-3-navigation-menu.zip` was present before Chunk 4. Git reports it as untracked and unignored, and it has no index entry. Keep it out of later staging. The Chunk 4 review archive is a separate copy outside the repository.

| Task 3 file | Preflight SHA-256 | Final SHA-256 |
| --- | --- | --- |
| `index.html` | `0D8CC33ECCD5B8C6CD80437E4C6EAAF3F7EE2A63B525425045FF73454E65591D` | `0D8CC33ECCD5B8C6CD80437E4C6EAAF3F7EE2A63B525425045FF73454E65591D` |
| `css/style.css` | `DD4CA93A940EFAF4058DDB1C9E2A8176E5583155E1E9F615B24017579F7F63A6` | `DD4CA93A940EFAF4058DDB1C9E2A8176E5583155E1E9F615B24017579F7F63A6` |
| `docs/navigation-content.md` | `3947ED6E0368BDA988CC18B103BE5F7889B11B4B8229D2E096151C7B4A8A279C` | `3947ED6E0368BDA988CC18B103BE5F7889B11B4B8229D2E096151C7B4A8A279C` |
| `docs/navigation-spec.md` | `F16015CFEBB53991AF9CFE4276D3C32C3D3DB6690B2CF6CF83039D6A6C51C755` | `F16015CFEBB53991AF9CFE4276D3C32C3D3DB6690B2CF6CF83039D6A6C51C755` |

These hashes also match the Chunk 3 workspace evidence. No source hash differences require explanation.

## Fresh Chunk 4 test results

| Check | Status | Evidence |
| --- | --- | --- |
| Approved copy, metadata, landmarks, and headings | PASS | Compared normalized page paragraphs and exact link text with the approved content. One H1, four H2s, five H3s, one named nav, and one main. Each section label resolves to its heading. Chrome's accessibility tree exposed banner, Main navigation, main, and contentinfo. |
| Nine links and unique targets | PASS | Verified all nine labels and fragment values against the approved map and found 11 unique IDs. Both browsers activated each link and resolved its fragment. The skip link was activated by keyboard and landed on main. |
| Deep links and reload | PASS | In both browsers, directly loaded and reloaded `#about`, `#work`, and `#contact` with the intended headings in view. |
| Back and Forward | PASS | Navigated About → Services → Work → Contact. Three Back and three Forward traversals restored the expected fragments and visible headings in both engines with the sticky header active. |
| Sticky offset and fragment emphasis | PASS | At 1024×720 and 1440×900, measured every destination heading below the sticky header. Example at 1024×720: About began 89 CSS px below it in Chrome and 84 CSS px below it in Firefox. The header stayed in normal flow at the narrower widths and at 1024×480. In Chrome, manually scrolling away left the underline on the hash target. |
| Responsive layout and hit areas | PASS | Both engines tested 320×700, 360×780, 390×844, 768×850, 1024×720, 1440×900, and 1024×480. Chrome also tested 390×400. Five links stayed in bounds, every nav link measured at least 44 CSS px high, and horizontal overflow measured 0 CSS px. The three phone widths used two menu rows with the brand above. |
| Keyboard order, skip activation, and focus | PASS | Chrome verified the skip link as the first Tab stop, Enter on all nine links, Shift+Tab, and a visible 3px outline with a 3px offset on the focused links across the measured layouts. Firefox verified the first keyboard stop, Enter on all nine links, and transfer to `#main-content`. Foreground Firefox focus appearance is recorded separately below. |
| Hover and pressed feedback | PASS | Chrome pointer input confirmed the nav hover tint and pressed fill. The source retains an underline on links and thickens it on hover. |
| Native 200% browser zoom | NOT TESTED | Not rerun in Chunk 4. Chunk 3 confirmed native Chrome zoom at 200%, visible reflow, and the Work heading fully in view after navigation. |
| Enlarged text and reflow | PASS | In Chrome, a test-only 200% root font size resolved to 32px on the 1440×900 viewport. All five nav links remained usable and horizontal overflow was 0 CSS px. |
| Reduced motion | PASS | Chrome matched `prefers-reduced-motion: reduce`, reported `scroll-behavior: auto` and zero animations, and navigated to Work. The source does not require animated scrolling. |
| JavaScript disabled and runtime dependencies | PASS | Chrome followed Work after script execution was disabled. The page has zero scripts, forms, external fonts, media, or remote dependencies. The Work and Contact copy describes fictional concepts and collects no data. |
| Contrast | PASS | The measured text pairs passed the 4.5:1 WCAG 2.2 AA normal-text threshold. Essential outlines and control boundaries passed the applicable 3:1 non-text threshold. Ratios are listed below. |
| HTML structure and CSS syntax | PASS | Parsed HTML assertions passed. CSS inspection parsed 60 selector rules and 188 declarations with balanced blocks. Source inspection found no focus-outline suppression or `aria-current` claim. Both engines loaded and applied the stylesheet. |
| Formal standards validators | NOT TESTED | No formal W3C-compatible HTML or CSS validator was run. The local structural and syntax checks above have a narrower scope. |
| Nested-path HTTP, console, and network | PASS | HTML and `./css/style.css` returned 200 with `text/html; charset=utf-8` and `text/css; charset=utf-8` respectively. Responses matched the source bytes. Chrome recorded no console warnings or errors, failed requests, or third-party page requests. The optional local favicon request returned 204. |
| Uncompressed page weight | PASS | Filesystem lengths matched the response bodies. HTML 4,748 B plus CSS 7,040 B equals 11,788 B (about 11.8 kB), excluding HTTP headers. |
| Lighthouse and load-time benchmarking | NOT TESTED | No Lighthouse run or timing benchmark. |
| Foreground Firefox focus painting | NOT TESTED | The Firefox headless document reported no window focus. It could verify native activation and focus transfer without establishing how the indicator paints in a foreground window. |
| NVDA, VoiceOver, physical touch, and additional platforms | NOT TESTED | Windows Chromium and Gecko were available. No screen-reader session, physical touchscreen, or Safari/WebKit run was performed. |
| Published Task 3 URL | NOT TESTED | The Pages path is proposed and awaits a separate release. |

### Contrast details

Ratios were calculated from the stylesheet colors used for each actual state. Work card labels use dark teal on the lighter surface. The Contact panel uses ink and muted ink on a teal tint. The quiet hairline is decorative.

| Use | Measured ratio |
| --- | --- |
| Ink headings and brand, and ink focus outline on the light canvas, surface, or Contact tint | 14.45:1 canvas, 15.90:1 surface, 13.80:1 tint |
| Muted body copy | 5.73:1 canvas, 6.30:1 surface, 5.47:1 tint |
| Dark-teal text links, Work labels, target underline, and nav hover text | 6.55:1 canvas, 7.20:1 surface, 6.25:1 hover tint |
| Hero CTA | 7.20:1 default text, 15.90:1 hover text, 12.29:1 pressed text, 5.57:1 dark-teal border against pressed fill |
| Ink pressed text outside the CTA | 12.29:1 against the pressed fill |
| Skip link | 8.89:1 ink on yellow. The focus ring uses ink against the surrounding light surface. |
| Decorative teal accent | 4.69:1 on the lighter surface, 4.07:1 on the tint |

## Prior evidence and disposition

- **Chunk 3 browser QA.** Chrome 157 and Firefox 161 on Windows passed viewport, fragment, sticky-offset, history, and keyboard activation checks. Chunk 3 also used Chrome's browser zoom controls to verify native 200% zoom and separately tested enlarged text, reduced motion, and script-disabled navigation. Foreground Firefox focus painting and screen-reader and physical-device checks remained unverified. The final Chunk 3 ZIP was not independently inspected in ChatGPT. Chunk 4 instead inspected the current workspace and compared its hashes with that run.
- **Independent Chunk 2 review.** ChatGPT reported that local-server navigation was blocked in its environment, so it rendered the supplied HTML/CSS in an in-memory Chromium document. That run supported the layout and interaction review.

No reproducible implementation defects found. No HTML or CSS fixes were required.

## Release-readiness checklist

- [x] The approved HTML/CSS and planning files match their preflight and Chunk 3 hashes.
- [x] Native navigation, layout, contrast, and nested HTTP checks passed within the tested scope.
- [x] Task 3 README and validation report are present.
- [x] The existing deployment files, prior tasks, and Git index were preserved.
- [ ] Final independent review and separate authorization for release preparation.
- [ ] Optional wider coverage of foreground Firefox focus, screen readers, physical touch, WebKit, and formal validators. Record any results separately before making broader claims.

## Proposed future deployment

The proposed address is `https://bilalx7.github.io/saiket-web-internship/task-3-navigation-menu/`. This review did not change the workflow or publish a site.

**Phase A — separately authorized preparation and review.** Keep the existing `build` and `deploy` jobs in `.github/workflows/deploy-portfolio.yml` with `deploy.needs: build`. The earlier single-job arrangement caused Pages artifact discovery failures. Retain the existing workflow-file trigger and add `task-3-navigation-menu/index.html` and `task-3-navigation-menu/css/style.css` to `on.push.paths`. Copy those two files to `_site/task-3-navigation-menu/index.html` and `_site/task-3-navigation-menu/css/style.css`. Preserve Task 1's `_site/index.html` and root CSS, JS, and assets, plus Task 2's complete `_site/task-2-ecommerce-product-page/` folder. Each deploy replaces the previous artifact, so all three runtime inventories must be present.

Review the workflow diff and inspect the staged artifact. Check the two new files against their source bytes, resolve `./css/style.css` from the nested route, verify `.nojekyll`, and verify both prior tasks' runtime files. Exclude all ZIPs, Git metadata, README and other documentation, secrets, and temporary files from `_site`. The source repository can contain the safe README and docs even though Pages serves the runtime subset. Review selective Git staging and ignore behavior before a future commit. The existing untracked root ZIP must remain outside the staged changes.

**Phase B — separately authorized publication.** After Phase A review and explicit release approval, commit only the reviewed files, push, monitor the two-job artifact and deployment, then smoke-test Task 1 at the Pages root, Task 2 at its existing subpath, and Task 3 at the new subpath. Check Task 3 CSS, a direct fragment, and navigation on the published page. No commit, push, workflow run, or deployment was performed in Chunk 4.
