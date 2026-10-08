import React from "react";

export const experienceData = [
  {
    role: "AI Engineer",
    company: "ConversAI Labs",
    companyUrl: "",
    duration: "AUG 2026 - SEP 2026",
    type: "Remote",
    description: [
      <React.Fragment key="1">Engineered an <strong>agentic workflow-refinement system</strong> utilizing LLM tool calling to automatically inspect, test, and modify conversational-agent workflows from natural-language requests.</React.Fragment>,
      <React.Fragment key="2">Designed robust scope control and <strong>verification evaluation metrics</strong> to ensure targeted workflow updates isolated intended changes without breaking existing functionality.</React.Fragment>,
      <React.Fragment key="3">Optimized agent execution—including prompt context, read caching, and reducing redundant tool calls—to balance latency, token usage, and cost.</React.Fragment>,
      <React.Fragment key="4">Built the company's core self-serve SaaS backend using <strong>Python and FastAPI</strong>, covering authentication, company onboarding, and subscription management.</React.Fragment>,
      <React.Fragment key="5">Implemented end-to-end payment and billing workflows, including mobile-number purchasing flows and automated <strong>GST-aware PDF invoice generation</strong>.</React.Fragment>,
    ],
    tech: ["python", "fastapi", "llms", "ai agents", "backend"],
  },
  {
    role: "Software Engineer",
    company: "Metamind Studio",
    companyUrl: "",
    duration: "JUL 2025 - AUG 2026",
    type: "On-site",
    description: [
      <React.Fragment key="1">Built and launched a CA marketplace <strong>from scratch in under 2 months</strong>, supporting multiple user roles and end-to-end business workflows.</React.Fragment>,
      <React.Fragment key="2">Designed and implemented <strong>50+ APIs</strong> covering authentication, RBAC, campaigns, wallets, payouts, and core platform operations.</React.Fragment>,
      <React.Fragment key="3">Automated social integrations, data synchronization, approvals, payouts, and notifications, reducing manual operational workflows.</React.Fragment>,
      <React.Fragment key="4">Optimized database queries, APIs, and rendering pipelines, reducing critical API response times from <strong>500ms+ to under 20ms</strong>.</React.Fragment>,
      <React.Fragment key="5">Worked directly with clients on requirements and technical solutions while mentoring <strong>2–4 developers/interns</strong> across projects.</React.Fragment>,
    ],
    tech: [
      "nextjs",
      "nestjs",
      "postgresql",
      "mongodb",
      "redis",
      "aws",
      "docker",
      "nginx",
      "vercel",
      "railway",
      "tailwind"
    ],
  },
  {
    role: "Frontend Developer",
    company: "SupportFoundation",
    companyUrl: "https://www.supportfoundation.co.in/",
    duration: "JAN 2025 - MARCH 2025",
    type: "Freelance",
    description: [
      <React.Fragment key="1">React and Next.js application development for students, focused on education and improvement.</React.Fragment>
    ],
    tech: ["react", "next", "tailwind"],
  },
];
