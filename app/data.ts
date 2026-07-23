export const STATS = [
  { value: "10K", suffix: "+", label: "Professionals trained for exceptional career success" },
  { value: "200", suffix: "+", label: "Sessions delivered with unmatched learning excellence" },
  { value: "5K", suffix: "+", label: "Active learners engaged in dynamic courses" },
];

export const CLIENTS = [
  "Reliance Industries",
  "HCL",
  "IBM",
  "CRIF",
  "ADP",
  "Bayer",
];

export const CAT_FRAMEWORK = [
  {
    step: "01",
    title: "Concept",
    description: "Foundational knowledge for deep subject understanding.",
  },
  {
    step: "02",
    title: "Application",
    description: "Practical implementation through real-world scenarios.",
  },
  {
    step: "03",
    title: "Tools",
    description: "Resources and techniques for effective skill mastery.",
  },
];

export const EDGE_POINTS = [
  {
    title: "Tailored Solutions",
    description: "Programs customized to your organization's goals and challenges.",
  },
  {
    title: "Expert Guidance",
    description: "Learn from industry leaders with real-world success.",
  },
  {
    title: "Innovative Framework",
    description: "Proprietary methods for impactful, application-driven results.",
  },
  {
    title: "Advanced Technology",
    description: "State-of-the-art LMS for seamless learning experiences.",
  },
  {
    title: "Diverse Offerings",
    description: "Courses across industries, skill levels, and emerging fields.",
  },
  {
    title: "Proven Impact",
    description: "Trusted by leading organizations for measurable ROI.",
  },
  {
    title: "Flexible Delivery",
    description: "Online and offline options tailored to your needs.",
  },
];

export const DOMAINS = [
  { title: "Product & Innovation Hub" },
  { title: "Gen-AI Mastery" },
  { title: "Leadership Elevation" },
  { title: "Tech & Data Insights" },
  { title: "Operations Excellence" },
  { title: "Digital Enterprise" },
  { title: "Fintech Innovation Lab" },
];

export const COURSE_SEGMENTS = [
  {
    title: "Program Specific",
    description: "Certificate, Executive, Post Graduate Certificate",
  },
  {
    title: "Industry Specific",
    description: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
  },
  {
    title: "Topic Specific",
    description: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
  },
  {
    title: "Level Specific",
    description: "Senior Leadership, Mid-Career Professionals, Freshers",
  },
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Skill Gap Analysis",
    description: "Assess team skill gaps and developmental needs.",
  },
  {
    step: 2,
    title: "Customized Training Plan",
    description: "Create a tailored roadmap addressing organizational goals.",
  },
  {
    step: 3,
    title: "Flexible Program Delivery",
    description: "Deliver adaptable programs aligned with industry and organizational needs.",
  },
];

export const FAQ_CATEGORIES = ["About the Course", "About the Delivery", "Miscellaneous"] as const;

export const FAQS: Record<(typeof FAQ_CATEGORIES)[number], { question: string; answer: string }[]> = {
  "About the Course": [
    {
      question: "What types of corporate training programs does Accredian offer?",
      answer:
        "We offer Certificate, Executive, and Post Graduate Certificate programs spanning technology, leadership, and domain-specific tracks — each built on the CAT Framework of Concept, Application, and Tools.",
    },
    {
      question: "What domain specializations are available?",
      answer:
        "Product & Innovation, Gen-AI Mastery, Leadership Elevation, Tech & Data Insights, Operations Excellence, Digital Enterprise, and Fintech Innovation Lab.",
    },
  ],
  "About the Delivery": [
    {
      question: "Is training delivered online or in person?",
      answer:
        "Both. Programs are available online, offline, or in a blended format, tailored to your organization's operating rhythm.",
    },
    {
      question: "How long does a typical program run?",
      answer:
        "Most enterprise cohorts run 6–12 weeks with weekly live sessions, though timelines flex to match your team's bandwidth and goals.",
    },
  ],
  Miscellaneous: [
    {
      question: "Can programs be customized per department?",
      answer:
        "Yes — we run a skill-gap analysis per team and build a training plan specific to each department's goals before a single session is scheduled.",
    },
    {
      question: "Do you provide certification on completion?",
      answer:
        "Every participant receives a verifiable Accredian completion credential, and select programs carry co-branded certification with partner institutions.",
    },
  ],
};

export const TESTIMONIALS = [
  {
    company: "ADP",
    quote:
      "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
  },
  {
    company: "Bayer",
    quote:
      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
  },
];
