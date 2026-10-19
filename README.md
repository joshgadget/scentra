# Scentra — Luxury Fragrance Commerce

Scentra is a full-stack fragrance storefront: a React 19/Vite customer experience, an Express 5 administration API, and a Prisma/PostgreSQL data layer. It supports a WhatsApp-first checkout, optional Paystack card payments, Supabase customer accounts, Brevo transactional email, and optional Twilio WhatsApp alerts.

## What is included

- Storefront with fragrance collections, product detail pages, search, cart, wishlist, delivery fees, promo codes, order tracking, and policy pages.
- Customer accounts and order history through Supabase Auth.
- Private admin workspace for products, inventory, orders, customers, coupons, analytics, and storefront settings.
- Transactional email for receipts, order updates, owner alerts, and newsletter welcomes.
- Demo mode that runs without a database or any third-party credentials.

## Requirements

- Node.js 20 or newer
- npm 10 or newer
- Optional: PostgreSQL or Supabase, Brevo, Paystack, Twilio

## Run locally

```bash
npm install
npm run dev
```

- Storefront: `http://localhost:5173`
- API health: `http://localhost:4000/api/health`
- Admin: `http://localhost:5173/admin/login`

No environment variables are required for demo mode. The API serves the bundled catalogue from a local demo store, and checkout saves the order with a `PENDING` status before opening WhatsApp. No money is collected in demo mode.

Default local admin for demo/development only:

- Email: `admin@scentra.co`
- Password: `Scentra123!`

Those defaults are disabled when `NODE_ENV=production` or when running a Vercel preview/production deployment. A fresh production deployment requires `JWT_SECRET` plus either `ADMIN_PASSWORD` or `ADMIN_PASSWORD_HASH` to seed the first admin.

## Environment variables

Start from [`apps/api/.env.example`](apps/api/.env.example) and create `apps/api/.env`. Set the same values in the hosting provider (Vercel Project → Settings → Environment Variables).

| Variable | Purpose |
| --- | --- |
| `PORT` | Local API port; defaults to `4000`. |
| `APP_URL` | Public storefront URL used in emails and Paystack callbacks. |
| `DATABASE_URL` | PostgreSQL connection string. A Supabase pooler URL works well. |
| `DATABASE_URL_UNPOOLED` | Direct PostgreSQL connection used by Prisma schema commands. |
| `JWT_SECRET` | Signing secret for admin sessions. Required in production. |
| `ADMIN_EMAIL` | Admin account email; defaults to `admin@scentra.co`. |
| `ADMIN_PASSWORD` | Password used when the first database admin is seeded. |
| `ADMIN_PASSWORD_HASH` | Pre-hashed bcrypt password; takes precedence over `ADMIN_PASSWORD`. |
| `SUPABASE_URL` | Supabase project URL. |
| `SUPABASE_ANON_KEY` | Public Supabase key used for password sign-in. |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only key used to create accounts and upload images. Never expose it to the browser. |
| `SUPABASE_JWT_SECRET` | Optional legacy HS256 secret for offline customer-session verification. |
| `PAYSTACK_SECRET_KEY` | Enables Paystack checkout and the payment webhook. |
| `BREVO_API_KEY` | Enables transactional email. |
| `EMAIL_FROM` | Verified Brevo sender, for example `Scentra <scentraofficialhq@gmail.com>`. |
| `EMAIL_REPLY_TO` | Optional reply-to address. Defaults to the sender address. |
| `SUPPORT_EMAIL` | Support address shown in email footers. |
| `OWNER_EMAIL` | Inbox for new-order alerts. Admin notification settings take precedence. |
| `TWILIO_ACCOUNT_SID` | Optional Twilio account SID for owner WhatsApp alerts. |
| `TWILIO_AUTH_TOKEN` | Optional Twilio auth token. |
| `TWILIO_WHATSAPP_FROM` | Optional Twilio WhatsApp sender. |
| `OWNER_WHATSAPP` | Owner WhatsApp number used as a fallback. |
| `SCENTRA_DEMO_STORE` | Optional path for the local demo-store JSON file. |
| `SUPABASE_UPLOAD_BUCKET` | Public Supabase Storage bucket for product images; defaults to `product-images`. |

Frontend analytics are optional and configured separately in `apps/web/.env`:

- `VITE_GA_ID` — Google Analytics measurement ID.
- `VITE_META_PIXEL_ID` — Meta Pixel ID.

### Production security checklist

- Use a long random `JWT_SECRET`; the development fallback is rejected in production.
- Set `ADMIN_PASSWORD` or `ADMIN_PASSWORD_HASH` before the database is first seeded.
- Keep `SUPABASE_SERVICE_ROLE_KEY`, `PAYSTACK_SECRET_KEY`, `BREVO_API_KEY`, and Twilio credentials server-side.
- Rotate the default local admin password before exposing an environment publicly.
- Serve the storefront over HTTPS so customer and admin sessions are encrypted in transit.

If an admin already exists in the database, changing `ADMIN_PASSWORD` does not rewrite that row. Update the admin password deliberately or remove the row and let the API reseed it with the new environment value.

## Database and customer accounts

Scentra uses Prisma with PostgreSQL. You can host the database on Supabase, Neon, Railway, or any PostgreSQL provider. Supabase is only required for customer accounts and image uploads.

1. Create a PostgreSQL database or a Supabase project.
2. Add the connection strings and Supabase keys to `apps/api/.env`.
3. Generate Prisma Client and push the schema:

```bash
npm run prisma:generate
npm run db:push
```

4. In Supabase Auth, enable the Email provider. Accounts created through the API are confirmed automatically.

Customer signup and sign-in are proxied by `/api/auth/signup`, `/api/auth/login`, and `/api/auth/refresh`, so Scentra never stores customer passwords. Order history is available at `/account` when the customer signs in with the email used at checkout.

`SUPABASE_JWT_SECRET` is optional. When it is absent, or when a project uses asymmetric signing keys, the API verifies the session through the Supabase Auth API instead.

## Checkout and payments

### Default: WhatsApp checkout

1. The customer fills in the checkout form and places the order.
2. The order is saved with `PENDING` status and appears under Admin → Orders.
3. WhatsApp opens with the full order summary addressed to the owner's number.
4. The team confirms stock, delivery, and payment on WhatsApp.

Set the destination number in either place:

- Admin → Settings → Notification settings → Owner WhatsApp.
- Server environment: `OWNER_WHATSAPP` (fallback when nothing is saved in the admin).

### Optional: Paystack

Set `PAYSTACK_SECRET_KEY` to turn on Paystack checkout. The storefront then shows a secure payment option instead of the "coming soon" notice. After the order is created, the customer is redirected to Paystack; a successful payment returns them to `/checkout/success`.

Configure the webhook in the Paystack dashboard:

```text
https://your-domain.com/api/payments/paystack/webhook
```

The API verifies the Paystack signature, checks that the paid amount and currency match the order, and moves only `PENDING` orders to `PAID`, so repeated webhook deliveries are safe.

## Email notifications

Order email is sent through [Brevo](https://www.brevo.com). Add your sender address under **Senders, Domains & Dedicated IPs** and verify it before enabling email. Domain authentication with DKIM/SPF improves deliverability but is not required to start.

Set `BREVO_API_KEY`, `EMAIL_FROM`, and optionally `EMAIL_REPLY_TO`, `SUPPORT_EMAIL`, and `OWNER_EMAIL`. When `BREVO_API_KEY` is missing, email is skipped and the API logs a warning instead of failing the order.

Emails sent automatically:

- Payment receipt when Paystack confirms payment or an admin marks an order `PAID`.
- "We have your order" confirmation for WhatsApp/bank-transfer orders.
- Processing, shipped, delivered, and cancelled status updates.
- New-order alert to the owner.
- Newsletter welcome with the `WELCOME10` promo code.

`GET /api/health` reports `email.provider` and `email.ready`.

## Optional WhatsApp alerts

`TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_WHATSAPP_FROM`, and `OWNER_WHATSAPP` enable owner alerts through Twilio. The storefront WhatsApp link works without Twilio.

## Admin

Visit `/admin/login`. The workspace includes:

- **Overview** and **Analytics** — revenue, order counts, pending orders, low stock, and a seven-day revenue chart.
- **Products** — create, edit, and delete fragrances, including note family, sizes, prices, stock, images, and sale flags.
- **Orders** — review details and move orders through `PENDING`, `PAID`, `PROCESSING`, `SHIPPED`, `DELIVERED`, and `CANCELLED`.
- **Customers** and **Coupons** — customer profiles, lifetime value, promo codes, usage limits, and expiry dates.
- **Settings** — homepage announcement and hero copy, order-notification email and WhatsApp number, and delivery fees.

Admin sessions use a signed JWT. Admin login, customer login/signup, newsletter signup, order creation, and order lookup have basic in-process rate limits.

## Catalogue grouping

The shop groups the catalogue by **brand** or **fragrance note** (Floral, Woody, Amber & Oriental, Fresh, Gourmand, and so on) using the "Group by" selector. Each product's note family is editable in Admin → Products.

## Visual system

The interface uses the Fragrances.com.ng-inspired design tokens in [`apps/web/src/theme.css`](apps/web/src/theme.css): Rajdhani typography, teal `#009BC2` primary actions, periwinkle `#5C6AC3` editorial bands, a cool `#F6F7F9` canvas, sharp flat cards, and pill-shaped primary buttons. The theme loads after the base and extras stylesheets so the same system applies to the storefront, checkout, account pages, tracking, and admin workspace.

## Data sources and demo mode

`GET /api/health` reports the active data source:

- `database: "postgresql"` — products, orders, customers, coupons, and settings come from PostgreSQL.
- `database: "demo"` — the API is serving the local demo store; no database is required.

The demo store is a JSON file at `apps/api/.data/demo-store.json` by default. Override it with `SCENTRA_DEMO_STORE`, or use `/tmp/scentra-demo-store/demo-store.json` when the application directory is read-only. Admin changes survive local API restarts.

If PostgreSQL becomes unavailable, the API falls back to the demo store and never pretends a database write succeeded. Once a demo-store write happens, the running process will not switch back to PostgreSQL because doing so could discard those edits. With no local edits, the API probes the database and reconnects automatically.

To deliberately return to the database:

1. Fix the connection and check `DATABASE_URL`.
2. Delete `apps/api/.data/demo-store.json` if you do not need the demo changes.
3. Restart the API.

On Vercel, the demo store is written under `/tmp` and is ephemeral and instance-local. Use PostgreSQL for durable production data.

Storefront content from `/api/storefront`, `/api/products`, and `/api/content` is sent with `no-store` so admin edits appear immediately.

## Deployment

The repository is configured for Vercel:

- Build command: `npm run build`
- Output directory: `apps/web/dist`
- API adapter: [`api/index.js`](api/index.js), reachable under `/api/*`
- SPA fallback: all non-API routes render `index.html`

Set the environment variables from the table above in Vercel for Production and Preview, set `APP_URL` to the public storefront URL, then redeploy. Point the Paystack webhook at the production domain and confirm `GET /api/health` shows the expected database, email, and security status.

## Verify

```bash
npm run build
```

For a local smoke test:

```bash
npm run dev
curl http://localhost:4000/api/health
```

The build runs Prisma Client generation and a production Vite build. There is no automated test suite yet.

## Pages

- `/privacy` and `/terms` hold the policy pages.
- `/track` looks up an order by number.
- `/account` shows customer order history after Supabase sign-in.
- Unknown URLs render a custom 404 page with search and shortcuts.

## Project structure

```text
api/index.js                 Vercel serverless adapter
apps/api/src/index.js        Express API, auth, checkout, admin, demo store
apps/api/src/emails.js       Brevo HTML/text email templates
apps/api/prisma/schema.prisma
apps/web/src/main.jsx        Storefront and admin application
apps/web/src/checkout.jsx    Checkout flow
apps/web/src/theme.css       Fragrances-inspired design tokens and component theme
apps/web/src/wire.js         Runtime wiring, analytics, shared pages
```
