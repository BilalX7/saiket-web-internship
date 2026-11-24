# MONOFORM M75 Content Inventory

Status: Approved English copy implemented through Chunk 4. Every product name, brand, price, specification, and FAQ statement below is **fictional demonstration data** created for an internship interface project. It does not describe a real manufacturer or item for sale, and the page is not deployed.

## 1. Product identity and page metadata

| Content role | Approved draft copy |
| --- | --- |
| Brand wordmark | **MONOFORM** |
| Page identity label | **Product study** |
| Browser title | **M75 Mechanical Keyboard — MONOFORM Demo Storefront** |
| Meta description | **Explore the fictional MONOFORM M75 mechanical keyboard, choose demonstration options, and try an accessible cart interface. No purchases are processed.** |
| Category | **Desk accessories / Keyboards** |
| Product H1 | **M75 Mechanical Keyboard** |
| Price | **US$149.00** |
| Price accessibility note | Display through USD currency formatting as **$149.00**; the nearby text and metadata establish US dollars. |

The name MONOFORM, the M75 product, and the price are fictional demonstration content. Do not add a trademark symbol, manufacturer address, SKU presented as real, or affiliation with an existing vendor.

## 2. Header, breadcrumb, and navigation labels

| Element | Copy |
| --- | --- |
| Skip link | **Skip to product details** |
| Header brand accessible label | **MONOFORM demo storefront home** |
| Static cart label | **Cart** |
| Empty cart button visible text | **Cart (0)** |
| Empty cart button accessible name | **Open cart, 0 items** |
| Populated cart button visible template | **Cart ({count})** |
| Populated cart button accessible template | **Open cart, {count} item** / **Open cart, {count} items** |
| Breadcrumb label | **Breadcrumb** |
| Breadcrumb items | **Home** / **Keyboards** / **M75 Mechanical Keyboard** |
| Current breadcrumb item | **M75 Mechanical Keyboard** (`aria-current="page"`) |
| Back link | **Back to top** |

Home and Keyboards are location text, not fake links, until real destinations exist. The Back to top link targets the actual page header.

## 3. Product introduction

### Eyebrow

**A compact desk instrument**

### Description

**A focused 75% mechanical keyboard concept with a clean profile, a wired USB-C connection, and hot-swappable switches. Choose a finish and switch feel to explore the cart experience.**

### Supporting statement

**Designed as a fictional interface study: compact in footprint, deliberate in detail, and straightforward to configure.**

### Primary demonstration disclaimer

**Demonstration storefront — no purchases or payments are processed.**

This disclaimer appears near the price/purchase controls, inside the cart, and again near the page end. It should be visible text, not a tooltip or screen-reader-only message.

## 4. Product options and purchase controls

### Color group

- Legend: **Color**
- Help text: **Choose the case and keycap finish.**
- Option 1: **Graphite**
- Option 2: **Sand**
- Selection summary template: **Color: {color}**

Graphite is the proposed default. Swatches supplement these names; the names are always visible.

### Switch group

- Legend: **Switch type**
- Help text: **Choose the demonstration key feel. Price is unchanged.**
- Option 1: **Linear**
- Linear explanation: **Smooth travel without a tactile bump.**
- Option 2: **Tactile**
- Tactile explanation: **A noticeable bump during each press.**
- Selection summary template: **Switch: {switch type}**

Linear is the proposed default. These are short fictional descriptions, not measured performance claims.

### Configuration summary

- Label: **Your configuration**
- Default summary: **Graphite · Linear**
- Dynamic template: **{color} · {switch type}**
- Price note: **Every configuration is $149.00.**

### Quantity and primary action

- Quantity label: **Quantity**
- Quantity options: the integers **1** through **10**
- Quantity help: **Choose 1–10 for this configuration.**
- Line-limit help: **Each color and switch combination is limited to 10 items in this demo cart.**
- Primary CTA: **Add to cart**
- No-JavaScript note: **Cart features require JavaScript. Product information and images remain available below.**
- Static no-JS options heading: **Available demonstration options**
- Static no-JS options text: **Colors: Graphite and Sand. Switch types: Linear and Tactile.**

The quantity and Add to cart controls are shown only after JavaScript enhancement succeeds. There is no **Buy now**, **Checkout**, **Place order**, or payment action.

## 5. Image and gallery content

There are exactly three planned original SVG illustrations:

1. **File:** `m75-hero.svg` \
   **View label:** Three-quarter view \
   **Thumbnail button name:** Show three-quarter view \
   **Visible caption:** M75 in Graphite, shown from a three-quarter angle. \
   **Alt-text draft:** Three-quarter illustration of the MONOFORM M75 mechanical keyboard in Graphite. \
   **Description:** An original vector composition showing the whole keyboard at an angle, including case depth, staggered key rows, and one restrained vermilion accent key on a warm porcelain field.

2. **File:** `m75-top.svg` \
   **View label:** Top-down view \
   **Thumbnail button name:** Show top-down view \
   **Visible caption:** Top view of the compact 75% key layout. \
   **Alt-text draft:** Top-down illustration showing the compact key layout of the MONOFORM M75. \
   **Description:** An original flat technical view centered on the 75% layout and compact navigation cluster, with subtle alignment marks and no copied key legends or logos.

3. **File:** `m75-detail.svg` \
   **View label:** Switch detail \
   **Thumbnail button name:** Show switch detail \
   **Visible caption:** Exploded detail of a keycap and removable switch. \
   **Alt-text draft:** Close-up illustration of an M75 keycap and removable mechanical switch. \
   **Description:** An original macro, exploded-style vector view with a keycap and switch lifted above the case, clearly different in subject scale and composition from both whole-keyboard views.

The filenames, labels, and alt text must stay paired. The illustrations will contain no essential text and will not imitate a real brand's product photography.

## 6. Specifications

Section heading: **Specifications**

Intro: **A concise fictional feature set for this interface demonstration.**

| Term | Value |
| --- | --- |
| Layout | **Compact 75% layout** |
| Connection | **Wired USB-C** |
| Switch support | **Hot-swappable mechanical switches** |
| Case concept | **Aluminum-style case** |
| Demonstration colors | **Graphite or Sand** |
| Demonstration switch choices | **Linear or Tactile** |
| Included commerce capability | **Variant-aware demonstration cart** |

Specification footnote: **These specifications are fictional design content. They are not manufacturing, certification, compatibility, or performance claims.**

Do not add dimensions, weight, materials certification, latency, polling rate, battery life, acoustics, operating-system support, included accessories, origin, warranty, stock, delivery, or shipping claims without owner approval and a truthfulness review.

## 7. Frequently asked questions

Section heading: **Questions, answered plainly**

### Is the M75 a real product?

**No. MONOFORM and the M75 are fictional demonstration content created for this internship project. The page showcases product-page design and accessible cart behavior.**

### Can I buy it here?

**No. The cart is an interface demonstration only. It does not place orders, collect personal details, or take payments.**

### Do the options change the price?

**No. Every demonstration color and switch combination uses the same fictional price of $149.00.**

### Will the cart remember my choices?

**If browser storage is available, the demo may remember product choices on this device. It stores only product options and quantities, not personal information.**

The last answer is included only if `localStorage` is approved and implemented. If persistence is rejected, replace it with: **“The cart lasts only for the current page session and stores no personal information.”**

## 8. Cart copy

### Cart shell and empty state

| Element | Copy |
| --- | --- |
| Dialog title | **Your demo cart** |
| Close button | **Close cart** |
| Demo note | **This cart is for demonstration only. It cannot place orders or take payments.** |
| Empty heading | **Your cart is empty** |
| Empty body | **Choose a color, switch type, and quantity, then add the M75 to see the cart in action.** |
| Empty subtotal | **Subtotal: $0.00** |
| Unavailable checkout note | **Checkout is not available in this demo.** |

The unavailable-checkout note is plain text, not a disabled Checkout button; a disabled commerce button could imply a future real transaction.

### Line-item labels and actions

- Product line name: **M75 Mechanical Keyboard**
- Variant template: **{color} · {switch type}**
- Unit price label/template: **Unit price: {price}**
- Quantity control label: **Quantity for M75, {color}, {switch type}**
- Line total label/template: **Line total: {line total}**
- Remove visible action: **Remove**
- Remove accessible name: **Remove M75, {color}, {switch type} from cart**
- Edit label: **Update quantity**
- Subtotal label/template: **Subtotal: {subtotal}**
- Cart count supporting text: **{count} item** / **{count} items**

No tax, shipping, discount, total-due, purchase, or payment labels appear.

## 9. Status, validation, and error messages

Dynamic values must be inserted as text, not HTML. Announcements use correct singular/plural grammar.

### Successful actions

- New line: **Added {quantity} M75, {color}, {switch type}, to your cart.**
- Merged line: **Updated M75, {color}, {switch type}, to {new quantity} in your cart.**
- Quantity edit: **Cart quantity updated to {quantity} for M75, {color}, {switch type}.**
- Removal: **Removed M75, {color}, {switch type}, from your cart.**
- Empty after removal: **Removed M75, {color}, {switch type}. Your cart is now empty.**

### Limits and recovery

- Add over line limit: **You can keep up to 10 of each configuration in this demo cart. Review the existing {color}, {switch type} quantity before adding more.**
- Invalid quantity fallback: **Choose a quantity from 1 to 10. The selection has been reset to 1.**
- Storage unavailable: **Cart changes will last only while this page is open.**
- Invalid saved cart recovery: **Saved cart data could not be used, so the demo cart was reset.**

The saved-data recovery message may be polite and temporary. It must not expose JSON, browser internals, or stack traces.

## 10. Footer and closing disclaimer

- Footer brand: **MONOFORM**
- Footer project note: **A fictional product-page study for the SaiKet Systems Web Development Internship.**
- Closing disclaimer: **Demonstration storefront — no products are sold, and no purchases or payments are processed.**
- Privacy note: **No personal information is collected.**
- Back link: **Back to top**

Do not add social links, contact details, legal-company claims, copyright ownership for a fictional manufacturer, or links to real storefronts.

## 11. Content integrity rules

The finished page must contain:

- a visible statement that MONOFORM and M75 are fictional demonstration content;
- one consistent price: US$149.00 / formatted `$149.00`;
- exactly two colors: Graphite and Sand;
- exactly two switch types: Linear and Tactile;
- exactly three original image assets with the filenames and intent above;
- truthful cart-only language and no transaction claim.

The finished page must not contain:

- fake ratings, review counts, customer names, testimonials, influencer quotes, awards, or endorsements;
- stock counts, “selling fast,” countdowns, scarcity, limited-time offers, crossed-out prices, discounts, coupons, or savings claims;
- delivery dates, shipping promises, warranty promises, returns promises, manufacturing claims, or unsupported numerical engineering claims;
- payment forms, checkout, order submission, order confirmation, or language implying that money changed hands;
- user tracking, analytics, cookies, advertising pixels, personal-data fields, or network submission;
- a real brand affiliation, copied storefront copy, stock product images, trademarks, or vendor logos.

## 12. Final content review checklist

- [ ] Owner approves the fictional MONOFORM/M75 identity and confirms it is suitable for the internship.
- [ ] H1, metadata, description, price, colors, switches, and specifications match everywhere.
- [ ] Every fictional claim is labelled or contextually identified as demonstration content.
- [ ] The primary disclaimer is visible near controls and is repeated in the cart and footer.
- [ ] All actions have visible text and precise accessible names.
- [ ] Singular/plural cart-count and status templates are implemented correctly.
- [ ] The three filenames, captions, descriptions, and alt-text drafts remain paired and are reviewed against the final artwork.
- [ ] FAQs avoid promises and match the approved persistence behavior.
- [ ] No review, stock, discount, shipping, warranty, real-payment, tracking, or affiliation claim has been introduced.
- [ ] Copy remains understandable at 200% zoom and does not rely on color, icons, hover, or placeholders alone.
- [ ] A final proofread checks English, punctuation, capitalization, and consistent use of “cart,” “switch type,” and “demonstration.”

## 13. Proposed changes requiring owner approval

1. Any replacement of MONOFORM, M75, the category, $149.00 price, options, or specifications.
2. Any additional technical number or product-performance statement.
3. Any change from three illustrations, or any use of external imagery.
4. Whether cart persistence uses `localStorage`; the FAQ must change with this decision.
5. Any extra navigation destination, product, promotion, social proof, or commerce step.
6. Any wording that could make the fictional item appear purchasable or affiliated with a real company.
7. Any public deployment or metadata intended for indexing.

Recommended for approval without change: retain the concise fictional identity, fixed price, two-by-two variant matrix, three original SVG views, explicit cart-only language, and persistence-with-fallback copy. None of these proposed approvals authorize implementation, commit, push, or deployment during Chunk 0.
