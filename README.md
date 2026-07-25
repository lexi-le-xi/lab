# Xi Liu Studio

An original, responsive digital-studio portfolio. The homepage is an interactive designer’s desk; each object opens a project note.

## Edit your content

- Project titles, questions, descriptions, and notes live in `app/projects.ts`.
- Replace `hello@example.com` in `app/studio-desk.tsx` with your email.
- Add project imagery or video inside the relevant project page when ready.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Check the production build

```bash
npm run build
```

## Free deployment

### GitHub Pages

This project uses a Cloudflare-compatible Next.js runtime, so GitHub Pages needs a static-export adaptation. For the quickest path without modifying the project, use Cloudflare Pages below.

### Cloudflare Pages / Workers

1. Push this folder to a GitHub repository.
2. In Cloudflare, create a Pages/Workers project from the repository.
3. Use `npm run build` as the build command.
4. Deploy the generated Worker output.

The included `.openai/hosting.json` also allows one-click publishing through OpenAI Sites.
