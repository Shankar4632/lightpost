import { Link } from "react-router-dom";
import { SITE } from "../config/site";

const A = ({ to, children }) => (
  <Link to={to} className="text-wire underline decoration-wire/40 underline-offset-2 hover:decoration-wire">
    {children}
  </Link>
);

export const POSTS = [
  {
    slug: "street-light-wattage-and-pole-height",
    title: "How to pick street light wattage and pole height for a society road",
    description: "A plain guide to LED wattage, pole height and spacing for housing society and factory roads, from a contractor who installs them.",
    date: "2026-08-12",
    service: "street-light-fitting",
    image: "/images/street-light-b.svg",
    readMins: 5,
    body: () => (
      <>
        <p>
          Most society committees ask us the same thing first: "How many watts do we need?" The honest answer is that
          wattage matters less than pole height and spacing. A 90 W light on a 6 m pole placed 45 m apart still leaves
          dark patches between poles.
        </p>
        <h2>Start with the road width</h2>
        <p>
          For internal roads 6–9 m wide, a 6–7 m pole with a 35–60 W LED, placed 25–30 m apart on one side, lights the
          road evenly. Roads wider than 10 m, or roads with parking on both sides, work better with poles staggered on
          both sides.
        </p>
        <h2>Pole height and spacing go together</h2>
        <ul>
          <li>4–5 m poles: gardens, walkways, 20–25 m apart, 18–30 W</li>
          <li>6–7 m poles: society and compound roads, 25–30 m apart, 35–60 W</li>
          <li>8–9 m poles: main entry roads and factory roads with trucks, 30–35 m apart, 60–120 W</li>
        </ul>
        <h2>The parts people skip</h2>
        <p>
          Earthing and cable protection. We still see society roads where cable is buried directly in soil with no pipe and
          no earth pit. That works until the first monsoon. Budget for armoured cable, HDPE pipe at road crossings, and earthing at
          least at the feeder pole and the last pole.
        </p>
        <p>
          If you'd like us to look at your road, see our <A to="/services/street-light-fitting">street light fitting service</A>.
          For roads with no power supply nearby, read <A to="/blog/solar-vs-grid-street-lights">solar vs grid street lights</A> first.
        </p>
      </>
    ),
  },
  {
    slug: "solar-vs-grid-street-lights",
    title: "Solar or grid street lights: which makes sense for your site?",
    description: "When solar street lights save money, and when a normal wired LED street light is the better choice. Based on real installations around " + SITE.city + ".",
    date: "2026-07-02",
    service: "solar-light-fitting",
    image: "/images/solar-light-b.svg",
    readMins: 4,
    body: () => (
      <>
        <p>
          Solar isn't automatically the better choice. It's the better choice when running cable is the expensive part of
          the job.
        </p>
        <h2>Choose solar when</h2>
        <ul>
          <li>The nearest power point is more than 150–200 m from the poles</li>
          <li>The road crosses land where trenching isn't allowed or is impractical</li>
          <li>It's a farm, orchard or panchayat road without a meter</li>
          <li>You want lights working during power cuts</li>
        </ul>
        <h2>Choose grid-connected LED when</h2>
        <ul>
          <li>Power is available along the road already, like most housing societies</li>
          <li>You need high output, 90 W and above, for wide or busy roads</li>
          <li>Poles sit under trees or next to tall buildings that shade a panel</li>
        </ul>
        <h2>What to check on a solar light before you buy</h2>
        <p>
          Look at the battery capacity in watt-hours, not just the LED wattage. A "60 W" light with a small battery will
          dim by midnight. Ask how many nights of backup it gives, and whether the battery is LiFePO4.
        </p>
        <p>
          We install both. See <A to="/services/solar-light-fitting">solar light fitting</A> and{" "}
          <A to="/services/street-light-fitting">street light fitting</A>.
        </p>
      </>
    ),
  },
  {
    slug: "chain-link-gauge-and-coating",
    title: "Chain-link fence: which gauge, mesh size and coating to buy",
    description: "GI vs PVC-coated chain link, 8 vs 10 vs 12 gauge, and 50 mm vs 75 mm mesh, explained by a fencing installer.",
    date: "2026-05-20",
    service: "chain-link-fencing",
    image: "/images/chain-link-b.svg",
    readMins: 4,
    body: () => (
      <>
        <p>
          When customers buy chain-link themselves, the most common mistake is going too light on gauge to save money and
          ending up with a fence that dents and sags within a couple of years.
        </p>
        <h2>Gauge: thicker wire, lower number</h2>
        <ul>
          <li>12 gauge (about 2.5 mm): gardens and light-use boundaries</li>
          <li>10 gauge (about 3.15 mm): our usual recommendation for plots and factories</li>
          <li>8 gauge (about 4 mm): sports courts and high-security sites</li>
        </ul>
        <h2>Mesh size</h2>
        <p>
          50×50 mm is the standard for most boundaries. 75×75 mm is cheaper per square metre but is easier to climb and
          lets small animals through.
        </p>
        <h2>GI or PVC-coated</h2>
        <p>
          GI mesh is fine for most inland plots. PVC-coated mesh is worth the extra cost near the coast, around chemical
          or fertiliser storage, or on housing projects where it needs to look tidy for years.
        </p>
        <p>
          Before your fence goes up, read <A to="/blog/before-fencing-work-starts">what to sort out before fencing starts</A>, or see our{" "}
          <A to="/services/chain-link-fencing">chain link fencing service</A>.
        </p>
      </>
    ),
  },
  {
    slug: "concrete-pole-fencing-for-farmland",
    title: "Concrete pole fencing for farmland: spacing, strands and what drives the cost",
    description: "How many RCC poles per acre, how many barbed wire strands, and where farm fencing budgets actually go.",
    date: "2026-04-08",
    service: "pole-concrete-fencing",
    image: "/images/concrete-fence-b.svg",
    readMins: 5,
    body: () => (
      <>
        <p>
          For farmland, concrete poles with barbed wire are still the most practical fence. The poles don't rust, they're
          not worth stealing for scrap, and a crew can cover a lot of ground in a day.
        </p>
        <h2>How many poles per acre</h2>
        <p>
          A square acre has about 255–260 m of boundary. At 2.5 m spacing that's around 105 poles. At 3 m, around 88.
          Add a strut pole at every corner and on both sides of each gate.
        </p>
        <h2>How many strands</h2>
        <ul>
          <li>4–5 strands: marking a boundary, low cattle pressure</li>
          <li>6–8 strands: most farms with cattle around</li>
          <li>9–10 strands or chain-link at the bottom: keeping out goats, dogs and pigs</li>
        </ul>
        <h2>Where the money goes</h2>
        <p>
          Poles and wire are most of the cost, so labour savings are small. Skipping concrete footings to save money is the
          false economy we see most often. In black cotton soil, a rammed pole leans after the first heavy rain.
        </p>
        <p>
          See our <A to="/services/pole-concrete-fencing">concrete pole fencing service</A>, or compare with{" "}
          <A to="/services/chain-link-fencing">chain link fencing</A>.
        </p>
      </>
    ),
  },
  {
    slug: "before-fencing-work-starts",
    title: "Five things to sort out before your fencing work starts",
    description: "A short checklist for plot and farm owners so the fencing crew isn't stuck waiting on site.",
    date: "2026-03-01",
    service: "chain-link-fencing",
    image: "/images/concrete-fence-a.svg",
    readMins: 3,
    body: () => (
      <>
        <p>Most fencing delays we see aren't caused by the crew. They're caused by things that weren't settled before the crew arrived.</p>
        <h2>The checklist</h2>
        <ul>
          <li>Boundary marked and agreed with neighbours. If there's any doubt, get a survey first.</li>
          <li>Thick bushes and thorny scrub cleared along the line, or tell us so we can quote for it.</li>
          <li>Material delivered, counted and stacked near the boundary if you're supplying it.</li>
          <li>Water available for mixing concrete and curing footings.</li>
          <li>Gate positions and widths decided, including room for a tractor or truck.</li>
        </ul>
        <p>
          With those sorted, a typical plot is fenced within a week, curing included. See{" "}
          <A to="/services/chain-link-fencing">chain link fencing</A> and{" "}
          <A to="/services/pole-concrete-fencing">concrete pole fencing</A>.
        </p>
      </>
    ),
  },
];

export const getPost = (slug) => POSTS.find((p) => p.slug === slug);
