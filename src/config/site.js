// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE FIRST. Every page, schema block and the inquiry
// form read business details from here.
// ─────────────────────────────────────────────────────────────
export const SITE = {
  name: "Lightpost Fence Works",
  legalName: "Lightpost Fence Works",
  tagline: "Street light, solar light and fencing installation",
  url: "https://www.example.com", // no trailing slash
  city: "Your City",
  region: "Your State",
  country: "IN",
  foundedYear: 2012,

  // NAP — keep this identical to your Google Business Profile
  phone: "+91 98765 43210", // shown on the site
  phoneHref: "+919876543210", // used in tel: links
  whatsappNumber: "919876543210", // country code + number, digits only (wa.me format)
  email: "yourname@gmail.com", // shown on the site; EmailJS sends here
  address: {
    street: "Shop 4, Example Complex, Main Road",
    locality: "Your City",
    region: "Your State",
    postalCode: "000000",
    country: "IN",
  },
  geo: { lat: 0, lng: 0 }, // optional: set for richer LocalBusiness schema
  hours: "Mon–Sat, 8:30 am – 7:00 pm",
  hoursSchema: ["Mo-Sa 08:30-19:00"],
  mapEmbedUrl: "", // optional Google Maps embed URL for the Contact page

  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
  },
};

export const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export const absUrl = (path = "/") => `${SITE.url}${path}`;
