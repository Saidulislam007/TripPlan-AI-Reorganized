# TripPlan AI

Bangladesh-focused AI travel planner UI built with Next.js, TypeScript and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Main structure

```text
src/
├── app/                  # Next.js App Router routes
├── components/
│   ├── dashboard/        # User dashboard UI
│   ├── destinations/     # Bangladesh places UI
│   ├── food/             # Food listing and details
│   ├── hotels/           # Hotel listing and details
│   ├── layout/           # Header, footer and shared shell
│   ├── moderator/        # Moderator dashboard and CMS
│   ├── plan-trip/        # AI travel intelligence form
│   ├── tour-packages/    # Packages, details and booking UI
│   ├── transport/        # Transport guide
│   └── ui/               # Reusable UI primitives
├── hooks/                # Shared React hooks
└── lib/                  # Sample data and utilities
```

## Important note

This is a frontend/UI-only package. It does not include authentication, backend, database or cloud-hosting code. Login, registration, Google sign-in, booking, save and AI generation actions are UI demonstrations. You can connect your own authentication and Express/MongoDB backend later.
