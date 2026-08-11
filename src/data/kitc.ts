export const ORG = {
  shortName: "KITC",
  legalName: "Kakatiya Industrial Training Center and Association",
  tagline: "Be Focused. Be Determined. Be Empowered.",
  cin: "U88900TS2023NPL176600",
  registered: "30 August 2023",
  entityType: "Non-profit company limited by shares (NGO)",
  sector: "Social work activities without accommodation — vocational training & youth employment",
  phone: "+91 90000 00000",
  whatsapp: "https://wa.me/message/YLCFAC6W2B2HP1",
  instagram: "https://instagram.com/kakatheeyaindustrialtraining",
  email: "info@kakatheeyagroup.com",
  registeredAddress:
    "House No. 2-23, MIGH-23, APHB Colony, Medchal Village, Medchal, K.V. Rangareddy, Telangana 501401",
} as const;

export const CENTERS = [
  {
    id: "medchal",
    name: "Medchal Centre",
    address:
      "House No. 2-23, MIGH-23, APHB Colony, Medchal Village, Medchal, K.V. Rangareddy, Telangana 501401",
    mapQuery: "APHB Colony, Medchal Village, Medchal, Rangareddy, Telangana 501401",
  },
  {
    id: "alwal",
    name: "Alwal Centre",
    address: "Alwal, Secunderabad, Hyderabad, Telangana 500010",
    mapQuery: "Alwal, Secunderabad, Hyderabad, Telangana 500010",
  },
] as const;

export const IMPACT = [
  { label: "Students upskilled & employed", value: "250+" },
  { label: "Hiring partners", value: "10+" },
  { label: "Training centres", value: "2" },
  { label: "Short-course fee", value: "Free" },
] as const;

export type Program = {
  slug: string;
  title: string;
  track: "short-term" | "industrial";
  duration: string;
  fee: string;
  eligibility: string;
  summary: string;
  outcomes: string[];
  modules: { title: string; points: string[] }[];
};

export const PROGRAMS: Program[] = [
  {
    slug: "vocational-soft-skills",
    title: "Vocational & Soft Skills Programme",
    track: "short-term",
    duration: "35 days",
    fee: "Free",
    eligibility: "Age 18–30, 10th class or above. Priority to economically weaker households.",
    summary:
      "A 35-day free programme combining accounting software, computer basics and spoken English, with job placement assistance at the end of the course.",
    outcomes: [
      "Job-ready in accounting entry, billing and back-office roles",
      "Confident spoken English for interviews",
      "Placement assistance with our hiring partners",
      "Course completion certificate from KITC",
    ],
    modules: [
      {
        title: "Accounting & Finance",
        points: [
          "Tally fundamentals: ledgers, vouchers, inventory",
          "GST concepts, invoicing and return basics",
          "Day-book, bank reconciliation and reporting practice",
        ],
      },
      {
        title: "Computer Basics",
        points: [
          "Windows, files and folders, printing and scanning",
          "MS Word and Excel for office work",
          "Email, internet safety and digital payments",
        ],
      },
      {
        title: "Spoken English & Life Skills",
        points: [
          "Everyday spoken English and workplace vocabulary",
          "Interview practice and self-introduction",
          "Values, discipline, time management and confidence building",
        ],
      },
    ],
  },
  {
    slug: "industrial-training-cse",
    title: "Industrial Training — Computer Science (CSE)",
    track: "industrial",
    duration: "6 months",
    fee: "Subsidised — confirm at enrolment",
    eligibility: "Diploma / B.Tech students and recent graduates in CSE or IT",
    summary:
      "Six months of industry-aligned practical training for CSE students, with academic project support and internship guidance.",
    outcomes: [
      "Working knowledge of a full development workflow",
      "Completed academic project with documentation",
      "Internship and placement guidance",
    ],
    modules: [
      {
        title: "Programming foundations",
        points: ["Problem solving in C / Python", "Data structures practice", "Version control basics"],
      },
      {
        title: "Application development",
        points: ["Databases and SQL", "Web application build", "Testing and deployment basics"],
      },
      {
        title: "Project & career",
        points: ["Academic project work support", "Documentation and viva preparation", "Interview readiness"],
      },
    ],
  },
  {
    slug: "industrial-training-ece",
    title: "Industrial Training — Electronics & Communication (ECE)",
    track: "industrial",
    duration: "6 months",
    fee: "Subsidised — confirm at enrolment",
    eligibility: "Diploma / B.Tech students and recent graduates in ECE",
    summary:
      "Hands-on electronics and communication training covering circuits, embedded systems and lab practice, with project support.",
    outcomes: [
      "Practical circuit and embedded lab experience",
      "Completed academic project with documentation",
      "Internship and placement guidance",
    ],
    modules: [
      {
        title: "Circuits & instrumentation",
        points: ["Analog and digital circuit practice", "Measurement and testing instruments", "PCB fundamentals"],
      },
      {
        title: "Embedded systems",
        points: ["Microcontroller programming", "Sensors and interfacing", "IoT introduction"],
      },
      {
        title: "Project & career",
        points: ["Academic project work support", "Technical documentation", "Interview readiness"],
      },
    ],
  },
  {
    slug: "industrial-training-eee",
    title: "Industrial Training — Electrical & Electronics (EEE)",
    track: "industrial",
    duration: "6 months",
    fee: "Subsidised — confirm at enrolment",
    eligibility: "Diploma / B.Tech students and recent graduates in EEE",
    summary:
      "Practical electrical training on panels, motors, drives and safety practices used on real industrial sites.",
    outcomes: [
      "Site-ready understanding of panels and drives",
      "Electrical safety discipline",
      "Internship and placement guidance",
    ],
    modules: [
      {
        title: "Power & machines",
        points: ["Transformers, motors and generators", "Starters, drives and control panels", "Load calculations"],
      },
      {
        title: "Site practice",
        points: ["Wiring and earthing standards", "Electrical safety and PPE", "Maintenance routines"],
      },
      {
        title: "Project & career",
        points: ["Academic project work support", "Report preparation", "Interview readiness"],
      },
    ],
  },
  {
    slug: "industrial-training-mechanical",
    title: "Industrial Training — Mechanical Engineering",
    track: "industrial",
    duration: "6 months",
    fee: "Subsidised — confirm at enrolment",
    eligibility: "Diploma / B.Tech students and recent graduates in Mechanical",
    summary:
      "Workshop-led mechanical training covering drawing, machining, maintenance and quality practice.",
    outcomes: [
      "Shop-floor familiarity and safety discipline",
      "CAD and drawing reading ability",
      "Internship and placement guidance",
    ],
    modules: [
      {
        title: "Design & drawing",
        points: ["Engineering drawing reading", "CAD fundamentals", "Tolerances and fits"],
      },
      {
        title: "Manufacturing practice",
        points: ["Lathe, drilling and welding basics", "Preventive maintenance", "Quality checks and metrology"],
      },
      {
        title: "Project & career",
        points: ["Academic project work support", "Report preparation", "Interview readiness"],
      },
    ],
  },
  {
    slug: "industrial-training-civil",
    title: "Industrial Training — Civil Engineering",
    track: "industrial",
    duration: "6 months",
    fee: "Subsidised — confirm at enrolment",
    eligibility: "Diploma / B.Tech students and recent graduates in Civil",
    summary:
      "Site-oriented civil training covering surveying, estimation, materials testing and construction supervision.",
    outcomes: [
      "Ability to read drawings and support site supervision",
      "Estimation and billing exposure",
      "Internship and placement guidance",
    ],
    modules: [
      {
        title: "Survey & drawings",
        points: ["Levelling and total station basics", "Structural drawing reading", "AutoCAD fundamentals"],
      },
      {
        title: "Site & materials",
        points: ["Concrete and materials testing", "Estimation and billing", "Site safety and supervision"],
      },
      {
        title: "Project & career",
        points: ["Academic project work support", "Report preparation", "Interview readiness"],
      },
    ],
  },
];

export const BRANCHES = ["CSE", "ECE", "EEE", "Mechanical", "Civil"] as const;

export const STORIES = [
  {
    name: "Ravi K.",
    role: "Accounts Assistant, Hyderabad",
    quote:
      "I finished the 35-day course and got my first job within a month. Tally and spoken English made the difference in my interview.",
  },
  {
    name: "Sushma P.",
    role: "Back-office Executive, Secunderabad",
    quote:
      "I had never used a computer before joining. The trainers were patient and today I handle billing for a whole branch.",
  },
  {
    name: "Mahesh R.",
    role: "Diploma EEE, Industrial Training batch",
    quote:
      "Six months of panel and drive practice gave me confidence on site. My project work was completed with full support.",
  },
];

export const PARTNER_NOTE =
  "We work with 10+ recruiter partners across Hyderabad in retail, manufacturing, BPO and accounting services.";
