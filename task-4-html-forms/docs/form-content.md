# FORM & FIELD Form Content

## Content status and identity

**FORM & FIELD** is an original fictional identity for SaiKet Systems Web Development Internship Task 4. The Creative Workshop Interest Form demonstrates HTML form controls and safe client-side validation. It is not a real workshop provider, registration service, booking flow, or contact channel.

All content below is proposed final UI copy, pending owner and ChatGPT approval at the Chunk 0 review gate.

## Document metadata

- **Browser title:** FORM & FIELD | Creative Workshop Interest Form Demo
- **Meta description:** Try an accessible fictional workshop interest form that validates sample details without sending or saving responses.
- **Document language:** English (`en`)

## Global interface copy

- **Visible site identity:** FORM & FIELD
- **Skip-link text:** Skip to form
- **Header context label:** Practice form
- **Visible disclaimer:** Practice form only. Use invented details. Nothing you enter is sent or saved.

## Editorial introduction

- **Eyebrow:** FIELD NOTE 04
- **H1:** Shape a workshop around your curiosity.
- **Supporting copy:** Choose a creative direction, share what you would like to explore, and see how a clear form guides each decision. This is a fictional interface exercise—not an event listing or registration.
- **Privacy reminder:** Use sample information rather than real personal details. Your entries stay on this page and are not transmitted or stored by FORM & FIELD. Your browser may still offer to autofill or remember values independently.

## Form introduction

- **Form section anchor:** `workshop-form`
- **H2:** Creative Workshop Interest Form
- **Introductory copy:** Complete the fields below to test labels, grouped choices, and validation. No workshop place will be requested or reserved.
- **Requirement note:** Labels identify every field as required or optional.

## Fields in exact order

### 1. Full name

- **Visible label:** Full name (required)
- **Control:** Single-line text input
- **`id`:** `full-name`
- **`name`:** `fullName`
- **Placeholder:** Example: Rowan Lee
- **Helper text:** Use an invented name with 2–80 characters. Punctuation, spaces, and letters from any language are welcome.
- **Required:** Yes
- **Autocomplete:** `name`

### 2. Email address

- **Visible label:** Email address (required)
- **Control:** Email input
- **`id`:** `email-address`
- **`name`:** `email`
- **Placeholder:** name@example.com
- **Helper text:** Use a sample address, such as name@example.com. It will not be sent or saved by this page.
- **Required:** Yes
- **Autocomplete:** `email`

### 3. Workshop topic

- **Visible label:** Workshop topic (required)
- **Control:** Select
- **`id`:** `workshop-topic`
- **`name`:** `workshopTopic`
- **Helper text:** Choose the fictional topic that interests you most. This does not reserve a place.
- **Required:** Yes

Options, in order:

| Role | Visible option label | Exact value |
| --- | --- | --- |
| Disabled selected placeholder | Choose a topic | Empty string (`""`) |
| Choice | Visual Identity | `visual-identity` |
| Choice | Interface Design | `interface-design` |
| Choice | Editorial Layout | `editorial-layout` |

### 4. Preferred format

- **Visible legend:** Preferred format (required)
- **Control:** Radio group
- **Fieldset ID:** `preferred-format-group`
- **Shared `name`:** `preferredFormat`
- **Helper text:** Choose one fictional preference. It is not a booking or schedule request.
- **Required:** Yes
- **Default:** No option selected

Options, in order:

| Visible option label | Input ID | Exact value |
| --- | --- | --- |
| Online | `format-online` | `online` |
| In person | `format-in-person` | `in-person` |
| Either works | `format-either` | `either` |

### 5. Areas of interest

- **Visible legend:** Areas of interest (optional)
- **Control:** Checkbox group
- **Fieldset ID:** `areas-of-interest-group`
- **Shared `name`:** `areasOfInterest`
- **Helper text:** Select any that appeal to you, or leave all three unchecked.
- **Required:** No
- **Default:** No options selected

Options, in order:

| Visible option label | Input ID | Exact value |
| --- | --- | --- |
| Typography | `interest-typography` | `typography` |
| Color systems | `interest-color-systems` | `color-systems` |
| Accessible interfaces | `interest-accessible-interfaces` | `accessible-interfaces` |

### 6. Exploration note

- **Visible label:** What would you like to explore? (optional)
- **Control:** Textarea
- **`id`:** `exploration-notes`
- **`name`:** `explorationNotes`
- **Placeholder:** For example, a skill, question, or design challenge.
- **Helper text:** Keep it to 300 characters or fewer, and do not include real personal or confidential details.
- **Required:** No
- **Default:** Empty

### 7. Demo acknowledgement

- **Visible label:** I understand that this practice form does not send or save my responses. (required)
- **Control:** Standalone checkbox
- **`id`:** `demo-acknowledgement`
- **`name`:** `demoAcknowledgement`
- **Exact value:** `understood`
- **Helper text:** Checking this box confirms only that you understand the demonstration; it does not register you for anything.
- **Required:** Yes
- **Default:** Unchecked

## Action and feedback copy

- **Primary button:** Complete demo
- **No reset/clear button:** None is planned.
- **No-JavaScript message:** This demo needs JavaScript to check the form safely. You can still review and edit every field, but the Complete demo button will remain unavailable and nothing will be submitted.
- **Invalid summary:** Please review the highlighted fields.
- **Success message:** Demo complete — your information was not sent or saved.

The success message does not include a name, email address, note, choice, registration claim, email claim, or server-acceptance claim.

## Exact validation strings

| Field / condition | Exact visible error |
| --- | --- |
| Full name is empty, whitespace only, or shorter than 2 entered characters | Enter an invented full name using at least 2 characters. |
| Full name exceeds 80 characters | Keep the full name to 80 characters or fewer. |
| Email address is empty | Enter a sample email address for this demo. |
| Email address has a browser-detected invalid email format | Enter an email address in a format like name@example.com. |
| Email address exceeds 254 characters | Keep the email address to 254 characters or fewer. |
| Workshop topic is still on the blank placeholder | Choose a workshop topic. |
| Preferred format has no selected radio | Choose a preferred format. |
| Exploration note exceeds 300 characters | Keep your response to 300 characters or fewer. |
| Demo acknowledgement is unchecked | Check the box to confirm that this demo does not send or save responses. |

There is no validation error for selecting no areas of interest because that group is optional. There is no general-purpose “invalid input” string; every constrained field receives the relevant actionable message above.

## Footer

- **Footer text:** FORM & FIELD — a fictional HTML forms exercise for SaiKet Systems Web Development Internship Task 4. No responses are collected.
- **Internal links:** None in the footer. The only planned internal link is **Skip to form** → `#workshop-form`; no dummy `#` link or external destination is used.

## Terminology rules

- Use **practice form**, **demo**, or **demonstration**, never “application,” “booking,” “registration,” or “submission received.”
- Use **workshop topic** and **preferred format** consistently.
- Describe the visitor's information as **entries** or **responses**, never a registration record.
- State **not sent or saved by this page/application** while acknowledging that browser autofill or restoration is independently controlled.
- Do not call the option choices available dates, confirmed formats, inventory, or services.

## Accuracy and privacy checklist

- [x] FORM & FIELD is explicitly identified as fictional.
- [x] The page is described as an HTML form and validation demonstration, not a real workshop service.
- [x] Visitors are asked to use invented/sample information and avoid personal or confidential detail.
- [x] No real or fabricated address, phone, email contact, schedule, price, instructor, organization, client, testimonial, or availability claim appears.
- [x] No copy promises registration, booking, enrollment, email delivery, server acceptance, or a place at an event.
- [x] The exact success message says the information was not sent or saved.
- [x] No user-entered value is planned for feedback, the URL, storage, logs, analytics, or network transfer.
- [x] Browser autofill/restoration is distinguished from application persistence; the copy does not claim the browser can never retain values.
- [x] Every field has complete, human-readable label, help, required state, default, and validation copy where applicable.
- [x] All options and values match `form-spec.md`.
- [x] No dummy link, placeholder prose, remote dependency, or unapproved field is present.
- [ ] Owner and ChatGPT approval is pending; this content remains provisional until the Chunk 0 review is complete.
