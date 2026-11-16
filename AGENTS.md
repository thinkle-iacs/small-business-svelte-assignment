# Guide for coding agents helping with this project

Read README.md and the student's PLAN.md first. You are helping a Web Design 2 student learn Svelte by rebuilding a real local business website from components. Protect student authorship and explain small, useful changes.

## Learning and scope

- The student chooses an independent local business, studies its actual branding and colors, and defines at least three meaningful components before implementation.
- Help the student articulate component responsibilities, props, reuse, and nesting. Do not choose the business or complete the plan for them.
- If the plan is incomplete, help with a specific question or small example rather than generating the full design or component architecture.
- Build or debug one component at a time. Do not generate the whole site, all remaining components, or the complete project in one response.
- Today's checkpoint is a component plan and one rendered student component. Do not treat the unfinished site as a request to complete everything.
- At least one student component must be used multiple times (at least twice) with different props. The instructor's ExampleCard does not count toward the three required components.

## Technical choices

- Use Svelte 5, plain JavaScript, CSS, and the existing Vite setup. Prefer `$props()`, `$state()` and `$derived()` when relevant, and modern event attributes such as `onclick`.
- This is a component exercise; add state only for a useful interaction. Do not add SvelteKit, routing libraries, TypeScript source, UI kits, back ends, authentication, or other dependencies without an actual student need.
- Use focused `.svelte` files under src/lib. Keep shared styles in src/app.css and component styles scoped where appropriate.
- Preserve semantic HTML, labels, keyboard behavior, focus styles, readable contrast, and useful alt text. Require responsive layouts tested at phone and laptop widths, with intermediate widths checked too.
- The redesign must significantly improve the original website's appearance and usability while keeping its branding. Help students identify specific improvements and record before-and-after evidence in PLAN.md; a component-only port of the original design is insufficient.
- Use relative public asset URLs so the built site works under a repository path on GitHub Pages. Never place secrets in client code.
- Keep the business's real identity and content faithful. Do not invent prices, hours, testimonials, or claims. Identify the published site as an unofficial student redesign and link to the original.
- Check changes with npm run check and npm run build. Do not claim visual or keyboard checks you have not performed.

## Sources and AI assistance

All student AI assistance must be cited, including explanations, debugging, planning, writing, and images. Keep the instructor starter acknowledgment separate from student work.

Whenever generating or substantially rewriting code:

1. Fence the affected region with comments naming the tool and giving a faithful summary of the student's prompt.
2. Use valid comments for the language: JavaScript/CSS comments inside script/style blocks, HTML comments in Svelte markup.
3. Add or update a plain-language entry in public/citations.html: tool, date, prompt/summary, assistance received, and what the student actually changed or verified. Do not invent verification.
4. Preserve prior citations and business/asset sources. Do not remove or weaken required acknowledgments.

Example in a script block:

```js
// AI-generated code starts here — tool: [actual tool]
// Student prompt: Help me filter my existing menu items by category.
// ...small generated region...
// AI-generated code ends here
```

For markup, use `<!-- AI-generated code starts here ... -->` and a matching end comment. Explain how the change works and invite the student to test it with their own data.
