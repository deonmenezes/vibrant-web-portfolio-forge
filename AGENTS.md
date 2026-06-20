# vibrant-web-portfolio-forge

A personal web portfolio built with React, TypeScript, Vite, and shadcn/ui — featuring 3D elements (Three.js / React Three Fiber), smooth animations (Framer Motion), and contact form integration. Generated via Lovable and deployable to Vercel.

## Tech Stack

- **Framework:** React 18, TypeScript, Vite
- **UI components:** shadcn/ui (Radix UI primitives + Tailwind CSS)
- **3D rendering:** Three.js, @react-three/fiber, @react-three/drei, Spline
- **Animation:** Framer Motion, Lenis (smooth scroll)
- **Routing:** React Router DOM v6
- **Forms:** React Hook Form + Zod validation
- **Email:** EmailJS (`@emailjs/browser`)
- **AI:** Google Generative AI (`@google/generative-ai`)
- **Charts:** Recharts
- **Build tool:** Vite + SWC
- **Deployment:** Vercel (`vercel.json` present)

## Setup

```bash
npm install
# or
yarn install
```

## Build / Run / Test

```bash
npm run dev          # local dev server (Vite HMR)
npm run build        # production build
npm run build:dev    # development-mode production build
npm run preview      # preview the production build locally
npm run lint         # ESLint
```

## Project Structure

```
src/
  App.tsx             Root component and routing setup
  main.tsx            Entry point
  pages/              Route-level page components
  components/         Reusable UI components (shadcn/ui + custom)
  contexts/           React context providers
  hooks/              Custom React hooks
  data/               Static data / content
  lib/                Utility functions
  vite-mocks/         Vite-specific mocks for testing/dev
public/               Static assets
index.html            HTML entry point
vite.config.ts        Vite configuration
tailwind.config.ts    Tailwind CSS configuration
tsconfig.json         TypeScript config (composite)
tsconfig.app.json     App-specific TS config
tsconfig.node.json    Node/build tooling TS config
components.json       shadcn/ui component registry config
vercel.json           Vercel deployment config
google-apps-script.js Google Apps Script (form/email integration)
```

## Architecture & Key Files

- `src/pages/` — each file is a full-page route component.
- `src/components/` — shadcn/ui components live here alongside custom components. Do not manually edit shadcn-generated files; re-run the shadcn CLI to update them.
- `vite.config.ts` — Vite build config including the `lovable-tagger` plugin (dev-only Lovable integration).
- `google-apps-script.js` — deployed separately to Google Apps Script for contact form email handling.
- `components.json` — controls shadcn/ui component generation; edit this to configure the component library.

## Conventions & Notes for Agents

- This project was generated via [Lovable](https://lovable.dev/projects/4162ba58-7f8c-4564-8553-30d7ee5f5d58). Changes pushed to this repo are reflected in Lovable automatically.
- **shadcn/ui components** in `src/components/ui/` are generated — prefer using the shadcn CLI (`npx shadcn@latest add <component>`) over hand-editing them.
- TypeScript strict mode is on; avoid `any` casts.
- Tailwind CSS is configured via `tailwind.config.ts` and `postcss.config.js`. Use Tailwind utilities; avoid inline styles.
- `@google/generative-ai` requires a Google AI API key — set via environment variable, never commit keys.
- EmailJS requires service/template IDs configured in the EmailJS dashboard and referenced in the component code.
- No test suite present. Verify with `npm run build` and `npm run preview`.
