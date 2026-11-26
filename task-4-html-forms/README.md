# FORM & FIELD — Creative Workshop Interest Form

FORM & FIELD is a fictional practice form for SaiKet Systems Web Development Internship Task 4. It demonstrates common HTML form controls and lets visitors practice correcting validation errors. Use invented details. The demo offers no workshop registration or booking.

## What the form demonstrates

- Native text and email inputs, a select menu, a required radio group, optional interest checkboxes, a textarea, and a required acknowledgement checkbox.
- HTML constraints for required fields, email format, and input lengths. A small vanilla JavaScript file adds a whitespace check for names and checks length limits even when values are assigned programmatically.
- Inline field errors and a concise status message. The browser focuses the first invalid field on a normal submit attempt. Correcting a field clears its own feedback while other errors stay visible.

The project uses plain HTML, CSS, and JavaScript. It has no package dependencies, build step, API, backend, or submission destination.

## Run locally

Open `index.html` directly for a quick look. For browser QA, run the following from the repository root, using Python 3 if installed.

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/task-4-html-forms/`. This serves the local repository on loopback and exercises the relative CSS and JavaScript paths from a nested directory. Stop the server with Ctrl+C.

```text
task-4-html-forms/
├── index.html
├── css/style.css
├── js/main.js
├── README.md
└── docs/
    ├── form-spec.md
    ├── form-content.md
    └── chunk-4-validation.md
```

## Try the demo

1. Enter an invented name such as **Rowan Fable** and a sample address such as **rowan.fable@example.com**.
2. Choose a workshop topic and a preferred format. Select any number of optional interests and, if useful, add an optional note of up to 300 characters.
3. Check the required acknowledgement and select **Complete demo**. An incomplete form shows field-specific errors and a summary. Correct the highlighted fields and try again.
4. A valid form shows “Demo complete — your information was not sent or saved.” The entries stay visible in the form, and editing any field clears the confirmation.

The application does not transmit, log, or persist form entries or repeat them in its feedback. Browser autofill or session restoration can remember values independently. When browser scripting is off, the fields remain editable, the page explains the fallback, and **Complete demo** remains disabled.

## Accessibility and verification

The first keyboard stop is a skip link to the form. Native labels, legends, and controls keep standard keyboard behavior. Hints and active errors are associated with their fields or fieldset, and a single polite status region reports the outcome. Focus has a visible outline. The layout reflows to one column on smaller screens and uses no animation.

Final local HTTP QA covered validation, privacy, keyboard interactions, live feedback at phone through desktop widths, contrast, and Chrome's native 200% zoom. Chrome and Firefox both passed the core form flows. Chrome also passed with browser scripting disabled. The [Chunk 4 validation report](docs/chunk-4-validation.md) records the headless Firefox keyboard limitation and remaining checks, including spoken screen-reader output, foreground Firefox keyboard activation, Safari, and physical touch devices.

## Proposed GitHub Pages location

Task 4 has not been deployed. The proposed route is `/saiket-web-internship/task-4-html-forms/`. A separately approved release would add the three runtime files to the existing combined Pages artifact while preserving Tasks 1–3.
