# Repository Guidelines

## Project Structure & Module Organization

This repository contains an Astro dental clinic site and a small scheduling API.

- `src/pages/` defines routes, including `/` and `/termin`.
- `src/components/` contains React sections and shadcn-style primitives in `src/components/ui/`.
- `src/layouts/Layout.astro` provides the shared page shell.
- `src/styles/global.css` holds Tailwind v4 tokens and global styles.
- `public/images/` stores static clinic and hero images.
- `server/src/` contains the Express API, email router, mailer, and logger.
- `dist/` and `server/dist/` are generated build outputs and should not be edited manually.

There is currently no dedicated test directory.

## Build, Test, and Development Commands

Frontend commands run from the repository root:

- `npm run dev` starts the Astro development server.
- `npm run build` builds the static frontend.
- `npm run preview` previews the built frontend locally.
- `npm run astro -- <command>` runs Astro CLI tasks.

Server commands run from `server/`:

- `npm run dev` starts the Express server with `ts-node-dev`.
- `npm run build` compiles TypeScript to `server/dist/`.
- `npm start` runs the compiled server.

No `npm test` script is defined yet.

## Coding Style & Naming Conventions

Use TypeScript for React and server code. Follow existing formatting: 2-space indentation in `.tsx` and server `.ts` files, concise component files, and named folders by feature or UI role. React components use PascalCase filenames such as `AppointmentForm.tsx`; utility modules use short descriptive names such as `utils.ts`.

Prefer existing UI primitives from `src/components/ui/` before adding new component patterns. Keep Albanian user-facing copy consistent with the rest of the site.

## Testing Guidelines

Automated tests are not configured. Before submitting changes, run `npm run build` at the root and `npm run build` in `server/` when API code changes. For booking work, manually verify that `/termin` submits to `POST /api/schedule` with the expected payload.

## Commit & Pull Request Guidelines

Recent history uses short imperative commits, sometimes with conventional prefixes such as `feat:`. Prefer concise messages like `feat: add appointment confirmation state` or `fix: handle missing SMTP recipient`.

Pull requests should include a clear description, affected areas, verification steps, and screenshots for visible UI changes. Link related issues when available.

## Security & Configuration Tips

Never commit `.env` files or SMTP credentials. Use `server/.env.example` as the template for `PORT`, `SMTP_*`, `FROM_EMAIL`, and `TO_EMAIL`. The frontend appointment form uses `PUBLIC_API_BASE`; set it per environment when the API is not running on `http://localhost:4000`.
