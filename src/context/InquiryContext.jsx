import { createContext, useCallback, useContext, useMemo, useState } from "react";

const InquiryContext = createContext(null);

export function InquiryProvider({ children }) {
  const [state, setState] = useState({ open: false, service: "" });
  const openInquiry = useCallback((service = "") => setState({ open: true, service }), []);
  const closeInquiry = useCallback(() => setState((s) => ({ ...s, open: false })), []);
  const value = useMemo(() => ({ ...state, openInquiry, closeInquiry }), [state, openInquiry, closeInquiry]);
  return <InquiryContext.Provider value={value}>{children}</InquiryContext.Provider>;
}

export const useInquiry = () => {
  const ctx = useContext(InquiryContext);
  if (!ctx) throw new Error("useInquiry must be used inside <InquiryProvider>");
  return ctx;
};
