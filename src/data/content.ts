export const projects = [
    {
        title: "Maze AI Agent",
        desc: "Reinforcement learning agent that learns to solve mazes.",
        tags: ["Python", "RL", "ML", "Update soon"],
        href: "https://github.com/YOUR_GITHUB/maze-ai",
        icon: { kind: "unity", label: "Unity logo" },
        status: "UPLOAD IN PROGRESS",
        disabled: true,
    },
    {
        title: "LanVoice",
        desc: "Ultra low-latency LAN voice chat for PCs on the same Wi-Fi.",
        tags: ["voice-chat", "low-latency"],
        href: "https://github.com/jab0c/LanVoice",
        icon: { kind: "emoji", value: "🎧", label: "Headphones" },
    },
    {
        title: "jab0c-portfolio (current site)",
        desc: "Portfolio built with Astro + Tailwind, deployed on Cloudflare Pages.",
        tags: ["Astro", "Tailwind", "Cloudflare"],
        href: "https://github.com/jab0c/jab0c-portfolio",
        icon: { kind: "image", src: "/jab0c-logo.png", label: "jab0c logo" },
    },
];

export const services = [
    { n: "01", title: "Automation & tooling", desc: "Scripts, bots, dashboards that remove manual work." },
    { n: "02", title: "Web apps", desc: "Fast UI + clean integrations that ship." },
    { n: "03", title: "Data / ML experiments", desc: "Practical ML workflows and evaluation." },
    { n: "04", title: "API integrations", desc: "Connect services safely with guardrails." },
];

export const experience = [
    {
        when: "02/2025 → 02/2026",
        title: "Military Service",
        org: "Hellenic Navy",
        location: "Greece",
        bullets: [
            "Operational support role with strict schedules and high responsibility.",
            "Maintained reliability, discipline, and consistent execution under time constraints.",
        ],
    },
    {
        when: "01/2025 → Present",
        title: "Freelance Web Developer (Co-founder, 50%)",
        org: "Self-employed",
        location: "Remote, Greece",
        bullets: [
            "Design and deploy websites and proposal assets for SMEs using HTML/CSS/JavaScript.",
            "Deliver clean UI, responsive layouts, and practical improvements for business workflows.",
        ],
    },
    {
        when: "01/2025 → Present",
        title: "Algorithmic Trading Projects (Developer)",
        org: "Self-directed",
        location: "Remote, Greece",
        bullets: [
            "Develop and backtest C# & Python systems with risk-based sizing and prop-firm-style rules.",
            "Build optimization and monitoring workflows; focus on repeatable, testable execution.",
        ],
    },
    {
        when: "01/2023 → 06/2023",
        title: "Trainee (Internship), IT Innovation Center",
        org: "OTE Group of Companies (HTO)",
        location: "Athens, Greece",
        bullets: [
            "Explored and assessed innovative technologies; contributed to proof-of-concept projects.",
        ],
    },
    {
        when: "06/2022 → 12/2022",
        title: "Student Assistant (Work Study), Financial Assistance & Planning Office",
        org: "Deree – The American College of Greece",
        location: "Athens, Greece",
        bullets: [
            "Managed financial aid data in Microsoft Dynamics NAV; performed data entry and analysis.",
            "Supported prospective students; resolved issues related to financial assistance programs.",
        ],
    },
];

export const education = [
    {
        when: "09/2020 → 12/2024",
        title: "B.A. & Sciences in Information Technology",
        org: "Deree – The American College of Greece",
        location: "Athens, Greece",
        details: "Concentration: Intelligent Systems & Automation • GPA: 3.22/4.0",
        bullets: [
            "Capstone: Reinforcement Learning maze solver in Unity (ML-Agents) vs A*/Dijkstra.",
        ],
    },
    {
        when: "09/2014 → 05/2020",
        title: "High School Diploma",
        org: "Avgoulea Linardatou Private School",
        location: "Athens, Greece",
        details: "GPA: 18.2/20",
        bullets: [],
    },
];

export const skills = [
    "Python", "C#", "TypeScript", "Astro", "Tailwind", "SQL", "Git", "Linux", "Cloudflare",
];
