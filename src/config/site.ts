
export type Project = {
  title: string;
  blurb: string;
  story?: string;
  stack: string[];
  year: string;
  links: { live?: string; source?: string };
  featured?: boolean;
  status?: string;
  image?: string;
  categories?: ("Frontend" | "Backend" | "Fullstack")[];
};

export type Job = {
  company: string;
  role: string;
  period: string;
  blurb: string;
  url?: string;
};

export type Education = {
  institution: string;
  degree: string;
  period: string;
  score: string;
  location?: string;
};

export type Certification = {
  name: string;
  issuer: string;
  year?: string;
  badge?: string;
  url?: string;
};

export type FreelanceProject = {
  title: string;
  category: string;
  description: string;
  overview: string;
  responsibilities: string[];
  technologies: string[];
  fullStack: string[];
};

export type Post = {
  title: string;
  summary: string;
  date: string;
  url: string;
  readingTime?: string;
};

export type OpenSourceContribution = {
  title: string;
  repo: string;
  prNumber: number;
  url: string;
  status: "Merged";
  description: string;
  technologies: string[];
};

export const site = {
  // =========================================================
  // PERSONAL INFORMATION
  // =========================================================

  name: "Sai Krishna Reddy",

  firstName: "Sai Krishna",

  url: "https://www.saikrishnareddy.dev",

  quote: {
    text: "The best way to predict the future is to build it.",
    author: "Peter Drucker",
  },

  profileImages: [
    "/profile.webp",
    "/profile2.webp",
  ],

  bannerImage: "/social-banner.gif",

  socialBannerImage: "/social-banner.gif",

  initials: "SKR",

  role: "Java Full Stack Developer",

  location: "Mysuru, India",

  timezone: "Asia/Kolkata",

  email: "krishnareddy1604k@gmail.com",

  phone: "+91 7569007408",

  greeting: "Hey, I'm Sai Krishna",

  tagline:
    "Java Full Stack Developer building Spring Boot and React applications, REST APIs, and AI-powered backend systems.",

  // =========================================================
  // ABOUT
  // =========================================================

  about: [
    "I'm Sai Krishna Reddy, a Specialist Programmer L1 — Java Full Stack Developer Trainee at Infosys with hands-on experience building Spring Boot and React.js applications, REST APIs, and AI-powered backend features.",

    "I work across Java 21, Spring Boot, Spring AI, React.js, TypeScript, Node.js, Express.js, MySQL, MariaDB, MongoDB, and RabbitMQ, and I'm trained in microservices architecture, AWS, Docker, and CI/CD workflows.",

    "I hold a B.Tech in Computer Science from Vellore Institute of Technology, Amaravathi (CGPA: 8.68) and am certified as an AWS Certified Cloud Practitioner, MongoDB Database Administrator, Oracle OCI Generative AI Professional, and Anthropic Claude Certified Developer.",
  ],

  tldr: [
    "Specialist Programmer L1 at Infosys.",
    "Building Spring Boot, Spring AI & React apps.",
    "AWS, MongoDB, Oracle OCI & Anthropic Certified.",
    "B.Tech CS @ VIT Amaravathi (8.68 CGPA).",
  ],

  // =========================================================
  // CURRENT STATUS
  // =========================================================

  status: {
    available: true,

    availableText: "open to software engineering opportunities",

    nowLearning:
      "Spring AI • Microservices • System Design • AWS & Cloud Native",

    nowBuilding:
      "AI-powered full-stack & Spring Boot applications",

    nowListening:
      "focus playlists",
  },

  // =========================================================
  // SOCIAL LINKS
  // =========================================================

  socials: {
    github:
      "https://github.com/krishnareddy756",

    twitter:
      "",

    linkedin:
      "https://www.linkedin.com/in/sai-krishna-reddy-devloper/",

    leetcode:
      "https://leetcode.com/u/krishnareddy_/",

    email:
      "mailto:krishnareddy1604k@gmail.com",

    resume:
      "https://drive.google.com/file/d/1TjFeERb0bQjEh2RzdtrKPgVG77sOQ9JF/view?usp=sharing",

    discord:
      "",

    medium:
      "",
  },

  // =========================================================
  // EXPERIENCE
  // =========================================================

  experience: [
    {
      company: "Infosys",
      role: "Specialist Programmer L1 — Java Full Stack Developer Trainee",
      period: "Jun 2026 – Present",
      blurb:
        "Building full-stack applications with Spring Boot and React.js using layered architecture and REST APIs. Adding LLM-powered backend features to Spring Boot applications using Spring AI and implementing asynchronous messaging and event-based integration with RabbitMQ. Integrating frontend and backend modules, resolving application issues, and utilizing Docker, AWS, Git, and GitHub across deployment exercises and collaborative Agile workflows.",
      url: "https://www.infosys.com/",
    },
  ] as Job[],

  // =========================================================
  // FREELANCE PROJECTS
  // =========================================================

  freelanceProjects: [] as FreelanceProject[],

  // =========================================================
  // PROJECTS
  // =========================================================

  projects: [
    {
      title: "UnitedAir AI",

      blurb:
        "An AI-powered flight-booking assistant built with Java 21, Spring Boot, Spring AI, Azure OpenAI, MariaDB Vector Search, and React that answers policy questions and automates booking workflows.",

      story:
        "UnitedAir AI is a full-stack flight-booking assistant engineered with Spring Boot, Spring AI, and Azure OpenAI to answer complex airline policy questions grounded across more than 8 knowledge-base documents.\n\nIt features a complete Retrieval-Augmented Generation (RAG) pipeline handling document ingestion, vector embeddings, and MariaDB vector search with a configurable 0.50 similarity threshold for accurate policy retrieval and cited answers.\n\nBeyond Q&A, the system integrates 4 autonomous agent tools for live flight search, booking management, check-in status lookups, and support escalation, backed by conversational memory for the last 10 turns, UUID-based sessions, and a 30-minute session timeout.",

      stack: [
        "Java 21",
        "Spring Boot",
        "Spring AI",
        "Azure OpenAI",
        "RAG",
        "MariaDB",
        "React",
        "REST APIs",
      ],

      year: "2026",

      links: {
        source: "https://github.com/krishnareddy756",
      },

      featured: true,

      image: "/project-images/voice-rag.webp",

      categories: [
        "Fullstack",
        "Backend",
      ],
    },

    {
      title: "SigmaGPT",

      blurb:
        "A full-stack RAG AI chatbot built with GPT-4, LangChain, FAISS vector search, React, and Express.js for answering questions over web data and uploaded PDF/DOCX documents.",

      story:
        "SigmaGPT is a full-stack AI assistant combining GPT-4, LangChain, and Retrieval-Augmented Generation (RAG) to deliver accurate, document-grounded answers from both live web data and user-uploaded PDF/DOCX files.\n\nThe backend implements automated document parsing, text chunking, vector embeddings, and FAISS vector search to retrieve relevant context before streaming responses. The React frontend and Express.js backend support real-time streaming chat and are deployed across Vercel and Render.\n\nTo ensure reliability, the repository is equipped with a GitHub Actions CI pipeline that runs automated dependency installation and build verification checks on every pull request and push to the main branch.",

      stack: [
        "React",
        "Express.js",
        "Node.js",
        "GPT-4",
        "LangChain",
        "RAG",
        "FAISS",
        "GitHub Actions",
        "Vercel",
        "Render",
      ],

      year: "2026",

      links: {
        source: "https://github.com/krishnareddy756",
      },

      featured: true,

      image: "/project-images/linkshub.webp",

      categories: [
        "Fullstack",
        "Backend",
        "Frontend",
      ],
    },
  ] as Project[],

  // =========================================================
  // SKILLS
  // =========================================================

  skills: [
    // Languages
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "SQL",
    "Bash",

    // Frontend
    "React",
    "Redux",
    "HTML",
    "CSS",
    "Bootstrap",

    // Backend & Messaging
    "Spring Boot",
    "Spring AI",
    "Node.js",
    "Express.js",
    "REST APIs",
    "RabbitMQ",

    // Databases
    "MySQL",
    "MariaDB",
    "MongoDB",

    // Cloud & DevOps
    "AWS",
    "Docker",
    "Jenkins",
    "Git",
    "GitHub",
    "GitHub Actions",
    "CI/CD",
    "Linux",

    // AI & Agentic Tools
    "Azure OpenAI",
    "GPT-4",
    "LangChain",
    "RAG",
    "FAISS",
    "Claude Code",
    "Devin",
    "GitHub Copilot",
    "Kiro",
  ],

  // =========================================================
  // EDUCATION
  // =========================================================

  education: [
    {
      institution: "Vellore Institute of Technology, Amaravathi",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2022 – 2026",
      score: "CGPA: 8.68",
      location: "Amaravathi, India",
    },
    {
      institution: "Shastra Junior College",
      degree: "Intermediate (MPC)",
      period: "2020 – 2022",
      score: "Percentage: 95.6%",
      location: "India",
    },
    {
      institution: "Jai Bharath High School",
      degree: "Secondary School Certificate (SSC)",
      period: "2019 – 2020",
      score: "Percentage: 99%",
      location: "India",
    },
  ] as Education[],

  // =========================================================
  // CERTIFICATIONS
  // =========================================================

  certifications: [
    {
      name: "AWS Certified Cloud Practitioner (CCP)",
      issuer: "Amazon Web Services (AWS)",
      year: "2024",
    },
    {
      name: "MongoDB Database Administrator",
      issuer: "MongoDB University",
      year: "2024",
    },
    {
      name: "Oracle Cloud Infrastructure 2024 Generative AI Professional",
      issuer: "Oracle",
      year: "2024",
    },
    {
      name: "Claude Certified Developer - Foundations",
      issuer: "Anthropic",
      year: "2024",
    },
  ] as Certification[],

  // =========================================================
  // WRITING
  // =========================================================

  writing: [] as Post[],

  // =========================================================
  // OPEN SOURCE
  // =========================================================

  openSourceContributions: [] as OpenSourceContribution[],

  // =========================================================
  // GITHUB
  // =========================================================

  github: {
    username: "krishnareddy756",

    contributionsLastYear: "500+",
  },

  // =========================================================
  // FOOTER
  // =========================================================

  footerNote: "Built by Sai Krishna Reddy",
} as const;

export type Site = typeof site;
