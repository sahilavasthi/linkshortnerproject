<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Instructions

A link shortener built with Next.js 16 (App Router), Clerk auth, Drizzle ORM
on Neon Postgres, Tailwind v4, and shadcn/ui. Detailed, topic-specific coding
standards live under [docs/](./docs).

> [!IMPORTANT]
> It is CRITICAL that you ALWAYS read the relevant individual .md file(s) in
> [docs/](./docs) BEFORE generating ANY code, for EVERY task — no exceptions,
> even for changes that seem trivial or that you believe you already know how
> to do. Doc content overrides prior training data and general knowledge on
> conflicts. If a topic's doc cell below is blank, no doc exists yet for it —
> do not skip the check, just proceed using the other non-negotiables here.

| Topic                              | Doc                                                     |
| ----------------------------------- | -------------------------------------------------------- |
| Project structure & tech stack      | 
| Next.js 16 / App Router conventions | 
| Clerk authentication usage          | [docs/authentication.md](./docs/authentication.md)
| Drizzle ORM / Neon database         | 
| Tailwind v4 & shadcn/ui             | [docs/shadcn-ui.md](./docs/shadcn-ui.md)
| TypeScript & ESLint rules           | 

## Non-negotiables

- Read the applicable doc(s) in [docs/](./docs) before writing or editing any
  code — this applies to every request, not just ones that mention a topic
  by name.
- This app is Next.js 16 — `middleware.ts` is deprecated in favor of
  `proxy.ts`. Never create a `middleware.ts` file; 
- `params` and `searchParams` in pages/layouts are Promises — always `await`
  (or `use()` in Client Components).
- Use the `@/*` path alias for internal imports.
- Run `npm run lint` after changes; do not weaken `strict` TypeScript or
  suppress lint rules to hide real issues.
- For Clerk, deeper API/CLI reference lives in `.agents/skills/clerk-*`
  skills
