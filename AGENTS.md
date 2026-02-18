# Repository Guidelines

## Project Structure & Module Organization

This repository is a minimal SvelteKit app.

- `src/routes/`: route files and pages (currently `+page.svelte` for the home page).
- `src/lib/`: shared TypeScript utilities/components for reuse across routes.
- `src/app.html`, `src/app.d.ts`: app shell and global type declarations.
- `static/`: static assets served as-is (e.g., `static/favicon.png`).
- Root config: `svelte.config.js`, `vite.config.ts`, `tsconfig.json`, `.prettierrc`.

When adding features, keep route-specific UI in `src/routes/...` and move reusable code into `src/lib/...`.

## Build, Test, and Development Commands

Use npm scripts defined in `package.json`:

- `npm install`: install dependencies.
- `npm run dev`: start local dev server.
- `npm run build`: create production build via Vite.
- `npm run preview`: preview the production build locally.
- `npm run check`: run SvelteKit sync + type/static checks (`svelte-check`).
- `npm run lint`: verify formatting with Prettier.
- `npm run format`: apply Prettier formatting.

Typical local verification before a PR: `npm run check && npm run lint && npm run build`.

## Coding Style & Naming Conventions

Formatting is enforced with Prettier (`prettier-plugin-svelte`):

- tabs for indentation (`useTabs: true`)
- single quotes
- no trailing commas
- `printWidth` 100

Follow SvelteKit naming conventions:

- route files use framework names like `+page.svelte`, `+layout.svelte`.
- use PascalCase for Svelte component filenames (e.g., `HeroBanner.svelte`).
- use camelCase for TypeScript variables/functions.

## Testing Guidelines

There is no dedicated unit/integration test framework configured yet. Until one is added:

- treat `npm run check` as the baseline quality gate.
- run `npm run lint` and `npm run build` for regression protection.
- for UI changes, include manual test notes in PRs (route tested, browser/device).

## Commit & Pull Request Guidelines

Recent history shows short, imperative commit messages (e.g., `refresh - start new`, `bug fixes`). Keep commits focused and descriptive.

- Prefer one logical change per commit.
- Use concise imperative subjects (e.g., `add hero section`, `fix mobile nav spacing`).

For pull requests:

- include a clear summary and scope.
- link related issues/tasks.
- attach screenshots or short recordings for visual changes.
- list verification steps/commands you ran.
