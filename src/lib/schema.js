import { SITE, absUrl } from "../config/site";
import { SERVICES } from "../data/services";
import { AREAS } from "../data/areas";

export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": absUrl("/#business"),
  name: SITE.name,
  description: `${SITE.tagline} in ${SITE.city}. Installation-only contractor for street lights, solar lights, chain link and concrete pole fencing.`,
  url: SITE.url,
  telephone: SITE.phoneHref,
  email: SITE.email,
  image: absUrl("/images/og-cover.svg"),
  logo: absUrl("/logo.svg"),
  priceRange: "₹₹",
  foundingDate: String(SITE.foundedYear),
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  ...(SITE.geo.lat ? { geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng } } : {}),
  openingHours: SITE.hoursSchema,
  areaServed: [SITE.city, ...AREAS.map((a) => a.name)],
  sameAs: Object.values(SITE.social).filter((u) => u && !/\.com\/$/.test(u)),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Installation services",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, url: absUrl(`/services/${s.slug}`) },
    })),
  },
});

export const serviceSchema = (s) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.h1,
  serviceType: s.name,
  description: s.metaDescription,
  url: absUrl(`/services/${s.slug}`),
  provider: { "@id": absUrl("/#business"), "@type": "HomeAndConstructionBusiness", name: SITE.name, telephone: SITE.phoneHref },
  areaServed: { "@type": "City", name: SITE.city },
});

export const faqSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export const breadcrumbSchema = (crumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: absUrl(c.path) })),
});

export const articleSchema = (p) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: p.title,
  description: p.description,
  datePublished: p.date,
  image: absUrl(p.image),
  mainEntityOfPage: absUrl(`/blog/${p.slug}`),
  author: { "@type": "Organization", name: SITE.name },
  publisher: { "@type": "Organization", name: SITE.name, logo: { "@type": "ImageObject", url: absUrl("/logo.svg") } },
});
