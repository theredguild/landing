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
    bio: "Systems engineer and former developer with deep security background in reverse engineering, red teaming, pentesting, and peer review. Leads strategy, operations, and partnerships while staying obsessive about Linux hardening and OPSEC.",
    highlights: [
      "Leads business, operations, and multi-team security direction",
      "Runs deep technical reviews from exploit paths to architecture flaws",
      "Designs strict OPSEC setups and Linux-first security workflows",
    ],
    specialties: [
      "Security Leadership",
      "Reverse Engineering",
      "Red Teaming & Pentesting",
      "Peer Review",
      "Linux & Sysadmin",
      "OPSEC",
      "EVM Bytecode",
      "Artist Producer",
    ],
    radar: [
      { label: "SOCIAL", value: 94 },
      { label: "SECURITY", value: 98 },
      { label: "DEVELOPMENT", value: 72 },
      { label: "EDUCATION", value: 81 },
      { label: "OPERATIONS", value: 97 },
      { label: "ART", value: 84 },
    ],
    skillTree: [
      {
        label: "Core",
        nodes: [
          {
            label: "Security Foundations",
            level: 5,
            description: "Applies attacker mindset and defensive depth across systems and teams.",
            icon: "/assets/lights.svg",
          },
          {
            label: "Linux & Sysadmin Ops",
            level: 5,
            description: "Builds resilient systems using hardening-first operational practices.",
            icon: "/assets/lettersn.svg",
          },
        ],
      },
      {
        label: "Paths",
        nodes: [
          {
            label: "Reverse Engineering",
            level: 5,
            description: "Dissects unknown behavior and reconstructs root exploit mechanics.",
            icon: "/assets/tree.svg",
            requires: "Security Foundations",
          },
          {
            label: "Red Teaming & Pentesting",
            level: 5,
            description: "Validates security posture through offensive assessments and simulation.",
            icon: "/assets/flower.svg",
            requires: "Linux & Sysadmin Ops",
          },
        ],
      },
      {
        label: "Mastery",
        nodes: [
          {
            label: "EVM Bytecode Analysis",
            level: 5,
            description: "Works at low-level execution detail to analyze contract behavior deeply.",
            icon: "/assets/sun.svg",
            requires: "Reverse Engineering",
          },
          {
            label: "Security Leadership",
            level: 5,
            description: "Bridges technical depth with execution, management, and business goals.",
            icon: "/assets/temple.svg",
            requires: "Red Teaming & Pentesting",
          },
        ],
      },
    ],
    careerPath: [
      {
        id: "matta-linux-ops",
        label: "Arch Linux BTW",
        level: 4,
        description: "Applies sysadmin discipline and hardening practices across environments.",
        stage: "Foundation",
        icon: "/assets/lights.svg",
      },
      {
        id: "matta-opsec",
        label: "OpSec",
        level: 4,
        description: "Builds and maintains strict personal and organizational operational security.",
        stage: "Foundation",
        requires: "Arch Linux BTW",
        icon: "/assets/temple.svg",
      },
      {
        id: "matta-reverse-engineering",
        label: "Reverse Engineering",
        level: 3.5,
        description: "Investigates internals, flaws, and exploit chains under real constraints.",
        stage: "Practice",
        requires: "Arch Linux BTW",
        icon: "/assets/lettersn.svg",
      },
      {
        id: "matta-social-engineering",
        label: "Social Engineering",
        level: 5,
        description: "Understands manipulation patterns and designs defenses against human-layer attacks.",
        stage: "Practice",
        requires: "OpSec",
        icon: "/assets/flower.svg",
      },
      {
        id: "matta-redteam-pentest",
        label: "Red Teaming",
        level: 5,
        description: "Stress-tests organizations through adversarial simulation and review.",
        stage: "Mastery",
        requires: ["Reverse Engineering", "Social Engineering"],
        icon: "/assets/flower.svg",
      },
      {
        id: "matta-singing",
        label: "Singing",
        level: 3,
        description: "Performs vocally and channels artistic expression into team culture.",
        stage: "Identity",
        icon: "/assets/tree.svg",
      },
      {
        id: "matta-security-leadership",
        label: "Leadership",
        level: 4,
        description: "Aligns people, operations, and technical direction across the organization.",
        stage: "Leadership",
        requires: ["Red Teaming", "OpSec"],
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
    bio: "Systems engineer focused on Web3 internals: gas economics, EVM behavior, Solidity risk patterns, and Ethereum security research. Introverted profile with high technical precision and strong musical artistry.",
    highlights: [
      "Deep-dives EVM and gas behavior under adversarial scenarios",
      "Leads Solidity-focused review and exploit simulation work",
      "Brings exceptional musicianship and creative discipline",
    ],
    specialties: [
      "Solidity (5/5)",
      "Ethereum Internals",
      "Gas & EVM Analysis",
      "Smart Contract Auditing",
      "Security Research",
      "Music Artist",
    ],
    radar: [
      { label: "SOCIAL", value: 59 },
      { label: "SECURITY", value: 95 },
      { label: "DEVELOPMENT", value: 79 },
      { label: "EDUCATION", value: 81 },
      { label: "OPERATIONS", value: 64 },
      { label: "ART", value: 92 },
    ],
    skillTree: [
      {
        label: "Core",
        nodes: [
          {
            label: "Ethereum Internals",
            level: 5,
            description: "Understands account model, execution context, and protocol mechanics.",
            icon: "/assets/temple.svg",
          },
          {
            label: "Solidity Security",
            level: 5,
            description: "Reviews contract design and implementation with exploit-aware mindset.",
            icon: "/assets/lights.svg",
            requires: "Ethereum Internals",
          },
        ],
      },
      {
        label: "Paths",
        nodes: [
          {
            label: "Gas & EVM Trace Analysis",
            level: 5,
            description: "Analyzes costs, traces, and execution flows at opcode-level depth.",
            icon: "/assets/tree.svg",
            requires: "Ethereum Internals",
          },
          {
            label: "Smart Contract Peer Review",
            level: 4,
            description: "Performs rigorous review cycles and communicates actionable fixes.",
            icon: "/assets/lettersn.svg",
            requires: "Solidity Security",
          },
        ],
      },
      {
        label: "Mastery",
        nodes: [
          {
            label: "On-chain Incident Forensics",
            level: 4,
            description: "Reconstructs exploit narratives from traces, state changes, and context.",
            icon: "/assets/sun.svg",
            requires: "Gas & EVM Trace Analysis",
          },
          {
            label: "Disclosure Strategy",
            level: 4,
            description: "Translates deep findings into safe, practical advisory guidance.",
            icon: "/assets/flower.svg",
            requires: "Smart Contract Peer Review",
          },
        ],
      },
    ],
    careerPath: [
      {
        id: "tincho-programming-fundamentals",
        label: "Coding Basics",
        level: 4,
        description: "Systems-engineering base used for tooling and protocol-level analysis.",
        stage: "Foundation",
        icon: "/assets/temple.svg",
      },
      {
        id: "tincho-ethereum-internals",
        label: "Ethereum Core",
        level: 4,
        description: "Strong understanding of EVM execution and chain-level behavior.",
        stage: "Foundation",
        requires: "Coding Basics",
        icon: "/assets/lights.svg",
      },
      {
        id: "tincho-opsec",
        label: "OpSec",
        level: 3,
        description: "Maintains practical personal and operational security hygiene.",
        stage: "Foundation",
        requires: "Coding Basics",
        icon: "/assets/temple.svg",
      },
      {
        id: "tincho-solidity-security",
        label: "Solidity Security",
        level: 5,
        description: "Top-tier smart contract review and exploit pattern recognition.",
        stage: "Practice",
        requires: "Ethereum Core",
        icon: "/assets/tree.svg",
      },
      {
        id: "tincho-code-review",
        label: "Code Review",
        level: 5,
        description: "Performs deep technical review and delivers actionable remediation guidance.",
        stage: "Mastery",
        requires: ["Ethereum Core", "Solidity Security"],
        icon: "/assets/lettersn.svg",
      },
      {
        id: "tincho-musical-artistry",
        label: "Music Producer",
        level: 4,
        description: "Strong music production craft that complements his technical identity.",
        stage: "Identity",
        icon: "/assets/flower.svg",
      },
      {
        id: "tincho-gamification",
        label: "Gamification",
        level: 5,
        description: "Designs high-impact, challenge-based learning experiences for security.",
        stage: "Leadership",
        requires: ["Code Review", "OpSec"],
        icon: "/assets/tree.svg",
      },
    ],
  },
  {
    id: "dantesito",
    name: "Dante Martinez",
    alias: "dantesito",
    title: "Permanent Intern",
    level: 2,
    className: "Core Contributor",
    githubUsername: "d4rm5",
    avatar: "https://github.com/d4rm5.png?size=256",
    socials: {
      github: "https://github.com/d4rm5",
      x: "https://x.com/dantesito",
    },
    bio: "Youngest member of the team and currently studying systems engineering. Building base capability across front-end, back-end, and security while contributing where needed.",
    highlights: [
      "Growing in front-end, back-end, and security fundamentals",
      "Supports implementation tasks across product and research",
      "Focused on learning speed and consistency",
    ],
    specialties: [
      "Systems Engineering Student",
      "Front-end Basics",
      "Back-end Basics",
      "Security Basics",
      "Team Support",
    ],
    radar: [
      { label: "SOCIAL", value: 70 },
      { label: "SECURITY", value: 49 },
      { label: "DEVELOPMENT", value: 58 },
      { label: "EDUCATION", value: 55 },
      { label: "OPERATIONS", value: 52 },
      { label: "ART", value: 22 },
    ],
    skillTree: [
      {
        label: "Core",
        nodes: [
          {
            label: "Programming Fundamentals",
            level: 2,
            description: "Core coding foundation for practical engineering growth.",
            icon: "/assets/lights.svg",
          },
          {
            label: "Systems Fundamentals",
            level: 2,
            description: "Builds understanding of system behavior, components, and constraints.",
            icon: "/assets/tree.svg",
          },
        ],
      },
      {
        label: "Paths",
        nodes: [
          {
            label: "Front-end Basics",
            level: 2,
            description: "Implements core UI components and simple interface behaviors.",
            icon: "/assets/temple.svg",
            requires: "Programming Fundamentals",
          },
          {
            label: "Back-end Basics",
            level: 2,
            description: "Builds simple APIs and handles data flow with supervision.",
            icon: "/assets/flower.svg",
            requires: "Programming Fundamentals",
          },
        ],
      },
      {
        label: "Mastery",
        nodes: [
          {
            label: "Security Basics",
            level: 2,
            description: "Applies entry-level secure development and hygiene practices.",
            icon: "/assets/lettersn.svg",
            requires: "Back-end Basics",
          },
          {
            label: "Execution Consistency",
            level: 3,
            description: "Delivers reliable outcomes while learning across disciplines.",
            icon: "/assets/sun.svg",
            requires: "Front-end Basics",
          },
        ],
      },
    ],
    careerPath: [
      {
        id: "dante-programming-basics",
        label: "Coding Basics",
        level: 2,
        description: "Foundational coding ability for real project contribution.",
        stage: "Foundation",
        icon: "/assets/temple.svg",
      },
      {
        id: "dante-systems-fundamentals",
        label: "Systems Basics",
        level: 2,
        description: "Develops systems-engineering fundamentals across stack layers.",
        stage: "Foundation",
        requires: "Coding Basics",
        icon: "/assets/tree.svg",
      },
      {
        id: "dante-frontend-basics",
        label: "Front-end Basics",
        level: 2,
        description: "Builds simple UIs and interactions with growing confidence.",
        stage: "Practice",
        requires: "Coding Basics",
        icon: "/assets/lights.svg",
      },
      {
        id: "dante-backend-basics",
        label: "Back-end Basics",
        level: 2,
        description: "Implements basic server logic and API integration flows.",
        stage: "Practice",
        requires: "Coding Basics",
        icon: "/assets/flower.svg",
      },
      {
        id: "dante-security-basics",
        label: "Security Basics",
        level: 2,
        description: "Learns defensive practices and secure engineering fundamentals.",
        stage: "Delivery",
        requires: ["Front-end Basics", "Back-end Basics"],
        icon: "/assets/temple.svg",
      },
      {
        id: "dante-team-contribution",
        label: "Teamwork",
        level: 3,
        description: "Contributes consistently while growing toward deeper specialization.",
        stage: "Delivery",
        requires: "Security Basics",
        icon: "/assets/sun.svg",
      },
    ],
  },
  {
    id: "manut0r",
    name: "Manuel Marquez",
    alias: "Manut0r",
    title: "Lead Developer",
    level: 4,
    className: "Lead Developer",
    githubUsername: "marquezmanu",
    avatar: "https://github.com/marquezmanu.png?size=256",
    socials: {
      github: "https://github.com/marquezmanu",
      x: "https://x.com/manut0r",
      linkedin: "https://www.linkedin.com/in/manut0r",
      website: "https://manut0r.dev",
    },
    bio: "Developer with 14 years of experience, specialized in front-end engineering, UI systems, and product execution. Strong social collaborator and currently leveling up security understanding.",
    highlights: [
      "Owns front-end architecture and interface delivery quality",
      "Builds scalable UI systems and smooth product flows",
      "Actively learning security concepts for safer product decisions",
    ],
    specialties: [
      "Front-end Engineering",
      "UI Architecture",
      "UX Flows",
      "Product Delivery",
      "Team Collaboration",
      "Security Learner",
    ],
    radar: [
      { label: "SOCIAL", value: 86 },
      { label: "SECURITY", value: 38 },
      { label: "DEVELOPMENT", value: 95 },
      { label: "EDUCATION", value: 67 },
      { label: "OPERATIONS", value: 80 },
      { label: "ART", value: 26 },
    ],
    skillTree: [
      {
        label: "Core",
        nodes: [
          {
            label: "Software Development",
            level: 5,
            description: "Delivers robust application features with production discipline.",
            icon: "/assets/temple.svg",
          },
          {
            label: "Front-end Engineering",
            level: 5,
            description: "Builds high-quality web interfaces and maintainable component systems.",
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
            level: 5,
            description: "Creates coherent design systems for consistency and delivery speed.",
            icon: "/assets/lights.svg",
            requires: "Front-end Engineering",
          },
          {
            label: "UX Flow Design",
            level: 4,
            description: "Optimizes end-to-end user journeys to reduce friction.",
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
            label: "Product Delivery",
            level: 5,
            description: "Executes interface quality from concept to production release.",
            icon: "/assets/sun.svg",
            requires: "UX Flow Design",
          },
        ],
      },
    ],
    careerPath: [
      {
        id: "manut0r-programming-basics",
        label: "Coding Basics",
        level: 5,
        description: "Long-term coding experience across real-world product cycles.",
        stage: "Foundation",
        icon: "/assets/temple.svg",
      },
      {
        id: "manut0r-software-development",
        label: "Software Dev",
        level: 5,
        description: "Builds robust features and maintainable application architecture.",
        stage: "Foundation",
        requires: "Coding Basics",
        icon: "/assets/tree.svg",
      },
      {
        id: "manut0r-frontend-engineering",
        label: "Front-end Dev",
        level: 5,
        description: "Turns product requirements into reliable and reusable web interfaces.",
        stage: "Practice",
        requires: "Software Dev",
        icon: "/assets/lights.svg",
      },
      {
        id: "manut0r-ui-systems",
        label: "UI Systems",
        level: 5,
        description: "Creates cohesive visual systems and component patterns.",
        stage: "Practice",
        requires: "Front-end Dev",
        icon: "/assets/lettersn.svg",
      },
      {
        id: "manut0r-ux-interfaces",
        label: "UX Flows",
        level: 4,
        description: "Designs intuitive interface behavior and user task flows.",
        stage: "Mastery",
        requires: "Front-end Dev",
        icon: "/assets/flower.svg",
      },
      {
        id: "manut0r-product-delivery",
        label: "Delivery Lead",
        level: 5,
        description: "Leads end-to-end interface delivery with product and engineering alignment.",
        stage: "Leadership",
        requires: ["UI Systems", "UX Flows"],
        icon: "/assets/sun.svg",
      },
    ],
  },
];
