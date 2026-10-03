import { motion, useReducedMotion } from "framer-motion";
import { SITE } from "../config/site";
import InquiryButton from "./InquiryButton";
import { PhoneIcon } from "./Icons";

// The one orchestrated moment on the site: the lamp switches on once at load.
function LampScene() {
  const reduce = useReducedMotion();
  const flicker = (from) =>
    reduce
      ? { initial: false, animate: { opacity: 1 } }
      : {
          initial: { opacity: from },
          animate: { opacity: [from, 1, 0.35, 1] },
          transition: { duration: 1.1, delay: 0.5, times: [0, 0.25, 0.4, 1] },
        };
  return (
    <svg viewBox="0 0 400 520" className="h-full w-full" aria-hidden="true" preserveAspectRatio="xMaxYMax meet">
      <defs>
        <linearGradient id="cone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F0A630" stopOpacity=".55" />
          <stop offset="1" stopColor="#F0A630" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="pool" cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#F0A630" stopOpacity=".45" />
          <stop offset="1" stopColor="#F0A630" stopOpacity="0" />
        </radialGradient>
      </defs>
      <motion.g {...flicker(0)}>
        <path d="M150 92 L40 520 L400 520 L222 92 Z" fill="url(#cone)" />
        <ellipse cx="210" cy="512" rx="190" ry="22" fill="url(#pool)" />
      </motion.g>
      <path d="M330 520 V60 H180" stroke="#8A949B" strokeWidth="9" fill="none" />
      <path d="M330 120 L290 60" stroke="#8A949B" strokeWidth="3" />
      <rect x="140" y="74" width="88" height="18" rx="3" fill="#5E676D" />
      <motion.rect x="146" y="90" width="76" height="6" rx="2" fill="#F0A630" {...flicker(0.15)} />
    </svg>
  );
}

export default function Hero({ h1, lead }) {
  return (
    <section className="relative overflow-hidden bg-asphalt text-white">
      <div className="mesh-bg pointer-events-none absolute inset-0 opacity-[0.09]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-0 hidden h-[88%] w-[46%] md:block">
        <LampScene />
      </div>
      <div className="container-x relative grid py-16 sm:py-24 md:min-h-[560px] md:items-center lg:py-28">
        <div className="max-w-[40rem]">
          <h1 className="font-display text-[2.6rem] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.4rem]">
            {h1}
          </h1>
          <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-concrete/85">{lead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <InquiryButton className="btn justify-center bg-sodium px-7 text-lg text-asphalt hover:bg-sodium-light" />
            <a href={`tel:${SITE.phoneHref}`} className="btn justify-center border-2 border-white/40 px-7 text-lg text-white hover:border-white">
              <PhoneIcon className="h-5 w-5" /> Call Now
            </a>
          </div>
          <ul className="mt-10 grid gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-[15px] text-concrete/80 sm:grid-cols-3">
            <li>Installation only. Your material, or ours at the dealer's bill price.</li>
            <li>Site visit within 2 days of your call.</li>
            <li>12-month guarantee on our workmanship.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
