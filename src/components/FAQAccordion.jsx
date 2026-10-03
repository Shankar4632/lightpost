import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronIcon } from "./Icons";

export default function FAQAccordion({ items, headingLevel = "h3" }) {
  const [open, setOpen] = useState(null);
  const uid = useId();
  const H = headingLevel;
  return (
    <div className="divide-y divide-concrete-300 border-y border-concrete-300">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <H className="m-0">
              <button
                type="button"
                id={`${uid}-q${i}`}
                aria-expanded={isOpen}
                aria-controls={`${uid}-a${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-start justify-between gap-4 py-4 text-left font-display text-xl font-semibold text-asphalt hover:text-wire focus-visible:outline focus-visible:outline-2 focus-visible:outline-sodium"
              >
                {f.q}
                <ChevronIcon className={`mt-1 h-5 w-5 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
            </H>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${uid}-a${i}`}
                  role="region"
                  aria-labelledby={`${uid}-q${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  className="overflow-hidden"
                >
                  <p className="max-w-prose pb-5 text-asphalt/80">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
