# MONOFORM M75 Product Page Specification

Status: Approved source-of-truth specification implemented through Chunk 4 using the recommended defaults. Historical chunk boundaries and approval questions are retained as planning context. The page is not deployed.

## 1. Task objective

SaiKet Systems Task 2 is: **“E-commerce Product Page” — Develop a product page displaying product details, images, and the option to add items to a cart. Focus on an intuitive and user-friendly interface for online shoppers. Skills: HTML, CSS and basic e-commerce concepts.**

The deliverable will be one original, responsive product-detail page for the fictional MONOFORM M75 Mechanical Keyboard. It will demonstrate product imagery, understandable options, quantity selection, and a functional cart using HTML5, modern CSS, and small, readable vanilla JavaScript. It is an internship demonstration, not a live shop.

Success means that a visitor can understand the fictional product, inspect three distinct illustrations, choose a color and switch type, choose a quantity from 1 to 10, add or merge the selected variant in a cart, edit or remove cart lines, and understand the subtotal. The page must remain truthful, accessible, lightweight, and useful when JavaScript is unavailable.

### Included scope

- One product-detail page and one fictional product.
- Three original SVG product illustrations.
- Two color options and two switch options at one fixed price.
- A quantity limit of 1–10 per cart line.
- A client-side cart with variant-aware line items, editing, removal, and subtotal.
- Optional `localStorage` persistence with a safe in-memory fallback.
- Responsive, keyboard-operable and reduced-motion-aware behavior.
- A clear demonstration disclaimer wherever commerce intent could be misunderstood.

### Explicitly excluded scope

- Catalog browsing, search, filters, related products, wishlists, accounts, login, reviews, ratings, testimonials, stock counts, delivery estimates, scarcity or discount messaging.
- Checkout, purchase buttons, payment forms, order submission, order confirmation, shipping calculation, tax calculation, inventory, a server, database, API, analytics, tracking, or collection of personal information.
- React, Bootstrap, Tailwind, npm packages, build tools, templates, external storefront code, real-brand affiliations, and unlicensed stock imagery.
- More than one product, claims that the product is real, or claims that a purchase/payment has occurred.
- Any change to Task 1, its public URL, the current GitHub Pages workflow, or repository deployment during this chunk.

## 2. Audience, persona, and journey

### Primary persona

**Maya, a careful desk-setup shopper.** Maya uses a phone or laptop, scans before reading deeply, compares visual and tactile options, and wants the price and cart consequences to be unambiguous. She may navigate by touch, keyboard, zoom, or a screen reader. She expects clear selection states and does not want surprise fees or fake urgency.

### Primary journey

1. Maya lands directly on the product page and immediately sees the fictional brand, product name, category, price, main illustration, and demonstration notice.
2. She views the hero illustration, then chooses the top-down or detail view through clearly named thumbnails. The main image changes without navigation.
3. She reviews the short description and specifications.
4. She selects Graphite or Sand, then Linear or Tactile. A visible summary repeats both choices.
5. She selects a quantity between 1 and 10.
6. She activates **Add to cart** and receives a polite status announcement identifying the quantity and variant added.
7. She opens the cart summary, reviews line details and subtotal, changes a quantity or removes a line, then closes the cart and returns to the control that opened it.
8. She sees that the cart is a demonstration and cannot place an order or accept payment.

### Alternate and failure journeys

- With JavaScript unavailable, Maya can still read all product copy, price, options, specifications, all three illustrations, and the demo disclaimer. Cart controls do not appear to work when they cannot work.
- If saved cart data is invalid, the page discards it and starts with an empty cart without exposing an error trace.
- If browser storage is unavailable, the cart works for the current page session in memory and announces that it will not persist after the page closes.
- If adding would take a matching cart line over 10, the cart is not changed. Focus remains stable and a visible/live error explains how to proceed.

## 3. Visual direction

The page uses a product-focused editorial composition rather than Task 1's blue-green engineering appearance. Warm porcelain backgrounds make the product artwork feel tactile; charcoal text supplies high readability; vermilion is reserved for decisive actions; thin boundaries and compact technical annotations support a precise industrial tone. Whitespace and oversized art carry the merchandising instead of gradients, glass effects, endorsements, or promotional noise.

All tokens below are proposed values. Chunk 2 must use custom properties so the product identity can be changed without rebuilding the layout.

### Color tokens and measured contrast

| Token | Value | Use |
| --- | --- | --- |
| `--color-page` | `#F7F2EA` | Warm porcelain page background |
| `--color-surface` | `#FFFDF8` | Cards, cart, and raised sections |
| `--color-text` | `#26211E` | Primary text and icons |
| `--color-muted` | `#655D57` | Secondary text |
| `--color-accent` | `#B83A24` | Primary action and active detail |
| `--color-accent-dark` | `#7A2415` | Accent text/hover treatment |
| `--color-border` | `#D8CFC4` | Dividers and control boundaries |
| `--color-focus` | `#1B67D1` | Focus ring; intentionally distinct from accent |
| `--color-error` | `#9F2018` | Error text, paired with an icon or wording |
| `--color-white` | `#FFFFFF` | Text on the accent button only |

WCAG relative-luminance calculations made during Chunk 0 give these ratios:

- primary text on page: **14.29:1**;
- muted text on page: **5.79:1**;
- primary text on surface: **15.67:1**;
- muted text on surface: **6.34:1**;
- white text on accent: **5.72:1**;
- accent-dark text on page: **9.01:1**;
- focus blue on page: **4.82:1**;
- primary text on border color: **10.35:1**.

These proposed combinations pass WCAG AA's 4.5:1 normal-text threshold. Chunk 2 must recheck rendered states, including hover, disabled, selected, focus, SVG text if any, and non-text control boundaries. Color never carries meaning alone.

### Typography

- Font stack: `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`. No web-font request is required; Inter is used only if locally available.
- Technical labels: the same stack in uppercase with restrained letter spacing; no decorative font download.
- Root: `100%`; body: `1rem` with `1.6` line-height.
- Fluid display size: `clamp(2.25rem, 6vw, 5.5rem)` / `0.95` line-height.
- H1/product name: `clamp(2rem, 4.5vw, 4.25rem)` / `1.02`.
- H2: `clamp(1.5rem, 2.5vw, 2.25rem)` / `1.15`.
- H3: `1.125rem` / `1.3`.
- Lead: `clamp(1.0625rem, 1.5vw, 1.25rem)` / `1.55`.
- Body: `1rem` / `1.6`; small: `0.875rem` / `1.5`; micro labels: `0.75rem` / `1.4`.
- Keep body copy at a readable maximum of about 65 characters per line.

### Spacing, radii, shadow, and sizing

- Spacing scale in pixels: **4, 8, 12, 16, 24, 32, 48, 64, 96, 128**. Tokens: `--space-1` through `--space-10`.
- Radii: `4px` for small tags, `10px` for controls, `18px` for cards/art frames, and `999px` only for the cart-count badge.
- Shadow: `0 12px 32px rgb(38 33 30 / 0.10)` for the cart panel only. Product cards rely on borders, not stacked shadows.
- Control target: at least **44 × 44 CSS pixels**, with sufficient separation.
- Content maximum: `1440px`; readable copy maximum: `68ch`.
- Inline page gutter: `16px` at small widths, `24px` from 768px, `40px` from 1024px, and `64px` from 1440px.
- Gallery main frame aspect ratio: flexible with `object-fit: contain`; never crop the keyboard illustration.

### Layout breakpoints

Breakpoints describe content needs rather than device brands:

- Base/mobile: 0–767px, one column.
- Tablet: 768–1023px, one column with denser horizontal sub-layouts.
- Desktop: 1024px and above, two-column product hero.
- Wide: 1440px and above, capped content width with larger outer gutters.

No component may depend on a viewport being exactly one of these sizes. The validation matrix includes intermediate and edge widths.

## 4. Written wireframes

### Mobile, 320–767px

1. **Header:** one compact row. MONOFORM wordmark is left; a button named “Open cart, 0 items” is right with a visible `Cart (0)` label. A thin bottom border separates it from content.
2. **Breadcrumb:** `Home / Keyboards / M75 Mechanical Keyboard` is below the header. Only Home and Keyboards look like links if they have real destinations; for this one-page demo they will be plain breadcrumb text, with the current page identified using `aria-current="page"`.
3. **Product introduction:** category eyebrow, the sole H1, short description, fixed price, then the persistent demo-storefront note.
4. **Gallery:** the active illustration fills a bordered surface. Three 44px-minimum thumbnail buttons sit in a horizontal row beneath it. On no-JS pages, all three full illustrations stack with captions instead.
5. **Variant selectors:** Color and Switch type each appear as a fieldset with a legend. Options stack or wrap into two equal-width labelled radio cards. Selection text remains visible.
6. **Purchase controls:** a selected-configuration summary, quantity label/select (1–10), help text, and a full-width **Add to cart** button. The controls appear only after JavaScript initializes; the price and options remain visible without them.
7. **Specifications:** a labelled section with a two-column definition list where space allows, otherwise stacked term/value pairs.
8. **FAQ:** concise disclosure blocks after specifications.
9. **Disclaimer:** a bordered note repeats that no purchases or payments are processed.
10. **Footer:** fictional brand/demo status and a “Back to top” link targeting the page header.
11. **Cart:** a modal dialog presented as a full-height inset sheet on narrow screens. It has a title, Close button, demo note, empty state or cart lines, quantity controls, remove actions, subtotal, and a non-interactive “Checkout is not available in this demo” note. Content scrolls inside the panel; the page behind does not.

### Tablet, 768–1023px

1. Header content and page gutter widen; the cart control stays right-aligned.
2. Introduction remains above the gallery so the product identity is not separated from its imagery.
3. Gallery uses a large main frame with vertical thumbnails on its left when space permits; otherwise thumbnails remain below.
4. Color and switch fieldsets remain full-width, but options sit side by side.
5. Quantity and Add to cart share a row: fixed-width quantity control and flexible CTA.
6. Specifications use two balanced columns; FAQs remain one readable column.
7. Cart appears as a right-side dialog/drawer, no wider than about 480px, while retaining modal semantics and an obvious Close control.

### Desktop, 1024px and above

1. Header, breadcrumb, and footer align to the same capped content grid.
2. Product hero uses a roughly 7/5 split: gallery on the left and a sticky product-information column on the right. The sticky column must stop before overlapping specifications/footer and must be disabled when viewport height makes it awkward.
3. The gallery main frame is oversized, with three vertical thumbnail buttons to its left. Image annotations remain sparse and readable.
4. The right column orders category, H1, description, price, demo note, color fieldset, switch fieldset, selection summary, quantity, and CTA.
5. Specifications and FAQ span below the hero in a bordered editorial section. The definition list may use four columns (term/value pairs) while preserving reading order.
6. The cart opens from the right at a maximum width near 480px. A restrained backdrop separates it from the page. Focus is contained while modal and returns to the cart-summary opener after close.
7. At 1440px and wider, layout width remains capped; whitespace increases rather than stretching text and controls.

## 5. Original illustration plan

All art will be self-created SVG in Chunk 2, reviewed before public display, and stored under `assets/images/`. It will use shapes and paths rather than copied product photography or trademarks. The three views must be visibly distinct even when thumbnails are small.

| File | Visual plan | Draft alternative text |
| --- | --- | --- |
| `m75-hero.svg` | Three-quarter view of the compact keyboard, showing the case depth, angled key rows, Graphite keys, and one restrained vermilion accent key on a porcelain field. | “Three-quarter illustration of the MONOFORM M75 mechanical keyboard in Graphite.” |
| `m75-top.svg` | True top-down view emphasizing the 75% key layout and compact navigation cluster; flat technical composition with small alignment marks. | “Top-down illustration showing the compact key layout of the MONOFORM M75.” |
| `m75-detail.svg` | Macro exploded-style detail of one removable keycap and switch above the case, visually different in scale and composition from the whole-keyboard views. | “Close-up illustration of an M75 keycap and removable mechanical switch.” |

The art itself should contain no important text. If decorative annotations are present, HTML captions must carry the information. For the no-JS stacked gallery, each image keeps its alt text and receives a visible caption; decorative thumbnail duplicates can use empty `alt` text inside meaningfully named buttons.

## 6. Semantic and content structure

- A skip link is the first focusable control and targets `<main id="main-content">`.
- `<header>` contains the wordmark/page identity and cart-summary button.
- A breadcrumb `<nav aria-label="Breadcrumb">` is appropriate only as location context. Because the demo has no catalog routes, its ancestors are text rather than dead links.
- `<main>` contains one `<article>` for the product. There is exactly one H1: “M75 Mechanical Keyboard.”
- Labelled sections cover gallery, product options/purchase controls, specifications, and frequently asked questions. Heading levels follow the document outline without skipping for styling.
- Gallery controls are `<button type="button">` elements with names such as “Show three-quarter view”; active state uses visible styling plus `aria-current="true"` or `aria-pressed="true"` (choose one consistent pattern after browser testing).
- Each variant group is a `<fieldset>` with a `<legend>` and native radio inputs. Labels include visible option names; Graphite/Sand swatches are supplementary.
- Quantity uses a native `<select>` with options 1–10 unless Chunk 3 testing establishes that a stepper is equally clear and robust. The select is the approved low-risk default.
- **Add to cart**, **Open cart**, **Close cart**, **Remove Graphite / Linear M75 from cart**, and cart quantity labels are explicit button/control names.
- The cart uses a native `<dialog aria-labelledby="cart-title">` if supported by the tested browser matrix. Vanilla JS supplies open/close behavior and a conservative fallback if needed; no external dialog library.
- Cart lines are a list; each line has product name, color, switch, unit price, labelled quantity control, line total, and remove button.
- A dedicated polite live region receives successful updates; errors use an assertive region only when immediate attention is needed. The visible text and announced text stay equivalent.
- `<footer>` repeats the truthful demonstration context and contains a functional Back to top link.

## 7. State model

### Runtime state

```text
activeImageId: "hero" | "top" | "detail"
selectedColor: "graphite" | "sand"
selectedSwitch: "linear" | "tactile"
selectedQuantity: integer 1..10
cart: Map<lineKey, CartLine>
cartOpen: boolean
storageAvailable: boolean
lastCartOpener: HTMLElement | null
```

Defaults: hero image, Graphite, Linear, quantity 1, cart closed. Defaults must be visibly selected in the radios and repeated in the selection summary.

Each cart line contains only demonstration product data:

```text
productId: "monoform-m75"
lineKey: "monoform-m75|graphite|linear" (derived, never user-entered)
color: allowed color identifier
switchType: allowed switch identifier
quantity: integer 1..10
unitPriceCents: 14900
```

The same product with a different color or switch type is a different cart line. User-facing labels are resolved from trusted option maps, not saved arbitrary strings.

### Derived values and invariants

- Cart count is the sum of all line quantities, not the number of distinct lines.
- Line total is `unitPriceCents × quantity`.
- Subtotal is the integer-cent sum of all line totals; it excludes tax, delivery, and discounts because none exist in this demo.
- All display prices use `Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })` with a simple `$149.00` fallback.
- Quantities are integers from 1 to 10. Zero never represents a cart line; removal is explicit.
- The canonical price comes from application data, never from editable DOM text or persisted storage.

### Events and behavior

| Event | Required behavior |
| --- | --- |
| Gallery button activated | Set active image, update the main figure and caption, update visible/accessible active state, retain focus on the activated thumbnail. Optional Left/Right arrow navigation may be added only if documented and tested; Tab/Enter/Space must always work. |
| Color or switch changed | Update selected state and visible configuration summary without changing price or cart. |
| Quantity changed | Validate against 1–10 and update the pending add quantity. Invalid programmatic values reset to 1 and produce a visible error. |
| Add to cart | Derive the line key. If absent, add the line. If present and the combined quantity is at most 10, merge quantities. Announce quantity and variant. Do not automatically open the cart. |
| Add would exceed 10 | Do not partially add or silently clamp. Leave cart unchanged and explain that each configuration is limited to 10; invite the user to review the existing cart line. |
| Open cart | Store opener, call the dialog open method, move focus to the cart heading or Close button, and update the accessible name/count before opening. |
| Close button, Escape, or backdrop close | Close once, remove modal state, and restore focus to the element that opened the cart if it still exists. Backdrop closing is optional and must not be the only close method. |
| Edit cart quantity | Validate 1–10, replace line quantity, recompute count/line total/subtotal, persist, and announce the new quantity. |
| Remove line | Remove exactly the named variant, recompute totals, persist, announce removal, and move focus to a sensible next line control or the empty-state heading. |
| Last line removed | Render the empty state, subtotal `$0.00`, and stable Close control; never show checkout. |

### Storage model and failure handling

- Proposed key: `saiket-task2-cart-v1`.
- Persist only a versioned array of valid cart lines; do not store names, addresses, identifiers, analytics, or other personal information.
- At initialization, parse in `try/catch`; validate product ID, allowed variants, integer quantity 1–10, and ignore any stored price. Rehydrate price from the trusted product model.
- Invalid JSON, wrong schema/version, or impossible values are discarded and replaced by an empty in-memory cart. The page remains usable.
- Test availability with a guarded write/remove. If reads or writes throw (privacy mode, quota, policy), set `storageAvailable` false, continue in memory, and show/announce once: “Cart changes will last only while this page is open.”
- A later failed write must not undo the current in-memory action.
- No cross-tab synchronization is required. `localStorage` remains a proposed owner choice; the cart can be session-only if persistence is not wanted.

## 8. Accessibility and progressive enhancement

### No-JavaScript experience

- Product identity, price, copy, variant names, specifications, FAQs, disclaimers, and all three full-size illustrations are present in semantic HTML.
- The enhanced gallery hides two full figures only after JavaScript initializes successfully; without JS, figures stack and remain readable.
- Add-to-cart, quantity, cart summary/panel, and interactive variant form are revealed only after the enhancement initialization completes. A `<noscript>` note says: “Cart features require JavaScript. Product information and images remain available below.”
- A static “Available demonstration options” list shows both colors and switch types without JS. It is not styled as an interactive control.
- If initialization fails partway, the page stays in its truthful static state rather than exposing dead buttons.

### Keyboard, focus, and screen readers

- Every action works with Tab, Shift+Tab, Enter, and Space according to its native element. Escape closes the cart dialog.
- Focus indicators use a 3px blue outline with at least 2px offset and are never removed. Focus remains visible against both page and surface.
- Opening the modal cart moves focus inside; focus cannot move behind it; closing restores the opener. DOM order matches visual order at every breakpoint.
- Variant controls use native radios and group legends. Selected summaries are ordinary visible text, not live regions on every arrow-key change.
- Add, edit, remove, storage fallback, and limit errors produce concise visible status text and equivalent announcements. Successful updates are `aria-live="polite"`; blocking errors may be `assertive`.
- The cart button name includes the current total, for example “Open cart, 3 items.” Pluralization is correct.
- Targets are at least 44×44 CSS pixels. Text can resize to 200% without clipping, overlap, horizontal page scrolling, or loss of actions.
- Images have draft alternative text; adjacent visible captions prevent unnecessary detail in alt text.

### Error prevention and motion

- Native radios/select and constrained option values prevent most invalid input.
- Destructive removal is explicit and variant-specific; undo is not required for this small demo, but the status message confirms what changed.
- Adding beyond the line limit never silently changes the requested amount.
- `prefers-reduced-motion: reduce` disables smooth scrolling, drawer sliding, image fades, and nonessential transitions. State changes remain immediate and understandable.
- Default motion, if used, is limited to short opacity/transform transitions; no autoplay, parallax, flashing, or looping animation.

## 9. Performance, privacy, SEO, and validation

### Performance budget

- No runtime dependencies, external font, analytics, API request, or build step.
- HTML, CSS, and JS remain small and hand-authored; initial target is under 100 KB combined before SVGs.
- SVGs are optimized, have explicit `width`, `height`, and `viewBox`, and avoid raster data embedded as base64.
- The hero image is immediately available; secondary images may use native lazy loading where it does not harm the no-JS gallery.
- Scripts use `defer`; layout dimensions are reserved to minimize cumulative shift.

### Privacy and truthfulness

- No personal data, cookies, tracking, telemetry, account identifiers, payment data, or network submissions.
- `localStorage`, if approved, contains only fictional product IDs, variant IDs, and quantities; the UI explains persistence when relevant.
- The demonstration notice appears near purchase controls and in the cart. No UI implies a completed transaction.

### Metadata and structured content

- Proposed `<title>` and description are defined in the content document.
- Set `lang="en"`, a responsive viewport, a concise description, and a theme color consistent with the page.
- Use meaningful heading and landmark structure. Do not add product structured data that could make search engines interpret the fictional item as a real offer.
- If deployed later, use relative paths so the page works at `/task-2-ecommerce-product-page/` and locally. Do not use root-relative `/css/...` or `/assets/...` paths.

### Validation matrix

| Area | Checks and expected result |
| --- | --- |
| Viewports | Manually inspect 320, 360, 390, 768, 1024, and 1440px widths. No clipped content or horizontal page scroll; controls and artwork adapt as described. |
| Zoom/text | Test browser zoom at 200% and increased default text size. Content reflows, cart remains operable, sticky behavior does not hide content. |
| Keyboard | Complete gallery, option selection, quantity, add, open/edit/remove/close cart, and Back to top without a pointer. Focus is visible and restored. |
| Screen reader | Check names, roles, fieldset legends, one H1, image alternatives, live updates, empty state, dialog title, and count pluralization with at least one available Windows screen reader/browser pairing. |
| Contrast | Recalculate all final text/control/focus/selected/hover states with a contrast checker; target WCAG 2.2 AA. |
| Motion | Emulate reduced motion and confirm nonessential transitions stop without hiding state changes. |
| JS off/failure | Disable JS and simulate initialization/storage errors. All static content and three images remain; no dead cart UI appears. |
| Cart edges | Test all four variants, quantities 1 and 10, merging to 10, rejected merge above 10, editing, removing first/middle/last lines, empty cart, malformed saved JSON, and storage exceptions. |
| Browsers | Latest stable Chrome, Edge, and Firefox on desktop; Safari/iOS and Chrome/Android where available. Record caveats for native `<dialog>`, focus return, sticky layout, and `Intl.NumberFormat`; provide a simple fallback rather than assuming parity. |
| Markup/CSS | Run HTML and CSS validators. Resolve errors; document only unavoidable warnings. |
| Assets/paths | Open locally and from a subpath-like server. Confirm every relative CSS/JS/SVG path, favicon/metadata path if added, and filename case. No request should depend on site root. |
| Performance | Use Lighthouse as a guide in Chunk 4, inspect transfer sizes and layout shift, and ensure no unexpected network calls. Scores are diagnostic, not fabricated guarantees. |

## 10. Repository and deployment boundaries

Task 2 lives only at `task-2-ecommerce-product-page/`, as a sibling of `task-1-portfolio/`. Its later HTML will reference `css/style.css`, `js/main.js`, and `assets/images/...` with relative paths. It will not import Task 1 files, and Task 1 will not link to unfinished Task 2.

The current workflow copies only Task 1 into the GitHub Pages artifact root, so merely adding Task 2 source will not publish it. That isolation is desirable during review. A future, separately approved deployment change may copy Task 2 to `_site/task-2-ecommerce-product-page/` while preserving Task 1 at `https://bilalx7.github.io/saiket-web-internship/`. That proposal belongs to Chunk 4 or a later authorized deployment step. **No workflow, public URL, GitHub setting, commit, push, or deployment change is authorized now.**

## 11. Chunk boundaries and review gates

- **Chunk 0 — specification (current):** create only this specification and the content inventory. Owner/ChatGPT must approve product identity, copy, behavior, and open decisions before HTML begins.
- **Chunk 1 — HTML:** build semantic content, progressive-enhancement hooks, and approved copy only. Do not add finished styling or cart logic. Review document outline, no-JS rendering, labels, and relative paths before proceeding.
- **Chunk 2 — CSS and original SVG artwork:** implement tokens, responsive layouts, focus/contrast/reduced-motion treatment, and three original illustrations. Do not add cart behavior. Review screenshots, SVG originality, contrast calculations, and breakpoint behavior.
- **Chunk 3 — JavaScript:** implement gallery enhancement, variant/quantity state, cart, persistence/fallback, announcements, and focus management. Review edge tests and keyboard flow.
- **Chunk 4 — final QA and documentation:** run the full validation matrix, polish, write approved README/validation notes, and propose a nonbreaking publishing plan. Do not push or deploy without a separate instruction.

Each gate can revise later work but must not retroactively modify Task 1. Changes that broaden scope, introduce real commerce claims, add dependencies, or alter deployment require explicit owner approval.

## 12. Open decisions for owner review

Recommended defaults are supplied so implementation can proceed after review, but these remain editable:

1. Approve or replace the fictional **MONOFORM M75 Mechanical Keyboard** identity, $149.00 demo price, variants, and specifications.
2. Approve the warm porcelain / charcoal / vermilion art direction and blue focus ring.
3. Approve Graphite + Linear as the preselected variant, or request no preselection. The recommendation is preselection because the current CTA then has an unambiguous configuration.
4. Approve the native quantity select (1–10) instead of plus/minus buttons.
5. Approve optional `localStorage` persistence. The recommendation is persistence with transparent failure fallback; session-only behavior is simpler and more private.
6. Approve the native modal cart dialog/drawer pattern and “do not auto-open after add” behavior.
7. Approve the three SVG compositions and draft alt text before artwork is created.
8. Confirm whether FAQ content should remain or be shortened after seeing the semantic HTML.

No decision is needed about checkout or deployment in this chunk: both remain out of scope and on hold.

## 13. Product acceptance criteria

The final Task 2 product page is acceptable only when all applicable items below pass. Chunk-specific reviews may mark later items pending, but they must not weaken them.

- [ ] The implementation is contained in `task-2-ecommerce-product-page/`, uses only HTML5, modern CSS, and vanilla JavaScript, and does not import or alter Task 1.
- [ ] One fictional MONOFORM M75 product is presented with the approved $149.00 price, two colors, two switch choices, quantity 1–10, and an unmistakable demonstration disclaimer.
- [ ] No rating, testimonial, stock, scarcity, discount, shipping, warranty, checkout, payment, tracking, or real-brand affiliation appears.
- [ ] The page uses one H1, meaningful landmarks/headings, fieldsets and legends for variants, native controls, precise button names, and logical DOM/focus order.
- [ ] The three approved original SVGs are visually distinct, uncropped, correctly labelled, and usable as a gallery with JavaScript and as a readable sequence without it.
- [ ] Layout and content pass the 320/360/390/768/1024/1440px, 200% zoom, contrast, reduced-motion, and relative-path checks in the validation matrix.
- [ ] All pointer actions are operable by keyboard, targets are at least 44×44 CSS pixels, focus is always visible, and cart focus enters, remains within, and returns from the modal correctly.
- [ ] Variant combinations create distinct cart lines; identical combinations merge only up to 10; editing/removal/count/subtotal use integer quantities and cents and remain internally consistent.
- [ ] Empty, success, line-limit, malformed-storage, and storage-failure states are visibly and accessibly communicated without breaking the current session.
- [ ] With JavaScript disabled or initialization interrupted, product identity, price, copy, option names, specifications, FAQs, disclaimer, and all three images remain available while dead commerce controls remain hidden.
- [ ] The page makes no unexpected network requests, collects no personal information, stores only approved cart data if persistence is enabled, and validates without unresolved errors.
- [ ] Task 1 remains at the public root, Task 2 remains unpublished until separately authorized, and no commit, push, workflow change, or deployment is performed as an implied part of a chunk.

## 14. Plain-English glossary

- **Semantic HTML:** elements chosen for what content means—such as headings, navigation, fieldsets, buttons, and lists—so browsers and assistive technology understand the page structure.
- **Design token:** a named reusable style value, such as the accent color or a spacing size, that keeps the interface consistent and easy to change.
- **Product variant:** one selectable version of a product. Here, a variant is the combination of color and switch type.
- **Cart line item:** one row in the cart representing a specific product variant, its quantity, unit price, and line total.
- **Progressive enhancement:** start with useful HTML that works everywhere, then add styling and JavaScript behavior only when the browser supports and successfully loads them.
- **`localStorage`:** browser storage that can keep small amounts of non-sensitive data after a tab closes. It can be blocked or cleared, so the page must not depend on it.
- **Subtotal:** the sum of cart line totals before any tax, delivery, discount, or payment. This demo calculates only that sum.
- **Focus management:** deliberately placing and restoring keyboard focus when an interface such as a dialog opens, changes, or closes, so keyboard and screen-reader users do not lose their position.
