import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { MotionConfig } from "framer-motion";
import App from "./App";
import { InquiryProvider } from "./context/InquiryContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <MotionConfig reducedMotion="user">
          <InquiryProvider>
            <App />
          </InquiryProvider>
        </MotionConfig>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
