# Task 4 final validation

**Date** 26 November 2026, Beirut time\
**Project** FORM & FIELD, Creative Workshop Interest Form\
**Scope** Final local QA, documentation, and review packaging. Deployment has not occurred. Task 4 is ready for independent review.

## Summary

The five approved files match the Chunk 3 review ZIP byte for byte. No runtime defects were confirmed and no implementation changes were needed. This chunk created `README.md` and this report. The pre-existing root `task-4-html-forms.zip` was identified and preserved. The new review archive is a handoff copy outside the repository.

The prior independent ChatGPT review reported **69/69 in-memory Chromium checks** and a separate browser run with scripting disabled. The results below come from fresh Codex tests against the actual local files over HTTP. The final harnesses passed **19 Chrome test groups and 8 Firefox test groups**, including a Firefox group that reproduced a test-environment limitation. The tests have different coverage and should not be added to the previous count as if they were one suite.

## Sources inspected and SHA-256 hashes

| Approved file | SHA-256 at start and end |
| --- | --- |
| `index.html` | `A31E46BE5D975A00F22BFAD8708BC3B41498351ED1FF6224A41D8A0435E32153` |
| `css/style.css` | `7BCFFFEDABB8FE419D62CC90EBB5A2C0AD933417EEE892193419BEFE6F014C26` |
| `js/main.js` | `C263E0E78C88D342E3DFDD9502B3A8609DBDA7FFA7E71EA6F919DEC1E1C5DF1C` |
| `docs/form-content.md` | `937356B888B288BD937F8A0CFCC26952AD8A56583D9C255436F773D86654693A` |
| `docs/form-spec.md` | `7C7319C6C98CB37F4131D8AA0A8AAB21C07B27D42D4DAB754FF7B7F7F69E2A98` |

The inspected workflow `.github/workflows/deploy-portfolio.yml` has SHA-256 `007EC5E71947F2B05F96F34EDE28D757AF355C92F41749C65E71DC0C044610DF`. A Git comparison to `HEAD` found no changes to the workflow, Tasks 1–3, the root README, or `.gitignore`. The existing root archive has SHA-256 `8269CAFADCC97ECEBD200DE82B6E8F13FA16AEF160DFDF44E0E9AB061723881C` and contains an earlier five-file Task 4 snapshot.

## Environment and method

- Windows build 26300.9974. Local shell checking used Node.js 24.15.0 and Python 3.12.0. The isolated browser harness ran under Node.js 25.2.0.
- Google Chrome 158.0.8127.37 and Mozilla Firefox 161.0 ran headless in separate temporary profiles. Temporary Node `node:http` servers bound only to `127.0.0.1` on dynamically assigned ports and served the actual runtime files at `/saiket-web-internship/task-4-html-forms/`. A throwaway HTTP response with a missing hook and a plain HTML control fixture were used only for their named negative tests.
- Chrome DevTools Protocol over a local pipe provided keyboard and pointer events, viewport and scripting settings, the accessibility tree, navigation and resource timing, and network, console, and storage events. Native zoom was set using Chrome's own page zoom setting. Firefox WebDriver BiDi provided native input actions, viewport overrides, network monitoring, and console events.
- Source commands included `node --check task-4-html-forms/js/main.js`, `Get-FileHash`, `git status --short --untracked-files=all`, `git diff --cached --name-only`, and `git diff --exit-code HEAD -- task-1-portfolio task-2-ecommerce-product-page task-3-navigation-menu README.md .gitignore .github/workflows`. PowerShell streamed the browser harnesses to `node -` and a source harness to `python -B -`. The source harness used Python's `html.parser` and locally installed Beautiful Soup and tinycss2. It checked tag balance, attribute and ID references, schema and copy, and 60 top-level CSS rules. No test tooling was added to the project.

## Acceptance matrix

| Area | Result | Evidence |
| --- | --- | --- |
| Approved sources and protected paths | PASS | Five files matched their approved ZIP entries. The protected Git comparison was clean. |
| HTML structure and native controls | PASS | One H1 and subordinate H2, landmarks, skip target, one form, seven ordered fields or groups, labels, legends, hint associations, expected options and constraints, and one status region. No replacement widgets, dummy links, or submission endpoint. |
| CSS and JavaScript syntax, exact copy | PASS | Local CSS parser and `node --check` passed. The source check matched the approved field copy and all 11 feedback strings. |
| Nested HTTP route and initialization | PASS | Both browsers loaded relative CSS and deferred JS. The source button was disabled. After the required hooks and listeners initialized, the button enabled and feedback remained empty until an attempt. |
| Initialization failure | PASS | Missing hook kept the button disabled in both engines. Chrome also passed a blocked script and an injected listener-registration failure. |
| Empty form and first-invalid focus | PASS | Seven Chrome native invalid events produced five exact field or group errors and zero submit events. Both engines focused Full name and showed one message for the entire format group. |
| Name | PASS | Blank, whitespace-only, and one character failed. Two and 80 passed, 81 assigned programmatically failed, and multilingual and punctuated names passed without rewriting. |
| Email | PASS | Empty and native type mismatch received distinct errors. The sample and 254 characters passed. A 255-character programmatic value failed. |
| Topic and format | PASS | Blank topic and no selected radio failed. All three choices in each group passed. Radio arrow and select keyboard behavior were verified. |
| Optional interests and notes | PASS | Zero, one, and multiple interests passed. Empty and 300-character notes passed. A 301-character programmatic value failed. |
| Acknowledgement and field recovery | PASS | Unchecked failed and checked passed. Correction restored hint-only descriptions, removed stale errors and invalid attributes, and retained other active errors. |
| Valid, repeated, and edited completion | PASS | Exact success text, retained field values, and one status node. Two consecutive completions produced one status text mutation. Editing a field, including an optional checkbox, cleared success. A later invalid attempt showed fresh feedback. |
| Enter and `requestSubmit()` | PASS | In both engines, Enter in the input and native `requestSubmit()` produced safe local feedback. Overlong notes supplied by script also failed through `requestSubmit()`. |
| Native no-JavaScript fallback | PASS | Chrome scripting was disabled at the browser level. The notice was visible, controls remained editable, and Enter with a filled form left the button disabled and sent no request. |
| Browser privacy | PASS | Chrome recorded 22 prevented submit events in the main monitored sequence and zero requests, URL changes, storage events, or console entries in that interval. Local/session storage, cookies, IndexedDB and Cache Storage were empty. Firefox independently verified prevented submits and no form traffic, storage, or logs in its monitored flow. No status or field error echoed entered data. |
| Network and console for normal page loads | PASS | The expected HTML, CSS, and JS returned HTTP 200. Across controlled runs there were only local asset loads, browser favicon lookups, and intentional test-fixture requests. No unsolicited application requests or normal-run page errors were observed. |
| Chrome keyboard and focus | PASS | Skip link was the first Tab stop and focused the form target. Tab, Shift+Tab, Enter, Space, radio arrows and native select operation passed. Visible focus was 3px with a 3px offset. |
| Firefox keyboard subset | PASS | Skip link, visible focus, select, radio arrows, and implicit Enter in the name field passed with BiDi keyboard actions. |
| Firefox headless Space and focused-button Enter | FAIL — environment | The headless document reported `document.hasFocus() === false`. Space on a focused checkbox and Enter on a focused button delivered uncanceled key events but no activation, both on Task 4 and on plain native controls. Foreground behavior is separately **NOT TESTED**. |
| Accessibility-tree relationships | PASS | Chrome exposed textbox and choice names, group legends and hints, invalid state, an active field and group error description, and one polite atomic status. |
| Responsive reflow | PASS | Both engines passed live error/success states at 320, 360, 390, 768, 1024 and 1440 CSS px and at 1024×480. No page-level horizontal overflow or clipped field text was detected, including the acknowledgement at 320px. |
| Zoom and enlarged text | PASS | Chrome native 200% zoom changed the effective viewport from 1282 to 641 CSS px. Live error and success reflow passed. A separate 200% root text check passed at 320 and 1024 CSS px. |
| Contrast and non-motion | PASS | Computed live colors met 4.5:1 for measured text and 3:1 for measured control edges and focus. Chrome's reduced-motion emulation preserved functional feedback and no transitions. |
| Local payload | PASS | Three HTML/CSS/JS responses totaled 21,038 uncompressed body bytes. A sampled localhost load reported DOMContentLoaded at 82 ms and load at 126 ms. These timings are local observations and are not production metrics. |
| Remaining compatibility | NOT TESTED | Foreground Firefox Space/focused-button Enter, Firefox browser-disabled scripting and native zoom, Safari, physical mobile/touch devices, and spoken screen-reader announcements. |
| Formal conformance and performance | NOT TESTED | External HTML/CSS validators, Lighthouse, production performance, and field metrics. Local parsing and browser checks above are the evidence available. |
| Public Pages release | NOT TESTED | Only the representative local HTTP route was exercised. Publication and live-site smoke tests are a separate phase. |

### Live contrast measurements

The Chrome harness read computed CSS values while errors and success were actually displayed. Ratios use relative luminance.

| Pair | Colors | Ratio |
| --- | --- | ---: |
| Body ink on canvas / form | `#20201D` on `#F3EEE4` / `#FFFCF6` | 14.12 / 15.95 |
| Hint / placeholder | `#5F5A52` on `#FFFCF6` / `#FFFFFF` | 6.68 / 6.84 |
| Control boundary on form / input | `#857B6E` against `#FFFCF6` / `#FFFFFF` | 4.06 / 4.15 |
| Enabled / disabled button text | `#FFFCF6` on `#9B3F2D` / `#5F5A52` on `#E9E1D5` | 6.53 / 5.27 |
| Focus outline on canvas / form | `#146C94` against `#F3EEE4` / `#FFFCF6` | 5.04 / 5.69 |
| Invalid control edge | `#A32620` against `#FFFCF6` | 7.18 |
| Error text and summary | `#A32620` on `#FAEBE7` | 6.34 |
| Success status | `#24633D` on `#EAF2E9` | 6.28 |

## Failed or restricted checks and disposition

- The first Chrome keyboard network assertion expected zero events after page load and reported `2 !== 0`. The rerun classified request URLs and methods and confirmed a browser-generated `GET /favicon.ico` and **zero application requests** during the keyboard interaction. The fixture returns HTTP 204 for favicon requests. No runtime change was needed.
- An initial Firefox harness failed with `SyntaxError: Identifier 'assert' has already been declared`. Removing the duplicate harness declaration enabled the browser test. Later headless input tests showed empty feedback after focused-button Enter and an unchecked box after Space. The focused control received the key events, their default was uncanceled, and the document reported it lacked focus. A stripped-down HTML fixture with no Task 4 code showed the same lack of activation. Native pointer activation and input Enter successfully exercised the form. The foreground keyboard path remains a release follow-up.
- Firefox returned `unknown command: emulation.setScriptingEnabled` for the attempted BiDi scripting override. That was a tooling failure. Firefox no-JavaScript behavior was not verified. The independent native Chrome no-JavaScript check passed.

There is no runtime diff. Each final runtime hash equals its approved Chunk 3 hash. The absence of application storage does not prevent browser-controlled autofill or session restoration.

## Proposed deployment artifact and review gate

The proposed GitHub Pages URL is `https://bilalx7.github.io/saiket-web-internship/task-4-html-forms/`. In a separately authorized deployment preparation phase, preserve the current workflow permissions and `github-pages` environment, keep `deploy` dependent on `build`, and extend the combined `_site` artifact as follows.

```text
_site/
├── .nojekyll
├── index.html, css/, js/, assets/        # Task 1 at the root
├── task-2-ecommerce-product-page/        # Preserve existing runtime
├── task-3-navigation-menu/               # Preserve existing runtime
└── task-4-html-forms/
    ├── index.html
    ├── css/style.css
    └── js/main.js
```

Review the workflow trigger paths and inspect the combined artifact before publication. The published artifact should exclude the README, planning and validation documents, ZIPs, screenshots, and temporary harnesses. After separately approved publication, check all four project routes and Task 4's asset loads, disabled-script fallback, and valid demo at the live nested route. Where available, complete a foreground Firefox keyboard check, screen-reader announcement check, and physical mobile smoke test.

- [x] Source matches the approved snapshot and protected repository paths are intact.
- [x] Core form, privacy, fallback, responsive, and contrast checks have recorded evidence.
- [x] Compatibility and coverage limitations are recorded with their observed outcomes.
- [x] README and this report are the only project files created in Chunk 4.
- [ ] Independent Chunk 4 review and separate deployment authorization are pending.
