# MAYFAIR Hotels & Resorts — Frontend

Next.js (App Router) + TypeScript (strict) + Tailwind CSS v4, managed with Bun.

Design reference: [`../docs/design.md`](../docs/design.md) is the authoritative design spec.

## Setup

```bash
bun install
cp .env.example .env.local
```

## Scripts

| Command             | Purpose                  |
| ------------------- | ------------------------ |
| `bun run dev`       | Start dev server         |
| `bun run build`     | Production build         |
| `bun run start`     | Serve production build   |
| `bun run lint`      | ESLint                   |
| `bun run typecheck` | TypeScript type checking |

## Deploy (Vercel)

1. Import the repository in Vercel.
2. Set **Root Directory** to `frontend`. The framework (Next.js) and package manager (Bun, from `bun.lock`) are detected automatically; keep the default build and install commands.
3. Node.js version comes from `engines` in `package.json` (24.x).
4. No environment variables are required.
