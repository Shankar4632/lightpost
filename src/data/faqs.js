import { SITE } from "../config/site";

export const FAQ_GROUPS = [
  {
    group: "Pricing and quotes",
    items: [
      { q: "Do you charge for a site visit?", a: `No, not inside ${SITE.city} city limits. For farmland and villages further out, we may charge a small travel fee, which is adjusted in the final bill if you go ahead.` },
      { q: "How do you price a job?", a: "Fencing is priced per running metre of labour. Lighting is priced per pole or fitting, plus cabling per metre. If we buy material for you, it's billed at the dealer's rate with the bill attached — no hidden margin." },
      { q: "Do you take advance payment?", a: "For material we buy on your behalf, yes, against the dealer's bill. Labour is usually paid in stages: part at start, the balance on handover." },
    ],
  },
  {
    group: "Material and scope",
    items: [
      { q: "Do you manufacture poles, lights or fencing?", a: "No. We're an installation company only. You can buy material yourself and we'll install it, or we can source it from local dealers for you." },
      { q: "Can you work with material we've already bought?", a: "Yes, that's most of our work. We check it on arrival and tell you straight away if something is short, damaged or wrong for the job." },
      { q: "Do you give a warranty?", a: "We guarantee our workmanship — foundations, tensioning, wiring and earthing — for 12 months. Product warranty on lights, batteries and wire comes from the manufacturer." },
    ],
  },
  {
    group: "Timelines and site",
    items: [
      { q: "How soon can you start?", a: "Site visits usually happen within 2 days. Work typically starts 4–10 days after you confirm, depending on the season. March to May is busiest for fencing." },
      { q: "Why does it take a week before poles go up?", a: "Concrete foundations need 5–7 days to cure. Putting weight or wire tension on fresh concrete is the main reason poles lean and fences sag later. We use that time for cabling and other prep." },
      { q: "Do you work during the monsoon?", a: "Lighting work, yes, between showers. Fencing in black cotton soil we usually pause during heavy rain, because pits fill with water and footings don't set properly." },
      { q: "What areas do you cover?", a: `${SITE.city} and roughly 150 km around it. See the service areas page for details.` },
    ],
  },
];

export const ALL_FAQS = FAQ_GROUPS.flatMap((g) => g.items);
