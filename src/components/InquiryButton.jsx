import { useInquiry } from "../context/InquiryContext";

// Every "Request Inquiry" button on the site uses this, so they all open the same form.
export default function InquiryButton({ service = "", className = "", children = "Request Inquiry" }) {
  const { openInquiry } = useInquiry();
  return (
    <button type="button" onClick={() => openInquiry(service)} className={className || "btn bg-sodium text-asphalt hover:bg-sodium-dark"}>
      {children}
    </button>
  );
}
