# Terraline Infra

Responsive React website for Terraline Infra, built with Vite.

## Local development

```sh
npm ci
npm run dev
```

Run `npm run lint` and `npm run build` to validate a production build.

## GitHub Pages deployment

The site is deployed to [https://dhravprajapati-prog.github.io/Terraline/](https://dhravprajapati-prog.github.io/Terraline/).
The GitHub Actions workflow at `../.github/workflows/deploy.yml` builds and
publishes the frontend whenever files in `frontend/` change on `main`.

Vite's base path and React Router's basename are configured for this repository
site URL. The workflow also publishes an SPA fallback so direct visits to
routes such as `/about` and `/contact` continue to work.
