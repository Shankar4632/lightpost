import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SITE } from "../config/site";
import { SERVICES } from "../data/services";
import Logo from "./Logo";
import InquiryButton from "./InquiryButton";
import { MenuIcon, CloseIcon, PhoneIcon } from "./Icons";

const LINKS = [
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/service-areas", label: "Service areas" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Guides" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

const linkCls = ({ isActive }) =>
  `px-2.5 py-2 text-[15px] font-medium transition-colors ${isActive ? "text-sodium" : "text-concrete/85 hover:text-white"}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-asphalt/95 backdrop-blur supports-[backdrop-filter]:bg-asphalt/85">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-sodium focus:px-3 focus:py-2 focus:text-asphalt">
        Skip to content
      </a>
      <nav className="container-x flex h-16 items-center justify-between gap-4" aria-label="Main">
        <Logo />
        <div className="hidden items-center lg:flex">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkCls}>{l.label}</NavLink>
          ))}
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          <a href={`tel:${SITE.phoneHref}`} className="btn-sm text-white hover:text-sodium">
            <PhoneIcon className="h-4 w-4" /> {SITE.phone}
          </a>
          <InquiryButton className="btn-sm bg-sodium text-asphalt hover:bg-sodium-light" />
        </div>
        <div className="flex items-center gap-1 lg:hidden">
          <a href={`tel:${SITE.phoneHref}`} className="rounded p-2.5 text-white" aria-label={`Call ${SITE.phone}`}>
            <PhoneIcon className="h-6 w-6" />
          </a>
          <button
            type="button"
            className="rounded p-2.5 text-white"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-asphalt lg:hidden">
          <div className="container-x max-h-[calc(100vh-4rem)] overflow-y-auto py-4">
            <ul className="grid gap-1">
              {LINKS.map((l) => (
                <li key={l.to}>
                  <NavLink to={l.to} className={({ isActive }) => `block rounded px-3 py-3 text-lg ${isActive ? "bg-white/10 text-sodium" : "text-white"}`}>
                    {l.label}
                  </NavLink>
                  {l.to === "/services" && (
                    <ul className="mb-2 ml-3 border-l border-white/15 pl-3">
                      {SERVICES.map((s) => (
                        <li key={s.slug}>
                          <NavLink to={`/services/${s.slug}`} className="block py-2 text-concrete/75 hover:text-white">{s.name}</NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <InquiryButton className="btn w-full justify-center bg-sodium text-asphalt" />
              <a href={`tel:${SITE.phoneHref}`} className="btn w-full justify-center border border-white/30 text-white">
                <PhoneIcon className="h-5 w-5" /> Call now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
