// Site data — single source of truth.
// Edit this file to update content across the site.

export type Link = { label: string; href: string };

export const profile = {
  name: "Cristian López Fernández",
  // Display name (first name + initials style, used in headers)
  short: "Cristian López Fernández",
  // Handle used in chrome
  handle: "crilofer",
  // Role / tagline
  role: "Head of AI Engineering",
  // One-line elevator
  tagline: "Building AI-native systems & engineering teams that ship.",
  // Long form intro, used in the home page "About" column
  about: [
    "I'm an engineering leader with 12+ years in tech and 6+ years leading and scaling engineering teams in fintech.",
    "Currently leading AI Engineering at Tymit, shipping customer-facing AI products and internal tooling that accelerate the business — including multi-agent systems in production and a proprietary agentic-memory manager.",
    "Before this I was Director of Engineering at Baraka (YC S21), built a lending platform from scratch at Wio Bank, and was employee #1 at Tymit, taking the platform from a monolith to microservices on AWS.",
    "I care about high-availability distributed systems, AI-native workflows, and growing strong engineering cultures through hiring, mentoring and clear technical direction.",
  ],
  // Short bio card
  bio: "Engineering leader in fintech & AI. Ex-Tymit, Baraka, Wio Bank, Santander UK. Based in Dubai, originally from Córdoba, Spain.",
  location: "Dubai, United Arab Emirates",
  origin: "Córdoba, Spain",
};

export const contact: Link[] = [
  { label: "Email", href: "mailto:crilopfer@gmail.com" },
  { label: "GitHub", href: "https://github.com/crilofer" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/crilopfer" },
  { label: "X", href: "https://x.com/crilofer" },
];

export type Experience = {
  company: string;
  url?: string;
  role: string;
  contract: "Full-time" | "Part-time" | "Contract";
  period: string;
  location: string;
  quote?: string;
  highlights: string[]; // plain text bullets; renderers add the marks
  tags: string[];
};

export const experiences: Experience[] = [
  {
    company: "Tymit",
    url: "https://tymit.com",
    role: "Head of AI Engineering",
    contract: "Full-time",
    period: "Jul 2025 — Present",
    location: "Dubai, UAE",
    quote: "The credit card, reinvented. A fintech bringing financial wellness to customers.",
    highlights: [
      "Leading Tymit's AI Engineering practice across customer-facing AI products and internal AI tooling — owning technical direction while staying hands-on in architecture and code for the most critical flows.",
      "Shipped customer-facing multi-agent systems powering self-service and in-app decisioning, with end-to-end evaluation, tracing and regression testing before every production rollout.",
      "Designing and building a proprietary Agentic Memory manager — coordinating short-term working memory with long-term episodic/semantic memory inside strict token budgets.",
      "Built internal developer-experience agents that automate repetitive work across the SDLC, measurably reducing time-to-market.",
      "Drove the agentisation of internal operations across Support, Ops and Engineering.",
      "Own the AI technical roadmap end-to-end: foundation-model evaluation, orchestration stack, guardrails, evals, observability, and the AI Engineering hiring plan.",
    ],
    tags: ["AI Engineering", "Multi-agent systems", "Evals", "LLM ops", "Leadership"],
  },
  {
    company: "Tymit",
    url: "https://tymit.com",
    role: "B2B Engineering Lead",
    contract: "Full-time",
    period: "Jan 2024 — Jul 2025",
    location: "Dubai, UAE",
    quote: "The credit card, reinvented. A fintech bringing financial wellness to customers.",
    highlights: [
      "Owned end-to-end delivery of technical integrations with strategic B2B partners, aligning engineering execution with commercial and product goals.",
      "Designed secure API and microservices architecture for partner integrations — scalability, observability and compliance in focus.",
      "Led and mentored the integrations engineering team; set delivery processes, technical standards and the review culture.",
      "Worked cross-functionally with Product, Commercial and external partners to unblock integrations and close launches.",
    ],
    tags: ["Microservices", "API design", "B2B", "Leadership"],
  },
  {
    company: "Baraka",
    url: "https://getbaraka.com",
    role: "Director of Engineering",
    contract: "Full-time",
    period: "Oct 2022 — Jan 2024",
    location: "Dubai, UAE",
    quote: "Educate, enable and empower everyone to invest. (YC S21)",
    highlights: [
      "Led an engineering organisation of 25 engineers across Back-end, Mobile, Web, DevOps and QA, reporting directly to the founding team.",
      "Owned architecture for the trading platform with a focus on high-availability, low-latency and security, aligned with regulatory requirements.",
      "Scaled the engineering org through hiring, mentoring and training programmes; introduced technical career paths and a structured review process.",
      "Worked closely with the ExCo team on product positioning and revenue-generating initiatives.",
    ],
    tags: ["Trading platform", "Low latency", "Org design", "Hiring"],
  },
  {
    company: "Wio Bank",
    url: "https://wio.io",
    role: "Technical Lead — Lending",
    contract: "Full-time",
    period: "May 2022 — Oct 2022",
    location: "Abu Dhabi, UAE",
    quote: "Banking As A Platform.",
    highlights: [
      "Built Wio Bank's lending platform from scratch, leading a team of 10 engineers (Back-end, Front-end, DevOps, QA).",
      "Defined MVP scope and platform architecture in close collaboration with stakeholders.",
      "Hired the team, set engineering processes, and managed third-party provider relationships end-to-end.",
    ],
    tags: ["Lending", "Greenfield", "Team building"],
  },
  {
    company: "Tymit",
    url: "https://tymit.com",
    role: "Engineering Lead",
    contract: "Full-time",
    period: "Mar 2021 — May 2022",
    location: "London, UK",
    quote: "The credit card, reinvented.",
    highlights: [
      "Promoted into the Lead role. Managed an engineering team of 15 engineers and owned backend architecture for scalable, reliable, secure systems.",
      "Partnered with stakeholders and Product on the company roadmap and technical decision-making.",
      "Kept hands-on contribution on customer-facing features alongside leadership responsibilities.",
    ],
    tags: ["Backend", "Team lead", "Architecture"],
  },
  {
    company: "Tymit",
    url: "https://tymit.com",
    role: "Principal Software Engineer",
    contract: "Full-time",
    period: "Feb 2018 — Mar 2021",
    location: "London, UK",
    quote: "Employee №1.",
    highlights: [
      "Built the initial product from scratch as a Grails/Groovy monolith to reach an early MVP. After ~1 year, led the migration to a Quarkus/Java microservices architecture to support company scale and clearer domain boundaries.",
      "Shipped core customer-facing capabilities end-to-end: Apple Pay & Google Pay wallets, Open Banking (PIS/AIS), Direct Debit, real-time authorisations and 3D Secure, and KYC.",
      "Owned technical onboarding as the team grew.",
    ],
    tags: ["Greenfield", "Microservices", "Payments", "Open Banking"],
  },
  {
    company: "Universidad Rey Juan Carlos",
    url: "https://www.urjc.es",
    role: "Associate Lecturer",
    contract: "Part-time",
    period: "Jan 2019 — Aug 2021",
    location: "Madrid, Spain",
    quote: "High Performance Computing · Distributed Systems · Mobile App Development.",
    highlights: [
      "Associate Lecturer in the Department of Computing Science, Computer Architecture, Programming Languages and Systems, and Statistics and Operative Investigation.",
      "Taught High Performance Computing, Distributed Systems, and Mobile Application Development.",
    ],
    tags: ["Teaching", "Distributed systems"],
  },
  {
    company: "Santander UK",
    url: "https://www.santander.co.uk",
    role: "Senior Software Engineer",
    contract: "Full-time",
    period: "Sep 2017 — Feb 2018",
    location: "London, UK",
    quote: "A wholly owned subsidiary of the Spanish Santander Group.",
    highlights: [
      "R&D department — multiple innovation projects.",
      "Implemented a Blockchain solution for an internal project.",
      "Led the OCR project for identity document verification.",
    ],
    tags: ["R&D", "Blockchain", "OCR"],
  },
  {
    company: "BABEL",
    url: "https://babel.es/en",
    role: "Senior Software Engineer",
    contract: "Full-time",
    period: "Oct 2015 — Sep 2017",
    location: "Madrid, Spain",
    quote: "IT consulting for BBVA, Orange, Telefónica, Sanitas, HM Hospitales.",
    highlights: [
      "Delivered projects for BBVA, Orange, Telefónica, Sanitas and HM Hospitales.",
      "Mostly an individual contributor; also led teams of 5–6 engineers using agile methodologies, supporting on technical design and reviews.",
    ],
    tags: ["Consulting", "Enterprise"],
  },
  {
    company: "Grupo Comunica",
    url: "http://www.grupocomunica.com/",
    role: "Junior Software Engineer",
    contract: "Full-time",
    period: "May 2013 — Sep 2014",
    location: "Córdoba, Spain",
    quote: "Global telecommunications operator.",
    highlights: [
      "Developed Android & iOS applications.",
      "Built an audio-visual streaming project.",
    ],
    tags: ["Mobile", "Streaming"],
  },
];

export type Project = {
  title: string;
  role: string;     // what he did
  year: string;
  context: string;  // the company / setting
  blurb: string;
  highlights: string[];
  link?: { label: string; href: string };
  stack: string[];
  kind: "ai" | "platform" | "people" | "open-source";
};

// Curated "projects" — concrete, named bodies of work that show craft
export const projects: Project[] = [
  {
    title: "Agentic Memory Manager",
    role: "Architect & lead engineer",
    year: "2025",
    context: "Tymit",
    blurb:
      "A proprietary memory layer for production agents — coordinating short-term working memory with long-term episodic and semantic memory inside strict token budgets.",
    highlights: [
      "Tackles the hardest problem in long-running, multi-turn, multi-agent conversations: keeping agents coherent across sessions without blowing cost or latency.",
      "Retrieval-augmented context assembly under hard token budgets, with evals and tracing integrated into the rollout pipeline.",
    ],
    link: { label: "Tymit", href: "https://tymit.com" },
    stack: ["LLM orchestration", "Vector retrieval", "Evals", "Observability"],
    kind: "ai",
  },
  {
    title: "Customer-Facing Multi-Agent System",
    role: "Lead engineer",
    year: "2025",
    context: "Tymit",
    blurb:
      "Multi-agent system shipped in the Tymit product, powering self-service and in-app decisioning with end-to-end evaluation, tracing and regression testing.",
    highlights: [
      "Pre-production rollout gated on a regression suite: every agent change has to pass eval + trace checks before merge.",
      "Designed for production: traces shipped to observability, failures routed to humans, costs metered per intent.",
    ],
    link: { label: "Tymit", href: "https://tymit.com" },
    stack: ["Agents", "Tool use", "Guardrails", "Evals"],
    kind: "ai",
  },
  {
    title: "Developer-Experience Agents",
    role: "Lead engineer",
    year: "2025",
    context: "Tymit — internal",
    blurb:
      "Internal agents that automate repetitive work across the SDLC, measurably reducing time-to-market and freeing engineers for higher-leverage work.",
    highlights: [
      "Codifies engineering conventions and review patterns into reusable agent skills.",
      "Tight feedback loop with the engineering team — usage data drives the roadmap.",
    ],
    stack: ["Agents", "Internal tools", "DX"],
    kind: "ai",
  },
  {
    title: "Tymit Platform — Monolith to Microservices",
    role: "Principal engineer, employee №1",
    year: "2018 — 2021",
    context: "Tymit",
    blurb:
      "Built the initial product from scratch as a Grails/Groovy monolith, then led the migration to Quarkus/Java microservices on AWS as the company scaled.",
    highlights: [
      "Owned end-to-end delivery of customer-facing features: Apple Pay & Google Pay, Open Banking PIS/AIS, Direct Debit, real-time authorisations, 3D Secure, KYC.",
      "Migrated to a microservices architecture to support scale and clearer domain boundaries.",
    ],
    link: { label: "Tymit", href: "https://tymit.com" },
    stack: ["Grails", "Quarkus", "AWS", "Microservices", "Payments"],
    kind: "platform",
  },
  {
    title: "Wio Bank — Lending Platform",
    role: "Technical Lead (greenfield)",
    year: "2022",
    context: "Wio Bank",
    blurb:
      "Built Wio Bank's lending platform from scratch, leading a team of 10 engineers across back-end, front-end, DevOps and QA.",
    highlights: [
      "Defined MVP scope and platform architecture in close collaboration with stakeholders.",
      "Hired the team, set engineering processes, and managed third-party provider relationships end-to-end.",
    ],
    link: { label: "Wio", href: "https://wio.io" },
    stack: ["Lending", "Greenfield", "Cloud"],
    kind: "platform",
  },
  {
    title: "Engineering Org at Baraka",
    role: "Director of Engineering",
    year: "2022 — 2024",
    context: "Baraka (YC S21)",
    blurb:
      "Scaled the engineering organisation to 25 engineers across Back-end, Mobile, Web, DevOps and QA, reporting directly to the founding team.",
    highlights: [
      "Introduced technical career paths and a structured review process; scaled through hiring, mentoring and training programmes.",
      "Owned architecture for the trading platform with a focus on high-availability, low-latency and security.",
    ],
    link: { label: "Baraka", href: "https://getbaraka.com" },
    stack: ["Org design", "Trading platform", "Hiring", "Mentoring"],
    kind: "people",
  },
  {
    title: "SmartARGlass",
    role: "MSc thesis",
    year: "2015",
    context: "Universidad de Granada",
    blurb:
      "Master's thesis: augmented reality on smart devices — early exploration of computer vision and on-device rendering constraints.",
    highlights: [
      "Computer vision, on-device rendering, and the practical constraints of mobile AR hardware.",
    ],
    stack: ["Computer vision", "Mobile", "AR"],
    kind: "open-source",
  },
  {
    title: "RPiDomotic",
    role: "End-of-degree project",
    year: "2014",
    context: "Universidad de Córdoba",
    blurb:
      "A domotic system built on a Raspberry Pi — home automation with sensors, actuators and a small web UI.",
    highlights: [
      "Where the engineering habit started: tiny computer, real wiring, a thing you could turn the lights on with.",
    ],
    stack: ["Raspberry Pi", "IoT", "Linux"],
    kind: "open-source",
  },
];

export type Education = {
  school: string;
  url?: string;
  degree: string;
  grade: string;
  period: string;
  notes?: string;
  project?: { name: string; description: string };
};

export const education: Education[] = [
  {
    school: "Universidad de Granada",
    url: "https://www.ugr.es",
    degree: "MSc, Data Science and Computer Engineering",
    grade: "A",
    period: "2014 — 2015",
    project: {
      name: "SmartARGlass",
      description: "Master's thesis — augmented reality on smart devices.",
    },
  },
  {
    school: "Universidad de Córdoba",
    url: "https://www.uco.es",
    degree: "BEng, Computer Engineering",
    grade: "B+",
    period: "2010 — 2014",
    project: {
      name: "RPiDomotic",
      description: "End-of-degree project — domotic system using a Raspberry Pi.",
    },
  },
];

export const meta = {
  title: "Cristian López Fernández — Head of AI Engineering",
  description:
    "Personal site of Cristian López Fernández — Head of AI Engineering at Tymit. AI-native systems, multi-agent production work, and engineering leadership across fintech.",
  url: "https://crilofer.github.io",
};
