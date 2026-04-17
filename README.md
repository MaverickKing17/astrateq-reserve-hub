# Astrateq Gadgets - Reservation Platform

A premium, bilingual (EN/FR) reservation system for AI-powered automotive safety gadgets in Canada.

## Features
- **Bilingual Support**: Full English and Canadian French localization.
- **Conversion-Optimized Funnel**: 5-step checkout process with state persistence and order summary.
- **Secure Payments**: Integrated with Stripe (mocked in this environment).
- **Global Layout**: Sticky header, announcement bar with scarcity counter, and detailed footer.

## Tech Stack
- **Frontend**: React, Vite, TypeScript, Tailwind CSS, shadcn/ui.
- **State Management**: React Context + LocalStorage.
- **Localization**: react-i18next.
- **Animations**: Framer Motion.
- **Backend**: Express (Mocking Supabase Edge Functions).

## Setup & Deployment

### Environment Variables
Setup `.env` based on `.env.example`:
- `GEMINI_API_KEY`: For AI features (auto-injected in AI Studio).
- `VITE_SUPABASE_URL`: Your Supabase Project URL.
- `VITE_SUPABASE_ANON_KEY`: Your Supabase Anon Key.
- `VITE_STRIPE_PUBLISHABLE_KEY`: Stripe Publishable Key.
- `STRIPE_SECRET_KEY`: Stripe Secret Key.

### Supabase Setup
1. Create a new Supabase project.
2. Run the SQL migrations provided in `supabase_migrations.sql`.
3. Configure RLS as defined in the SQL file.

### Local Development
```bash
npm install
npm run dev
```

## Assumptions
- The hardware deposit is a flat $49.00 CAD across all plans.
- Scarcity is globally tracked and shared across all products in the bundle.
- Taxes are calculated based on the province selected in Step 3.
