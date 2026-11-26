# Task 4 HTML Forms Specification

## 1. Assignment interpretation

The official SaiKet Systems Task 4 assignment is to build a basic HTML form that demonstrates text fields, radio buttons, checkboxes, a dropdown, validation, and user-input handling. The assessed skills are HTML and an understanding of form elements. A small amount of CSS and vanilla JavaScript may later improve presentation and safely demonstrate client-side validation, but the finished work will remain a static exercise rather than a service.

**FORM & FIELD — Creative Workshop Interest Form** is the fictional creative direction used to present those requirements coherently. It is not a real organization, workshop listing, registration system, booking flow, or promise of a place. The page will invite visitors to try the controls with invented details and will state that responses are neither sent nor saved.

### In scope

- One compact, semantic form with the seven controls specified below.
- Native HTML constraints plus narrowly scoped client-side feedback.
- A safe no-JavaScript baseline in which the form cannot be submitted.
- Accessible labels, field groups, help, errors, status feedback, keyboard operation, and responsive reflow.
- Original copy and a restrained paper-inspired visual direction.

### Out of scope

- A backend, endpoint, database, email, registration, booking, or real event.
- GET or POST transmission, `fetch`, external APIs, analytics, tracking, console logging, URL parameters, or browser storage.
- Unrequested personal fields, file uploads, payments, accounts, passwords, frameworks, packages, remote fonts, or external imagery.
- Changes to Tasks 1–3, the root README, Git settings, remotes, or the Pages workflow during this chunk.

## 2. Visitor goal and paths

### Goal

The visitor can explore common form controls, enter sample information, understand what is required, correct mistakes, and receive honest confirmation that the client-side demonstration completed without sending or saving anything.

### Happy path

1. The visitor reads the fictional identity, practice-only disclaimer, and form introduction.
2. If JavaScript loads, all validation and submit handlers are installed before the initially disabled **Complete demo** button is enabled.
3. The visitor enters an invented full name and sample email address, chooses a workshop topic, chooses one preferred format, optionally selects any interests, and optionally adds a short note.
4. The visitor checks the acknowledgement confirming that responses are not sent or saved.
5. Activating **Complete demo** invokes native constraint validation. When every constraint passes, the installed submit handler calls `preventDefault()`.
6. One polite status region displays: **Demo complete — your information was not sent or saved.** No entered value is repeated in the message, URL, storage, log, or network request.
7. Values remain visible only in the current form so the result is not surprising. They disappear on reload/navigation unless the browser independently restores or autofills them. Editing any field clears the stale success message.

### Invalid path

1. The visitor activates **Complete demo** while one or more required values are missing or invalid.
2. Native validity prevents the `submit` event and therefore prevents success. The interface shows the concise status **Please review the highlighted fields.** and field-specific, actionable feedback.
3. Focus lands on the first invalid control; later invalid controls retain their own associations without causing a series of intrusive alerts.
4. As a field is corrected, its stale error is removed and its custom validity is recalculated. The summary stays accurate and is removed when no displayed error remains.
5. A later valid activation follows the happy path. Repeated valid activations only replace the same status text; there is no duplicate record or external effect.

### No-JavaScript path

All labels and controls remain visible, readable, and editable. The submit control stays natively `disabled`, so there is no working submission path, and a `<noscript>` notice explains why. The form has no `action`, fake endpoint, or `action="javascript:…"`. Because an omitted action would otherwise default to the current URL if a submission were somehow initiated, keeping the only submit control disabled until the handler is installed is a deliberate safety requirement.

## 3. Field inventory

Labels, legends, hints, placeholders, option labels, and validation copy are locked in `form-content.md`.

| Order | Control and exact visible label | `id` / `name` | Required | Options/default | Planned native attributes | Validation and hint behavior |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Text input — **Full name (required)** | `full-name` / `fullName` | Yes | Empty; placeholder `Example: Rowan Lee` | `type="text"`, `autocomplete="name"`, `required`, `minlength="2"`, `maxlength="80"`, `aria-describedby="full-name-hint"` plus active error ID | Hint asks for an invented name. Do not constrain legitimate name characters with a regex. JavaScript uses trimming only to detect empty/whitespace-only input; it does not rewrite the value. Empty, whitespace-only, or fewer than 2 entered characters produces the approved name error. More than 80 characters is prevented/invalid by the native maximum. |
| 2 | Email input — **Email address (required)** | `email-address` / `email` | Yes | Empty; placeholder `name@example.com` | `type="email"`, `autocomplete="email"`, `inputmode="email"`, `required`, `maxlength="254"`, `aria-describedby="email-address-hint"` plus active error ID | Hint says to use a sample address. Native `typeMismatch` supplies the validity state; there is no email regex. Missing and malformed addresses have separate approved messages. The length cap is a defensive UI bound, not a claim to validate every real address. |
| 3 | Select — **Workshop topic (required)** | `workshop-topic` / `workshopTopic` | Yes | First option `Choose a topic` has `value=""`, is selected by default, and is disabled; options are `visual-identity`, `interface-design`, `editorial-layout` | `required`, `aria-describedby="workshop-topic-hint"` plus active error ID | Empty placeholder fails `required`. Hint clarifies that the choice expresses interest only. Error asks the visitor to choose a topic. |
| 4 | Radio fieldset — **Preferred format (required)** | Fieldset: `preferred-format-group`; radios: `format-online`, `format-in-person`, `format-either`; shared `name="preferredFormat"` | Yes | `online`, `in-person`, `either`; none checked by default | Native radio inputs; `required` on each radio for an unambiguous shared constraint; group help referenced from the fieldset and each input as needed | Native group keyboard behavior is preserved: Tab enters/leaves the group, arrow keys change the selected radio, and Space selects. One group-level error asks for a preferred format. It is a fictional preference, not a booking. |
| 5 | Checkbox fieldset — **Areas of interest (optional)** | Fieldset: `areas-of-interest-group`; checkboxes: `interest-typography`, `interest-color-systems`, `interest-accessible-interfaces`; shared `name="areasOfInterest"` | No | `typography`, `color-systems`, `accessible-interfaces`; none checked | Native `type="checkbox"`; group hint associated with the fieldset and controls as needed | Zero, one, or multiple values are valid. No error state. Hint explicitly permits multiple selections. |
| 6 | Textarea — **What would you like to explore? (optional)** | `exploration-notes` / `explorationNotes` | No | Empty; placeholder `For example, a skill, question, or design challenge.` | `rows="5"`, `maxlength="300"`, `aria-describedby="exploration-notes-hint"` plus active error ID | Hint states the 300-character maximum and asks visitors to avoid real personal details. Native maximum is the authority; if an over-limit value is introduced, show the approved maximum-length message. No minimum and no content filtering are required. |
| 7 | Checkbox — **I understand that this practice form does not send or save my responses. (required)** | `demo-acknowledgement` / `demoAcknowledgement` | Yes | `value="understood"`; unchecked by default | `type="checkbox"`, `required`, `aria-describedby="demo-acknowledgement-hint"` plus active error ID | Must be checked. Hint explains that completing the demo is not registration. Error repeats the action and safeguard clearly. |

Names are present to demonstrate conventional form structure, not to enable transmission. No other fields will be added without a new review decision.

## 4. Semantic HTML plan

- Use `lang="en"`, one descriptive document title, and the approved meta description.
- Put a **Skip to form** link first in the body. It targets the form section heading container (`#workshop-form`) and must move focus to a sensible destination without bypassing the disclaimer.
- Use semantic `header`, `main`, and `footer` landmarks. The compact editorial introduction precedes the central form.
- Use one H1 for the page statement and an H2, **Creative Workshop Interest Form**, for the form section.
- Use a semantic `<form>` with no `action`; omit `method` because no submission is permitted. Do not add `novalidate` by default.
- Connect every non-group control with an explicit `<label for>` and unique `id`.
- Put each radio/checkbox collection in a `<fieldset>` with its exact `<legend>`. The acknowledgement remains a standalone labeled checkbox.
- Place the required/optional wording in visible labels and legends; do not rely on color or an unexplained asterisk.
- Associate hints and errors through stable IDs and `aria-describedby`. When no error exists, do not expose a blank or duplicated error announcement.
- Provide one visible status container after the introductory explanation and before or beside the submit action. It can use `role="status"` and `aria-live="polite"`; entered personal values never appear there.
- Keep the baseline submit button in HTML with the `disabled` attribute. JavaScript removes `disabled` only after the input/change, invalid, and submit listeners are successfully installed.
- Add the exact `<noscript>` notice close to the disabled action. Do not hide the rest of the form when scripting is unavailable.
- Use ordinary native inputs, select, textarea, and button. Do not replace radios, checkboxes, or the select with custom widgets.

## 5. Client-side behavior outline

No implementation is authorized in Chunk 0. A later small vanilla script will:

1. Locate the form, submit button, status region, and documented controls; fail safely with the submit button still disabled if required hooks are missing.
2. Install all listeners before enabling the button. The script will not change the form action or create any transport.
3. Recalculate the name rule on input. Trimming is used only to decide whether the value is all whitespace; legitimate punctuation, diacritics, scripts, spacing, and name formats are accepted.
4. Use each control's `ValidityState` and the exact content strings to set or clear narrow custom validity messages. Email shape remains the browser's `type="email"` decision.
5. On invalid attempts, render one relevant field error per invalid field, associate it, show the concise summary, and allow native validation to focus the first invalid control. If cross-browser testing shows focus is unreliable, focus the first invalid control after the invalid-event sequence without suppressing native semantics.
6. On input/change, remove stale feedback only for the field being corrected, recalculate validity, and clear any prior success statement.
7. On a valid `submit` event, immediately call `preventDefault()`, clear stale errors, and display the approved success statement in the polite live region.
8. Treat repeated valid activation as idempotent: one status node is updated, never appended repeatedly. There is no asynchronous request, loading claim, or server state.

Values will not be echoed, serialized, placed in the URL, sent with `fetch`/XHR/beacon, written to cookies or Web Storage, logged, analyzed, or persisted by application code. Browsers and password/autofill tools can independently remember entered values; the page copy will not make the broader claim that a browser can never retain them.

No reset button is planned. This avoids accidental data loss and keeps one clear action. A reload or navigation starts a fresh page, subject to normal browser restoration/autofill behavior.

## 6. Responsive written wireframes

All layout values and tokens are tentative until Chunk 2 implementation and measurement.

### Desktop, 1024–1440px

A centered page has a slim identity/header row. The main area uses an editorial two-column composition: a short sticky-looking (not necessarily CSS-sticky) introduction/disclaimer in the narrower left column and a generous form card in the right column. Source order remains introduction then form. Fields inside the card stay primarily one column; only short, related text/select controls may form a two-column row if label wrapping and zoom remain comfortable.

```text
+--------------------------------------------------------------------+
| FORM & FIELD                                      Practice form    |
+--------------------------------------------------------------------+
| FIELD NOTE 04       | Creative Workshop Interest Form              |
| Shape a workshop…   | Full name                                    |
| Supporting copy     | Email address                                |
| Demo disclaimer     | Workshop topic                               |
|                     | Preferred format                             |
|                     | Areas of interest                            |
|                     | Exploration note                             |
|                     | Demo acknowledgement                         |
|                     | Status                         [Complete demo]|
+--------------------------------------------------------------------+
| Fictional demonstration footer                                     |
+--------------------------------------------------------------------+
```

### Tablet, approximately 768px

The header remains compact. The intro and form stack in source order, or use a modest 35/65 split only when both retain readable measures. The form card fills the available content width, fieldsets wrap naturally, and controls never depend on hover.

### Phone, approximately 390px

Everything is a single column. The identity, disclaimer, headings, fields, status, and full-width primary button follow document order. Radio and checkbox choices stack vertically with a large clickable label area. Page gutters are about 20px and card padding about 20–24px, subject to reflow testing.

```text
+----------------------------------+
| FORM & FIELD                     |
| FIELD NOTE 04                    |
| Shape a workshop…                |
| Practice-only disclaimer         |
|                                  |
| Creative Workshop Interest Form  |
| [Full name____________________]   |
| [Email________________________]   |
| [Choose a topic______________v]   |
| ( ) Online                       |
| ( ) In person                    |
| ( ) Either works                 |
| [ ] Typography                   |
| [ ] Color systems                |
| [ ] Accessible interfaces        |
| [Exploration note____________]   |
| [ ] Demo acknowledgement         |
| [Complete demo_______________]   |
+----------------------------------+
```

### Narrow phone, 320px

The 390px order remains. Gutters may reduce to 16px and the card may lose decorative elevation, but not its semantic grouping. Labels, hints, errors, long acknowledgement text, and button text wrap without clipping. Controls use `max-width: 100%`, flexible sizing, and no fixed minimum that creates horizontal scrolling. Test at 200% zoom as a reflow scenario, not merely by shrinking type.

## 7. Tentative design tokens

| Token | Suggested value | Planned use |
| --- | --- | --- |
| Canvas | `#F3EEE4` | Warm paper-like page background |
| Surface | `#FFFCF6` | Form surface |
| Ink | `#20201D` | Primary text and strong control borders |
| Muted ink | `#5F5A52` | Hints and supporting copy, pending contrast measurement |
| Accent | `#9B3F2D` | Primary action and restrained editorial marks |
| Accent strong | `#742C20` | Hover/pressed state, pending measurement |
| Focus | `#146C94` | Distinct focus outline |
| Error | `#A32620` | Error text and border, never the only error cue |
| Success | `#24633D` | Success status, paired with explicit text |
| Hairline | `#BDB4A5` | Dividers and default quiet boundaries |

- System sans-serif stack only; no downloaded fonts.
- Body text starts at `1rem` with line-height around `1.55`; hints no smaller than `0.875rem`.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, and 96px, used responsively.
- Content maximum around 1120px; form reading measure kept comfortable.
- Control height at least about 44px, with equally usable checkbox/radio label targets.
- A 3px focus outline with separation from the control; never remove the native outline without a measured replacement.
- Decorative paper lines or offset blocks may be CSS-authored and hidden from the accessibility tree. No decoration may carry instructions or status.

These hex values are proposals, not evidence. In Chunk 2, normal text pairs must measure at least 4.5:1 and necessary non-text boundaries and focus indicators at least 3:1 against adjacent colors.

## 8. Accessibility and interaction requirements

- Accessible names come from visible labels/legends; placeholder text is supplementary only.
- Required and optional states are written in labels/legends and reinforced with native `required` where applicable.
- Source and focus order follow the visible order. There is no positive `tabindex`, focus trap, autofocus, or unexpected focus movement.
- Keyboard checks cover Tab, Shift+Tab, Space for checkboxes/buttons, and native arrow-key radio selection. The select retains platform keyboard behavior.
- Every interactive element has a visible keyboard focus state, including the skip link and disabled/enabled submit states where applicable.
- Errors identify the problem and correction in text, use the approved associations, and do not rely on red alone.
- The live status is polite and concise. It never announces a name, email, note, or selected option.
- Layout supports 320, 360, 390, 768, 1024, and 1440 CSS px; 200% zoom; enlarged text; long labels; touch; and no horizontal page scrolling.
- Essential content is never hidden at a breakpoint. Motion is unnecessary; any later transition must respect `prefers-reduced-motion` and must not delay feedback.
- Native controls remain native. Browser/assistive-technology behavior takes priority over decorative consistency.

## 9. Validation and test matrix

Status terms are **PASS**, **FAIL**, and **NOT TESTED**. Chunk 0 can pass document/source review only; there is no runtime source, DOM simulation, or browser implementation yet.

| Test | Expected result | Evidence layer | Chunk 0 status |
| --- | --- | --- | --- |
| Two-document scope | Only the requested specification and content documents are added | Repository/source inspection | PASS |
| Field/content cross-check | Seven controls, exact IDs/names, options, states, hints, and errors agree across both documents | Document/source inspection | PASS |
| Assignment and fictional concept | Assignment is distinguished from FORM & FIELD; no real service claim | Document/source inspection | PASS |
| Privacy boundaries | No transport, persistence, echo, logging, or real-data request is planned | Document/source inspection | PASS |
| Empty required fields | Name, email, topic, format, and acknowledgement each block success with exact feedback | Unit/DOM simulation | NOT TESTED |
| Whitespace-only name | Spaces do not satisfy the name requirement; legitimate characters are not regex-restricted | Unit/DOM simulation | NOT TESTED |
| Name length boundaries | 1 character fails; 2 and 80 entered characters pass; over 80 cannot pass | Unit/DOM simulation | NOT TESTED |
| Email states | Missing and malformed email fail; a browser-accepted sample format passes | Unit/DOM simulation | NOT TESTED |
| Select placeholder | Blank placeholder fails; each nonblank option passes | Unit/DOM simulation | NOT TESTED |
| Radio group | None fails; every single choice passes; native group behavior is retained | Unit/DOM simulation and browser | NOT TESTED |
| Optional interests | Zero, one, and multiple checkboxes pass | Unit/DOM simulation and browser | NOT TESTED |
| Textarea maximum | Empty is valid; 300 characters pass; an over-limit value cannot pass | Unit/DOM simulation | NOT TESTED |
| Required acknowledgement | Unchecked blocks success; checked permits it if all other fields pass | Unit/DOM simulation | NOT TESTED |
| Correction after error | Related error and custom validity clear accurately without hiding other errors | Unit/DOM simulation and browser | NOT TESTED |
| Valid submit | `preventDefault()` runs and exact non-transmission success appears once | Unit/DOM simulation | NOT TESTED |
| Double activation | One idempotent success status remains; no duplicate side effect occurs | Unit/DOM simulation | NOT TESTED |
| No JavaScript | Controls remain readable/editable, button stays disabled, and `<noscript>` notice appears | Source inspection and browser with scripting disabled | NOT TESTED |
| Network/storage safety | No form navigation, request, URL data, log, cookie, or storage write occurs | Browser network/storage/console inspection | NOT TESTED |
| Labels and associations | Accessible names, legends, hints, errors, and required states are exposed correctly | Accessibility-tree/browser inspection | NOT TESTED |
| Keyboard operation | Logical order; visible focus; Space/arrow/select behavior works; no trap | Actual browser keyboard run | NOT TESTED |
| Announcements and focus | Invalid focus and polite summary/success are understandable without personal-value echo | Screen reader/browser run | NOT TESTED |
| Contrast | Text is at least 4.5:1; required non-text boundaries/focus at least 3:1 | Measured Chunk 2 output | NOT TESTED |
| Reflow and touch | 320px, target widths, 200% zoom, enlarged text, and touch targets remain usable without clipping/scroll | Actual browser responsive run | NOT TESTED |
| Reduced motion | No required motion; any transition respects reduced-motion preference | Source inspection and browser emulation | NOT TESTED |
| Standards and console | Final HTML/CSS passes relevant validation and console has no errors | Validators and actual browser | NOT TESTED |

The final validation report must retain these layers rather than treating a DOM simulation as a browser or assistive-technology pass.

## 10. Privacy, safety, security, and originality

- Ask for invented/sample details only. The full-name and email fields exist solely to demonstrate requested input types.
- Minimize data: no phone, address, birthday, organization, password, payment, file, or other unnecessary field.
- Never include user-entered values in a status, DOM summary, URL, request, persistent store, analytics event, or console output.
- Never state that the browser itself cannot remember values; autocomplete and session restoration are browser-controlled. The application makes no persistence request.
- No server or endpoint exists. The baseline disabled action and handler-first enhancement are security requirements, not styling choices.
- FORM & FIELD, its copy, and its workshop framing are original fictional demonstration material. There are no testimonials, schedules, prices, contacts, scarcity claims, guarantees, or purported clients.
- No external script, font, image, service, or package is necessary. Later decorative shapes must be locally authored CSS.

## 11. Five-chunk implementation plan

1. **Chunk 0 — specification and content:** create and review only `docs/form-spec.md` and `docs/form-content.md`.
2. **Chunk 1 — semantic HTML:** after approval, create `index.html` with the approved structure, fields, copy, disabled baseline submit control, and `<noscript>` notice. Do not add CSS or JavaScript logic beyond later linkage hooks.
3. **Chunk 2 — responsive CSS:** after HTML approval, create `css/style.css` and only the minimal markup hooks needed for the paper-inspired layout, responsive reflow, and focus/help/error/disabled states. Measure contrast. Do not add JavaScript logic.
4. **Chunk 3 — safe client-side behavior:** after CSS approval, create a small `js/main.js` for handler-first enablement, validation feedback, `preventDefault()`, status updates, and focused tests. No transport or persistence.
5. **Chunk 4 — full QA and release readiness:** run source, DOM, browser, accessibility, responsive, privacy, and standards checks; add the project README and validation report; make reviewed refinements. Do not commit or deploy without separate authorization.

## 12. Deferred GitHub Pages plan

Deployment is outside all current authorization. In a later **Deployment Phase A**, inspect and extend the existing two-job `build` → `deploy` workflow so the staged artifact preserves Tasks 1–3 and adds Task 4 at `/saiket-web-internship/task-4-html-forms/`; audit the staged artifact without committing, pushing, or deploying. Preserve `deploy` with `needs: build`.

Only after a separate review may **Deployment Phase B** stage intended files, commit, push, monitor Pages, and verify all four task URLs. Task 4 planning documents and repository README need not be published as runtime assets. No workflow file is touched in Chunk 0.

## 13. Open decisions, assumptions, and risks

### Decisions proposed for approval

- Approve the exact FORM & FIELD copy and field schema in `form-content.md`.
- Approve explicit `(required)` / `(optional)` wording instead of asterisk-only indicators.
- Approve a 2–80 character name range, 254-character email UI cap, and 300-character note maximum.
- Approve keeping entered values visible after a valid demo completion instead of silently clearing them; changing a value clears stale success feedback.
- Approve one primary **Complete demo** action with no reset button.
- Approve the tentative warm-paper, terracotta, and blue-focus direction, subject to measured contrast.
- Approve the desktop editorial split and single-column phone layout, subject to browser reflow checks.

### Assumptions

- English is the only language required for this internship exercise.
- Modern evergreen browsers are the target; native validation wording will be replaced or supplemented with the exact approved messages where needed for consistency.
- The required submit control can remain disabled in baseline HTML and become available only after all safety listeners install.
- The browser may independently autofill or restore form values; that behavior is not application persistence.

### Risks to verify later

- Setting exact custom messages while preserving native validation and reliable first-invalid focus can vary across browsers.
- Disabled baseline submission must be tested against keyboard implicit-submission behavior with JavaScript off.
- Repeated `aria-describedby` references on grouped controls can become verbose; accessibility-tree and screen-reader checks should tune associations without removing essential help.
- The long acknowledgement label and validation messages may wrap tightly at 320px or enlarged text sizes.
- Tentative muted, accent, error, success, and focus pairs may fail contrast until measured.
- Autocomplete can expose previously entered browser-managed values even though the application never stores them; copy must keep this distinction honest.
