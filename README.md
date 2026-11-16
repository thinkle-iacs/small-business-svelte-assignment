# Small Business, Built from Components

Redesign a real local business's website using Svelte. Your goal is a responsive, attractive website with a modern look and reusable components—a significant upgrade to the existing site. Keep the business recognizable by using its real name, branding, and colors.

## 1. Find a local business website

Choose an actual independent local business with its own website: Joe's Sandwich Shop, not Panera. Look for a site with enough content and visual structure to divide into pieces. Use the business's own website, rather than a delivery-service listing, social-media profile, or national chain's template.

Start with the page you want to rebuild. Save a reference screenshot in `reference/`, link the original in `PLAN.md`, and record the logo, brand colors (hex values), type choices, and key content. Identify what a visitor needs most: a menu, services, hours, location, or a way to contact the business.

### Local possibilities to investigate

These are suggestions, not assigned choices. You may choose another suitable local business. Look for opportunities to improve the site's appearance, organization, and experience on a phone.

- [Pizzeria Presti, Westford](https://pizzeriaprestiwestford.com/)
- [Tiger An's Taekwondo, Tyngsborough](https://www.tigeranstyngsboro.com/)
- [Tyngs Starry Hair Design](https://www.tyngstarryhairdesign.com/)
- [Belmont Printing](https://belmontprinting.com/)
- [Iron Rose Fitness](https://www.ironrosefit.com/)

You may find another local restaurant, barber, repair shop, florist, or other independent business. Start with a manageable homepage or main information page. You do not need to recreate an ordering system or the entire original site.

## 2. Break the design into components

Before coding, complete `PLAN.md`. Make a labeled sketch and define **at least three meaningful components**. For each, explain:

- What is this component responsible for?
- What information does it receive as props? Give names and example values.
- Where does it appear? Does another component contain it?
- Is it reused with different information?

For a pizza place, a possible component tree is:

```text
App
├── Header
├── Menu
│   └── MenuItem (one instance per item)
└── Footer
    └── ContactInfo
```

Your site may need different pieces. A salon might use `ServiceList` and `StylistProfile`; a repair shop might use `RepairService` and `HoursAndLocation`. Choose boundaries that make sense for your design. A component can organize a distinct section or provide a reusable design. Splitting every heading into a separate file does not automatically improve the design.

**At least one component must appear multiple times (at least twice) with different information passed through props.** This is where reuse becomes useful: change the shared component once and every instance updates. The supplied `ExampleCard` demonstrates props; replace it with your own work. It does not count toward your three components.

## 3. Design and render, beginning with one component

Choose one component from your plan and build it first. Render it in `App.svelte`, using actual content and the business's branding. If it is a repeated component, try multiple instances early so you can see whether your props and styles work with different content lengths.

Then build the surrounding components and assemble the page. Use semantic HTML, intentional typography and spacing, readable contrast, and layouts that work on both phones and desktops. Keep content and contact information faithful to your source.

### Today's checkpoint

By the end of class, submit a source/editor link showing:

1. Your chosen business, original URL, reference screenshot, and branding notes.
2. A sketch and definitions for at least three components in `PLAN.md`.
3. At least one of your own components rendering in Svelte.
4. A sentence explaining its props and your next step.

Today's checkpoint is a start on the project; the whole site need not be finished today.

### Finished project requirements

1. **Break your design into at least three meaningful Svelte components.** Define each component's responsibility and assemble them into a coherent page. The supplied example does not count.
2. **Reuse at least one component multiple times with different props.** Render at least two instances with different information; use an array and `{#each}` when appropriate. Be ready to explain what stays the same and what changes.
3. **Make the design responsive at phone and laptop sizes.** Test at least two widths, such as 390px and 1366px, and check widths in between. Adapt the layout, navigation, images, and typography so content remains readable and usable without clipping, overlap, or accidental horizontal scrolling.
4. **Make your design a significant upgrade to the existing website.** Create an attractive, modern design while retaining the business's branding and colors. Improve visual hierarchy, typography, spacing, navigation, and access to important information. Show before-and-after screenshots and explain specific improvements and how they help visitors. Simply moving the existing design into Svelte is not enough.

For submission, also include:

- Semantic landmarks, useful image alt text, labeled controls, keyboard access, and visible focus.
- Working navigation and contact links. Choose interactions that serve the business; an extra interactive feature is optional.
- Completed planning and brief testing/reflection notes in `PLAN.md`.
- Sources and AI assistance credited near relevant code and on the visible `citations.html` page.
- Both a live site link and a source-code link. Be ready to explain your component boundaries, props, and one revision.

Identify the published work as an **unofficial student redesign** and link to the actual business. Credit the original branding, content, and images. Keep real ordering or booking links pointed to the business's official services.

## Run the starter

Use Node **22.12 or newer** (Node 22 is configured in Codespaces).

```sh
npm install
npm start
```

Open the URL printed in the terminal. In Codespaces, open port **5173** from the Ports tab. Save to see changes. Stop with Ctrl+C.

```sh
npm run check    # Svelte and accessibility diagnostics
npm run build    # production files in dist/
npm run preview  # inspect the built version on port 4173
```

Do not open `index.html` directly or use Live Server: Svelte files need Vite's build tools.

## Find your way around

```text
src/App.svelte               Assemble your components here
src/lib/ExampleCard.svelte   Small props example; replace with your components
src/app.css                 Shared styles and your brand variables
src/main.js                 Mounts the app; usually leave alone
public/                     Images and other files copied into the finished site
public/citations.html       Visible sources and AI acknowledgments
PLAN.md                     Your business research, sketch, and component definitions
reference/                  Your screenshots/sketches (create this folder)
AGENTS.md                   Instructions for coding assistants
.github/workflows/pages.yml Build and publish the site
```

Put local images in `public/images/` and reference them with relative URLs such as `images/storefront.jpg` so they also work on GitHub Pages. Keep screenshots used for planning in `reference/`, separate from the finished site.

## Working with AI

You choose the business, analyze the design, define the components, and review the result. AI can explain a concept, demonstrate a small pattern, or help debug one component. It should not plan and execute the whole project for you. Read and explain the code you use.

Cite all AI help, including planning, writing, and debugging, in `public/citations.html`. For generated or substantially rewritten code, add comments around the affected region naming the tool and summarizing your prompt. Preserve existing source credit. The supplied starter has its own instructor acknowledgment; add your assistance separately.

## Optional collaboration

This works individually. If working with classmates, first agree on the component tree, shared branding, and each component's props. Divide ownership by component; choose one person to integrate `App.svelte`. Build and test each piece with sample data before combining them. Record ownership in `PLAN.md`.

## Assessment: Digital Creation

| Aspect | Meeting the standard (3) | Mastery (4) |
| --- | --- | --- |
| Appearance | A significant visual and usability upgrade to the original, with recognizable branding, intentional hierarchy and spacing, and responsive phone/laptop layouts. | A polished visual system that carries the business's identity across content and screen sizes. |
| Function | Visitors can find key information and use navigation/contact links; semantic markup and keyboard access work. | User testing leads to clear improvements; varied content and screen sizes are handled thoughtfully. |
| Components | At least three meaningful components; one is reused at least twice with different props; you can explain the structure. | Boundaries and data flow make the site easy to change; shared revisions stay consistent across instances. |

These describe evidence for the overall Digital Creation assessment, not separate point totals. More components or extra features alone do not demonstrate mastery.

## Publish

The included GitHub Action builds the app and deploys **only `dist/`** to GitHub Pages after pushes to `main`. In your assignment repository, choose **Settings → Pages → Source → GitHub Actions**. Open the Pages link reported by the successful workflow. Do not publish the unbuilt source directory.

## References

- [Svelte tutorial](https://svelte.dev/tutorial/svelte/welcome-to-svelte)
- [Component props](https://svelte.dev/docs/svelte/$props)
- [Each blocks](https://svelte.dev/docs/svelte/each)
- [Scoped styles](https://svelte.dev/docs/svelte/scoped-styles)
- [Vite guide](https://vite.dev/guide/)

Instructor draft for IACS Web Design 2, 2026–2027. Assignment and starter drafted by Tom Hinkle with OpenAI Codex.
