import emailjs from "@emailjs/browser";
import { SITE, EMAILJS } from "../config/site";

export const EMPTY_INQUIRY = { name: "", phone: "", email: "", service: "", city: "", message: "" };

export function validateInquiry(v) {
  const errors = {};
  if (!v.name.trim()) errors.name = "Enter your name.";
  const digits = v.phone.replace(/\D/g, "");
  if (!digits) errors.phone = "Enter a phone number so we can call you back.";
  else if (digits.length < 10 || digits.length > 13) errors.phone = "Enter a 10-digit mobile number (country code optional).";
  if (!v.service) errors.service = "Choose the service you need.";
  if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()))
    errors.email = "This email address doesn't look complete. Fix it or leave it blank.";
  return errors;
}

export function buildWhatsAppMessage(v) {
  const fields = [
    `Name: ${v.name.trim()}`,
    `Phone: ${v.phone.trim()}`,
    v.email.trim() && `Email: ${v.email.trim()}`,
    `Service: ${v.service}`,
    v.city.trim() && `City/Area: ${v.city.trim()}`,
    v.message.trim() && `Message: ${v.message.trim()}`,
  ].filter(Boolean);
  return [`New inquiry from the ${SITE.name} website`, "", ...fields].join("\n");
}

export const buildWhatsAppUrl = (v) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(buildWhatsAppMessage(v))}`;

export const whatsAppGeneralUrl = (text = `Hi, I'd like to ask about your installation services.`) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;

// Template variables available in your EmailJS template:
// {{from_name}} {{phone}} {{reply_to}} {{service}} {{city}} {{message}} {{page_url}} {{submitted_at}} {{to_email}}
export async function sendInquiryEmail(v) {
  if (!EMAILJS.serviceId || !EMAILJS.templateId || !EMAILJS.publicKey) {
    throw new Error("EmailJS keys are missing. Add them to your .env file.");
  }
  return emailjs.send(
    EMAILJS.serviceId,
    EMAILJS.templateId,
    {
      from_name: v.name.trim(),
      phone: v.phone.trim(),
      reply_to: v.email.trim() || "not provided",
      service: v.service,
      city: v.city.trim() || "not provided",
      message: v.message.trim() || "—",
      page_url: typeof window !== "undefined" ? window.location.href : "",
      submitted_at: new Date().toLocaleString("en-IN"),
      to_email: SITE.email,
    },
    { publicKey: EMAILJS.publicKey }
  );
}
