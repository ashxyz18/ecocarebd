export const STATS = [
  { value: "15+", label: "Years in Chattogram", sub: "Serving since 2009" },
  { value: "12,400+", label: "Jobs completed", sub: "Homes & businesses" },
  { value: "50+", label: "Certified technicians", sub: "On call 7 days" },
  { value: "4.9/5", label: "Average rating", sub: "From 1,247 reviews" },
] as const;

export const TRUST_POINTS = [
  {
    icon: "🛡️",
    title: "Child & pet safe",
    text: "Every product we use is safe for children, pets and aquariums once the room is aired. We tell you exactly when it is safe to walk back in.",
  },
  {
    icon: "🌿",
    title: "Eco-conscious methods",
    text: "Targeted, low-toxicity treatments that solve the problem without contaminating your water, soil or indoor air.",
  },
  {
    icon: "📍",
    title: "Local Chittagong experts",
    text: "Our technicians know this city's climate, water quality and seasonal pest patterns — so the treatment suits conditions here.",
  },
  {
    icon: "🔁",
    title: "Free re-treatment promise",
    text: "If the problem returns within the guarantee period, we come back and re-treat at no charge. No arguments.",
  },
] as const;

export const PROCESS = [
  {
    step: "01",
    title: "Free inspection",
    text: "A technician visits, identifies the pest and the source, and photographs the evidence so you can see the problem clearly.",
    duration: "30–45 min",
  },
  {
    step: "02",
    title: "Written plan & fixed price",
    text: "You get a written treatment plan with a fixed price before anything starts. No surprises on the invoice.",
    duration: "Same day",
  },
  {
    step: "03",
    title: "Treatment day",
    text: "Certified technicians carry out the full protocol with labelled, child-safe products, then clean up before they leave.",
    duration: "1–4 hours",
  },
  {
    step: "04",
    title: "Follow-up & guarantee",
    text: "We check in after the treatment window. If activity returns inside the guarantee period, we re-treat free of charge.",
    duration: "7–14 days",
  },
] as const;

export const WHY_US = [
  {
    title: "Fixed prices, no upsell",
    text: "The quote you approve is the invoice you pay. We do not add treatments you did not agree to.",
  },
  {
    title: "Certified technicians only",
    text: "Every technician is trained, uniformed and carries an ID card. Ask to see it before they start.",
  },
  {
    title: "Genuinely eco-friendly",
    text: "We use the lowest effective dose and the least toxic product that will actually solve your problem.",
  },
  {
    title: "We photograph the work",
    text: "Before-and-after photos go to you by WhatsApp, so there is never any doubt about what was done.",
  },
  {
    title: "Same-day emergencies",
    text: "Wasps in the ceiling, a rat in the storeroom, a snake on the site — we prioritise these and arrive fast.",
  },
  {
    title: "Honest advice, even when it costs us",
    text: "If your problem does not need a paid treatment, we will tell you. We would rather lose a job than take your money.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Farhana Islam",
    location: "GEC Circle, Chattogram",
    service: "Water tank cleaning",
    rating: 5,
    date: "November 2025",
    text: "Our overhead tank had not been cleaned in four years. They drained it, removed a thick layer of black sludge, treated it and refilled — all in under three hours. The water finally tastes normal again.",
  },
  {
    name: "Imtiaz Chowdhury",
    location: "Agrabad, Chattogram",
    service: "Bed bug treatment",
    rating: 5,
    date: "August 2025",
    text: "We tried two other companies and both failed. Eco Care gave us a preparation checklist, came twice, and the room has been clean ever since. The follow-up visit was included in the price, which no one else did.",
  },
  {
    name: "Dr. Nusrat Jahan",
    location: "Chattogram Medical College area",
    service: "Hospital fumigation",
    rating: 5,
    date: "September 2025",
    text: "They fumigated our two OT rooms and gave us the clearance certificate our auditors asked for. The documentation was thorough and the work was done in one night with zero disruption to morning lists.",
  },
  {
    name: "Sohel Rana",
    location: "Khulna, Chattogram",
    service: "Rodent control",
    rating: 5,
    date: "July 2025",
    text: "Rats were getting into the godown every month. Eco Care not only cleared them but sealed six entry points and set up monitoring stations. That was four months ago and we have not seen a single one since.",
  },
  {
    name: "Tanvir Ahmed",
    location: "Sagarika, Chattogram",
    service: "Termite control",
    rating: 5,
    date: "October 2025",
    text: "I found mud tubes on my living room wall and panicked. They inspected, found the colony under the dining table area, installed bait stations and treated the perimeter. Two months on, zero activity. Worth every taka for the peace of mind.",
  },
  {
    name: "Rumana Haque",
    location: "Hazari, Chattogram",
    service: "Deep cleaning",
    rating: 5,
    date: "December 2025",
    text: "Fixed monthly price, same team every visit, and they always finish early. After a year of this our flat has never looked this clean. They also fixed my shower leak notice when they spotted it.",
  },
] as const;

export const FAQS = [
  {
    q: "How much does pest control cost in Chattogram?",
    a: "Most single-visit treatments start from ৳1,200–৳1,800 depending on the pest and property size. Termite treatment starts from ৳3,500 because it needs baiting plus a barrier and monitoring. You always get a written fixed price before work starts, so the number you approve is the number you pay.",
  },
  {
    q: "Is your treatment safe for children and pets?",
    a: "Yes. We use child-safe, low-toxicity products and apply them with proper equipment rather than spraying the air. You will be told exactly what was used and when it is safe to re-enter — typically after 4–8 hours of ventilation. For homes with fish tanks, aquariums or pets we adjust the treatment plan accordingly.",
  },
  {
    q: "What does the free re-treatment guarantee actually mean?",
    a: "If the same problem returns within the guarantee period for that service — 30 days for most pest control, 90 days for rodent proofing, up to 5 years for the termite barrier — we return and re-treat at no charge. If we cannot solve it within a second visit, we refund the treatment fee.",
  },
  {
    q: "How quickly can you come out for an emergency?",
    a: "For genuine emergencies inside Chattogram city we aim for same-day response, usually within 2 hours of your call. You can reach us on 01752-510002 or WhatsApp at any hour, including Fridays.",
  },
  {
    q: "Do I need to be at home during the treatment?",
    a: "Not for most services — we can work from an access key or with a neighbour present, and we send photos when we finish. For fumigation and bed bug treatment you do need to be contactable on the day so we can confirm safe re-entry times with you.",
  },
  {
    q: "What areas of Chattogram do you cover?",
    a: "All of Chattogram city including GEC Circle, Agrabad, Panchpathi, Khulna, Sagarika, Dampara, Kazir Dewri, Chandgaon, Patenga and Sadarghat, plus Hathazari, Raojan, Anwara and Boalkhali. We also take on godown and hospital projects elsewhere in Bangladesh.",
  },
  {
    q: "Which payment methods do you accept?",
    a: "Cash, bKash, Nagad, Rocket, card and bank transfer. Corporate and monthly contract clients get proper invoices with payment terms.",
  },
  {
    q: "How often should I get a service done?",
    a: "Water tanks every 6 months, sofa and carpet cleaning every 6–12 months, AC servicing every 6–12 months, mosquito fogging every 2–4 weeks during peak season, and termite monitoring annually. We will tell you honestly if a service is not worth paying for yet.",
  },
] as const;

export const TEAM = [
  {
    name: "Engr. Md. Rakibul Hasan",
    role: "Founder & Managing Director",
    bio: "15 years in structural pest management. Holds an M.Sc. in Entomology and led hospital-grade fumigation programmes across Chattogram.",
  },
  {
    name: "Dr. Sabrina Sultana",
    role: "Head of Technical Services",
    bio: "Entomologist who designs our treatment protocols and runs quality audits on every chemical we use.",
  },
  {
    name: "Md. Jasim Uddin",
    role: "Operations Manager",
    bio: "Coordinates 50+ field technicians, scheduling and follow-up visits so no booking is missed.",
  },
  {
    name: "Nasrin Akter",
    role: "Customer Care Lead",
    bio: "Handles bookings and after-service follow-up. The person you will hear from when you call.",
  },
] as const;

export const TRUST_LOGOS = [
  "BPCA Certified",
  "ISO 9001 Procedures",
  "Dhaka-Chittagong Wide",
  "Licensed & Insured",
  "Family & Pet Safe",
] as const;

export const BLOG_POSTS = [
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
  },
] as const;