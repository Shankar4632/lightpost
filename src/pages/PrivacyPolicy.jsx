import { SITE } from "../config/site";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO title={`Privacy Policy | ${SITE.name}`} description={`How ${SITE.name} uses the details you send through our inquiry form, email and WhatsApp.`} path="/privacy-policy" />
      <PageHeader title="Privacy policy" crumbs={[{ name: "Home", path: "/" }, { name: "Privacy policy", path: "/privacy-policy" }]} />
      <section className="py-14 sm:py-20">
        <div className="container-x prose-site">
          <p><em>Last updated: {new Date().getFullYear()}. Review this with your own adviser before publishing.</em></p>
          <h2>What we collect</h2>
          <p>When you send an inquiry, we receive your name, phone number, and optionally your email, site location and message. We don't use tracking cookies or advertising pixels on this site unless stated here.</p>
          <h2>How it's sent</h2>
          <p>The form sends your details to our email inbox through EmailJS, a third-party email service, and opens WhatsApp with the same details filled in. WhatsApp and EmailJS handle that data under their own privacy policies.</p>
          <h2>What we use it for</h2>
          <p>Only to reply to your inquiry, arrange a site visit, send quotes and carry out the work. We don't sell or share your details for marketing.</p>
          <h2>How long we keep it</h2>
          <p>Inquiry details are kept for as long as needed for the job and our accounts, and then deleted.</p>
          <h2>Your choices</h2>
          <p>To see, correct or delete your details, email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call {SITE.phone}.</p>
        </div>
      </section>
    </>
  );
}
