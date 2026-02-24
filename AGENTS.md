# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 16 personal portfolio site** (single-page, no backend/database). All standard commands are in `package.json`.

### Quick reference

| Action | Command |
|--------|---------|
| Install deps | `pnpm install` |
| Dev server | `pnpm dev` (port 3000, Turbopack) |
| Lint | `pnpm lint` (runs `eslint .`) |
| Build | `pnpm build` |

### Notes

- pnpm may warn about ignored build scripts for `sharp`. This is cosmetic and does not affect functionality.
- No environment variables, databases, Docker, or external services are required.
- If port 3000 is in use, Next.js auto-increments to the next available port.
- Tailwind CSS v4 uses CSS-first configuration (`@import "tailwindcss"` + `@theme` in `globals.css`). There is no `tailwind.config.ts`.
- ESLint uses flat config (`eslint.config.mjs`), not `.eslintrc.json`.
