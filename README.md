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

The app works immediately in demo mode without environment variables. This workspace is also connected to Neon PostgreSQL, so products, orders, customers, coupons, settings, and newsletter subscribers persist. Demo checkout creates a paid test order without collecting money, so the complete customer and admin flows can be tested before Paystack is configured.

Default local admin:

- Email: `admin@scentra.co`
- Password: `Scentra123!`

## Database

Neon PostgreSQL is configured locally and for Vercel deployments:

- `DATABASE_URL` is the pooled runtime connection.
- `DATABASE_URL_UNPOOLED` is the direct connection used by Prisma schema commands.
- `JWT_SECRET`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD` secure the administration area.

After changing `apps/api/prisma/schema.prisma`, apply it with:

```bash
npm run db:push
```

## Optional integrations

- `SMTP_*` and `OWNER_EMAIL` enable order emails.
- `TWILIO_*` and `OWNER_WHATSAPP` enable optional WhatsApp alerts.


## Verify

```bash
npm run build
```

The repository is configured for Vercel with the Vite output in `apps/web/dist` and the Express API exposed through `api/index.js`.
