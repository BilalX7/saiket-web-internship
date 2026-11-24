# Task 2 — Chunk 4 Validation Report

Date: 2026-11-24 \
Status: local release-candidate review; not deployed

## Context and environment

- Repository branch: `main`
- Repository HEAD at the time of testing: `c0a35a1f570d93f177cc526d89977df45d5cd23a`
- HEAD description: `Limit Pages deployments to website files`
- Important context: the Task 2 directory is untracked at this revision, so the commit ID identifies the surrounding repository but not the exact Task 2 contents. Source SHA-256 hashes are recorded below.
- Operating system reported by the test shell: Microsoft Windows NT `10.0.26300.0`
- PowerShell: `7.6.10`
- Node.js: `v24.15.0`
- Python: `3.12.0`
- Beautiful Soup: `4.14.3`
- tinycss2: `1.4.0`
- Local preview: Python static server at `http://127.0.0.1:49217/`
- Browser automation in this Chunk 4 pass: unavailable; Chrome, Edge, Firefox, and Chromium executables were not discoverable through the shell, and no supported browser-driver package was installed.
- Prior independent evidence supplied by the owner: Chromium interaction testing passed 66 of 68 checks before the quantity correction; both failures had the same invalid-submit cause. The owner reports that the reviewer independently confirmed the targeted correction. This evidence is recorded separately and is not represented as a browser run performed in this report.

No commit was created for this report. No commit, push, deployment, Pages setting, workflow, or remote operation was performed.

## Files reviewed

Every current Task 2 source file was read from disk before the review:

- `index.html`
- `css/style.css`
- `js/main.js`
- `assets/images/m75-hero.svg`
- `assets/images/m75-top.svg`
- `assets/images/m75-detail.svg`
- `docs/product-page-spec.md`
- `docs/product-page-content.md`

The repository root `README.md` and `.github/workflows/deploy-portfolio.yml` were read as protected, read-only deployment context.

Runtime source hashes tested in this report:

| File | SHA-256 |
| --- | --- |
| `index.html` | `13D1968136BBD79E8DBFC268AC2739E109F1A761D0AB3BB1A80EDD7399D1945D` |
| `css/style.css` | `5227801878D408BE8DB2BAED0F2C9F886DE93671B10AD2C6FFC2817B70187287` |
| `js/main.js` | `ED8CD8DDFD17EA7B121E326760436F612E19F0F8E63C1F2808ED2F46C1F7FBB6` |
| `assets/images/m75-hero.svg` | `48C1DA8E120770FA222E6674CA58E794EA7093D3000F17FF837FCD5C753FBB0D` |
| `assets/images/m75-top.svg` | `3006526C8C6CEC697A8DE16B828470E03612D03068AAC79F8BE74C2E4DA8090D` |
| `assets/images/m75-detail.svg` | `B942EAECA0C62CBF1C25BC6FDEB44A59F8E2047A43543083672DBB6EFA90F474` |

## Result summary

| Area | Status | Evidence |
| --- | --- | --- |
| Chunk 3 invalid-quantity correction | PASS | Current source returns `null`, submit returns before cart mutation; in-memory DOM harness passed invalid `0`, `11`, `20`, empty, and nonnumeric cases followed by a valid add. |
| Product identity and content | PASS | Static checks confirmed one exact H1, fictional identity, $149.00, two colors, two switches, quantity 1–10, approved defaults, and repeated demo disclaimers. |
| Cart model and arithmetic | PASS | Node model/harness suite passed 68 assertions, including four variants at 10 each, count 40, and subtotal $5,960.00. |
| Storage parsing and failure fallback | PASS | Twelve focused assertions covered refresh restore, empty storage, invalid JSON recovery, blocked reads, failed writes, warning deduplication, in-memory preservation, and saved-field privacy. |
| HTML semantics and relative assets | PASS | Beautiful Soup checks found unique IDs, 19 resolved ID references, expected landmarks, fieldsets/legends, fallback hooks, and only Task 2-relative runtime paths. |
| CSS syntax and responsive rules | PASS | tinycss2 found no top-level, declaration, or media-block parse errors; required breakpoint, focus, hidden-state, and reduced-motion rules exist. |
| SVG integrity | PASS | All three files parsed as XML, declared `1200 × 800` and `viewBox="0 0 1200 800"`, and contained vector-only artwork. |
| Contrast calculations | PASS | Eleven measured foreground/background or control-boundary pairs met the applicable 4.5:1 or 3:1 thresholds; details below. |
| Local HTTP resource loading | PASS | Seven requests returned HTTP 200 with expected MIME types and exact source byte sizes. |
| Privacy and external loading | PASS | Source scan found no external runtime URL/font, fetch/XHR/WebSocket/beacon/cookie API, analytics, tracking, or personal-data field. |
| Current live browser interaction and visual layout | NOT TESTED | No approved controllable browser was available in this pass. Earlier reviewer evidence is noted but not relabelled as a current run. |
| Current real 200% browser zoom | NOT TESTED | Requires a live browser; source checks cannot substitute for actual zoom. |
| Current screen-reader test | NOT TESTED | NVDA or another screen reader was not available through the test environment. |
| Current cross-browser dialog behavior | NOT TESTED | Chrome/Edge/Firefox/Safari/mobile browsers were not available for controlled testing. |
| Lighthouse and browser console | NOT TESTED | Lighthouse and a controllable browser were unavailable; no score or console result is claimed. |
| W3C online HTML/CSS validators | NOT TESTED | No validator CLI was installed and network validation was not used. Local structural and parser checks passed instead. |

No automated or static test failed after the test harness's overly broad commerce-text assertion was corrected to inspect actual interactive elements. That harness issue was not an application defect.

## Mandatory Chunk 3 regression gate

The current `js/main.js` contains the required behavior:

1. `parseQuantity()` accepts only strict integer strings `1` through `10`.
2. `readProductQuantity()` resets an invalid select value to `"1"`, displays `INVALID_QUANTITY_NOTICE`, and returns `null`.
3. `handleConfiguratorSubmit()` checks `quantity === null` and returns before `addCartLine()`, `persistCart()`, `renderCart()`, totals, or success messaging.

An in-memory harness loaded the current source without modifying it, exposed only the private functions needed for testing, and replaced persistence/rendering with counters.

| Case | Result |
| --- | --- |
| Programmatic `0` | PASS — reset to 1, exact visible error, no success, no cart/persist/render change |
| Programmatic `11` | PASS — reset to 1, exact visible error, no success, no cart/persist/render change |
| Programmatic `20` | PASS — reset to 1, exact visible error, no success, no cart/persist/render change |
| Empty and nonnumeric values | PASS — same safe rejection behavior |
| Subsequent valid quantity 2 | PASS — two items added, persistence/render each invoked once, error cleared, success announced |

Exact validation notice observed:

```text
Choose a quantity from 1 to 10. The selection has been reset to 1.
```

## Functional and storage regression evidence

The combined Node model and submit-handler suite completed **68 passing assertions**. Tested cases included:

- strict acceptance of 1–10 and rejection of 0, 11, 20, empty, NaN, nonnumeric, decimal-looking, leading-zero, and whitespace-padded quantities;
- Graphite/Linear quantity 1 with subtotal `$149.00`;
- merge 3 + 7 into one quantity-10 line with subtotal `$1,490.00`;
- reject another 1 above the line limit without partial mutation;
- all Graphite/Sand × Linear/Tactile variants at quantity 10: four lines, count 40, subtotal `$5,960.00`;
- edit Sand/Tactile to quantity 2 with recalculated count 32 and subtotal `$4,768.00`;
- reject invalid cart edits;
- valid payload restoration;
- invalid JSON, wrong version, wrong product, unknown color/switch, quantity 0/11, duplicate variants, and more than four lines;
- injected stored price ignored in favor of the trusted `14900`-cent product model.

A separate storage suite completed **12 passing assertions**:

- empty available storage remains clean after its availability probe;
- valid saved Sand/Tactile quantity 4 restores;
- invalid JSON resets to a valid empty payload with a recovery notice;
- blocked reads start an empty in-memory cart with the persistence warning;
- failed writes preserve the good in-memory cart and warn once;
- later persistence attempts do not duplicate the warning;
- successful writes contain only `productId`, `color`, `switchType`, and `quantity`, with no price or personal data.

Dynamic cart construction uses `createElement`, `textContent`, and trusted variant maps. No `innerHTML` or `insertAdjacentHTML` use was found.

## Static semantics, fallback, and accessibility checks

The structural suite completed **72 passing assertions** across HTML, CSS, SVG, contrast, privacy, and size checks. Relevant findings:

- one H1, exact text `M75 Mechanical Keyboard`;
- `lang="en"`, approved title and meta description;
- header, breadcrumb navigation, main, product article, footer, and dialog landmarks;
- unique IDs and 19 valid `for`, `aria-labelledby`, `aria-describedby`, and `aria-controls` references;
- skip link targets `#main-content`;
- two fieldsets with legends and exact variant values;
- Graphite/Linear default and quantity options 1–10;
- exactly three full figures and three matching thumbnail buttons;
- full images have meaningful alt text and captions; thumbnail duplicates have `alt=""` and readable button text;
- gallery controls, configurator, and cart opener are initially hidden;
- static options and `<noscript>` guidance remain in the document;
- no purchase, checkout, or order-placement control exists;
- all CSS/JS/SVG references are relative, exist, and stay within Task 2;
- no Task 1 asset import, external font, third-party script, network API, cookie API, or analytics hook was found;
- CSS contains visible `:focus-visible` treatment, minimum control sizing, responsive breakpoints, and a reduced-motion override;
- source inspection confirms native dialog open/close handling, an Escape/Tab focus fallback, sensible focus selection after removal, and opener restoration. These interaction paths still require the live manual checks below.

No-JavaScript behavior passed source/markup verification: all three full-size figures and all static product content are present, while commerce and gallery controls are initially hidden. A browser with JavaScript disabled was not available for a rendered confirmation in this pass.

## Contrast measurements

Ratios were calculated with the WCAG relative-luminance formula from the actual CSS values.

| Combination | Ratio | Threshold | Result |
| --- | ---: | ---: | --- |
| Primary text `#26211e` on page `#f7f2ea` | 14.29:1 | 4.5:1 | PASS |
| Muted text `#655d57` on page | 5.79:1 | 4.5:1 | PASS |
| White on accent button `#b83a24` | 5.72:1 | 4.5:1 | PASS |
| White on accent-dark hover `#7a2415` | 10.04:1 | 4.5:1 | PASS |
| Accent-dark text on page | 9.01:1 | 4.5:1 | PASS |
| Focus blue `#1b67d1` on page | 4.82:1 | 3:1 | PASS |
| Focus blue on surface `#fffdf8` | 5.29:1 | 3:1 | PASS |
| Error `#9f2018` on error background `#f9e8e5` | 6.57:1 | 4.5:1 | PASS |
| Active thumbnail white on charcoal `#26211e` | 15.92:1 | 4.5:1 | PASS |
| Selected boundary `#7a2415` on page | 9.01:1 | 3:1 | PASS |
| Select boundary `#655d57` on surface | 6.34:1 | 3:1 | PASS |

These token/state measurements pass. Rendered antialiasing, forced-colors mode, and every browser-composited state were not measured.

## Asset loading and performance notes

An isolated Python server was started with an explicit Task 2 directory on port 49217. Port 4173 was initially found to be serving unrelated existing content, so it was rejected as invalid test evidence and not used. The isolated server returned:

| Resource | HTTP | MIME type | Bytes |
| --- | ---: | --- | ---: |
| `/` | 200 | `text/html` | 16,255 |
| `/index.html` | 200 | `text/html` | 16,255 |
| `/css/style.css` | 200 | `text/css` | 22,411 |
| `/js/main.js` | 200 | `text/javascript` | 24,758 |
| `/assets/images/m75-hero.svg` | 200 | `image/svg+xml` | 6,015 |
| `/assets/images/m75-top.svg` | 200 | `image/svg+xml` | 6,673 |
| `/assets/images/m75-detail.svg` | 200 | `image/svg+xml` | 3,928 |

No runtime file was missing. HTML + CSS + JavaScript total **63,424 bytes**. All six runtime files total **80,040 bytes**, below the specification's 100 KB combined core target even when the SVGs are included. The three SVGs have explicit intrinsic dimensions, so image space is reserved. The page has seven unique runtime requests including the document, no framework, no external font, no runtime fetch, and no build output.

Lighthouse was unavailable, so no Performance, Accessibility, Best Practices, or SEO score is claimed. Browser network/console panels were also unavailable; the successful HTTP requests and source privacy scan do not substitute for those panels.

## Viewports and browser configurations

| Configuration | Status | Notes |
| --- | --- | --- |
| 320, 360, 390, 768, 1024, 1440 CSS px | NOT TESTED in this pass | Responsive rules exist and prior owner-supplied Chromium review reportedly passed major layout checks; no current rendered result is claimed. |
| Narrow landscape / short viewport | NOT TESTED | Requires a live browser with a populated cart. |
| Actual browser zoom at 200% | NOT TESTED | No controllable browser; viewport resizing was not used as a false substitute. |
| Increased browser default text size | NOT TESTED | Manual check remains. |
| `prefers-reduced-motion: reduce` | PASS by CSS inspection; rendered behavior NOT TESTED | CSS disables smooth scrolling and reduces transitions/animations to 0.01 ms. |
| Chromium desktop | NOT TESTED in this pass | Earlier independent reviewer evidence is acknowledged above. |
| Edge, Firefox | NOT TESTED | Browser executables/automation unavailable. |
| Safari/iOS and Chrome/Android | NOT TESTED | No device or remote browser access. |
| NVDA with Chrome or Firefox | NOT TESTED | Screen reader/browser pairing unavailable. |

No screenshots were captured during this pass.

## Manual QA still required

These steps intentionally remain open rather than being converted into unsupported PASS claims.

1. **Responsive and zoom:** serve the folder locally, then use current Chrome/Edge and Firefox at widths 320, 360, 390, 768, 1024, and 1440 pixels. Also test a short landscape viewport, actual 200% browser zoom, and increased default font size. Check page overflow, thumbnail wrapping, sticky behavior, FAQ visibility, cart scrolling, and the always-reachable Close button.
2. **Keyboard:** from a fresh load, use only Tab, Shift+Tab, arrows, Enter, Space, and Escape. Cover skip link, all three thumbnails, both radio groups, quantity, Add, cart open, four populated cart lines, edit/remove, close, FAQ details, and Back to top. Confirm the focus ring is never obscured.
3. **Dialog focus:** open the cart, verify focus lands on Close and remains in the native modal; close by button and Escape and verify focus returns to the cart opener. Remove first, middle, last, and final lines and confirm focus moves to the next/previous quantity or Close.
4. **No JavaScript:** disable JavaScript and reload. Confirm all three full figures, captions, product copy, option names, specifications, FAQs, and disclaimers remain visible, while gallery controls, configurator, and cart opener stay hidden.
5. **Storage:** in DevTools, verify refresh restore, deletion of `saiket-task2-cart-v1`, malformed JSON recovery, and a simulated storage exception. Confirm only fictional IDs and quantities are stored and a failed write does not erase the in-memory cart.
6. **Assistive technology:** with NVDA and Chrome or Firefox, inspect landmark/headings, image alternatives, fieldset legends, control names, `aria-pressed`, count grammar, add/limit/edit/remove/storage announcements, error interruption level, dialog title, and focus order.
7. **Browser console/network:** confirm no console exceptions, 404s, third-party requests, analytics, cookies, or unexpected storage. Repeat native `<dialog>` open/close/Escape behavior in Chrome, Edge, and Firefox; test Safari/iOS and Chrome/Android if available.
8. **Lighthouse:** run mobile and desktop Lighthouse against the local HTTP URL and record the actual version, throttling, scores, and actionable findings. Do not use scores as a replacement for the interaction checks above.
9. **W3C-compatible validation:** submit the local HTML and CSS to an approved validator or run an already-available validator CLI. Resolve real errors and document unavoidable warnings.

## Defects and changes

No product-code, layout, artwork, content, accessibility, or arithmetic defect was reproduced during this pass. The corrected quantity behavior was already present, so `index.html`, `css/style.css`, `js/main.js`, and the three SVGs were not modified.

Documentation changes:

- Created `README.md` with setup, architecture, cart rules, accessibility/fallback behavior, limitations, testing, and an explicitly proposed future deployment approach.
- Created this validation report.
- Updated only the status line in `docs/product-page-spec.md` and `docs/product-page-content.md` so they no longer claim that implementation has not begun. Product copy, product rules, and historical planning sections were preserved.

## Release findings

**Blocking findings:** none found in the tests that could be performed.

**Nonblocking/manual compatibility risks:** current live-browser responsive/zoom/keyboard/dialog checks, screen-reader testing, cross-browser testing, browser console/network inspection, W3C online validation, and Lighthouse remain NOT TESTED in this pass. Publication also remains blocked procedurally until the owner and ChatGPT complete the final review and separately authorize deployment.

## Future deployment proposal — documentation only

The existing workflow publishes only Task 1 at the artifact root. A future, separately authorized change should preserve those root files and stage only Task 2's deployable `index.html`, `css/`, `js/`, and `assets/` under `_site/task-2-ecommerce-product-page/`. Task 2 documentation and test data should not be published. Workflow paths would need to include Task 2 only after review, within the same Pages artifact, so a second deployment cannot replace Task 1.

Before and after any later publication, smoke-test Task 1's homepage, CSS, JavaScript, CV, screenshots, social preview, and anchor links. Confirm the proposed Task 2 URL only after the deployment succeeds:

```text
https://bilalx7.github.io/saiket-web-internship/task-2-ecommerce-product-page/
```

No workflow, artifact, deployment, GitHub setting, commit, or push was changed during Chunk 4.

## Final acceptance checklist

| Acceptance item | Status | Evidence / limitation |
| --- | --- | --- |
| Corrected `readProductQuantity()` and submit short circuit; invalid submissions never mutate cart; later valid add works | PASS | Current-source in-memory handler tests for 0, 11, 20, empty, nonnumeric, and valid 2. |
| Product identity, price, variants, specifications, and demo disclaimers; no real-commerce feature | PASS | Static content and interactive-element checks. |
| Three distinct SVG files, matching thumbnails, alt/captions, and no-JS all-image markup | PASS | HTML/XML/source checks; current rendered browser check NOT TESTED. |
| Four variants, per-line limits, merge/edit totals, count, subtotal | PASS | Node regression assertions; live removal/focus sequence NOT TESTED. |
| Valid, malformed, blocked, and failed-write storage; injected price ignored | PASS | Model plus focused storage harness. |
| Dialog opens/closes/restores focus; keyboard/status/error paths | NOT TESTED | Source implementation reviewed, but a current live browser/AT run was unavailable. |
| Responsive, zoom, reduced motion, focus visibility, selected states | NOT TESTED | CSS and contrast checks pass; current rendered viewport/zoom interaction remains manual. |
| HTML/CSS/JS/SVG syntax, semantics, and relative paths | PASS | `node --check`, Beautiful Soup, tinycss2, XML parsing, file resolution, and HTTP 200 checks. W3C online validation NOT TESTED. |
| Browser console/network, privacy, Lighthouse/performance | NOT TESTED | Privacy/source scan, resource HTTP statuses, and byte budget pass; console and Lighthouse unavailable. |
| Task 2 README exists and is accurate | PASS | Created and reviewed against current source/workflow context. |
| Validation report separates PASS, FAIL, and NOT TESTED | PASS | This report records commands, evidence, limitations, and manual steps. |
| Task 1, workflow, Git state, deployment, and remote publication untouched | PASS | Protected hashes and Git status were checked; only authorized Task 2 documentation changed. |

Final assurance: Task 1 files, the root README, `.github/workflows/deploy-portfolio.yml`, Git commits, remotes, GitHub Pages settings, and the live deployment were not modified.
