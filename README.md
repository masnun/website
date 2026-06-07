# masnun.me

Personal website for **Abu Ashraf Masnun** — a single-page app (SPA) built with
Vite + React + TypeScript and animated with Framer Motion. All content lives in
one data file, so the site is fully data-driven.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

## Edit content

Everything (summary, skills, jobs, testimonials, links) is in
[`src/data.ts`](src/data.ts). Change that file and the whole page updates — no
component edits needed.

The downloadable CV is `public/Abu Ashraf Masnun - CV.pdf`. Replace it and
update `profile.cv` in `src/data.ts` if the filename changes.

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
   builds the site, and publishes it.

`vite.config.ts` uses `base: "./"` (relative asset paths), so the build works on
any Pages URL — a user site (`masnun.github.io`), a project subpath
(`masnun.github.io/masnun.me`), or a custom domain.

### Custom domain (masnun.com)

To serve it on a custom domain, add a file `public/CNAME` containing your domain:

```
masnun.com
```

then set the domain under **Settings → Pages → Custom domain**.
```
