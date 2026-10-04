export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  icon: string;
  /** Rendered as plain sections — keeps the article styling consistent without MDX. */
  body: { heading: string; paragraphs: string[]; list?: string[] }[];
  faqs: { q: string; a: string }[];
  relatedService: string;
}

export const POSTS: BlogPost[] = [
  {
    slug: "dengue-prevention-chittagong",
    title: "Dengue prevention in Chattogram: what actually works this season",
    excerpt:
      "Fogging alone does not stop dengue. Here is the four-part programme that measurably lowers case counts in treated buildings.",
    category: "Mosquito Control",
    date: "2026-01-18",
    readTime: "6 min read",
    author: "Dr. Sabrina Sultana",
    icon: "🦟",
    relatedService: "mosquito-fly-control",
    body: [
      {
        heading: "Why fogging by itself fails",
        paragraphs: [
          "Aedes aegypti — the mosquito that transmits dengue — breeds in small domestic containers: a discarded tyre with rainwater, a flowerpot saucer, an uncovered water tank, a fridge drip tray. Fogging knocks down adult mosquitoes that happen to be flying at that moment, but it does nothing about the larvae already developing in those containers.",
          "So a household that fogs every week but leaves the same uncovered containers around will rebuild its mosquito population within days. This is the single most common reason customers tell us fogging \"did not work\" — the fogging was fine, the source was untouched.",
        ],
      },
      {
        heading: "The four-part programme",
        paragraphs: [
          "Effective dengue control in Chattogram needs all four of these working together across the whole building, not just one flat:",
        ],
        list: [
          "Source control — larviciding and emptying every water-holding container, plus covering all tanks and drums permanently.",
          "Adulticide — ULV fogging indoors and in the compound, on a fixed 2–4 week cycle through the season.",
          "Residual spray — insecticide applied to walls and resting surfaces so mosquitoes die for weeks after they land.",
          "Behaviour change — a weekly 10-minute check by residents, which is what makes the other three hold.",
        ],
      },
      {
        heading: "What to do before peak season",
        paragraphs: [
          "Peak transmission in Chattogram generally runs from April through November, driven by monsoon humidity and temperature. The useful work happens before April: emptying and scrubbing every container on your roof and in your yard, repairing broken screens and mesh, and discarding or covering anything that can hold water.",
          "By the time you are seeing dengue cases in your building, the mosquitoes have been breeding for weeks. A first-year treatment plan almost always works better than a late one, because residual spray applied at the start of the season has months of residual life left when mosquitoes actually start biting.",
        ],
      },
      {
        heading: "Treating the whole compound, not one flat",
        paragraphs: [
          "Dengue does not respect flat boundaries. A building where eight flats fog but nine do not still sustains a mosquito population that feeds on everyone.",
          "For housing societies, offices and commercial compounds, coordinated treatment of all units at the same time is the only approach that produces a measurable drop. We run these as scheduled programmes rather than one-off visits, with the same date across every building in the compound.",
        ],
      },
      {
        heading: "How we measure whether it worked",
        paragraphs: [
          "Every fogging visit includes landing counts — counting resting mosquitoes on a defined number of observation surfaces before and after treatment. It is a simple, honest measure, and it tells you whether the programme is working or whether the source control has been missed somewhere.",
          "If counts are not dropping after two consecutive cycles, the answer is almost always breeding water somewhere on the property that nobody has told us about. We walk the site again and find it.",
        ],
      },
    ],
    faqs: [
      {
        q: "How often should fogging be done in Chattogram?",
        a: "Every 2–4 weeks between April and November. Larviciding should run monthly throughout the year because it targets the source rather than the adults.",
      },
      {
        q: "Is fogging safe for children and pets?",
        a: "Yes, once the area has been ventilated and the re-entry time has passed. We specify the safe re-entry time in writing at every visit and offer residual spray as a lower-exposure alternative where fogging is not appropriate.",
      },
      {
        q: "Does fogging kill mosquitoes inside my house permanently?",
        a: "No. Fogging knocks down adults on contact; only residual spray and source removal give lasting control. That combination is what our seasonal programmes are built around.",
      },
    ],
  },
  {
    slug: "signs-of-termites",
    title: "9 signs of termites in your home — and what to do in the first 48 hours",
    excerpt:
      "Mud tubes, hollow timber, sticking doors. What each sign means, how urgently it needs attention, and what not to do yourself.",
    category: "Termite Control",
    date: "2026-01-11",
    readTime: "7 min read",
    author: "Engr. Md. Rakibul Hasan",
    icon: "🐛",
    relatedService: "termite-control",
    body: [
      {
        heading: "What termites actually are",
        paragraphs: [
          "Termites are social insects that live in large colonies, mostly in the soil, and feed on cellulose — timber, paper, cardboard and some fabrics. The workers are pale, soft-bodied and avoid light, which is why you rarely see them. What you see instead is the evidence they leave.",
          "The critical point for homeowners: termite damage is usually well advanced before it becomes visible. A colony can hollow out a floor joist for years while the surface still looks like timber.",
        ],
      },
      {
        heading: "The nine warning signs",
        paragraphs: ["Any one of these deserves an inspection. Several together means act now."],
        list: [
          "Mud tubes — earthen shelter tubes running along walls, skirting boards or foundations. These are active foraging highways.",
          "Hollow-sounding timber — a floorboard or beam that sounds hollow when tapped.",
          "Doors or windows that suddenly stick — the frame has been warped as termites ate the wood behind it.",
          "Sagging or bulging floor — the joist underneath has lost structural strength.",
          "Blistered or peeling paint on wood — moisture from damp damaged timber lifts the paint.",
          "Small piles of white or cream debris — wings shed by reproductive alates, often found near windows.",
          "Live alates inside the home — swarmers in spring, usually around a window or light source.",
          "Termite droppings (frass) — dark, pepper-like pellets gathered below timber.",
          "Damp patches that never dry — often a secondary symptom of termite damage to pipework.",
        ],
      },
      {
        heading: "What to do in the first 48 hours",
        paragraphs: [
          "Do not disturb the colony. Poking at mud tubes, breaking open timber or spraying a household aerosol just scatters the colony into new areas and can make the problem harder to treat — this is the most common mistake we see.",
        ],
        list: [
          "Take clear photographs of every sign you can find, including where you found it and how many.",
          "Do not move, drill, saw or paint any affected timber.",
          "Do not apply DIY sprays, borax mixes or kerosene — they kill foraging workers but leave the colony and queen alive.",
          "Keep the area dry and stop any water ingress near the affected zone.",
          "Call us and send the photos on WhatsApp. We will tell you how urgent it is and, if it is genuinely minor, whether you need treatment at all.",
        ],
      },
      {
        heading: "Why spraying alone does not work",
        paragraphs: [
          "Contact sprays kill termites you can reach. The colony, including the queen, usually survives inside the timber or in the soil. That is why a spray-only treatment often appears to work for a few weeks and then returns — the foraging population was suppressed, not eliminated.",
          "Effective termite control combines three things: a chemical barrier around and under the building to block re-entry, in-ground or in-wall bait stations that the colony itself carries back to the nest and consumes, and monitoring to confirm activity has actually stopped before anyone issues a warranty.",
          "The colony elimination stage normally takes two to eight weeks depending on colony size. Anyone promising same-day complete eradication of an established colony is telling you something that is not true.",
        ],
      },
      {
        heading: "Prevention for homeowners in Chattogram",
        paragraphs: [
          "Most termite pressure comes from the soil around the building. Keep the soil around your foundation slightly moist but not waterlogged, avoid direct soil-to-wood contact in garden edging and decking, and make sure downpipes and gutters discharge well away from the foundation.",
          "Old timber stored against a wall, garden furniture, stacked firewood and cardboard boxes are all cellulose sources that keep colonies alive near your house. Moving or removing them removes food the colony would otherwise keep close to the structure.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I know if my termite problem is serious?",
        a: "If you have mud tubes, active alates inside the home, or hollow-sounding structural timber, treat it as urgent. Cosmetic damage to a skirting board is less urgent but still worth an inspection before it spreads.",
      },
      {
        q: "Can I treat termites myself?",
        a: "Spray and DIY bait kits are not effective against an established colony because they cannot reach the nest. They also risk pushing the colony into neighbouring timber where it is harder to find.",
      },
      {
        q: "Does termite treatment damage my furniture or paint?",
        a: "No. We use products applied with targeted equipment, and we test for colourfastness on furniture and decorative surfaces before starting.",
      },
    ],
  },
  {
    slug: "water-tank-cleaning-frequency",
    title: "How often should you clean your water tank? (And why six months is a myth)",
    excerpt:
      "The real interval depends on tank type, roof material and how many people use the water. Here is the honest answer.",
    category: "Water Hygiene",
    date: "2026-01-04",
    readTime: "5 min read",
    author: "Nasrin Akter",
    icon: "💧",
    relatedService: "water-tank-cleaning",
    body: [
      {
        heading: "The standard advice, and why it is wrong",
        paragraphs: [
          "Almost every cleaning company in Bangladesh — including us — says \"every six months\". It is a reasonable default, but it is not actually the correct answer, because tank contamination rate depends on variables that vary enormously between households.",
          "The important detail most companies skip: most homes have two tanks. An overhead tank and a reserve tank. If you clean only one, the uncleaned tank re-contaminates the clean one within days through the interconnecting pipework. Both need cleaning in the same visit.",
        ],
      },
      {
        heading: "What actually determines the interval",
        paragraphs: [
          "Four factors matter far more than the calendar:",
        ],
        list: [
          "Number of users — a household of two uses far less water than a family of eight, and lower turnover means more stagnation time.",
          "Tank material and age — older concrete tanks develop rough surfaces and micro-cracks that trap biofilm faster than newer plastic ones.",
          "Roof conditions — open rooftop tanks with sun exposure grow algae much faster than shaded, covered tanks.",
          "Whether the reserve tank is pumped into the overhead tank — if it is, the overhead tank effectively receives two cycles of contamination.",
        ],
      },
      {
        heading: "Recommended intervals by property type",
        paragraphs: ["These are what we actually recommend, based on what we find when we open tanks:"],
        list: [
          "Small household (1–3 people): every 9–12 months, provided the tank is covered.",
          "Family household (4–8 people): every 6 months.",
          "Large household, guest room or staff quarters: every 4–6 months.",
          "Restaurant, cafe or food business: every 3 months, ideally monthly for the kitchen supply tank.",
          "School, office with pantry, or any building over 20 users: every 3 months.",
          "Any tank with an open top or visible sun exposure: every 4 months regardless of size.",
        ],
      },
      {
        heading: "Signs the tank is overdue",
        paragraphs: [
          "You do not need to wait for a scheduled date. If you notice any of these, book a cleaning now:",
        ],
        list: [
          "Water that smells, tastes different, or has a visible film.",
          "A brownish ring or dark sludge inside the tank when you look in.",
          "Slimy patches on the inside walls when you lift the lid.",
          "Low water pressure suggesting partial blockage in the outlet.",
          "An empty-looking tank that still has a layer of grit at the bottom.",
        ],
      },
      {
        heading: "What a proper cleaning involves",
        paragraphs: [
          "A quick rinse is not a cleaning. A real tank clean requires draining the tank completely, scrubbing the floor, walls and corners to remove the biofilm and sludge layer, inspecting the inlet pipe, roof and lid for leaks or entry points, then applying a food-grade disinfectant to the full surface area and rinsing it properly before refilling.",
          "Skipping the scrub stage is the most common shortcut in this industry. Disinfectant applied over an intact biofilm layer kills the surface bacteria and leaves the biofilm underneath intact, so the tank can be worse off within weeks.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is it safe to drink the water immediately after cleaning?",
        a: "We rinse to remove all disinfectant residue and confirm before refilling. Run the tap for a few minutes after refill before drinking, and store drinking water separately if you have concerns.",
      },
      {
        q: "How much does tank cleaning cost in Chattogram?",
        a: "A typical household with one overhead and one reserve tank starts from ৳1,200. Larger tanks and multi-storey buildings are quoted after inspection.",
      },
      {
        q: "How long does the cleaning take?",
        a: "Two to three hours for a standard household, depending on access and tank size.",
      },
    ],
  },
  {
    slug: "cockroaches-at-night",
    title: "Why you see cockroaches only at night — and how to break the cycle",
    excerpt:
      "Night sightings mean the population is already established. What to treat first for a lasting fix.",
    category: "Cockroach Control",
    date: "2025-12-22",
    readTime: "6 min read",
    author: "Md. Jasim Uddin",
    icon: "🪳",
    relatedService: "cockroach-control",
    body: [
      {
        heading: "Night sightings mean the colony is established",
        paragraphs: [
          "Cockroaches are nocturnal because that is when they are safest. If you are seeing them when you switch the kitchen light on at night, the population in your home is well beyond the point where it can be ignored.",
          "A single stray is often a visitor from a neighbouring flat or a grocery bag. Regular sightings — especially in the kitchen or bathroom — mean breeding is happening on your property. German cockroaches can produce a generation every six weeks, so the population grows fast once they settle.",
        ],
      },
      {
        heading: "Where they actually breed",
        paragraphs: [
          "Treating the ones you see is the least effective thing you can do. The visible adults are a small fraction of the population, and they are not where the problem lives:",
        ],
        list: [
          "Drainage systems — German cockroaches breed in the warm, damp sewer lines under your kitchen and bathroom.",
          "Behind and under appliances — fridges and water heaters move against the wall, leaving a gap that stays warm and undisturbed.",
          "Inside wall voids and switchboard boxes — warmth plus residual food.",
          "Overhead water tanks and pipe joints — moisture plus organic matter.",
          "Cardboard, paper and stored packaging — cellulose and starch, easily available food sources.",
        ],
      },
      {
        heading: "What breaks the cycle",
        paragraphs: [
          "Effective cockroach control is a sequence, not a single spray:",
        ],
        list: [
          "Species identification — German, American, Asian and brown-banded cockroaches need genuinely different strategies. German cockroaches multiply fastest and respond best to gel bait; American cockroaches live in drains and sewer lines and need drain treatment.",
          "Gel bait at harbourage points — cockroaches feed on the bait and carry it back to the nest, where it kills the young. This is the only method that affects the breeding cycle.",
          "Crack-and-crevice insecticide — applied to edges, hinges, plinths and entry points where cockroaches travel.",
          "Drain and sewer treatment — for German and American species this is frequently the step that determines whether the problem returns.",
          "Entry sealing and monitoring — check activity after 7–10 days to confirm the cycle has actually broken.",
        ],
      },
      {
        heading: "Why aerosol spraying alone keeps failing",
        paragraphs: [
          "Aerosol spray is what most households reach for first, and it is the least effective option available. It kills the adults it contacts, it has no effect on egg cases, and there is strong evidence that repeated exposure can cause some populations to avoid treated surfaces entirely — they simply move to the untreated next room.",
          "The other problem is that aerosol sprayed into the air settles on food preparation surfaces and on the floor where children and pets walk, which is exactly what customers ask us to avoid.",
        ],
      },
    ],
    faqs: [
      {
        q: "How soon after treatment will the cockroaches be gone?",
        a: "Visible activity usually drops dramatically within 24–48 hours, and our protocol includes a check at 7–10 days to confirm that no new activity has started from drains or neighbouring units.",
      },
      {
        q: "Are cockroach gels safe in a kitchen?",
        a: "Yes. Gel is placed inside cracks, under sinks, behind appliances and at skirting edges — never on surfaces where food is prepared or cut.",
      },
      {
        q: "My neighbours keep getting cockroaches. Will mine come back?",
        a: "They can, which is why we proof entry points and, in multi-unit buildings, treat shared service areas like ducts, shafts and refuse rooms.",
      },
    ],
  },
  {
    slug: "bed-bugs-preparation",
    title: "Bed bug treatment: the preparation checklist that makes one visit enough",
    excerpt:
      "Most failed bed bug jobs come down to preparation. This is exactly what to do the night before.",
    category: "Bed Bugs",
    date: "2025-12-15",
    readTime: "8 min read",
    author: "Dr. Sabrina Sultana",
    icon: "🛏️",
    relatedService: "bed-bug-control",
    body: [
      {
        heading: "Why preparation decides the outcome",
        paragraphs: [
          "Bed bug treatment fails far more often because of preparation than because of the product. Bed bugs hide in eight or ten places per person — mattress seams and piping, the headboard, the bed frame joints, the skirting, behind the bedside table, electrical sockets, drawer joints, and the seam of the mattress protector.",
          "If even one of those harbourages is left undisturbed and unexposed, surviving bed bugs re-establish the infestation within weeks and you are back to square one. Preparation is not optional — it is the single biggest factor in whether a treatment holds.",
        ],
      },
      {
        heading: "The day before",
        paragraphs: ["Work through this list the night before the technician arrives."],
        list: [
          "Strip all bedding, mattress protector, pillowcases and any fabric touching the floor.",
          "Move clothing, shoes, boxes and anything stored near or under the bed well away from the bed frame.",
          "Vacuum the entire room thoroughly, including under the bed, behind the nightstand, along skirting, and inside any drawers. Empty the vacuum bag into a sealed bag and dispose of it outside the property.",
          "Wash all bedding and clothing that has been in contact with the bed at 60°C or above, and dry on high heat.",
          "Leave the room empty of people and pets from the evening before until the technician confirms safe re-entry.",
        ],
      },
      {
        heading: "On the day, before we arrive",
        paragraphs: [
          "Move all items that were moved away back into the room — bedsheets, pillows, books, phone chargers and anything else that normally lives beside the bed. Bed bugs feed at night, and if their normal access routes are blocked from every direction, they simply hide deeper.",
          "Leave furniture where it is. Do not move the bed, wardrobe or nightstand. The technician needs direct access to the frame joints, the underside of the mattress and the wall behind each piece.",
          "Clear a working path so the technician can move safely between the wall and the bed while treating the gap.",
          "Have pets and children stay out of the room until re-entry is confirmed. Ask for the safe re-entry time in writing before you leave.",
        ],
      },
      {
        heading: "After treatment",
        paragraphs: [
          "Do not move back in immediately after we leave unless we have confirmed it is safe. Chemical treatments generally need 6–8 hours of ventilation; heat treatments dry faster but the room still needs to reach temperature.",
          "Expect some residual activity for a few days. Stressed bed bugs often come out in daylight and are easier to spot, which is normal and not a sign the treatment failed.",
          "Do not fog your own home or use insecticide sprays on mattresses. Over-the-counter foggers create a repellency effect that can cause bed bugs to disperse into other rooms rather than die, which makes the infestation harder to deal with.",
          "Our protocol includes a free follow-up visit within 10–14 days. Take it. That visit is specifically to catch any harbourage that was missed the first time.",
        ],
      },
      {
        heading: "Preventing the next infestation",
        paragraphs: [
          "Most new infestations come from travel, hotels, and second-hand furniture. Encapsulate your mattress in a zippered mattress protector with a fine mesh and keep it closed permanently — this alone prevents mattress seams from becoming a harbourage.",
          "Before bringing any second-hand furniture or soft furnishing into the home, treat it in a hot car for several hours in summer or inspect it carefully for rust-coloured spotting and shed skins.",
          "If you live in a multi-unit building and your neighbour has an infestation, ask about treatment of shared areas and consider screening the wall voids on your side.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need to throw away my mattress?",
        a: "Almost never. Heat and chemical treatment penetrates mattress seams and piping, which is exactly where bed bugs live.",
      },
      {
        q: "How long until we can sleep in the room?",
        a: "Typically 6–8 hours after chemical treatment and 3–4 hours after heat treatment. We confirm the safe re-entry time in writing before we finish.",
      },
      {
        q: "Why do I still see bed bugs after treatment?",
        a: "Almost always because of an undisturbed harbourage or a neighbouring unit. Our free follow-up visit deals with exactly this, which is why it is part of the service rather than an extra charge.",
      },
    ],
  },
  {
    slug: "ac-bills-high",
    title: "Your AC bill is high? Seven things to check before calling a technician",
    excerpt:
      "Dirty filters and coils account for most of the excess. Here is how to tell maintenance from a real fault.",
    category: "AC Care",
    date: "2025-12-08",
    readTime: "5 min read",
    author: "Md. Jasim Uddin",
    icon: "❄️",
    relatedService: "ac-repair-maintenance",
    body: [
      {
        heading: "Maintenance versus fault",
        paragraphs: [
          "When a customer's electricity bill jumps, the first question is always whether anything is actually broken. In the large majority of cases we attend, nothing is broken. The unit is simply dirty, and dirty units consume more power for less cooling.",
          "Here is the order to check, cheapest and easiest first.",
        ],
      },
      {
        heading: "1. The filters",
        paragraphs: [
          "Clogged filters are the most common cause of a gradual efficiency loss and the easiest fix. A blocked filter forces the fan to work harder, reduces airflow across the coil, and can cause the compressor to run continuously trying to reach set temperature.",
          "Clean them monthly in summer, every two months otherwise. If the filter is visibly grey and the air smells musty, clean it today — that alone often cuts the bill noticeably.",
        ],
      },
      {
        heading: "2. The condenser coils",
        paragraphs: [
          "The outdoor unit's coil accumulates dust, leaf matter and cotton fluff. When the coil is caked, the unit cannot reject heat properly, so it runs longer and harder to reach the same temperature inside.",
          "Hose the outdoor unit down gently every few months. Avoid a pressure washer, which can bend the fins — bent fins reduce heat transfer permanently and are a much more expensive fix than cleaning.",
        ],
      },
      {
        heading: "3. Room size and insulation",
        paragraphs: [
          "A 1.5 ton unit in a large room with single glazing and west-facing windows will never reach set temperature. In that situation the unit runs continuously and the bill climbs, with nothing actually wrong with the machine.",
          "Basic measures — closing curtains on sunny windows, sealing gaps, and using fans to redistribute air — let the unit hit set temperature faster and shorten run time significantly.",
        ],
      },
      {
        heading: "4. Thermostat placement and settings",
        paragraphs: [
          "A thermostat next to a hot window, a sun-facing wall, or a doorway reads higher than the room actually is, so the unit runs longer than necessary. Move it to an interior wall at roughly seated head height.",
          "Also check that the unit is not being switched on and off repeatedly during the day. Each restart consumes a burst of energy, and cycling also stresses the compressor.",
        ],
      },
      {
        heading: "5. Low refrigerant",
        paragraphs: [
          "A gradual loss of refrigerant causes a real efficiency drop along with weaker cooling and longer run times. Signs include icing on the indoor pipework, water dripping outside the unit, and cooling that is uneven across the room.",
          "Low refrigerant always means a leak somewhere, so a top-up alone is a temporary fix. Ask for leak detection, not just a refill.",
        ],
      },
      {
        heading: "6. Electrical draw",
        paragraphs: [
          "Check the unit's amperage against the nameplate rating. Sustained readings significantly above nameplate usually indicate either a failing compressor or an electrical supply problem.",
          "Undersized wiring or a loose terminal block running an AC is a genuine fire risk and should be checked by an electrician, not ignored.",
        ],
      },
      {
        heading: "7. Blocked condensate drain",
        paragraphs: [
          "If your unit is dripping water indoors, the condensate drain is blocked. This is often just algae and dust in the drain pipe.",
          "A dripping unit left alone can cause damp, mould and eventually damage to flooring and furniture, so clear the drain and treat the mould separately.",
        ],
      },
      {
        heading: "When a service visit is actually worth paying for",
        paragraphs: [
          "Items 1, 2, 4 and 7 are things you can do yourself in an afternoon. Items 5 and 6 need a technician. If you are unsure which category your problem falls into, call and describe the symptoms — we will tell you honestly whether it is worth booking a visit.",
        ],
      },
    ],
    faqs: [
      {
        q: "How often should an AC be serviced?",
        a: "Every 6–12 months for home units, and every 3–6 months for commercial units running long hours. Filters should be cleaned monthly regardless of servicing schedule.",
      },
      {
        q: "Is gas refilling enough if cooling is weak?",
        a: "Not on its own. Low gas means a leak, and a refill without finding and fixing the leak means the problem returns within weeks or months.",
      },
      {
        q: "Do you service all AC brands?",
        a: "Yes — Gree, Voltas, Daikin, Hitachi, LG, Samsung, Carrier, Ogeneral and others, for both installation and repair.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}

export const POST_SLUGS = POSTS.map((p) => p.slug);