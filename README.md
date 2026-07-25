# Xi Liu Studio

An original, responsive digital-studio portfolio. The homepage is an interactive designer’s desk; each object opens a project note.

## Live site

The site publishes automatically to:

`https://lexi-le-xi.github.io/lab/`

Every push to `main` triggers the GitHub Pages deployment workflow.

## Edit your content

- Project titles, questions, descriptions, and notes live in `app/projects.ts`.
- Replace `hello@example.com` in `app/studio-desk.tsx` with your real email.
- Add project imagery or video inside the relevant project page when ready.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build the static site

```bash
npm run build
```

The complete static site is generated in `out/`.

## GitHub Pages setup

1. Open the repository’s **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main`, or run the workflow manually from the **Actions** tab.

The workflow builds and deploys the site automatically. No Cloudflare account or server is required.
