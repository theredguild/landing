export type MemberStat = {
  label: string;
  value: number;
};

export type SkillNode = {
  label: string;
  level: number;
  description?: string;
  icon?: string;
  requires?: string;
};

export type SkillTier = {
  label: string;
  nodes: SkillNode[];
};

export type CareerPathNode = {
  id: string;
  label: string;
  level: number;
  description: string;
  stage: string;
  requires?: string | string[];
  icon?: string;
};

export type MemberSocials = {
  github?: string;
  x?: string;
  linkedin?: string;
  website?: string;
};

export type MemberProfile = {
  id: string;
  name: string;
  alias: string;
  title: string;
  level: number;
  className: string;
  bio: string;
  highlights: string[];
  specialties: string[];
  radar: MemberStat[];
  skillTree: SkillTier[];
  careerPath?: CareerPathNode[];
  githubUsername?: string;
  socials?: MemberSocials;
  avatar?: string;
};

export const members: MemberProfile[] = [
  {
    id: "mattaereal",
    name: "Matías Aereal Aeón",
    alias: "matta",
    title: "Security Knowmad",
    level: 5,
    className: "Founder",
    githubUsername: "mattaereal",
    avatar: "https://github.com/mattaereal.png?size=256",
    socials: {
      github: "https://github.com/mattaereal",
      x: "https://x.com/mattaereal",
    },
    bio: "LatAm-first security educator coordinating threat intel and frontline awareness. Builds playbooks and turns incidents into learnable quests.",
    highlights: [
      "Leads public phishing response drills",
      "Maintains guild threat intel feeds",
      "Runs security workshops across LATAM",
    ],
    specialties: ["Gamified Education", "Stage Presence", "Barefoot Walker", "Paranoid", "SEAL: Initiative Lead", "SEAL: Technical Council", "Producer"],
    radar: [
      { label: "SOCIAL", value: 84 },
      { label: "SECURITY", value: 72 },
      { label: "DEVELOPMENT", value: 60 },
      { label: "EDUCATION", value: 92 },
      { label: "OPERATIONS", value: 78 },
      { label: "ART", value: 70 },
    ],
    skillTree: [
      {
        label: "Core",
        nodes: [
          {
            label: "Threat Modeling",
            level: 4,
            description: "Maps likely attacker behavior and prioritizes defensive controls.",
            icon: "/assets/lights.svg",
          },
          {
            label: "Community Signals",
            level: 3,
            description: "Reads social and onchain indicators to detect active scam waves.",
            icon: "/assets/lettersn.svg",
          },
        ],
      },
      {
        label: "Paths",
        nodes: [
          {
            label: "Playbook Design",
            level: 3,
            description: "Turns incidents into reusable responder guides for distributed teams.",
            icon: "/assets/tree.svg",
            requires: "Threat Modeling",
          },
          {
            label: "Phishing Triage",
            level: 2,
            description: "Classifies malicious campaigns and routes evidence quickly.",
            icon: "/assets/flower.svg",
            requires: "Community Signals",
          },
        ],
      },
      {
        label: "Mastery",
        nodes: [
          {
            label: "Public Awareness",
            level: 4,
            description: "Designs outreach that helps users avoid real-world social engineering.",
            icon: "/assets/sun.svg",
            requires: "Playbook Design",
          },
          {
            label: "Incident Command",
            level: 3,
            description: "Coordinates multi-team response and communication during incidents.",
            icon: "/assets/temple.svg",
            requires: "Phishing Triage",
          },
        ],
      },
    ],
    careerPath: [
      {
        id: "matta-programming-basics",
        label: "Programming Basics",
        level: 2,
        description: "Technical baseline needed to evaluate attack vectors and tooling behavior.",
        stage: "Foundation",
        icon: "/assets/temple.svg",
      },
      {
        id: "matta-threat-modeling",
        label: "Threat Modeling",
        level: 4,
        description: "Prioritizes attacker paths and defensive controls for community-facing systems.",
        stage: "Foundation",
        requires: "Programming Basics",
        icon: "/assets/lights.svg",
      },
      {
        id: "matta-signal-analysis",
        label: "Signal Analysis",
        level: 3,
        description: "Interprets social and onchain signals to identify likely phishing campaigns.",
        stage: "Practice",
        requires: "Threat Modeling",
        icon: "/assets/lettersn.svg",
      },
      {
        id: "matta-phishing-triage",
        label: "Phishing Triage",
        level: 2,
        description: "Validates reports and routes actionable evidence to the right responders.",
        stage: "Practice",
        requires: "Signal Analysis",
        icon: "/assets/flower.svg",
      },
      {
        id: "matta-playbook-design",
        label: "Playbook Design",
        level: 3,
        description: "Converts incidents into repeatable response drills and guidance.",
        stage: "Leadership",
        requires: ["Threat Modeling", "Phishing Triage"],
        icon: "/assets/tree.svg",
      },
      {
        id: "matta-incident-command",
        label: "Incident Command",
        level: 3,
        description: "Coordinates cross-team communication and tactical incident decisions.",
        stage: "Leadership",
        requires: "Playbook Design",
        icon: "/assets/sun.svg",
      },
    ],
  },
  {
    id: "tincho",
    name: "Martin Abbatemarco",
    alias: "tincho",
    title: "Ethereum Security Researcher",
    level: 5,
    className: "Founder",
    githubUsername: "tinchoabbate",
    avatar: "https://github.com/tinchoabbate.png?size=256",
    socials: {
      github: "https://github.com/tinchoabbate",
      x: "https://x.com/tinchoabbate",
    },
    bio: "Original creator of DamnVulnerableDefi and co-creator of the Phishing Dojo.",
    highlights: [
      "Designs adversarial simulations",
      "Maintains exploit testing harnesses",
      "Writes post-incident advisories",
    ],
    specialties: ["Smart contracts", "Ethereum", "Auditing"],
    radar: [
      { label: "SOCIAL", value: 52 },
      { label: "SECURITY", value: 94 },
      { label: "DEVELOPMENT", value: 88 },
      { label: "EDUCATION", value: 66 },
      { label: "OPERATIONS", value: 50 },
      { label: "ART", value: 40 },
    ],
    skillTree: [
      {
        label: "Core",
        nodes: [
          {
            label: "Programming Fundamentals",
            level: 4,
            description: "Solid grounding in software engineering and systems behavior.",
            icon: "/assets/temple.svg",
          },
          {
            label: "Opcode Craft",
            level: 4,
            description: "Reads and reasons about low-level EVM execution semantics.",
            icon: "/assets/lights.svg",
            requires: "Programming Fundamentals",
          },
        ],
      },
      {
        label: "Paths",
        nodes: [
          {
            label: "Reverse Engineering",
            level: 4,
            description: "Dissects unknown behavior to reconstruct exploitable logic paths.",
            icon: "/assets/tree.svg",
            requires: "Programming Fundamentals",
          },
          {
            label: "Protocol Forensics",
            level: 4,
            description: "Analyzes incidents post-mortem to isolate root causes and impact.",
            icon: "/assets/lettersn.svg",
            requires: "Opcode Craft",
          },
        ],
      },
      {
        label: "Mastery",
        nodes: [
          {
            label: "EVM Edge Cases",
            level: 4,
            description: "Finds edge-condition bugs and undefined execution assumptions.",
            icon: "/assets/sun.svg",
            requires: "Reverse Engineering",
          },
          {
            label: "Disclosure Strategy",
            level: 3,
            description: "Packages findings into safe, coordinated and actionable disclosures.",
            icon: "/assets/flower.svg",
            requires: "Protocol Forensics",
          },
        ],
      },
    ],
    careerPath: [
      {
        id: "tincho-programming-fundamentals",
        label: "Programming Fundamentals",
        level: 4,
        description: "Deep software engineering baseline for low-level system analysis.",
        stage: "Foundation",
        icon: "/assets/temple.svg",
      },
      {
        id: "tincho-solidity-internals",
        label: "Solidity Internals",
        level: 4,
        description: "Understands compiler output and contract behavior across toolchains.",
        stage: "Foundation",
        requires: "Programming Fundamentals",
        icon: "/assets/lights.svg",
      },
      {
        id: "tincho-reverse-engineering",
        label: "Reverse Engineering",
        level: 4,
        description: "Reconstructs behavior from bytecode and artifacts under adversarial conditions.",
        stage: "Research",
        requires: "Programming Fundamentals",
        icon: "/assets/tree.svg",
      },
      {
        id: "tincho-protocol-forensics",
        label: "Protocol Forensics",
        level: 4,
        description: "Builds root-cause narratives from exploit traces and protocol internals.",
        stage: "Research",
        requires: ["Solidity Internals", "Reverse Engineering"],
        icon: "/assets/lettersn.svg",
      },
      {
        id: "tincho-evm-edge-cases",
        label: "EVM Edge Cases",
        level: 4,
        description: "Discovers brittle assumptions in unusual execution and state transitions.",
        stage: "Mastery",
        requires: "Protocol Forensics",
        icon: "/assets/sun.svg",
      },
      {
        id: "tincho-disclosure-strategy",
        label: "Disclosure Strategy",
        level: 3,
        description: "Shapes findings into coordinated, safe and practical public guidance.",
        stage: "Mastery",
        requires: "Protocol Forensics",
        icon: "/assets/flower.svg",
      },
    ],
  },
  {
    id: "dantesito",
    name: "Dante Martinez",
    alias: "dantesito",
    title: "Permanent Intern",
    level: 1,
    className: "Core contributor",
    githubUsername: "d4rm5",
    avatar: "https://github.com/d4rm5.png?size=256",
    socials: {
      github: "https://github.com/d4rm5",
      x: "https://x.com/dantesito",
    },
    bio: "Builds open-source tooling and research pipelines for safer development. Obsessed with repeatable, transparent security work.",
    highlights: [
      "Maintains open-source security kits",
      "Builds safe dev environments",
      "Creates audit automation routines",
    ],
    specialties: ["DevSecOps", "Tooling", "Research Ops"],
    radar: [
      { label: "SOCIAL", value: 63 },
      { label: "SECURITY", value: 72 },
      { label: "DEVELOPMENT", value: 74 },
      { label: "EDUCATION", value: 58 },
      { label: "OPERATIONS", value: 71 },
      { label: "ART", value: 46 },
    ],
    skillTree: [
      {
        label: "Core",
        nodes: [
          {
            label: "Automation Craft",
            level: 3,
            description: "Builds reliable scripts and task runners for security operations.",
            icon: "/assets/lights.svg",
          },
          {
            label: "Pipeline Design",
            level: 3,
            description: "Designs CI and analysis pipelines with clear security gates.",
            icon: "/assets/tree.svg",
          },
        ],
      },
      {
        label: "Paths",
        nodes: [
          {
            label: "Tooling Forge",
            level: 4,
            description: "Ships shared tooling that helps contributors audit faster and safer.",
            icon: "/assets/temple.svg",
            requires: "Automation Craft",
          },
          {
            label: "Safe Environments",
            level: 3,
            description: "Hardens local and cloud environments used for research and testing.",
            icon: "/assets/flower.svg",
            requires: "Pipeline Design",
          },
        ],
      },
      {
        label: "Mastery",
        nodes: [
          {
            label: "Open Source Ops",
            level: 4,
            description: "Maintains community tooling with quality controls and release discipline.",
            icon: "/assets/lettersn.svg",
            requires: "Tooling Forge",
          },
          {
            label: "Research Synthesis",
            level: 3,
            description: "Converts scattered technical signals into practical guild guidance.",
            icon: "/assets/sun.svg",
            requires: "Safe Environments",
          },
        ],
      },
    ],
    careerPath: [
      {
        id: "dante-programming-basics",
        label: "Programming Basics",
        level: 2,
        description: "Core coding fluency for secure automation and reproducible workflows.",
        stage: "Foundation",
        icon: "/assets/temple.svg",
      },
      {
        id: "dante-pipeline-design",
        label: "Pipeline Design",
        level: 3,
        description: "Builds CI and analysis pipelines with clear security constraints.",
        stage: "Foundation",
        requires: "Programming Basics",
        icon: "/assets/tree.svg",
      },
      {
        id: "dante-automation-craft",
        label: "Automation Craft",
        level: 3,
        description: "Turns repetitive security workflows into dependable tooling.",
        stage: "Practice",
        requires: "Programming Basics",
        icon: "/assets/lights.svg",
      },
      {
        id: "dante-safe-environments",
        label: "Safe Environments",
        level: 3,
        description: "Hardens local and cloud environments for safer testing and research.",
        stage: "Practice",
        requires: "Pipeline Design",
        icon: "/assets/flower.svg",
      },
      {
        id: "dante-tooling-forge",
        label: "Tooling Forge",
        level: 4,
        description: "Ships internal and public tooling that speeds up security operations.",
        stage: "Delivery",
        requires: ["Automation Craft", "Safe Environments"],
        icon: "/assets/temple.svg",
      },
      {
        id: "dante-research-synthesis",
        label: "Research Synthesis",
        level: 3,
        description: "Converts fragmented technical findings into usable team guidance.",
        stage: "Delivery",
        requires: "Tooling Forge",
        icon: "/assets/sun.svg",
      },
    ],
  },
  {
    id: "manut0r",
    name: "Manuel Marquez",
    alias: "Manut0r",
    title: "Lead Developer",
    level: 1,
    className: "Lead",
    githubUsername: "marquezmanu",
    avatar: "https://github.com/marquezmanu.png?size=256",
    socials: {
      github: "https://github.com/marquezmanu",
      x: "https://x.com/manut0r",
      linkedin: "https://www.linkedin.com/in/manut0r",
      website: "https://manut0r.dev",
    },
    bio: "Lead developer for the Phishing Dojo. Focused on software development and front-end execution with strong UI/UX interface design for security education products.",
    highlights: [
      "Leads Phishing Dojo feature implementation",
      "Builds maintainable front-end architecture",
      "Owns UI/UX quality and interaction polish",
    ],
    specialties: ["Software Development", "Front-end Engineering", "UI/UX Interfaces", "Product Delivery"],
    radar: [
      { label: "SOCIAL", value: 62 },
      { label: "SECURITY", value: 52 },
      { label: "DEVELOPMENT", value: 84 },
      { label: "EDUCATION", value: 60 },
      { label: "OPERATIONS", value: 78 },
      { label: "ART", value: 86 },
    ],
    skillTree: [
      {
        label: "Core",
        nodes: [
          {
            label: "Software Development",
            level: 4,
            description: "Builds production-ready features with clean architecture and shipping discipline.",
            icon: "/assets/temple.svg",
          },
          {
            label: "Front-end Engineering",
            level: 4,
            description: "Delivers scalable client-side systems and component libraries.",
            icon: "/assets/tree.svg",
            requires: "Software Development",
          },
        ],
      },
      {
        label: "Paths",
        nodes: [
          {
            label: "UI Systems",
            level: 4,
            description: "Designs coherent visual systems for product consistency and speed.",
            icon: "/assets/lights.svg",
            requires: "Front-end Engineering",
          },
          {
            label: "UX Flow Design",
            level: 4,
            description: "Refines user journeys to reduce friction and improve comprehension.",
            icon: "/assets/flower.svg",
            requires: "Front-end Engineering",
          },
        ],
      },
      {
        label: "Mastery",
        nodes: [
          {
            label: "Interaction Craft",
            level: 4,
            description: "Builds intuitive interactions and responsive feedback loops.",
            icon: "/assets/lettersn.svg",
            requires: "UI Systems",
          },
          {
            label: "Phishing Dojo Delivery",
            level: 4,
            description: "Owns implementation quality of the Dojo learning experience.",
            icon: "/assets/sun.svg",
            requires: "UX Flow Design",
          },
        ],
      },
    ],
    careerPath: [
      {
        id: "manut0r-programming-basics",
        label: "Programming Basics",
        level: 3,
        description: "Technical baseline for scalable software and interface systems.",
        stage: "Foundation",
        icon: "/assets/temple.svg",
      },
      {
        id: "manut0r-software-development",
        label: "Software Development",
        level: 4,
        description: "Builds robust features and maintainable application architecture.",
        stage: "Foundation",
        requires: "Programming Basics",
        icon: "/assets/tree.svg",
      },
      {
        id: "manut0r-frontend-engineering",
        label: "Front-end Engineering",
        level: 4,
        description: "Turns product requirements into reliable and reusable web interfaces.",
        stage: "Practice",
        requires: "Software Development",
        icon: "/assets/lights.svg",
      },
      {
        id: "manut0r-ui-systems",
        label: "UI Systems",
        level: 4,
        description: "Creates cohesive visual systems and component patterns.",
        stage: "Practice",
        requires: "Front-end Engineering",
        icon: "/assets/lettersn.svg",
      },
      {
        id: "manut0r-ux-interfaces",
        label: "UX Interfaces",
        level: 4,
        description: "Designs intuitive interface behavior and user task flows.",
        stage: "Leadership",
        requires: ["Front-end Engineering", "UI Systems"],
        icon: "/assets/flower.svg",
      },
      {
        id: "manut0r-phishing-dojo-lead",
        label: "Phishing Dojo Lead",
        level: 4,
        description: "Leads front-end and experience delivery for the Phishing Dojo platform.",
        stage: "Leadership",
        requires: "UX Interfaces",
        icon: "/assets/sun.svg",
      },
    ],
  },
];
