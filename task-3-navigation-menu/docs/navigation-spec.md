# Task 3 Navigation Specification

## 1. Official assignment interpretation

The official SaiKet Systems Task 3 assignment is to develop a webpage with a navigation menu that links to different sections. It is intended to teach hyperlinks and basic CSS styling for navigation menus, with an emphasis on clarity and user-friendliness. The assessed skills are **HTML and CSS**.

The required work is therefore a small, single-page demonstration with real in-page anchors and corresponding section destinations. Semantic structure, responsive presentation, and understandable interaction states support the assignment without changing its scope.

### In scope

- One HTML page with a clear section-navigation menu.
- Five native fragment links that lead to five meaningful page sections.
- Semantic HTML landmarks, headings, lists, links, and sections.
- Basic, responsive CSS for layout, typography, navigation, and interaction states.
- Keyboard, touch, zoom, reduced-motion, and no-JavaScript usability.
- Original, concise content that makes each navigation destination visible and useful.

### Out of scope

- JavaScript, frameworks, packages, build tools, APIs, backends, databases, and form processing.
- Multi-page navigation, mega-menus, hidden hamburger menus, checkbox menu hacks, scroll tracking, or application-style routing.
- A full agency website, portfolio redesign, storefront, CMS, or working contact service.
- Remote fonts, third-party images, external scripts, copied templates, and fabricated business claims.
- Changes to Tasks 1 or 2, the root README, Git settings, or the existing Pages workflow.

### Assignment versus creative direction

The navigation behavior above is the assignment requirement. **WAYMARK Studio** is a provisional creative direction for presenting it: a compact, fictional creative-studio concept that gives the five destinations coherent content. It is not a real agency, and the concept is not itself an assignment requirement. The navigation remains the centerpiece.

## 2. Visitor goal and journey

1. On first load, the visitor sees the WAYMARK Studio brand, the five-link main navigation, and a concise hero within the Home destination.
2. The visitor discovers that each menu label names a page section.
3. Selecting a navigation link changes the URL fragment and moves the corresponding heading into view.
4. The visitor can move directly from that section to any other section through the same visible menu.
5. The brand link and footer `Back to top` link return to `#home`; browser Back and Forward traverse fragment history.
6. A keyboard-only visitor can reveal and use the skip link, then Tab through every navigation link in logical source order and activate links with Enter.
7. At tablet and phone widths, all five links remain visible, wrap or stack predictably, and remain operable without a script or hidden menu control.

## 3. Information architecture

### Primary navigation destinations

| Link label | Exact `href` | Destination `id` | Destination heading |
| --- | --- | --- | --- |
| Home | `#home` | `home` | H1: Make the path clear. |
| About | `#about` | `about` | H2: Designed around direction |
| Services | `#services` | `services` | H2: Focused ways of working |
| Work | `#work` | `work` | H2: Concept explorations |
| Contact | `#contact` | `contact` | H2: A demonstration, not a studio inquiry |

### Supporting links

| Location and label | Exact `href` | Destination and purpose |
| --- | --- | --- |
| Skip link: Skip to main content | `#main-content` | `<main id="main-content" tabindex="-1">`; bypasses repeated header navigation |
| Header brand: WAYMARK Studio | `#home` | Home section and hero |
| Hero CTA: Explore services | `#services` | Services section |
| Footer: Back to top | `#home` | Home section and hero |

Every fragment must match one unique ID. There will be no dead `#` values, dummy links, fake link buttons, or external destinations.

## 4. Semantic HTML plan

- Set the page language to English and provide one descriptive document title and meta description.
- Place the skip link first in the body. It targets `<main id="main-content" tabindex="-1">`; its native fragment behavior must be verified across the supported browsers.
- Use a semantic `<header>` containing the WAYMARK Studio brand anchor and one `<nav aria-label="Main navigation">`.
- Represent the five navigation items as an unordered list of `<li>` elements containing ordinary `<a>` elements.
- Use one `<main>` containing five ordered content sections: `home`, `about`, `services`, `work`, and `contact`.
- Use exactly one H1 in the Home hero. Give each later section an H2. Service and concept-entry titles use H3s, preserving logical heading order.
- Use a semantic `<footer>` with project identification and a native `Back to top` anchor.
- Use anchors for navigation because they change location. Buttons are reserved for actions; this page currently requires none.
- Do not set a permanent `aria-current="page"` on section links. Without JavaScript, it would not honestly identify the section currently in view. A subtle `section:target` treatment may identify the fragment destination, but it must not be described as scroll tracking.
- If CSS decoration is included, keep it decorative and out of the accessibility tree. No content-bearing icon is planned.

## 5. Responsive written wireframes

The content uses a centered maximum-width container, while section backgrounds may extend to the viewport. All sizes are design targets to confirm during implementation.

### Desktop, approximately 1440px

The header is one horizontal row: brand at the left and the five links at the right. The hero uses a broad editorial text block without oversized imagery. Sections have generous vertical separation and a readable text measure. Services may form three equal columns; Work may form two columns.

```text
+------------------------------------------------------------------+
| WAYMARK Studio        Home  About  Services  Work  Contact       |
+------------------------------------------------------------------+
| HOME                                                             |
| Make the path clear.                                             |
| Supporting copy                         [Explore services]         |
+------------------------------------------------------------------+
| ABOUT                  SERVICES                  WORK             |
| (full-width sections in document order, with compact grids)      |
+------------------------------------------------------------------+
| CONTACT                                              FOOTER       |
+------------------------------------------------------------------+
```

### Tablet, approximately 768px

The brand occupies the first row when necessary and the navigation sits below it. Navigation items wrap naturally with consistent gaps. Content remains centered; service entries may use two columns with the third item on the next row, while Work can use two columns if the copy remains comfortable.

### Phone, approximately 390px

The brand is above the navigation. The five links form a visible two-row flex layout or compact wrapped row; no hamburger appears. Section grids become one column. Horizontal padding decreases, while link padding and vertical section rhythm remain comfortable for touch and reading.

```text
+------------------------------+
| WAYMARK Studio               |
| Home  About  Services        |
| Work  Contact                |
+------------------------------+
| Make the path clear.         |
| Supporting copy              |
| Explore services             |
+------------------------------+
| One-column sections          |
+------------------------------+
```

### Narrow phone, 320px

The same visible, wrapping navigation is retained. Labels may wrap into two or three rows rather than shrink below a readable size or cause horizontal scrolling. Page gutters remain at least 16px, cards become full width, long text wraps, and no element uses a fixed width wider than its container. The target is zero horizontal page scroll at 320px and at 200% zoom.

## 6. Proposed design system

All tokens are provisional until visual implementation and testing.

| Token | Proposed value | Use |
| --- | --- | --- |
| Canvas | `#F5F1E8` | Warm off-white page background |
| Surface | `#FFFCF5` | Subtle section or entry surface |
| Ink | `#17212B` | Primary text and strong borders |
| Muted ink | `#53606B` | Supporting text, subject to contrast testing |
| Accent | `#087E8B` | Links and restrained highlights |
| Accent strong | `#075F68` | Hover/pressed treatment, subject to testing |
| Focus | `#FFB000` | High-visibility focus outline |
| Hairline | `#C9C2B5` | Dividers and quiet borders |

- Typography: a system sans-serif stack such as `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`; no font download.
- Relative type scale: body `1rem`; small text `0.875rem`; H3 `1.25rem`; H2 via `clamp(1.75rem, ...)`; H1 via a restrained `clamp(2.5rem, ...)`. Maintain a body line-height near 1.6.
- Spacing: 4px base with practical tokens of 8, 12, 16, 24, 32, 48, 64, and 96px. Responsive sections use the larger tokens only when space permits.
- Content width: approximately 1120px overall; prose measure about 65 characters.
- Borders and radii: 1px hairlines; restrained 8px radius where grouping needs it. Avoid elaborate cards and glass effects.
- Focus: a 3px solid focus outline with at least a 3px offset, never communicated by color alone.
- Link affordance: persistent or clearly visible underline/bottom border, with thickness or offset changing on hover and focus.
- Optional motif: a CSS-only line or waypoint dot, strictly decorative and lightweight.

The palette values are proposals, not proof of conformance. Text/background, link/state, focus, and non-text UI contrast must be measured during Chunk 2 and reported during QA.

## 7. CSS interaction states

- **Default:** navigation links look interactive through readable labels plus an underline or border cue.
- **Hover:** increase underline thickness/offset or change both color and line treatment; do not rely on color alone.
- **Active/pressed:** use a brief, subtle visual response such as a darker accent or small translation that does not shift layout.
- **Focus-visible:** show the prominent outline on every link, including the brand, skip link, CTA, navigation, and footer link. Do not suppress default focus without a replacement.
- **Target section:** `section:target` may receive a modest border/accent marker or heading decoration. It indicates the current URL fragment only; it does not automatically follow scrolling.
- **Sticky header:** proposed for convenient section-to-section movement. All section targets must receive `scroll-margin-top` comfortably larger than the header's maximum wrapped height at each breakpoint so headings are not obscured.
- **Skip link:** position it off-canvas only until keyboard focus, then place it visibly above page content with a high stacking order. Its destination also needs the sticky offset.
- **Motion:** native anchors work with no animation. Optional smooth scrolling may be enabled only inside `@media (prefers-reduced-motion: no-preference)`; reduced-motion users get immediate movement.
- **History:** ordinary anchors update the fragment and enable browser Back/Forward behavior. CSS must not replace or interfere with that behavior.

## 8. Accessibility matrix

| Concern | Planned response | Validation |
| --- | --- | --- |
| Keyboard use | Logical source order; native anchors activated by Enter; no hidden controls or trap | Tab and Shift+Tab through all links; activate each with Enter |
| Focus visibility | Consistent, high-contrast `:focus-visible` outline plus existing link affordance | Inspect every interactive element on all backgrounds |
| Repeated navigation | First-focusable skip link targets the main landmark | Reveal and activate; confirm main content is reached and not covered |
| Landmarks and names | Header, `Main navigation`, main, sections, footer; one H1 and ordered H2/H3 structure | Inspect accessibility tree and heading outline |
| Fragment clarity | Unique IDs, exact link/target matches, visible target headings | Click links and direct-load hashes |
| Color and text | Legible system type; measured contrast; interaction not conveyed by color alone | Contrast tool plus visual inspection |
| Touch | Comfortable link padding with an approximate 44px minimum target dimension where layout allows | Inspect and operate at phone widths |
| Zoom/reflow | Flexible widths, wrapping navigation, no fixed-height text containers | Test 200% zoom and 320px viewport without two-dimensional scroll |
| Motion | Smooth scroll, if used, only when reduced motion is not requested | Emulate `prefers-reduced-motion: reduce` |
| No JavaScript | All links and layout work with HTML and CSS alone | Confirm no script files/elements and operate all navigation |

## 9. Testing plan

These are **future planned checks**, not Chunk 0 execution results:

- Click the brand, all five menu anchors, hero CTA, skip link, and footer link; verify each URL hash and destination.
- Confirm every target heading is fully visible below the sticky header.
- Reload direct URLs ending in `#work` and `#contact` and confirm correct initial placement.
- Navigate among fragments, then use browser Back and Forward to confirm history behavior.
- Complete a keyboard-only pass using Tab, Shift+Tab, and Enter; check focus order, visibility, skip behavior, and absence of traps.
- Test widths 320, 360, 390, 768, 1024, and 1440px, including long-label wrapping and unintended horizontal scrolling.
- Test at 200% zoom and with increased text size.
- Test with reduced motion enabled and with scripting disabled; navigation must remain complete.
- Validate the finished HTML and CSS with standards-aware validators.
- Measure all relevant contrast combinations rather than assuming the proposed colors pass.
- Check that every local resource resolves, no links are broken, and the browser console has no errors.
- Inspect landmarks, navigation name, heading order, unique IDs, and the accessibility tree.
- Confirm no JavaScript, remote request, framework, form processing, or hidden mobile menu was introduced.

Chunk 0 validation is limited to reviewing the two Markdown documents for completeness, internal link-map consistency, scope, and file boundaries.

## 10. Performance, safety, and originality

- The runtime will use only local HTML and CSS, system fonts, and ideally CSS-only decoration. No remote dependency, runtime request, build step, or unnecessary image is planned.
- No secrets, personal contact details, fabricated clients, endorsements, business metrics, or working inquiry mechanism will appear.
- WAYMARK Studio, its service descriptions, and its two named explorations are original fictional demonstration content, not claims of commercial work.
- No project screenshots are required. Avoiding stock imagery keeps the assignment fast, focused, and self-contained.
- Future markup must contain no unsafe embedded content or unnecessary external navigation.

## 11. Five-chunk implementation and review plan

1. **Chunk 0 — specification and content:** create and review only these two planning documents.
2. **Chunk 1 — semantic HTML:** after approval, create the page structure, complete approved copy, and working native fragment links with minimal or no styling.
3. **Chunk 2 — responsive CSS:** after HTML review, add the design system, responsive visible navigation, layout, and hover/focus/target states. No JavaScript.
4. **Chunk 3 — navigation QA and refinement:** test fragment history, sticky offsets, keyboard access, reduced motion, and phone usability; make only necessary HTML/CSS refinements. This is not a JavaScript feature phase.
5. **Chunk 4 — final validation and release readiness:** complete cross-width/browser, readability, contrast, and documentation checks; prepare a nonbreaking release plan without deploying unless separately authorized.

If Chunk 2 already satisfies the behavior, Chunk 3 remains a short test-and-refinement gate rather than a reason to add features.

## 12. Future deployment note

Deployment is explicitly deferred. A later, separately reviewed release must preserve Task 1 at the GitHub Pages root and Task 2 at `/saiket-web-internship/task-2-ecommerce-product-page/`, then add Task 3 at `/saiket-web-internship/task-3-navigation-menu/`. The current two-job workflow structure (`build`, then `deploy` with `needs: build`) and the complete combined artifact must be preserved.

Only Task 3 runtime HTML, CSS, and any approved runtime assets should be copied into the Pages artifact. Safe specifications and a project README may remain in repository source but need not be published. Committing source code and publishing a Pages artifact are separate actions; neither is authorized in Chunk 0.

## 13. Risks, open decisions, and glossary

### Risks

- A sticky header could cover target headings if the offset does not reflect wrapped mobile navigation height.
- Five links could crowd a 320px viewport if padding or gaps are too large.
- Muted or accent colors may fail contrast in particular combinations until measured.
- Native skip-target focus behavior can vary by browser and needs explicit testing.
- `:target` can identify the URL fragment but cannot truthfully indicate whichever section happens to be visible after manual scrolling.

### Open decisions for review

- Approve the WAYMARK Studio identity and exact copy in `navigation-content.md`.
- Approve a sticky header as the default; a non-sticky header remains a simpler fallback if target offsets prove fragile.
- Approve the warm off-white, ink, and teal/blue palette subject to measured contrast.
- Approve the two-row/wrapping phone navigation and restrained CSS waypoint motif.
- Decide during implementation whether the Contact section should repeat a Back-to-top link; the required footer link is already planned, so repetition is not necessary.

### Glossary

- **Anchor:** an HTML link element (`<a>`) that navigates to a resource or location.
- **Fragment identifier:** the part of a URL beginning with `#`; it identifies an element with the matching `id`.
- **Semantic navigation:** meaningful HTML structure, such as `<nav>` and a link list, that communicates purpose to browsers and assistive technology.
- **Hover:** the state when a pointing device rests over an interactive element; it must not be the only way to discover or use a link.
- **Focus-visible:** a focus state shown when the browser determines a visible keyboard-style indicator is needed.
- **Responsive design:** layout and sizing that adapt to available viewport space and user zoom without losing content or function.
- **Scroll margin:** CSS space reserved around a scroll target so fixed or sticky content does not cover it.
- **Progressive enhancement:** starting with complete native HTML behavior, then adding CSS improvements without making them prerequisites.
