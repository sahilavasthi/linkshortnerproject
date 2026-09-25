# UI Components (shadcn/ui)

All UI in this app is built with **shadcn/ui**. Never hand-write a custom
component (buttons, inputs, dialogs, menus, cards, etc.) — install and use the
shadcn equivalent instead.

## Core rules

- **shadcn/ui only.** Do not create bespoke UI primitives in `components/`. If
  a needed primitive doesn't exist yet under `components/ui/`, add it via the
  shadcn CLI rather than writing it by hand.
- **Never bypass the CLI-generated files.** Don't copy/paste component code
  from memory or docs — always generate it with the CLI so it matches this
  project's configured style, base color, and CSS variables.
- Compose features out of existing `components/ui/*` primitives instead of
  writing raw `<div>`/`<button>` markup with custom Tailwind classes.

## Adding a component

Use the shadcn CLI to add new primitives — this reads [components.json](../components.json)
and generates the component into `components/ui/`:

```bash
npx shadcn add <component-name>
```

Example: `npx shadcn add dialog` adds `components/ui/dialog.tsx`.

## Conventions

- Import UI primitives via the `@/components/ui/*` alias (see
  [components.json](../components.json) `aliases`), e.g.
  `import { Button } from "@/components/ui/button"`.
- Use the `cn` helper from [lib/utils.ts](../lib/utils.ts) to merge/override
  Tailwind classes — do not concatenate class strings manually.
- Use variant props (e.g. `variant`, `size` on `Button`) instead of adding
  extra utility classes to change a component's look.
- Icons come from `lucide-react` (the project's configured `iconLibrary`).
- Respect the project's configured style (`base-nova`) and base color
  (`neutral`) — don't override shadcn's generated variants with one-off custom
  styling.

## Reference

- [components.json](../components.json) — shadcn configuration (style, aliases, icon library)
- https://ui.shadcn.com/docs/components — full component catalog and CLI usage
