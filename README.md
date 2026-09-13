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

## How ordering works

Online card payment is not live yet, so checkout is built around WhatsApp:

1. The customer fills in the checkout form and taps **Place order**.
2. The order is saved to the store (it appears under Admin, Orders) and WhatsApp opens with the full order summary addressed to the owner's number.
3. The team confirms stock, delivery and payment on WhatsApp.

Set the destination number in either place:

- Admin: Settings, Notification settings, Owner WhatsApp.
- Server env: `OWNER_WHATSAPP` in `apps/api/.env` (fallback when nothing is saved in the admin).

When you are ready to take card, transfer and USSD payments, add `PAYSTACK_SECRET_KEY`; checkout then shows the Paystack option instead of the "coming soon" notice.

## Admin

`/admin/login` (default `admin@scentra.co` / `admin`) opens the private workspace:

- **Overview** and **Analytics**: revenue, order counts, pending orders, low stock.
- **Products**: create, edit and delete fragrances, including the fragrance note family used for shop grouping, sizes, prices and stock.
- **Orders**: review order details and move orders through Pending, Paid, Processing, Shipped, Delivered and Cancelled.
- **Customers**, **Coupons**: customer list and promo codes.
- **Settings**: homepage announcement, hero copy, order-notification email and WhatsApp number, and delivery fees.

## Catalogue grouping

The shop groups the catalogue by **brand** or by **fragrance note** (Floral, Woody, Amber & Oriental, Fresh, Gourmand and so on) using the "Group by" selector. Branded perfumes default to note grouping so shoppers can browse a house by the kind of scent they want. Each product's note family is editable in Admin, Products.

## Pages

- `/privacy` and `/terms` hold the policy pages.
- Unknown URLs render a custom 404 page with search and shortcuts.
