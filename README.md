# Rephone demo storefront

Run `npm install` and `npm run dev` in this folder. Production check: `npm run build`.

Includes responsive phone catalogue, brand/search filters, price sorting, product details, saved-item toggles, persistent shopping bag and editable WhatsApp enquiry generation. Phone illustrations are original SVGs, not actual product photography. Inventory, ratings and store policies are illustrative demo content.

WhatsApp checkout opens a prefilled conversation with the store number entered in the demo dialog. It does not send messages automatically. Replace this number-entry step with the client's configured number for the real store. Automated replies, order notifications and lead tracking require a backend and the client's WhatsApp Business Platform setup; no credentials or messaging service are connected in this demo.

Google Fonts are optional external fonts with local sans-serif fallbacks. No payment processing is configured.

## Render deployment

Deploy as a Static Site using a Git repository containing this project. If the repository root is Project Sneakers, set Root Directory to `phone-store`. Build command: `npm run build`. Publish directory: `dist`. No environment variables are required. `render.yaml` is provided for a Blueprint when this folder is the repository root.

The interface uses white/light-gray surfaces, charcoal typography and structure, and blue purchase/enquiry CTAs. Product illustration colors remain unchanged.
