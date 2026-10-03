import { Link } from "react-router-dom";
import { SITE } from "../config/site";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title={`Page not found | ${SITE.name}`} description="This page doesn't exist." path="/404" noindex />
      <section className="container-x py-24">
        <h1 className="font-display text-5xl font-bold">This page doesn't exist</h1>
        <p className="mt-4 max-w-prose text-lg text-asphalt/75">The link may be old or mistyped. Go back to the home page, or see our services.</p>
        <div className="mt-6 flex gap-4">
          <Link to="/" className="btn bg-asphalt text-white">Go to home page</Link>
          <Link to="/services" className="btn border border-asphalt">View services</Link>
        </div>
      </section>
    </>
  );
}
