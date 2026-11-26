(() => {
  "use strict";

  const form = document.querySelector("#interest-form");
  const button = form?.querySelector("#complete-demo");
  const status = form?.querySelector("#form-status");
  if (!(form instanceof HTMLFormElement) ||
      !(button instanceof HTMLButtonElement) || !status) return;

  const formatRadios = [...form.querySelectorAll(
    '#preferred-format-group input[type="radio"][name="preferredFormat"]'
  )];
  const definitions = [
    ["full-name", "full-name-error", nameError],
    ["email-address", "email-address-error", emailError],
    ["workshop-topic", "workshop-topic-error", topicError],
    ["preferred-format-group", "preferred-format-error", formatError],
    ["exploration-notes", "exploration-notes-error", notesError],
    ["demo-acknowledgement", "demo-acknowledgement-error", acknowledgementError],
  ];
  const fields = definitions.map(([id, errorId, getError]) => {
    const target = form.querySelector(`#${id}`);
    const error = form.querySelector(`#${errorId}`);
    const hint = target?.getAttribute("aria-describedby");
    const controls = id === "preferred-format-group" ? formatRadios : [target];
    return { target, error, hint, controls, getError };
  });

  // Keep the HTML button disabled if any enhancement hook is missing.
  if (formatRadios.length !== 3 || fields.some(({ target, error, hint, controls }) =>
    !target || !error || !hint || !document.getElementById(hint) ||
    controls.some(control => typeof control?.setCustomValidity !== "function")
  )) return;

  const messages = {
    error: "Please review the highlighted fields.",
    success: "Demo complete — your information was not sent or saved.",
  };

  function nameError(input) {
    if (input.validity.valueMissing || !input.value.trim() ||
        input.validity.tooShort || input.value.length < input.minLength) {
      return "Enter an invented full name using at least 2 characters.";
    }
    if (input.validity.tooLong || input.value.length > input.maxLength) {
      return "Keep the full name to 80 characters or fewer.";
    }
    return "";
  }

  function emailError(input) {
    if (input.validity.valueMissing) {
      return "Enter a sample email address for this demo.";
    }
    if (input.validity.tooLong || input.value.length > input.maxLength) {
      return "Keep the email address to 254 characters or fewer.";
    }
    return input.validity.typeMismatch
      ? "Enter an email address in a format like name@example.com."
      : "";
  }

  function topicError(select) {
    return select.validity.valueMissing ? "Choose a workshop topic." : "";
  }

  function formatError(firstRadio) {
    return firstRadio.validity.valueMissing ? "Choose a preferred format." : "";
  }

  function notesError(textarea) {
    return textarea.validity.tooLong || textarea.value.length > textarea.maxLength
      ? "Keep your response to 300 characters or fewer."
      : "";
  }

  function acknowledgementError(checkbox) {
    return checkbox.validity.valueMissing
      ? "Check the box to confirm that this demo does not send or save responses."
      : "";
  }

  function updateValidity({ controls: [control], getError }) {
    // Clear the previous custom message before reading native validity.
    control.setCustomValidity("");
    const message = getError(control);
    if (message) control.setCustomValidity(message);
    return message;
  }

  function showFieldError({ controls, target, error, hint }, message) {
    const hasError = Boolean(message);
    if (error.hidden === !hasError && error.textContent === message) return;

    error.textContent = message;
    error.hidden = !hasError;
    target.setAttribute("aria-describedby", hasError ? `${hint} ${error.id}` : hint);

    // Radios share one message, described by their containing fieldset.
    for (const element of new Set([target, ...controls])) {
      if (hasError) element.setAttribute("aria-invalid", "true");
      else element.removeAttribute("aria-invalid");
    }
  }

  function showStatus(state = "") {
    if (state) status.dataset.state = state;
    else delete status.dataset.state;

    const message = messages[state] ?? "";
    if (status.textContent !== message) status.textContent = message;
  }

  function showErrors() {
    let firstInvalid = null;
    for (const field of fields) {
      const message = updateValidity(field);
      showFieldError(field, message);
      if (message && !firstInvalid) firstInvalid = field.controls[0];
    }
    return firstInvalid;
  }

  function prepareValidation() {
    // Implicit Enter submission also activates the form's default button.
    for (const field of fields) updateValidity(field);
  }

  function handleInvalid() {
    // Invalid forms usually never fire submit. Render here and keep native focus.
    showStatus(showErrors() ? "error" : "");
  }

  function handleEdit(event) {
    const field = fields.find(({ controls }) => controls.includes(event.target));
    if (field) {
      const message = updateValidity(field);
      if (!field.error.hidden) showFieldError(field, message);
    }

    if (status.dataset.state === "success" ||
        (status.dataset.state === "error" && fields.every(({ error }) => error.hidden))) {
      showStatus();
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Recheck limits for submit paths that skip the button's click handler.
    const firstInvalid = showErrors();
    if (firstInvalid) {
      showStatus("error");
      firstInvalid.focus();
      return;
    }
    showStatus("success");
  }

  form.addEventListener("submit", handleSubmit);
  form.addEventListener("invalid", handleInvalid, true);
  form.addEventListener("input", handleEdit);
  form.addEventListener("change", handleEdit);
  button.addEventListener("click", prepareValidation);
  button.disabled = false;
})();
