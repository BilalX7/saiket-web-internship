# Task 2 — E-commerce Product Page

This is SaiKet Systems Web Development Internship Task 2: a responsive, single-product interface for the fictional **MONOFORM M75 Mechanical Keyboard**. It demonstrates product-page design and an accessible client-side cart. It is **not an actual storefront** and cannot place orders, accept payments, or sell products.

## Features

- Three original SVG product views with labelled visual thumbnails.
- Graphite and Sand color choices, plus Linear and Tactile switch choices.
- Quantity selection from 1 to 10 for each configuration.
- An accessible, keyboard-operable gallery and modal demo cart.
- Variant-aware cart lines: the four color/switch combinations remain distinct, while repeated identical configurations merge up to 10 items.
- Totals calculated with integer cents rather than decimal currency arithmetic.
- Cart persistence in `localStorage`, with an in-memory fallback if browser storage is unavailable.
- Semantic content, responsive layouts, visible focus, reduced-motion support, and a useful no-JavaScript fallback.

## Technology

The page uses plain HTML5, CSS3, and dependency-free vanilla JavaScript. It has no framework, package installation, build step, API, database, or backend.

## Folder layout

```text
task-2-ecommerce-product-page/
├── README.md
├── index.html
├── assets/
│   └── images/
│       ├── m75-detail.svg
│       ├── m75-hero.svg
│       └── m75-top.svg
├── css/
│   └── style.css
├── docs/
│   ├── chunk-4-validation.md
│   ├── product-page-content.md
│   └── product-page-spec.md
└── js/
    └── main.js
```

## Preview locally

You can open `index.html` directly. A local HTTP server more closely resembles static hosting and makes resource checks easier.

From PowerShell in this folder:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Then visit `http://127.0.0.1:8000/`. Stop the server with `Ctrl+C`. No account, secret, environment variable, dependency install, or network service is required.

## Use the demonstration

1. Choose one of the three product-view thumbnails.
2. Select a color and switch type. The configuration summary updates, but every variant remains $149.00.
3. Choose a quantity from 1 to 10 and select **Add to cart**.
4. Open **Cart**, then edit a line quantity or remove a variant. The cart count is the total number of items, not the number of lines.
5. Close the cart with its Close button or the Escape key.

If JavaScript is disabled, all three full-size figures, product details, available options, specifications, FAQs, and disclaimers remain visible. Gallery controls, the configurator, and the cart opener remain hidden so they do not become misleading dead controls.

## Cart rules and storage

A cart line is identified by product, color, and switch type, for example:

```text
monoform-m75|graphite|linear
```

The trusted unit price is `14900` cents. It is defined in JavaScript and is never read from page text or trusted from saved data. Each of the four variants can hold 1–10 items, so the demonstration cart can contain at most four lines and 40 items. The subtotal is the sum of line quantities multiplied by `14900` cents.

When available, the browser stores versioned fictional variant IDs and quantities under `saiket-task2-cart-v1`. It stores no price, name, address, payment information, account identifier, or other personal data. If storage is blocked or fails, the current in-memory cart keeps working until the page closes.

To clear the saved demo cart, remove `saiket-task2-cart-v1` in the browser's Local Storage tools, or run this on the page in the developer console and reload:

```js
localStorage.removeItem("saiket-task2-cart-v1");
location.reload();
```

## Accessibility and progressive enhancement

- The page has one H1, semantic landmarks, a skip link, native fieldsets/radios/selects, descriptive image alternatives, and visible captions.
- The gallery uses native buttons and reports the selected view with `aria-pressed`.
- The cart uses native `<dialog>` where supported, moves focus to Close when opened, and restores focus to the opener when closed. A dependency-free fallback supplies modal state and focus containment for browsers without `showModal()`.
- Visible polite and assertive status regions report cart changes and validation errors.
- A distinct focus ring remains visible, and `prefers-reduced-motion: reduce` removes nonessential motion.
- Progressive enhancement means the static product page remains useful before or without JavaScript; interactive commerce controls are exposed only after initialization succeeds.

Source inspection and automated checks do not by themselves prove full screen-reader or cross-browser conformance. See the validation report for completed tests and remaining manual checks.

## Limitations and privacy

MONOFORM, the M75, its specifications, variants, and price are fictional internship content. The project has no checkout, orders, payments, shipping, tax, stock, discounts, accounts, reviews, analytics, cookies, tracking, network requests, or personal-data collection. `localStorage` contains only fictional cart contents and may be cleared or blocked by the browser.

## Maintenance and testing

Keep product IDs, allowed variants, the fixed price, quantity limits, labels, and the storage schema aligned across the HTML, JavaScript, specification, and content inventory. Preserve relative asset paths so the page works locally and below a repository subpath.

Run the built-in JavaScript syntax check from the repository root:

```powershell
node --check task-2-ecommerce-product-page/js/main.js
```

Core regression cases include all four variants, merging to 10, rejecting 11, editing/removing first/middle/last lines, subtotal and count grammar, invalid form quantities, valid/malformed/blocked storage, dialog focus, JavaScript-disabled content, keyboard navigation, reduced motion, 200% zoom, and widths of 320, 360, 390, 768, 1024, and 1440 pixels. Detailed results and reproducible manual checks are in [`docs/chunk-4-validation.md`](./docs/chunk-4-validation.md).

## Deployment status and future proposal

Task 2 was **not deployed** during Chunk 4. Task 1 remains the published site at the project root, and its workflow and public URLs were not changed.

If the owner later gives separate publication approval, a nonbreaking approach is to preserve Task 1 at the artifact root and stage only Task 2's deployable `index.html`, `css/`, `js/`, and `assets/` under `_site/task-2-ecommerce-product-page/`. The existing workflow triggers and staging would then need a careful, separately reviewed update so Task 2 changes can publish without replacing Task 1. Task 2 documentation should remain outside the Pages artifact. Before and after publication, smoke-test Task 1's homepage, CSS, JavaScript, CV, screenshots, social preview, and anchor links.

Only after a successful deployment should the proposed Task 2 URL be confirmed:

```text
https://bilalx7.github.io/saiket-web-internship/task-2-ecommerce-product-page/
```

That URL is not claimed to be live yet.
