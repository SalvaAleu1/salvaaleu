# Salva Aleu — Personal Website

Professional personal website for **salvaaleu.com**.

## Stack

- Next.js App Router
- React
- TypeScript
- Custom responsive CSS
- Vercel-ready configuration

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production check

```bash
npm run lint
npm run build
```

## Deploy on Vercel

1. Import the GitHub repository `SalvaAleu1/salvaaleu` into Vercel.
2. Vercel should detect **Next.js** automatically.
3. Keep the default build command: `next build`.
4. No environment variables are required for the current site.
5. After the deployment succeeds, add `salvaaleu.com` and `www.salvaaleu.com` in the project's Domains settings.
6. Follow Vercel's DNS records for the domain provider, then set the preferred domain as the primary redirect target.

## Content

Core public content is centralized in `lib/site-data.ts`. Additional photographs can be added later without changing the overall information architecture.

The current official portrait is the existing repository image:
`Screenshot_20260709_094333_Drive.jpg`.
