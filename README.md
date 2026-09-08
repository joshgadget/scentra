# Scentra - Luxury Fragrance Commerce

Scentra is a full-stack fragrance storefront with a React/Vite customer experience and an Express/Prisma administration API.

## Run locally

```bash
npm install
npm run dev
```

- Storefront: `http://localhost:5173`
- API health: `http://localhost:4000/api/health`
- Admin: `http://localhost:5173/admin/login`

The app works immediately in demo mode without environment variables. Demo checkout creates a paid test order without collecting money, so the storefront and admin flows can be tested before Paystack is configured.

Default local admin:

- Email: `admin@scentra.co`
- Password: `Scentra123!`

## Database and accounts (Supabase)

Scentra uses Supabase for both PostgreSQL persistence and customer accounts (Auth). Set these in `apps/api/.env.local` (API) and the Vercel project:

- `DATABASE_URL` - Supabase transaction pooler connection string (Prisma runtime).
- `DATABASE_URL_UNPOOLED` - Supabase direct connection used by Prisma schema commands.
- `SUPABASE_URL` - your project URL, e.g. `https://abcdefgh.supabase.co`.
- `SUPABASE_ANON_KEY` - public anon key (safe server-side and in frontend builds).
- `SUPABASE_SERVICE_ROLE_KEY` - server only, used to create accounts. Never expose this to the frontend.
- `SUPABASE_JWT_SECRET` - Auth > JWT settings secret, used to verify customer sessions without a network round trip.
- `JWT_SECRET`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD` still secure the administration area.

Customer signup and sign-in go through Supabase Auth (proxied by the API at `/api/auth/signup`, `/api/auth/login`, and `/api/auth/refresh`), so passwords are never stored in the Scentra database. Order history is available at `/account` after signing in with the same email used at checkout.

Setup steps:

1. Create a project at supabase.com and copy the URL and keys above into your environment.
2. Push the schema to Supabase:

```bash
npm run prisma:generate
npm run db:push
```

3. In Supabase Auth, enable the Email provider. Accounts created through the API are confirmed automatically.

## Optional integrations

- `SMTP_*` and `OWNER_EMAIL` enable order emails.
- `TWILIO_*` and `OWNER_WHATSAPP` enable optional WhatsApp alerts.

## Verify

```bash
npm run build
```

The repository is configured for Vercel with the Vite output in `apps/web/dist` and the Express API exposed through `api/index.js`.
