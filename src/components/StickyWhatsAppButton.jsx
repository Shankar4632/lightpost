import { whatsAppGeneralUrl } from "../lib/inquiry";
import { WhatsAppIcon } from "./Icons";

export default function StickyWhatsAppButton() {
  return (
    <a
      href={whatsAppGeneralUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3 pr-3 text-asphalt shadow-lg shadow-asphalt/30 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-asphalt sm:bottom-6 sm:right-6 sm:pr-5"
      style={{ marginBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="hidden font-semibold sm:inline">WhatsApp us</span>
    </a>
  );
}
