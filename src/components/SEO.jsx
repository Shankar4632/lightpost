import { Helmet } from "react-helmet-async";
import { SITE, absUrl } from "../config/site";

export default function SEO({ title, description, path = "/", image = "/images/og-cover.svg", jsonLd = [], noindex = false }) {
  const url = absUrl(path);
  const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={absUrl(image)} />
      <meta name="twitter:card" content="summary_large_image" />
      {schemas.filter(Boolean).map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  );
}
