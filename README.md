# Lightpost Fence Works — installation business website

React (Vite) + React Router + Tailwind + EmailJS + WhatsApp click-to-chat + react-helmet-async + Framer Motion.

## 1. Run it

```bash
npm install
cp .env.example .env     # then fill in EmailJS keys (step 3)
npm run dev              # http://localhost:5173
npm run build            # output in /dist
```

## 2. Put in your business details (one file)

Edit **`src/config/site.js`**: business name, city, phone, WhatsApp number (digits only with country code, e.g. `919876543210`), Gmail address, street address, hours, social links and your live domain (`url`).

Every page title, H1, footer NAP block and JSON-LD schema reads from here. Keep the name, address and phone **identical** to your Google Business Profile.

Then update:

| File | What to change |
| --- | --- |
| `src/data/areas.js` | Your real localities and what you do in each |
| `src/data/projects.js` | Real jobs + photo paths (put photos in `public/images/`) |
| `src/data/testimonials.js` | Real customer reviews (with permission) |
| `src/data/services.js` | Adjust specs, timelines and FAQs to how *you* work |
| `src/data/blog.jsx` | Guides. Add posts here and add their URLs to the sitemap |
| `public/sitemap.xml`, `public/robots.txt` | Replace `https://www.example.com` with your domain |

The images in `public/images/` are SVG placeholders. Replace them with real site photos (WebP or JPG, about 1200 px wide). Real photos of your crew and jobs do more for trust and Google Images ranking than anything else on the site.

## 3. EmailJS setup (sends inquiries to your Gmail)

1. Sign up at emailjs.com, then go to **Email Services → Add service → Gmail**. Connect your Gmail account. Copy the **Service ID**.
2. Go to **Email Templates → Create**. In the template settings, set **To Email** to your Gmail address (or `{{to_email}}`) and **Reply To** to `{{reply_to}}`. Use this subject and body:

   ```
   Subject: New inquiry: {{service}} – {{from_name}}

   Name: {{from_name}}
   Phone: {{phone}}
   Email: {{reply_to}}
   Service: {{service}}
   City/Area: {{city}}
   Message: {{message}}

   Sent from {{page_url}} at {{submitted_at}}
   ```
   Copy the **Template ID**.
3. Go to **Account → General** and copy the **Public Key**.
4. Put all three in `.env`. On Netlify or Vercel, add them as environment variables instead.
5. In **Account → Security**, add your domain to the allowed origins.

## How the inquiry form works

All "Request Inquiry" buttons call `openInquiry(serviceName)` from `InquiryContext`. They all open the **same** `InquiryForm` in a modal, with the service already selected. `/contact` shows the same form inline.

When the user submits:
1. Name, phone (10–13 digits) and service are validated. Email is checked only if it's filled in.
2. A blank tab opens **immediately**. This keeps popup blockers from stopping WhatsApp, since browsers block `window.open` after an `await`.
3. The data goes to Gmail via `emailjs.send`.
4. That tab is sent to `https://wa.me/<number>?text=<encoded message>`, so the user only has to tap Send.
5. A confirmation shows on screen. If the email failed or the popup was blocked, the confirmation says so and offers a WhatsApp button and a call button.

Logic is in `src/lib/inquiry.js`; UI in `src/components/InquiryForm.jsx`.

## SEO included

- Unique `<title>`, meta description, canonical URL and Open Graph tags on every page (`components/SEO.jsx`)
- One H1 per page, with the service and city in it
- Semantic `header` / `nav` / `main` / `section` / `article` / `footer` / `address`
- JSON-LD (`lib/schema.js`): `LocalBusiness` (HomeAndConstructionBusiness) on Home, Contact and Service Areas; `Service` and `FAQPage` on each service page; `FAQPage` on /faq; `BlogPosting` on posts; `BreadcrumbList` throughout
- Internal links between services, related services and blog posts
- `loading="lazy"` images with width and height set, and route-level code splitting
- `sitemap.xml`, `robots.txt`, plus SPA rewrites for Netlify (`public/_redirects`) and Vercel (`vercel.json`)

**Note on client-side rendering:** Google does render React pages, but meta tags appear faster and more reliably if the HTML is prerendered. Once the site is live, consider adding `vite-plugin-prerender` or `react-snap`. It needs no code changes, because every route is a static URL.

## Design notes

- **Palette:** asphalt `#1E2327`, concrete `#EEEDEA`, galvanised steel `#8A949B`, sodium-lamp amber `#F0A630`, PVC-wire green `#2F5D50` (see `tailwind.config.js`)
- **Type:** Barlow Condensed for headings (highway-signage feel) and Barlow for body text
- **Background:** the chain-link mesh pattern is pure CSS (`.mesh-bg` in `index.css`)
- **Motion:** the only load animation is the hero street lamp switching on. Users with reduced-motion settings see it already lit.
