<!-- Repo-specific instructions for AI coding agents. Keep concise and actionable. -->
# LinksHub — Copilot Instructions

These notes highlight repository-specific structure, conventions, and local requirements so an AI coding assistant can be productive immediately.

**Big Picture**
- This is a Next.js (v13) TypeScript web app that uses a mixture of the legacy `pages/` router and a top-level `app/` folder for shared constants/components. The primary entry for client/server rendering is `pages/_app.tsx`.
- Frontend expects a small local backend at `http://127.0.0.1:5000` that provides runtime data (see `lib/variablesCache.ts`). Key endpoints:
  - `/api/get_version` — returns `{ version: string }`
  - `/api/get_version_logo` — returns `{ version_logo: string }`
  - `/api/get_data` — returns the sidebar/app data consumed by `getAppData()`

**Start / Build / Dev workflows**
- Package manager: `pnpm` (project enforces this via `preinstall`). Always use `pnpm`.
- Common commands (from `package.json`):
  - `pnpm run dev` — start Next.js in development
  - `pnpm run build` — build for production (`next build`)
  - `pnpm run start` — start production server (`next start`)
  - `pnpm run dev-setup` / `pnpm run start-setup` — convenience scripts that run `pnpm install`
- Husky is enabled (`prepare` hook). Avoid making commits that break linting/hooks.

**Important Files & Patterns**
- `pages/_app.tsx` — wraps the app with `ThemeProvider`, `GlobalProvider`, and `ResultsProvider`. It calls `App.getInitialProps` which fetches `version` and `version_logo` via `lib/variablesCache.ts`.
- `lib/variablesCache.ts` — single source for runtime API calls and simple in-memory caching. When changing remote endpoints or caching behavior, update here.
- `components/` — all UI lives here in per-component subfolders (e.g. `components/Header/Header.tsx`). Follow the existing component patterns: small functional components, TypeScript `FC` typing, and Tailwind classes.
- `lib/utils.ts` — helper `cn()` should be used for merging Tailwind classes (uses `clsx` + `tailwind-merge`). Prefer this over ad-hoc class concatenation.
- `database/` — historically contains JSON exports (commented imports). Many modules import JSON here; be careful when changing data source shape.

**Styling & UI**
- Tailwind CSS + DaisyUI are used. Global styles: `styles/globals.css` and `tailwind.config.js`.
- Use `cn(...)` from `lib/utils.ts` for combining classes and resolving conflicts.

**Data & API contract notes**
- The frontend expects the backend to be available during SSR/SSG because `getInitialProps` calls `getVersion()` (fetch to `127.0.0.1:5000`). For local development, run the backend or stub these endpoints.
- `lib/variablesCache.ts:getAppData()` expects the API to return a structure that can be transformed to `ISidebar[]` (see `types/index.ts`). When changing API keys or field names, update the transformation here.

**Conventions / Gotchas**
- Use TypeScript types declared in `types/` — several components and `lib` rely on `ISidebar`, `Category`, etc.
- The repo uses `next/image` for image assets (see `components/Header/Header.tsx` with `assets/logo.webp`). Keep image imports compatible with Next.js.
- Many files contain commented-out code (nav links, social icons). Preserve intent when re-enabling: check `useRouter()` usage and responsive class names.

**Examples (use in edits)**
- To fetch version-aware content, see `pages/_app.tsx`:
  ```ts
  App.getInitialProps = async () => {
    const { version } = await getVersion();
    const { version_logo } = await getVersionLogo();
    return { version, version_logo };
  };
  ```
- To merge classes, use `lib/utils.ts`:
  ```ts
  import { cn } from 'lib/utils'
  <div className={cn('p-2', isActive && 'bg-primary')}>...</div>
  ```

**If you change data sources / endpoints**
- Update `lib/variablesCache.ts` and then ensure `pages/_app.tsx` and `components/Header/Header.tsx` still receive the `version`/`version_logo` props.
- If switching back to local JSON datasets, update `database/index.ts` exports and confirm imports across the app.

**When in doubt**
- Run `pnpm install` then `pnpm run dev` and ensure the backend at `127.0.0.1:5000` is reachable (or mock those endpoints). Look for fetch errors in the server console if pages fail during SSR.

---
If any of these pointers are unclear or you want more detail (examples of common refactors, list of most-used components, or a short onboarding task list), tell me which area to expand.
