# Tiny Robot Lab Website — Agent Instructions

## Project identity

- Tiny Robot Lab is the umbrella learning project. Keep its description broad enough for work beyond autonomous agents.
- Tiny Agent Lab is the current autonomous-agent project and its public project name.
- The source repository may remain named `autonomous-agent-lab`; distinguish the repository name from the public project name.
- The intended Tiny Agent Lab console address is `https://agents.tinyrobotlab.com`. Do not assume it is live or change DNS, Cloudflare, redirects, or deployment without an explicit request.
- Future projects may have project-specific subdomains under `tinyrobotlab.com`; do not present projects that do not yet exist as available.
- Keep the Tiny Robot Lab robot an important part of the site's visual identity.

## Website character and visual language

The site is a handcrafted engineering notebook: approachable, technically grounded, and written by someone actively building and learning. Preserve the established visual system unless a task explicitly changes it:

- Warm technical-paper light mode and coherent deep-slate dark mode.
- Restrained cobalt/blue accents, hairline borders, and compact corner radii.
- Clean editorial sans-serif prose; monospace for technical metadata, identifiers, paths, states, and code.
- Generous but controlled whitespace, responsive layouts, and visible keyboard focus.
- Real engineering artifacts, diagrams, sequences, lab notes, specifications, and honest limitations.

Avoid generic SaaS or AI-generated landing-page patterns: repetitive card grids, oversized KPI cards, excessive rounding, gradients, decorative shadows, glowing pills, UI emoji, repetitive uppercase eyebrow headings, and unnecessary subtitles. Different pages may use different structures; do not force visual uniformity.

## Writing and technical truth

- Prefer Tom's first-person builder voice when describing personal work. Avoid corporate “we/our” framing for it.
- Prefer concrete implementation details to abstract marketing claims. Let a real incident or artifact lead when it teaches more than a generic explanation.
- Preserve uncertainty, limitations, failures, tradeoffs, and lessons; do not portray the project as flawless.
- Never fabricate or casually infer runtime behavior, architecture, provider or routing behavior, telemetry, tests, implementation or release status, roadmap or issue status, repository paths, names, or historical changes.
- Verify material technical claims against the current authoritative repository and GitHub state where appropriate. Distinguish released capability, code on current `main`, architecturally decided behavior, incomplete work, and plans. An ADR or issue title alone does not establish implementation; passing tests are evidence, not proof.
- Do not publish global test counts unless an authoritative release or repository artifact intentionally establishes them.

## Technical artifacts

- Preserve the real architecture SVGs as engineering artifacts; do not replace them with decorative or generated diagrams for consistency.
- Use “Tiny Agent Lab” for public diagram branding when the diagram describes that project, while keeping technical component names accurate.
- Use `autonomous-agent-lab` when referring to the repository itself.

## Change discipline

- Inspect the relevant files and current repository state before editing. Keep changes small, reviewable, and within the requested scope.
- Do not redesign established pages merely for stylistic variety or perform unrelated cleanup.
- Reuse the existing CSS vocabulary before adding styles; scope page-specific rules appropriately.
- Do not add CSS or JavaScript frameworks without an explicit architectural decision.
- Preserve responsive behavior, accessibility, light/dark modes, and useful assets.

## Cross-site consistency

When changing shared navigation, footers, project naming, domains, or design tokens, inspect all public HTML pages. Keep destinations, labels, footer identity/resources, active-page semantics, and project-versus-umbrella naming coherent; check for stale domains.

## Validation

Choose validation appropriate to the change. Where relevant:

- Run `git diff --check` and verify local links and assets.
- Check for horizontal overflow at representative mobile and desktop widths, and test light and dark modes.
- Preserve one appropriate H1, sensible heading hierarchy, descriptive image alternatives, keyboard-visible focus, and skip-link behavior.
- Keep tables semantic and accessible; respect reduced-motion preferences.
- Report only validation actually performed.

## Agent behavior

Treat the repository and task scope as authoritative; do not broaden bounded work. If a request conflicts with these guardrails, surface the conflict rather than silently overriding the established design. Do not commit, push, create a PR, or deploy unless explicitly requested.
