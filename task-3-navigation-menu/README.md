# WAYMARK Studio · Task 3 Navigation Menu

WAYMARK Studio is a fictional creative studio for SaiKet Systems Web Development Internship Task 3. The assignment is to build a clear, usable menu that links to sections of a single webpage. The two Work examples are fictional design studies, and the Contact section explains the purpose of the demo.

The site uses **HTML and CSS only**. Opening it requires no JavaScript, framework, API, database, package installation, or build step.

## Navigation

| Link | Fragment | Destination |
| --- | --- | --- |
| Skip to main content | `#main-content` | Main content landmark |
| WAYMARK Studio | `#home` | Home hero |
| Home | `#home` | Make the path clear. |
| About | `#about` | Designed around direction |
| Services | `#services` | Focused ways of working |
| Work | `#work` | Concept explorations |
| Contact | `#contact` | A demonstration, not a studio inquiry |
| Explore services | `#services` | Services section |
| Back to top | `#home` | Home hero |

Native links update the address and support direct fragment URLs and browser Back and Forward. The menu stays visible at every layout size and wraps on smaller screens. The header sticks when the viewport is at least `58rem` wide and `32rem` tall. Scroll padding and target margins keep section headings clear. The heading underline follows the URL fragment.

## Run locally

Open `index.html` in a browser for basic browsing. For an HTTP preview, run this optional command from the repository root if Python is already installed:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open [the local Task 3 page](http://127.0.0.1:8000/task-3-navigation-menu/).

```text
task-3-navigation-menu/
├── index.html
├── css/
│   └── style.css
├── README.md
└── docs/
    ├── navigation-spec.md
    ├── navigation-content.md
    └── chunk-4-validation.md
```

## Accessibility and testing

Press Tab on a fresh page to reveal the skip link. Enter moves focus to the main landmark. Links have underlines, a visible keyboard focus outline, and hover and pressed styles. The menu links have a minimum height of `2.75rem` on the tested layouts. Fragment navigation is instant regardless of the motion preference.

The [validation report](docs/chunk-4-validation.md) records source, contrast, and browser checks across desktop, tablet, and phone viewport sizes. It separates the final checks from the earlier browser evidence and lists the remaining screen-reader and physical-device test gaps. The planning documents are retained as the original design records.

## Proposed publication

The proposed GitHub Pages address is `https://bilalx7.github.io/saiket-web-internship/task-3-navigation-menu/`. Publication and live verification are pending separate approval. The public source repository may include this README and the planning and validation docs. The Pages artifact should include only Task 3's runtime HTML and CSS alongside the complete Task 1 and Task 2 sites.
