# DesignEase SaaS

A premium UI templates platform built with modern architecture.

## Tech Stack

### Frontend (apps/web)
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Shadcn/UI
- Framer Motion

### Backend (apps/api)
- NestJS
- Prisma ORM
- PostgreSQL
- JWT Auth

### Monorepo
- TurboRepo

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

## Structure

- `apps/web`: Frontend application
- `apps/api`: Backend API service
- `packages/*`: Shared packages (UI, updates to come)

## Refactoring Status

- [x] Phase 1: Audit & Purge (Legacy code removed)
- [x] Phase 2: Design System Foundation (Tailwind config + Utils created)
- [x] Phase 3: Frontend Rebuild (Next.js initialized)
- [x] Phase 4: Backend Rebuild (NestJS initialized)
- [ ] Phase 5: Quality & Delivery (Pending tests & full implementation)

This project strictly follows Clean Architecture and Atomic Design principles.
