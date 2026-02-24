# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 15 personal portfolio site** (single-page, no backend/database). All standard commands are in `package.json`.

### Quick reference

| Action | Command |
|--------|---------|
| Install deps | `pnpm install` |
| Dev server | `pnpm dev` (port 3000) |
| Lint | `pnpm lint` |
| Build | `pnpm build` |

### Known issues

- `src/app/page.tsx` imports `IconTicketsHunt` from `@/components/icons/icon-tickets-hunt`, but that file does not exist. The import is unused in JSX. This causes `pnpm lint` and `pnpm build` to fail with `@typescript-eslint/no-unused-vars`. The dev server (`pnpm dev`) runs fine despite this.

### Notes

- pnpm may warn about ignored build scripts for `sharp`. This is cosmetic and does not affect functionality.
- No environment variables, databases, Docker, or external services are required.
