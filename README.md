# mohithrao.me

Personal website built with SvelteKit, TypeScript, Vite, and Tailwind CSS.

## Stack
- SvelteKit v2 + Svelte 4
- TypeScript
- Tailwind CSS + PostCSS
- Vite 5

## Routes
- `/` Home
- `/about` Resume-style About page
- `/projects` Hidden in nav (implemented)
- `/what-can-i-do-for-you` Hidden in nav (placeholder)

Hidden pages are controlled by feature flags, not route deletion.

## Getting Started
```bash
npm install
npm run dev
```

## Run Locally
1. Install dependencies:
```bash
npm install
```
2. Start the dev server:
```bash
npm run dev
```
3. Open `http://localhost:5173` in your browser.

If port `5173` is in use, Vite will print the actual local URL in the terminal.

Useful scripts:
- `npm run check` Type + Svelte checks
- `npm run lint` Prettier check
- `npm run format` Auto-format
- `npm run build` Production build
- `npm run preview` Preview production build

## Content Editing
All site content is data-driven and lives in `src/lib/content/`:
- `site.ts`: site name, tagline, description, email, social links, skills, education, resume path
- `projects.ts`: projects array (`title`, `description`, `tags`, `links`, `featured`, `year`)
- `experience.ts`: experience entries (`company`, `title`, `start`, `end`, `highlights`)
- `certifications.ts`: certifications (`name`, `issuer`, `date`, `credentialUrl?`)

## Feature Flags
Use `src/lib/config/features.ts`:
- `showProjectsPage`
- `showServicesPage`

Set either to `true` to show links in global navigation/footer contexts where applicable.
Routes remain accessible directly even when hidden.

## Components and Layout
Reusable UI components are in `src/lib/components/`:
- `Button.svelte`, `Badge.svelte`, `Card.svelte`, `Section.svelte`

Global shell is in `src/routes/+layout.svelte` and includes:
- Header + active nav state
- Skip-to-content link
- Persistent dark mode toggle
- Footer with contact/social links

## Static Assets
- Resume PDF: `static/resume.pdf` (replace placeholder)
- OpenGraph image: `static/og.png` (replace placeholder)
- Favicon: `static/favicon.png`

## SEO and Accessibility
- Per-page `<svelte:head>` title + description + OpenGraph tags
- Semantic headings and keyboard-focus states
- Responsive layout for mobile and desktop
