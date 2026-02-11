# website

SvelteKit site configured for static deployment on GitHub Pages.

## Local development

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

## Build

Create a production build:

```bash
npm run build
```

## Deploy to GitHub Pages

The workflow at `.github/workflows/deploy.yml` deploys on every push to `main`.

Set GitHub repository settings:

1. Open `Settings` -> `Pages`.
2. Under `Build and deployment`, set `Source` to `GitHub Actions`.
3. Push to `main` to trigger deployment.

Base path is set automatically:
- Custom domain or `username.github.io` repo -> `/`
- Project repo (`username/repo`) -> `/<repo>`
