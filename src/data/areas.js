import { SITE } from "../config/site";

// Replace these with your real localities. Keep each note specific:
// what kind of work you usually do there.
export const AREAS = [
  {
    name: `${SITE.city} city centre & old city`,
    note: "Gate lights, compound lighting for shops and godowns, and chain-link on narrow plots where we carry material by hand.",
  },
  {
    name: "Industrial estates",
    note: "Boundary chain-link with barbed top, perimeter flood and street lighting for factory roads.",
  },
  {
    name: "New townships & housing societies",
    note: "Internal road street lights on 6–8 m poles, garden solar lights, and compound fencing before handover.",
  },
  {
    name: "Highway & ring-road belt",
    note: "Hotels, petrol pumps and warehouses that need lighting at the entrance and along parking areas.",
  },
  {
    name: "Farmland, farmhouses & orchards",
    note: "Precast concrete pole fencing with barbed wire, and solar street lights where there's no grid line.",
  },
  {
    name: "Villages & gram panchayat roads",
    note: "Solar street lights on panchayat roads and school compounds, usually in batches of 10–50 poles.",
  },
];

export const COVERAGE_NOTE = `We work within roughly 150 km of ${SITE.city}. For jobs beyond that we still come if the job is large enough to cover travel — call and ask.`;
