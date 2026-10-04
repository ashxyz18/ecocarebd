export type ServiceCategory = "Pest Control" | "Cleaning" | "Maintenance" | "Repair";

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  name: string;
  navLabel: string;
  icon: string;
  category: ServiceCategory;
  tagline: string;
  summary: string;
  intro: string;
  problems: { title: string; description: string }[];
  included: string[];
  process: { step: string; title: string; description: string }[];
  faqs: { q: string; a: string }[];
  priceFrom: string;
  duration: string;
  frequency: string;
  guarantee: string;
  areas: string;
  featured?: boolean;
  badge?: string;
  image: string;
}

export const SERVICES: Service[] = [
  {
    slug: "fumigation-services",
    name: "Fumigation Services",
    navLabel: "Fumigation",
    icon: "🧫",
    category: "Pest Control",
    tagline: "Certified fumigation for sensitive environments",
    summary:
      "Hospital-grade fumigation for homes, hospitals (OT/CCU/ICU), warehouses, godowns and industrial storage — eliminating hidden pests, bacteria and harmful organisms.",
    intro:
      "Hospitals, food factories and warehouses cannot afford an environment where pathogens survive between cleanings. Our fumigation service uses certified, registered chemicals applied by licensed operators with documented pre- and post-treatment air readings, so you get a sanitised space and a compliance record your auditor can accept.",
    problems: [
      {
        title: "Hospital-grade sterility required",
        description:
          "OT, CCU and ICU areas must stay free of bacteria, fungus and airborne pathogens between terminal cleanings.",
      },
      {
        title: "Pests hiding out of sight",
        description:
          "Rodents and cockroaches survive inside wall voids, ceilings and ductwork where sprays never reach.",
      },
      {
        title: "Compliance evidence",
        description:
          "Auditors and health departments expect written certification after every fumigation cycle.",
      },
    ],
    included: [
      "Hospital OT, CCU & ICU fumigation",
      "Warehouse & godown treatment",
      "Residential & commercial fumigation",
      "Certified, registered chemicals only",
      "Pre- and post-treatment documentation",
      "Re-entry clearance certificate",
    ],
    process: [
      {
        step: "01",
        title: "Site survey & risk assessment",
        description:
          "We map the site, identify sensitive equipment, and confirm occupancy timelines before scheduling.",
      },
      {
        step: "02",
        title: "Sealing & gas calibration",
        description:
          "The treated zone is sealed and fogging equipment is calibrated for the volume and target organism.",
      },
      {
        step: "03",
        title: "Fumigation cycle",
        description:
          "Licensed operators run the certified cycle to the contact time required for full organism kill.",
      },
      {
        step: "04",
        title: "Clearance & certificate",
        description:
          "We ventilate, verify concentration is safe, and issue a signed clearance certificate with readings.",
      },
    ],
    faqs: [
      {
        q: "Will fumigation damage sensitive equipment?",
        a: "No. We survey the site first and protect sensitive equipment with covers or relocation, then use concentrations validated for occupied healthcare environments.",
      },
      {
        q: "How long must the area stay closed?",
        a: "Typically 4–8 hours depending on volume and ventilation. You receive a written clearance time before we start, and we re-test before anyone re-enters.",
      },
      {
        q: "Do you service hospital OT and ICU?",
        a: "Yes, hospital OT, CCU and ICU fumigation is one of our core specialisms, with documentation formatted for health department audits.",
      },
    ],
    priceFrom: "৳2,500",
    duration: "4–8 hours",
    frequency: "Quarterly or as required",
    guarantee: "Re-treatment free within 30 days",
    areas: "Chattogram & nationwide",
    featured: true,
    badge: "Hospital certified",
    image: "/images/services/fumigation-services.jpg",
  },
  {
    slug: "water-tank-cleaning",
    name: "Water Tank Cleaning",
    navLabel: "Water Tank",
    icon: "💧",
    category: "Cleaning",
    tagline: "Clean tank, safe water, healthy family",
    summary:
      "Reserve and overhead tank desludging, scrubbing and anti-bacterial treatment that keeps household drinking water free of sediment, algae and bacteria.",
    intro:
      "An uncleaned overhead tank turns household drinking water into a bacterial culture. We drain, descale, scrub and disinfect reserve and overhead tanks, then treat the walls so re-contamination is measurably slower. Most households in Chattogram need this every six months; buildings and schools every three.",
    problems: [
      {
        title: "Black sediment and bad taste",
        description:
          "Silt, rust and algal film build up on tank walls and make water smell and taste off.",
      },
      {
        title: "Biofilm harbouring bacteria",
        description:
          "The wet wall surface is where E. coli and coliforms multiply between cleanings.",
      },
      {
        title: "Hidden leaks and cracks",
        description:
          "Long-neglected tanks often develop hairline leaks and leaking joints that spoil the whole supply.",
      },
    ],
    included: [
      "Reserve & overhead tank cleaning",
      "Anti-bacterial treatment after cleaning",
      "Sludge, scale and algae removal",
      "Roof, pipe and lid inspection",
      "Minor joint and leak repair",
      "Before/after photos for your records",
    ],
    process: [
      {
        step: "01",
        title: "Tank inspection",
        description: "We check access, tank volume, condition and the surrounding pipework.",
      },
      {
        step: "02",
        title: "Drain & scrub",
        description:
          "The tank is emptied and walls, floor and corners are scrubbed to remove sludge and scale.",
      },
      {
        step: "03",
        title: "Disinfect & rinse",
        description:
          "Food-grade disinfectant is applied to the full surface area, then the tank is rinsed thoroughly.",
      },
      {
        step: "04",
        title: "Refill & handover",
        description:
          "The tank is refilled, checked for leaks and handed back with maintenance advice.",
      },
    ],
    faqs: [
      {
        q: "How often should a water tank be cleaned?",
        a: "Every 6 months for a typical household. Buildings, schools, restaurants and any tank feeding more than 20 people should be cleaned every 3 months.",
      },
      {
        q: "Is it safe to drink the water right after cleaning?",
        a: "We rinse to remove all disinfectant residue and provide written confirmation before refilling. Fill and run the tap for a few minutes before drinking.",
      },
      {
        q: "Do you clean both reserve and overhead tanks?",
        a: "Yes. Most homes have both, and both need cleaning — an uncleaned reserve tank re-contaminates a clean overhead tank within days.",
      },
    ],
    priceFrom: "৳1,200",
    duration: "2–3 hours",
    frequency: "Every 6 months",
    guarantee: "30-day satisfaction guarantee",
    areas: "Chattogram city",
    featured: true,
    image: "/images/services/water-tank-cleaning.jpg",
  },
  {
    slug: "termite-control",
    name: "Termite Control",
    navLabel: "Termite Control",
    icon: "🐛",
    category: "Pest Control",
    tagline: "Stop termites before they destroy your home",
    summary:
      "Detection, baiting and barrier treatment that eliminates termite colonies and protects timber, furniture and foundations from the inside out.",
    intro:
      "Termites work silently for years before anyone notices. By the time you see a mud tube or a hollow-sounding beam, the structural damage is already done. We detect colonies early with moisture and probing surveys, then treat with bait stations and a chemical barrier that protects the building for years, backed by a warranty.",
    problems: [
      {
        title: "Silent structural damage",
        description:
          "Subterranean termites hollow out beams, door frames and floorboards from the inside where damage is invisible.",
      },
      {
        title: "Mud tubes and shelter tubes",
        description: "External mud tubes along walls and foundations are a reliable sign of an active colony.",
      },
      {
        title: "Failed previous treatments",
        description:
          "Spray-only treatments kill foraging termites but leave the colony and its queen alive.",
      },
    ],
    included: [
      "Pre & post-construction termite treatment",
      "Long-term protection plan",
      "Safe for family & pets",
      "Bait station installation",
      "Perimeter barrier treatment",
      "Free follow-up inspection",
    ],
    process: [
      {
        step: "01",
        title: "Inspection & mapping",
        description:
          "Moisture readings, timber probing and mud-tube mapping locate the colony and extent of activity.",
      },
      {
        step: "02",
        title: "Bait station placement",
        description:
          "In-ground and in-wall stations are installed along activity trails to reach the colony itself.",
      },
      {
        step: "03",
        title: "Barrier treatment",
        description:
          "A chemical barrier is applied around the perimeter and critical entry points.",
      },
      {
        step: "04",
        title: "Follow-up & monitoring",
        description:
          "Stations are checked and replaced until activity stops, then the warranty is issued.",
      },
    ],
    faqs: [
      {
        q: "How do I know if I have termites?",
        a: "Look for mud tubes on walls or foundations, hollow or clicking timber, buckling skirting boards, and doors or windows that suddenly stick. Any one of these warrants an inspection.",
      },
      {
        q: "Is termite treatment safe for children and pets?",
        a: "Yes. Our products are applied by trained technicians at concentrations safe for occupied homes, and we give clear re-entry guidance for each area treated.",
      },
      {
        q: "How long does termite treatment last?",
        a: "Bait-based treatments eliminate the colony in 2–8 weeks depending on colony size, and the perimeter barrier provides ongoing protection for up to five years.",
      },
    ],
    priceFrom: "৳3,500",
    duration: "1–2 days",
    frequency: "Annual monitoring",
    guarantee: "Up to 5-year warranty",
    areas: "Chattogram & nearby districts",
    featured: true,
    badge: "Most requested",
    image: "/images/services/termite-control.jpg",
  },
  {
    slug: "bed-bug-control",
    name: "Bed Bug Control",
    navLabel: "Bed Bugs",
    icon: "🛏️",
    category: "Pest Control",
    tagline: "Sleep peacefully — no more bed bugs",
    summary:
      "Heat and chemical treatment that reaches every hiding place — mattress seams, headboards, bed frames and furniture gaps — with a follow-up visit included.",
    intro:
      "Bed bugs are the hardest pest we deal with because almost nothing kills an egg and they hide in a dozen places a normal spray misses. We combine heat treatment where the setup allows with a targeted chemical protocol, and we always return for a follow-up inspection because a single visit is not a fair promise against this pest.",
    problems: [
      {
        title: "Insomnia and skin irritation",
        description:
          "Bites cause itching, welts and broken sleep, affecting the whole household.",
      },
      {
        title: "Hiding in plain sight",
        description:
          "They live in mattress seams, bed frames, headboards, sockets and behind skirting boards.",
      },
      {
        title: "Reinfestation through travel and furniture",
        description:
          "Second-hand furniture, hotels and travel are how most new infestations start.",
      },
    ],
    included: [
      "Full room treatment",
      "Mattress & furniture safe formula",
      "Heat treatment where suitable",
      "Free preparation checklist",
      "Follow-up inspection included",
      "Guaranteed results",
    ],
    process: [
      {
        step: "01",
        title: "Inspection & prep plan",
        description:
          "We confirm the infestation, identify all harbourages, and give you a room-by-room prep checklist.",
      },
      {
        step: "02",
        title: "Treatment",
        description:
          "Heat treatment or targeted chemical application is carried out across the room and adjacent areas.",
      },
      {
        step: "03",
        title: "Free follow-up visit",
        description:
          "We return within 10–14 days to verify the room is clear and re-treat if any activity remains.",
      },
      {
        step: "04",
        title: "Prevention advice",
        description:
          "We advise on mattress encasements, second-hand furniture checks and neighbouring unit screening.",
      },
    ],
    faqs: [
      {
        q: "Do bed bugs come back after treatment?",
        a: "With a proper two-visit protocol and some preparation from you, they should not. If they do, we re-treat at no charge for 30 days.",
      },
      {
        q: "How long until we can sleep in the room?",
        a: "Typically 6–8 hours after a chemical treatment, and 3–4 hours after heat treatment. We confirm the safe re-entry time before we finish.",
      },
      {
        q: "Should I throw away my mattress?",
        a: "Almost never necessary. Heat and chemical treatment penetrates mattress seams and piping, which is where bed bugs actually live.",
      },
    ],
    priceFrom: "৳2,000",
    duration: "1 day + follow-up",
    frequency: "As needed",
    guarantee: "30-day re-treatment guarantee",
    areas: "Chattogram city",
    featured: true,
    image: "/images/services/bed-bug-control.jpg",
  },
  {
    slug: "cockroach-control",
    name: "Cockroach Control",
    navLabel: "Cockroaches",
    icon: "🪳",
    category: "Pest Control",
    tagline: "Cockroach-free kitchen, healthier home",
    summary:
      "Gel bait and targeted spray treatment that reaches the tightest corners — under sinks, inside cabinets, behind appliances and down the drains.",
    intro:
      "Spray kills the cockroaches you can see; it does nothing about the egg cases hidden behind your fridge or the colony living in the drain. Our protocol combines gel baiting at harbourage points with a crack-and-crevice application and drain treatment, which is what actually breaks the cycle.",
    problems: [
      {
        title: "Contamination in the kitchen",
        description:
          "Cockroaches carry pathogens on their bodies and contaminate food and surfaces.",
      },
      {
        title: "Hidden egg cases",
        description:
          "Oothecae behind appliances survive spray treatment and hatch weeks later.",
      },
      {
        title: "Drain and sewer harbourage",
        description:
          "German cockroaches breed in drainage systems, which is why kitchens keep getting re-infested.",
      },
    ],
    included: [
      "Kitchen & bathroom treatment",
      "Gel bait + crack-and-crevice spray",
      "Drain and sewer treatment",
      "Safe around food preparation areas",
      "Harbourage sealing advice",
      "Maintenance plan available",
    ],
    process: [
      {
        step: "01",
        title: "Species ID & harbourage mapping",
        description:
          "Correct species identification determines the whole treatment strategy.",
      },
      {
        step: "02",
        title: "Bait placement",
        description:
          "Gel baits are placed at activity points where cockroaches feed and breed.",
      },
      {
        step: "03",
        title: "Perimeter & drain treatment",
        description:
          "Crack-and-crevice application plus drain treatment removes the remaining population and egg cases.",
      },
      {
        step: "04",
        title: "Monitoring",
        description:
          "We check activity after 7–10 days and confirm the infestation is resolved.",
      },
    ],
    faqs: [
      {
        q: "Is cockroach gel safe for a family kitchen?",
        a: "Yes. Gels are placed inside cracks, under sinks and behind appliances where food is never prepared, and they are far safer than aerosol spraying.",
      },
      {
        q: "Why do cockroaches keep coming back?",
        a: "Usually because of untreated drain harbourage, neighbouring units, or gaps behind appliances. Our protocol covers all three, which is why one visit usually holds.",
      },
      {
        q: "Do you offer monthly plans?",
        a: "Yes, monthly and quarterly maintenance plans are available for kitchens, restaurants and offices, and they cost less per visit than one-off treatments.",
      },
    ],
    priceFrom: "৳1,500",
    duration: "1–2 hours",
    frequency: "Monthly recommended",
    guarantee: "30-day re-treatment guarantee",
    areas: "Chattogram city",
    featured: true,
    image: "/images/services/cockroach-control.jpg",
  },
  {
    slug: "rodent-control",
    name: "Rodent Control",
    navLabel: "Rodents",
    icon: "🐭",
    category: "Pest Control",
    tagline: "Keep rats and mice away — permanently",
    summary:
      "Trapping, baiting and entry-point proofing that removes rats and mice and closes every route they used to get in.",
    intro:
      "Removing visible rodents is the easy part; the reason they return is the gap they came through. We combine trapping and baiting with a physical proofing survey of every entry point, then seal and mesh the openings so the problem stays solved.",
    problems: [
      {
        title: "Wiring and structural damage",
        description:
          "Rodents chew cable insulation, which is a genuine fire risk in homes and shops.",
      },
      {
        title: "Food contamination and disease",
        description:
          "Droppings and urine contaminate stored food and spread leptospirosis and hantavirus.",
      },
      {
        title: "Openings around the property",
        description:
          "A single 6 mm gap is enough for a mouse, which is why most re-infestations happen.",
      },
    ],
    included: [
      "Trapping & baiting system",
      "Entry point proofing & sealing",
      "Tamper-resistant bait stations",
      "Residential & commercial",
      "Safe for children & pets",
      "Optional ongoing monitoring",
    ],
    process: [
      {
        step: "01",
        title: "Sign & entry survey",
        description:
          "We identify the species, active routes and every potential entry point on the property.",
      },
      {
        step: "02",
        title: "Trapping & baiting",
        description:
          "An appropriate mix of traps and bait stations is deployed in the active harbourages.",
      },
      {
        step: "03",
        title: "Proofing",
        description:
          "Gaps are sealed and meshed so rodents physically cannot return.",
      },
      {
        step: "04",
        title: "Monitoring",
        description:
          "Stations are checked and activity verified as zero before the job is closed.",
      },
    ],
    faqs: [
      {
        q: "How soon will the rats be gone?",
        a: "Active trapping usually clears a domestic infestation within 3–7 days. Larger commercial or warehouse jobs can take 2–3 weeks with monitoring.",
      },
      {
        q: "Is rodent bait safe for pets?",
        a: "Yes, when placed in tamper-resistant stations as we do. We also survey the property first so we can avoid placing baits near food or pet areas.",
      },
      {
        q: "Do you do warehouse and godown work?",
        a: "Yes, industrial and warehouse rodent control is a core service, usually on a monitoring contract.",
      },
    ],
    priceFrom: "৳1,800",
    duration: "1–7 days",
    frequency: "Quarterly monitoring",
    guarantee: "90-day proofing warranty",
    areas: "Chattogram & nationwide",
    image: "/images/services/rodent-control.jpg",
  },
  {
    slug: "mosquito-fly-control",
    name: "Mosquito & Fly Control",
    navLabel: "Mosquito & Fly",
    icon: "🦟",
    category: "Pest Control",
    tagline: "Breathe easy — dengue and malaria prevention",
    summary:
      "Indoor and outdoor fogging, residual spraying and larviciding that cut mosquito numbers and break the dengue and malaria transmission cycle.",
    intro:
      "During dengue season a single untreated property can keep an entire street exposed. Fogging knocks down adult mosquitoes, residual spray keeps walls lethal for weeks, and larviciding removes breeding water. Used together for a season, they measurably reduce the case count in treated areas.",
    problems: [
      {
        title: "Dengue and malaria risk",
        description:
          "Aedes mosquitoes breed in small domestic containers that are easy to overlook.",
      },
      {
        title: "Mosquito-borne disease spread",
        description:
          "Chittagong reports dengue cases every year, and infected areas need coordinated treatment.",
      },
      {
        title: "Flies around food and waste",
        description:
          "Common and house flies contaminate food surfaces in markets, kitchens and waste areas.",
      },
    ],
    included: [
      "Indoor & outdoor fogging",
      "Dengue & malaria prevention focus",
      "Residual wall spraying",
      "Larvicide treatment of breeding sites",
      "Residential, commercial & industrial",
      "Seasonal protection plans",
    ],
    process: [
      {
        step: "01",
        title: "Site assessment",
        description: "We map breeding sites, fly harbourages and the areas that need residual treatment.",
      },
      {
        step: "02",
        title: "Larvicide application",
        description: "Standing water in containers, drains and pots is treated before adults emerge.",
      },
      {
        step: "03",
        title: "Fogging",
        description: "ULV fogging is carried out over the treated zone at calibrated droplet size.",
      },
      {
        step: "04",
        title: "Residual spray",
        description: "Walls and resting surfaces are sprayed to keep killing mosquitoes for weeks.",
      },
    ],
    faqs: [
      {
        q: "How often should fogging be done?",
        a: "During peak season (roughly April to November in Chattogram) every 2–4 weeks. Larviciding should run monthly throughout, since it targets the source.",
      },
      {
        q: "Is fogging safe for children and pets?",
        a: "Fogging is safe once the area is ventilated and re-entry times are followed, which we specify in writing at every visit. We also offer targeted residual treatment as an alternative to full fogging.",
      },
      {
        q: "Do you do community or society-wide programs?",
        a: "Yes, we run coordinated multi-building programs for societies, offices and industrial sites, which are far more effective than isolated house calls.",
      },
    ],
    priceFrom: "৳1,200",
    duration: "1–2 hours",
    frequency: "Every 2–4 weeks in season",
    guarantee: "Re-treatment if counts don't drop",
    areas: "Chattogram & nearby districts",
    featured: true,
    image: "/images/services/mosquito-fly-control.jpg",
  },
  {
    slug: "woodworm-control",
    name: "Woodworm Control",
    navLabel: "Woodworm",
    icon: "🪵",
    category: "Pest Control",
    tagline: "Protect your furniture from woodworm damage",
    summary:
      "Deep-penetration treatment that kills wood-boring larvae inside furniture, cabinets and timber, stopping the damage from within.",
    intro:
      "Woodworm larvae tunnel inside timber where surface sprays cannot reach, and the visible damage — small round exit holes and powder — only appears when the damage is done. We inject and fog the treatment into the timber so the larvae are killed before they exit, and treat surrounding wood as a preventive measure.",
    problems: [
      {
        title: "Hollowing out of timber",
        description:
          "Larvae tunnel through furniture and structural wood, leaving it brittle and structurally weak.",
      },
      {
        title: "Fresh exit holes",
        description:
          "Small round holes with powder around them mean larvae are still emerging and the cycle continues.",
      },
      {
        title: "Irreplaceable antique furniture",
        description:
          "Old and valuable wood needs a treatment gentle enough for the finish.",
      },
    ],
    included: [
      "Furniture & structural wood treatment",
      "Deep penetration formula",
      "Injection into bored holes",
      "Odorless & safe treatment",
      "Antique-safe product options",
      "Preventive treatment of nearby timber",
    ],
    process: [
      {
        step: "01",
        title: "Damage survey",
        description: "We identify active holes, exit holes and the timber most at risk.",
      },
      {
        step: "02",
        title: "Injection treatment",
        description: "Treatment is injected directly into the bored tunnels where larvae are living.",
      },
      {
        step: "03",
        title: "Surface application",
        description: "A residual treatment is applied to surrounding wood to prevent new egg laying.",
      },
      {
        step: "04",
        title: "Monitoring advice",
        description: "We advise on humidity and storage conditions that make timber attractive to woodworm.",
      },
    ],
    faqs: [
      {
        q: "Can you treat antique furniture?",
        a: "Yes. We use low-odour, furniture-safe formulations and can treat valuable pieces without stripping existing finishes.",
      },
      {
        q: "How do I know if my furniture is still active?",
        a: "Active infestation shows fresh, light-coloured powder and clean exit holes. Old holes with no fresh powder mean the cycle has finished — but preventive treatment is still worth doing.",
      },
      {
        q: "Is woodworm the same as termites?",
        a: "No. Woodworm is a beetle larva boring inside timber; termites are social insects that attack wood from outside or below. They need different treatments.",
      },
    ],
    priceFrom: "৳1,500",
    duration: "2–4 hours",
    frequency: "Every 2 years",
    guarantee: "6-month re-treatment guarantee",
    areas: "Chattogram city",
    image: "/images/services/woodworm-control.jpg",
  },
  {
    slug: "home-office-cleaning",
    name: "Home & Office Cleaning",
    navLabel: "Home & Office Cleaning",
    icon: "🧽",
    category: "Cleaning",
    tagline: "Spotless spaces, healthier living",
    summary:
      "Deep, regular and move-in/move-out cleaning for homes, offices and commercial premises using eco-friendly products that are safe for families.",
    intro:
      "A proper clean is not a wipe-down — it is a top-to-bottom, room-by-room sequence that most people cannot do consistently. Our teams follow a written checklist, bring their own equipment, and work to a fixed time slot so the same standard arrives every visit.",
    problems: [
      {
        title: "Dust, allergens and bacteria",
        description:
          "Surfaces, mattresses and upholstery hold allergens and bacteria that dusting does not remove.",
      },
      {
        title: "No time or no consistent standard",
        description:
          "An inconsistent clean leaves some rooms done and others neglected, week after week.",
      },
      {
        title: "Harsh chemicals",
        description:
          "Strong bleach and ammonia products leave residues and are unsafe around children and pets.",
      },
    ],
    included: [
      "Deep cleaning & regular plans",
      "Move-in / move-out cleaning",
      "Office & corporate cleaning",
      "Kitchen, bathroom & floor deep clean",
      "Eco-friendly products",
      "Trained, background-checked staff",
    ],
    process: [
      {
        step: "01",
        title: "Walkthrough & scope",
        description: "We walk the space, confirm scope and agree a fixed time slot and price.",
      },
      {
        step: "02",
        title: "Top-down cleaning",
        description: "Ceilings, walls, fixtures, then surfaces and floors, in that order.",
      },
      {
        step: "03",
        title: "Kitchen & bathroom detail",
        description:
          "The highest-hygiene areas get extra attention: grease, scale, drains and grout.",
      },
      {
        step: "04",
        title: "Handover & QC",
        description:
          "A supervisor checks the work against the checklist before the job is signed off.",
      },
    ],
    faqs: [
      {
        q: "Do I need to be home during the cleaning?",
        a: "No. Most clients provide access and go to work. We send photos of the finished space if you want confirmation.",
      },
      {
        q: "What products do you use?",
        a: "Eco-friendly, low-toxicity products that are safe for children and pets, with hospital-grade disinfectants reserved for washrooms and high-touch areas.",
      },
      {
        q: "Can I get a fixed monthly price?",
        a: "Yes, most clients choose a monthly or quarterly plan, which costs less per visit and keeps the standard consistent.",
      },
    ],
    priceFrom: "৳1,500",
    duration: "3–6 hours",
    frequency: "Weekly or monthly",
    guarantee: "Re-clean free if unsatisfied",
    areas: "Chattogram city",
    featured: true,
    image: "/images/services/home-office-cleaning.jpg",
  },
  {
    slug: "sofa-carpet-cleaning",
    name: "Sofa & Carpet Cleaning",
    navLabel: "Sofa & Carpet",
    icon: "🛋️",
    category: "Cleaning",
    tagline: "Fresh sofa, clean carpet, healthy home",
    summary:
      "Hot water extraction and dry cleaning that removes deep stains, embedded allergens and odours from sofas, chairs, mattresses and carpets.",
    intro:
      "Upholstery and carpet hold far more than visible dirt — dust mite allergen, pet dander, spilled liquids and body oils build up in the padding where vacuuming never reaches. Hot water extraction lifts that out of the fabric rather than just off the surface, and dries within hours.",
    problems: [
      {
        title: "Allergens inside the fabric",
        description: "Dust mites and dander embed in sofa and carpet padding and trigger allergies.",
      },
      {
        title: "Odour that will not wash out",
        description: "Urine, smoke and cooking odours bond into fabric and padding.",
      },
      {
        title: "Stains set over time",
        description: "The longer a stain sets, the less can be removed without replacing the item.",
      },
    ],
    included: [
      "Steam & dry cleaning available",
      "Stain & odour removal",
      "All fabric types handled",
      "Quick drying process",
      "Anti-allergen treatment",
      "Scotchgard protection available",
    ],
    process: [
      {
        step: "01",
        title: "Fabric test & inspect",
        description: "We test the fabric for colourfastness and identify the right chemistry.",
      },
      {
        step: "02",
        title: "Pre-treatment",
        description: "Stain and odour pre-treatment is applied and given time to work.",
      },
      {
        step: "03",
        title: "Hot water extraction",
        description: "Heated water and solution are extracted under pressure from the padding.",
      },
      {
        step: "04",
        title: "Grooming & dry",
        description: "Fabrics are groomed for an even finish and left to dry within a few hours.",
      },
    ],
    faqs: [
      {
        q: "How long does it take to dry?",
        a: "Typically 4–8 hours, depending on humidity and pile depth. We use high-volume extraction to shorten it, and fans can be used on the day.",
      },
      {
        q: "Can you remove an old urine odour?",
        a: "Usually yes, with a multi-stage enzymatic treatment. Some severe, deeply set odours need two visits to fully lift.",
      },
      {
        q: "Do you clean carpets and sofas together?",
        a: "Yes, and most clients do, since both are cleaned with the same extraction equipment in one visit.",
      },
    ],
    priceFrom: "৳1,800",
    duration: "3–5 hours",
    frequency: "Every 6–12 months",
    guarantee: "Re-spot-treatment free for 14 days",
    areas: "Chattogram city",
    image: "/images/services/sofa-carpet-cleaning.jpg",
  },
  {
    slug: "outdoor-glass-cleaning",
    name: "Outdoor Glass Cleaning",
    navLabel: "Glass Cleaning",
    icon: "🪟",
    category: "Cleaning",
    tagline: "Crystal clear glass, lasting impressions",
    summary:
      "High-rise, office and showroom glass cleaning using rope access and water-fed pole systems for a streak-free finish with no downtime.",
    intro:
      "Exterior glass on a multi-storey building needs rope access, and a streak-free result needs purified water. We operate both, work around building hours to avoid disruption, and hold safety certification for every high-access technician on site.",
    problems: [
      {
        title: "Grime and hard-water staining",
        description: "Rain and mineral deposits build up and permanently etch glass over time.",
      },
      {
        title: "Unsafe high access",
        description: "High-rise work without proper rope access and safety systems is hazardous.",
      },
      {
        title: "Streaks and residue",
        description: "Traditional cloth and detergent methods leave visible streaks and detergent film.",
      },
    ],
    included: [
      "High-rise building glass cleaning",
      "Rope access & water-fed pole systems",
      "Showroom & office facade cleaning",
      "Scheduled maintenance contracts",
      "Safety certified technicians",
      "Streak-free guarantee",
    ],
    process: [
      {
        step: "01",
        title: "Access & safety plan",
        description: "Anchor points, fall arrest and exclusion zones are planned before work starts.",
      },
      {
        step: "02",
        title: "Pre-wash",
        description: "Loose grit is removed first so it cannot scratch during the polish.",
      },
      {
        step: "03",
        title: "Purified water clean",
        description: "Demineralised water is fed to the brushes, so it dries without spotting.",
      },
      {
        step: "04",
        title: "Detail & inspect",
        description: "Edges and frames are detailed and each floor is signed off before moving on.",
      },
    ],
    faqs: [
      {
        q: "Will you need to close the building?",
        a: "Not usually. We work outside normal hours where needed and set exclusion zones, so most offices and lobbies stay open.",
      },
      {
        q: "What happens if it rains afterwards?",
        a: "Clean glass shows dirt more clearly after rain. Our maintenance contracts include re-cleaning after the first significant rain.",
      },
      {
        q: "Are your technicians certified for rope access?",
        a: "Yes, every high-access technician holds current rope access and work-at-height certification, and we carry the relevant insurance.",
      },
    ],
    priceFrom: "৳12,000",
    duration: "Project based",
    frequency: "Quarterly or twice yearly",
    guarantee: "Streak-free guarantee",
    areas: "Chattogram & nationwide",
    image: "/images/services/outdoor-glass-cleaning.jpg",
  },
  {
    slug: "ac-repair-maintenance",
    name: "AC Repair & Maintenance",
    navLabel: "AC Repair",
    icon: "❄️",
    category: "Maintenance",
    tagline: "Cool comfort, expert AC service at your doorstep",
    summary:
      "Installation, servicing, gas refilling and emergency repair for all AC brands, with annual maintenance contracts for homes and offices.",
    intro:
      "An AC that is never serviced loses efficiency long before it fails — and a dirty condenser coil is the most common cause of both high bills and early compressor death. We service all major brands, carry genuine parts, and provide a fixed-price repair quote before starting.",
    problems: [
      {
        title: "Rising electricity bills",
        description: "Dirty coils, low gas and blocked airflow make a unit work far harder for the same cooling.",
      },
      {
        title: "Water leaking or dripping",
        description: "Blocked condensate drains and blocked filters cause indoor dripping and damp.",
      },
      {
        title: "No cooling or short cycling",
        description: "Low refrigerant, compressor faults and thermostat failure all cut output sharply.",
      },
    ],
    included: [
      "Installation of all AC brands",
      "Regular maintenance & servicing",
      "Emergency repair service",
      "Gas refilling & leak detection",
      "Residential & commercial",
      "Annual maintenance contracts",
    ],
    process: [
      {
        step: "01",
        title: "Diagnosis",
        description: "We diagnose the fault and give a fixed price before any work begins.",
      },
      {
        step: "02",
        title: "Repair or service",
        description: "Only the failed component is replaced, or full service if you chose a plan.",
      },
      {
        step: "03",
        title: "Testing",
        description: "We test cooling output, drainage, airflow and electrical safety before handover.",
      },
      {
        step: "04",
        title: "Service advice",
        description: "You get practical advice on filters, placement and usage that reduces future breakdowns.",
      },
    ],
    faqs: [
      {
        q: "Do you service all AC brands?",
        a: "Yes — we service and install all major brands including Gree, Voltas, Daikin, Hitachi, LG, Samsung, Carrier and Ogeneral.",
      },
      {
        q: "How often should an AC be serviced?",
        a: "Every 6–12 months for home units, and every 3–6 months for commercial units that run long hours. Filters should be cleaned monthly regardless.",
      },
      {
        q: "Is emergency repair available?",
        a: "Yes, we run same-day emergency repair in Chattogram, including evenings and Fridays.",
      },
    ],
    priceFrom: "৳800",
    duration: "1–3 hours",
    frequency: "Every 6–12 months",
    guarantee: "90-day service warranty",
    areas: "Chattogram city",
    image: "/images/services/ac-repair-maintenance.jpg",
  },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  "Pest Control",
  "Cleaning",
  "Maintenance",
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export function servicesByCategory(cat: ServiceCategory) {
  return SERVICES.filter((s) => s.category === cat);
}

export function featuredServices() {
  return SERVICES.filter((s) => s.featured);
}
