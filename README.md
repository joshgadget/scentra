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

- `PAYSTACK_SECRET_KEY` is intentionally unset for now. Add it later to switch checkout from demo mode to live Paystack payment.
- `SMTP_*` and `OWNER_EMAIL` enable order emails.
- `TWILIO_*` and `OWNER_WHATSAPP` enable optional WhatsApp alerts.

To go live:

1. Set `PAYSTACK_SECRET_KEY`, then in the Paystack dashboard point the webhook to `<your-domain>/api/payments/paystack/webhook`. `/api/health` reports `readyForLive` once the database, JWT secret, and Paystack key are all present.
2. Set `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`, `OWNER_EMAIL`, and `OWNER_WHATSAPP` to receive order confirmations and owner alerts. The owner WhatsApp number also powers the floating WhatsApp support button on the storefront.
3. Delivery fees are managed from Admin > Settings > Delivery & fees. Orders over the free threshold get complimentary delivery; Lagos and other-state fees apply below it. The final total (including the fee) is always calculated and charged server-side.
4. Customers can check order status at `/track` using their order number.
5. For analytics and conversion tracking, set `VITE_GA_ID` (Google Analytics 4) and `VITE_META_PIXEL_ID` (Meta Pixel) in the Vercel project environment and rebuild. Checkout success fires GA4 and Meta purchase events automatically when either ID is present.

## Verify

```bash
npm run build
```

The repository is configured for Vercel with the Vite output in `apps/web/dist` and the Express API exposed through `api/index.js`.
