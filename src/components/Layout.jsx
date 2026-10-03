import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StickyWhatsAppButton from "./StickyWhatsAppButton";
import InquiryModal from "./InquiryModal";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main" className="min-h-[60vh]">
        <Suspense fallback={<div className="container-x py-24 text-asphalt/60" role="status">Loading page…</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <StickyWhatsAppButton />
      <InquiryModal />
    </>
  );
}
