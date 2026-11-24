(() => {
  "use strict";

  const PRODUCT = Object.freeze({
    id: "monoform-m75",
    name: "M75 Mechanical Keyboard",
    shortName: "M75",
    unitPriceCents: 14900,
    colors: Object.freeze({
      graphite: "Graphite",
      sand: "Sand",
    }),
    switches: Object.freeze({
      linear: "Linear",
      tactile: "Tactile",
    }),
  });

  const STORAGE_KEY = "saiket-task2-cart-v1";
  const STORAGE_VERSION = 1;
  const MAX_LINE_QUANTITY = 10;
  const MAX_CART_LINES = 4;
  const STORAGE_WARNING = "Cart changes will last only while this page is open.";
  const RECOVERY_NOTICE = "Saved cart data could not be used, so the demo cart was reset.";
  const INVALID_QUANTITY_NOTICE =
    "Choose a quantity from 1 to 10. The selection has been reset to 1.";

  let usdFormatter = null;
  try {
    if (typeof Intl !== "undefined" && typeof Intl.NumberFormat === "function") {
      usdFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });
    }
  } catch {
    usdFormatter = null;
  }

  function parseQuantity(value) {
    const normalized = String(value);
    if (!/^(?:[1-9]|10)$/.test(normalized)) {
      return null;
    }

    const quantity = Number(normalized);
    return Number.isInteger(quantity) ? quantity : null;
  }

  function isAllowedVariant(color, switchType) {
    return (
      Object.hasOwn(PRODUCT.colors, color) &&
      Object.hasOwn(PRODUCT.switches, switchType)
    );
  }

  function makeLineKey(color, switchType) {
    return `${PRODUCT.id}|${color}|${switchType}`;
  }

  function createLine(color, switchType, quantity) {
    return {
      productId: PRODUCT.id,
      color,
      switchType,
      quantity,
    };
  }

  function addCartLine(cart, color, switchType, quantity) {
    const normalizedQuantity = parseQuantity(quantity);
    if (!isAllowedVariant(color, switchType) || normalizedQuantity === null) {
      return { ok: false, reason: "invalid" };
    }

    const key = makeLineKey(color, switchType);
    const existing = cart.get(key);
    if (!existing && cart.size >= MAX_CART_LINES) {
      return { ok: false, reason: "invalid" };
    }

    const nextQuantity = (existing?.quantity ?? 0) + normalizedQuantity;

    if (nextQuantity > MAX_LINE_QUANTITY) {
      return { ok: false, reason: "limit", key, quantity: existing?.quantity ?? 0 };
    }

    cart.set(key, createLine(color, switchType, nextQuantity));
    return {
      ok: true,
      kind: existing ? "merged" : "added",
      key,
      quantity: nextQuantity,
    };
  }

  function updateCartLine(cart, key, quantity) {
    const existing = cart.get(key);
    const normalizedQuantity = parseQuantity(quantity);
    if (!existing || normalizedQuantity === null) {
      return false;
    }

    cart.set(
      key,
      createLine(existing.color, existing.switchType, normalizedQuantity),
    );
    return true;
  }

  function cartCount(cart) {
    return [...cart.values()].reduce((total, line) => total + line.quantity, 0);
  }

  function cartSubtotalCents(cart) {
    return [...cart.values()].reduce(
      (total, line) => total + PRODUCT.unitPriceCents * line.quantity,
      0,
    );
  }

  function formatCents(cents) {
    if (usdFormatter) {
      return usdFormatter.format(cents / 100);
    }

    const whole = Math.floor(cents / 100);
    const fraction = String(cents % 100).padStart(2, "0");
    return `$${whole.toLocaleString("en-US")}.${fraction}`;
  }

  function cartToPayload(cart) {
    return {
      version: STORAGE_VERSION,
      lines: [...cart.values()].map((line) => ({
        productId: PRODUCT.id,
        color: line.color,
        switchType: line.switchType,
        quantity: line.quantity,
      })),
    };
  }

  function parseStoredPayload(raw) {
    if (raw === null) {
      return { ok: true, cart: new Map(), hadValue: false };
    }

    try {
      const payload = JSON.parse(raw);
      if (
        payload === null ||
        typeof payload !== "object" ||
        Array.isArray(payload) ||
        payload.version !== STORAGE_VERSION ||
        !Array.isArray(payload.lines) ||
        payload.lines.length > MAX_CART_LINES
      ) {
        return { ok: false, cart: new Map(), hadValue: true };
      }

      const hydratedCart = new Map();
      for (const line of payload.lines) {
        if (
          line === null ||
          typeof line !== "object" ||
          Array.isArray(line) ||
          line.productId !== PRODUCT.id ||
          !isAllowedVariant(line.color, line.switchType) ||
          !Number.isInteger(line.quantity) ||
          parseQuantity(line.quantity) === null
        ) {
          return { ok: false, cart: new Map(), hadValue: true };
        }

        const key = makeLineKey(line.color, line.switchType);
        if (hydratedCart.has(key)) {
          return { ok: false, cart: new Map(), hadValue: true };
        }

        hydratedCart.set(
          key,
          createLine(line.color, line.switchType, line.quantity),
        );
      }

      return { ok: true, cart: hydratedCart, hadValue: true };
    } catch {
      return { ok: false, cart: new Map(), hadValue: true };
    }
  }

  // These pure helpers are exported only in Node so the cart model can be
  // tested without a dependency or a browser global.
  if (typeof module !== "undefined" && module.exports) {
    module.exports = Object.freeze({
      PRODUCT,
      STORAGE_KEY,
      MAX_LINE_QUANTITY,
      addCartLine,
      updateCartLine,
      cartCount,
      cartSubtotalCents,
      cartToPayload,
      parseStoredPayload,
      parseQuantity,
      makeLineKey,
      formatCents,
    });
  }

  if (typeof document === "undefined") {
    return;
  }

  let cart = new Map();
  let storageAvailable = false;
  let storageWarningShown = false;
  let lastCartOpener = null;
  let fallbackPageState = [];
  let ui = null;

  function initializeGallery() {
    const gallery = document.querySelector("[data-gallery]");
    const controls = gallery?.querySelector("[data-gallery-controls]");
    const figures = [...(gallery?.querySelectorAll("[data-gallery-figure]") ?? [])];
    const buttons = [...(controls?.querySelectorAll("[data-gallery-select]") ?? [])];
    const expectedIds = ["hero", "top", "detail"];

    const figureMap = new Map(
      figures.map((figure) => [figure.dataset.imageId, figure]),
    );
    const buttonMap = new Map(
      buttons.map((button) => [button.dataset.gallerySelect, button]),
    );

    const isComplete =
      gallery &&
      controls &&
      figures.length === expectedIds.length &&
      buttons.length === expectedIds.length &&
      expectedIds.every((id) => {
        const figure = figureMap.get(id);
        const button = buttonMap.get(id);
        return (
          figure &&
          button &&
          figure.querySelector("img") &&
          button.getAttribute("aria-controls") === figure.id
        );
      });

    if (!isComplete) {
      return;
    }

    function showImage(imageId) {
      if (!figureMap.has(imageId) || !buttonMap.has(imageId)) {
        return;
      }

      for (const [id, figure] of figureMap) {
        figure.hidden = id !== imageId;
      }

      for (const [id, button] of buttonMap) {
        button.setAttribute("aria-pressed", String(id === imageId));
      }
    }

    try {
      for (const button of buttons) {
        button.addEventListener("click", () => {
          showImage(button.dataset.gallerySelect);
        });
      }

      showImage("hero");
      controls.hidden = false;
    } catch {
      for (const figure of figures) {
        figure.hidden = false;
      }
      controls.hidden = true;
    }
  }

  function getCommerceElements() {
    const elements = {
      form: document.querySelector("[data-product-configurator]"),
      staticOptions: document.querySelector("[data-static-options]"),
      cartOpen: document.querySelector("[data-cart-open]"),
      cartCount: document.querySelector("[data-cart-count]"),
      dialog: document.querySelector("[data-cart-dialog]"),
      cartClose: document.querySelector("[data-cart-close]"),
      cartItems: document.querySelector("[data-cart-items]"),
      cartEmpty: document.querySelector("[data-cart-empty]"),
      cartSubtotal: document.querySelector("[data-cart-subtotal]"),
      dialogStatus: document.querySelector("[data-dialog-status]"),
      configurationSummary: document.querySelector("[data-configuration-summary]"),
      productQuantity: document.querySelector("[data-product-quantity]"),
      addButton: document.querySelector("[data-add-to-cart]"),
      cartStatus: document.querySelector("[data-cart-status]"),
      cartError: document.querySelector("[data-cart-error]"),
      colorInputs: [...document.querySelectorAll("[data-option-color]")],
      switchInputs: [...document.querySelectorAll("[data-option-switch]")],
    };

    const requiredValues = Object.values(elements).filter(
      (value) => !Array.isArray(value),
    );
    const colorValues = new Set(elements.colorInputs.map((input) => input.value));
    const switchValues = new Set(elements.switchInputs.map((input) => input.value));
    const quantityValues = [
      ...(elements.productQuantity?.querySelectorAll("option") ?? []),
    ].map((option) => option.value);

    const isComplete =
      requiredValues.every(Boolean) &&
      elements.colorInputs.length === 2 &&
      elements.switchInputs.length === 2 &&
      Object.keys(PRODUCT.colors).every((value) => colorValues.has(value)) &&
      Object.keys(PRODUCT.switches).every((value) => switchValues.has(value)) &&
      quantityValues.join(",") === "1,2,3,4,5,6,7,8,9,10";

    return isComplete ? elements : null;
  }

  function loadCartFromStorage() {
    let raw = null;

    try {
      raw = window.localStorage.getItem(STORAGE_KEY);
      const probeValue = raw ?? JSON.stringify({ version: STORAGE_VERSION, lines: [] });
      window.localStorage.setItem(STORAGE_KEY, probeValue);
      if (raw === null) {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      return {
        cart: new Map(),
        available: false,
        notice: STORAGE_WARNING,
      };
    }

    const parsed = parseStoredPayload(raw);
    if (parsed.ok) {
      return {
        cart: parsed.cart,
        available: true,
        notice: "",
      };
    }

    let available = true;
    let notice = RECOVERY_NOTICE;
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ version: STORAGE_VERSION, lines: [] }),
      );
    } catch {
      available = false;
      notice = `${notice} ${STORAGE_WARNING}`;
    }

    return { cart: new Map(), available, notice };
  }

  function persistCart() {
    if (!storageAvailable) {
      if (!storageWarningShown) {
        storageWarningShown = true;
        return STORAGE_WARNING;
      }
      return "";
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cartToPayload(cart)));
      return "";
    } catch {
      storageAvailable = false;
      if (!storageWarningShown) {
        storageWarningShown = true;
        return STORAGE_WARNING;
      }
      return "";
    }
  }

  function clearMessages() {
    ui.cartStatus.textContent = "";
    ui.cartError.textContent = "";
    ui.dialogStatus.textContent = "";
  }

  function showFormStatus(message, isError = false) {
    ui.dialogStatus.textContent = "";
    ui.cartStatus.textContent = isError ? "" : message;
    ui.cartError.textContent = isError ? message : "";
  }

  function showDialogStatus(message) {
    ui.cartStatus.textContent = "";
    ui.cartError.textContent = "";
    ui.dialogStatus.textContent = message;
  }

  function updateConfigurationSummary() {
    const selectedColor = ui.colorInputs.find((input) => input.checked)?.value;
    const selectedSwitch = ui.switchInputs.find((input) => input.checked)?.value;

    if (!isAllowedVariant(selectedColor, selectedSwitch)) {
      return null;
    }

    ui.configurationSummary.textContent =
      `${PRODUCT.colors[selectedColor]} · ${PRODUCT.switches[selectedSwitch]}`;
    return { color: selectedColor, switchType: selectedSwitch };
  }

  function readProductQuantity() {
    const quantity = parseQuantity(ui.productQuantity.value);
    if (quantity !== null) {
      return quantity;
    }

    ui.productQuantity.value = "1";
    showFormStatus(INVALID_QUANTITY_NOTICE, true);
    return null;
  }

  function updateCartSummary() {
    const count = cartCount(cart);
    ui.cartCount.textContent = String(count);
    ui.cartOpen.setAttribute(
      "aria-label",
      `Open cart, ${count} ${count === 1 ? "item" : "items"}`,
    );
    ui.cartSubtotal.textContent = formatCents(cartSubtotalCents(cart));
  }

  function makeTextElement(tagName, className, text) {
    const element = document.createElement(tagName);
    element.className = className;
    element.textContent = text;
    return element;
  }

  function createCartLineElement(key, line) {
    const item = document.createElement("li");
    item.className = "cart-line";
    item.dataset.cartItem = "";
    item.dataset.lineKey = key;

    const colorLabel = PRODUCT.colors[line.color];
    const switchLabel = PRODUCT.switches[line.switchType];
    const variantLabel = `${colorLabel} · ${switchLabel}`;

    item.append(
      makeTextElement("p", "cart-line__name", PRODUCT.name),
      makeTextElement("p", "cart-line__variant", variantLabel),
      makeTextElement(
        "p",
        "cart-line__unit-price",
        `Unit price: ${formatCents(PRODUCT.unitPriceCents)}`,
      ),
    );

    const quantityGroup = document.createElement("div");
    quantityGroup.className = "cart-line__quantity";

    const selectId = `cart-quantity-${line.color}-${line.switchType}`;
    const quantityLabel = document.createElement("label");
    quantityLabel.htmlFor = selectId;
    quantityLabel.textContent = "Update quantity";

    const quantitySelect = document.createElement("select");
    quantitySelect.id = selectId;
    quantitySelect.dataset.cartLineQuantity = "";
    quantitySelect.dataset.lineKey = key;
    quantitySelect.setAttribute(
      "aria-label",
      `Quantity for M75, ${colorLabel}, ${switchLabel}`,
    );

    for (let quantity = 1; quantity <= MAX_LINE_QUANTITY; quantity += 1) {
      const option = document.createElement("option");
      option.value = String(quantity);
      option.textContent = String(quantity);
      option.selected = quantity === line.quantity;
      quantitySelect.append(option);
    }

    quantityGroup.append(quantityLabel, quantitySelect);
    item.append(quantityGroup);

    item.append(
      makeTextElement(
        "p",
        "cart-line__total",
        `Line total: ${formatCents(PRODUCT.unitPriceCents * line.quantity)}`,
      ),
    );

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "cart-line__remove";
    removeButton.dataset.cartRemove = "";
    removeButton.dataset.lineKey = key;
    removeButton.textContent = "Remove";
    removeButton.setAttribute(
      "aria-label",
      `Remove M75, ${colorLabel}, ${switchLabel} from cart`,
    );
    item.append(removeButton);

    return item;
  }

  function focusRenderedControl(focusTarget) {
    if (!focusTarget || !ui.dialog.open) {
      return;
    }

    Promise.resolve().then(() => {
      if (focusTarget.type === "close") {
        ui.cartClose.focus();
        return;
      }

      const selector = [...ui.cartItems.querySelectorAll("[data-cart-line-quantity]")]
        .find((control) => control.dataset.lineKey === focusTarget.key);
      selector?.focus();
    });
  }

  function renderCart(focusTarget = null) {
    const fragment = document.createDocumentFragment();
    for (const [key, line] of cart) {
      fragment.append(createCartLineElement(key, line));
    }

    ui.cartItems.replaceChildren(fragment);
    ui.cartEmpty.hidden = cart.size !== 0;
    updateCartSummary();
    focusRenderedControl(focusTarget);
  }

  function handleConfiguratorChange(event) {
    if (event.target.matches("[data-option-color], [data-option-switch]")) {
      updateConfigurationSummary();
      clearMessages();
      return;
    }

    if (event.target.matches("[data-product-quantity]")) {
      clearMessages();
      readProductQuantity();
    }
  }

  function handleConfiguratorSubmit(event) {
    event.preventDefault();
    clearMessages();

    const variant = updateConfigurationSummary();
    if (!variant) {
      showFormStatus("Choose a valid color and switch type.", true);
      return;
    }

    const quantity = readProductQuantity();
    if (quantity === null) {
      return;
    }

    const result = addCartLine(cart, variant.color, variant.switchType, quantity);
    const colorLabel = PRODUCT.colors[variant.color];
    const switchLabel = PRODUCT.switches[variant.switchType];

    if (!result.ok && result.reason === "limit") {
      showFormStatus(
        `You can keep up to 10 of each configuration in this demo cart. Review the existing ${colorLabel}, ${switchLabel} quantity before adding more.`,
        true,
      );
      return;
    }

    if (!result.ok) {
      showFormStatus("Choose a valid product configuration.", true);
      return;
    }

    const storageNotice = persistCart();
    renderCart();
    const message =
      result.kind === "merged"
        ? `Updated M75, ${colorLabel}, ${switchLabel}, to ${result.quantity} in your cart.`
        : `Added ${quantity} M75, ${colorLabel}, ${switchLabel}, to your cart.`;
    showFormStatus(`${message}${storageNotice ? ` ${storageNotice}` : ""}`);
  }

  function handleCartQuantityChange(event) {
    const select = event.target.closest("[data-cart-line-quantity]");
    if (!select) {
      return;
    }

    const key = select.dataset.lineKey;
    const line = cart.get(key);
    const quantity = parseQuantity(select.value);
    if (!line) {
      renderCart({ type: "close" });
      showDialogStatus("That cart line is no longer available.");
      return;
    }

    if (quantity === null) {
      select.value = String(line.quantity);
      showDialogStatus("Choose a cart quantity from 1 to 10. The cart was not changed.");
      return;
    }

    updateCartLine(cart, key, quantity);
    const storageNotice = persistCart();
    renderCart({ type: "quantity", key });
    const colorLabel = PRODUCT.colors[line.color];
    const switchLabel = PRODUCT.switches[line.switchType];
    const message =
      `Cart quantity updated to ${quantity} for M75, ${colorLabel}, ${switchLabel}.`;
    showDialogStatus(`${message}${storageNotice ? ` ${storageNotice}` : ""}`);
  }

  function handleCartClick(event) {
    const removeButton = event.target.closest("[data-cart-remove]");
    if (!removeButton) {
      return;
    }

    const key = removeButton.dataset.lineKey;
    const line = cart.get(key);
    if (!line) {
      return;
    }

    const keys = [...cart.keys()];
    const removedIndex = keys.indexOf(key);
    const nextFocusKey = keys[removedIndex + 1] ?? keys[removedIndex - 1] ?? null;
    cart.delete(key);

    const storageNotice = persistCart();
    renderCart(
      nextFocusKey
        ? { type: "quantity", key: nextFocusKey }
        : { type: "close" },
    );

    const colorLabel = PRODUCT.colors[line.color];
    const switchLabel = PRODUCT.switches[line.switchType];
    const message = cart.size
      ? `Removed M75, ${colorLabel}, ${switchLabel}, from your cart.`
      : `Removed M75, ${colorLabel}, ${switchLabel}. Your cart is now empty.`;
    showDialogStatus(`${message}${storageNotice ? ` ${storageNotice}` : ""}`);
  }

  function setFallbackPageInert() {
    fallbackPageState = [...document.body.children]
      .filter((element) => element !== ui.dialog)
      .map((element) => ({
        element,
        inert: element.hasAttribute("inert"),
        ariaHidden: element.getAttribute("aria-hidden"),
      }));

    for (const record of fallbackPageState) {
      record.element.setAttribute("inert", "");
      record.element.setAttribute("aria-hidden", "true");
    }
  }

  function restoreFallbackPage() {
    for (const record of fallbackPageState) {
      if (!record.inert) {
        record.element.removeAttribute("inert");
      }

      if (record.ariaHidden === null) {
        record.element.removeAttribute("aria-hidden");
      } else {
        record.element.setAttribute("aria-hidden", record.ariaHidden);
      }
    }

    fallbackPageState = [];
    document.body.classList.remove("dialog-fallback-open");
  }

  function restoreCartOpenerFocus() {
    if (lastCartOpener?.isConnected && !lastCartOpener.hidden) {
      lastCartOpener.focus();
    }
    lastCartOpener = null;
  }

  function openFallbackDialog() {
    setFallbackPageInert();
    document.body.classList.add("dialog-fallback-open");
    ui.dialog.dataset.fallbackOpen = "";
    ui.dialog.setAttribute("role", "dialog");
    ui.dialog.setAttribute("aria-modal", "true");
    ui.dialog.setAttribute("open", "");
  }

  function closeFallbackDialog() {
    ui.dialog.removeAttribute("open");
    ui.dialog.removeAttribute("role");
    ui.dialog.removeAttribute("aria-modal");
    delete ui.dialog.dataset.fallbackOpen;
    restoreFallbackPage();
    restoreCartOpenerFocus();
  }

  function openCart() {
    if (ui.dialog.open) {
      return;
    }

    lastCartOpener = document.activeElement;
    ui.dialogStatus.textContent = "";

    if (typeof ui.dialog.showModal === "function") {
      try {
        ui.dialog.showModal();
      } catch {
        openFallbackDialog();
      }
    } else {
      openFallbackDialog();
    }

    window.requestAnimationFrame(() => ui.cartClose.focus());
  }

  function closeCart() {
    if (!ui.dialog.open) {
      return;
    }

    if (ui.dialog.hasAttribute("data-fallback-open")) {
      closeFallbackDialog();
    } else {
      ui.dialog.close();
    }
  }

  function handleFallbackDialogKeydown(event) {
    if (!ui.dialog.hasAttribute("data-fallback-open")) {
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      closeFallbackDialog();
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const focusable = [...ui.dialog.querySelectorAll(
      "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex='-1'])",
    )].filter((element) => !element.hidden && element.getClientRects().length > 0);

    if (focusable.length === 0) {
      event.preventDefault();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function bindCommerceEvents() {
    ui.form.addEventListener("change", handleConfiguratorChange);
    ui.form.addEventListener("submit", handleConfiguratorSubmit);
    ui.cartOpen.addEventListener("click", openCart);
    ui.cartClose.addEventListener("click", closeCart);
    ui.cartItems.addEventListener("change", handleCartQuantityChange);
    ui.cartItems.addEventListener("click", handleCartClick);
    document.addEventListener("keydown", handleFallbackDialogKeydown);
    ui.dialog.addEventListener("close", () => {
      ui.dialogStatus.textContent = "";
      restoreCartOpenerFocus();
    });
  }

  function initializeCommerce() {
    ui = getCommerceElements();
    if (!ui) {
      return;
    }

    try {
      const storageResult = loadCartFromStorage();
      cart = storageResult.cart;
      storageAvailable = storageResult.available;
      storageWarningShown = storageResult.notice.includes(STORAGE_WARNING);

      if (!updateConfigurationSummary()) {
        return;
      }

      readProductQuantity();
      clearMessages();
      bindCommerceEvents();
      renderCart();

      // Expose controls only after state, persistence, listeners, and rendering
      // are ready, keeping the static fallback truthful on partial failure.
      ui.form.hidden = false;
      ui.cartOpen.hidden = false;
      ui.staticOptions.hidden = true;

      if (storageResult.notice) {
        showFormStatus(storageResult.notice);
      }
    } catch {
      ui.form.hidden = true;
      ui.cartOpen.hidden = true;
      ui.staticOptions.hidden = false;
    }
  }

  function start() {
    initializeGallery();
    initializeCommerce();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
