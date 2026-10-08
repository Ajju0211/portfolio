export const projects = [
  {
    img: "/AI-hubX.png",
    title: "AI-HubX",
    description: "A Conversational AI Platform integrating multiple third-party models.",
    bullets: [
      "Built a conversational AI platform integrating 7 third-party AI models.",
      "Implemented real-time interaction over Socket.io, improving response speed and overall performance by 80%.",
      "Containerized with Docker for consistent local development and production deployment."
    ],
    techStack: ["React", "Express", "NodeJS", "MongoDB", "Socket IO", "Docker"],
    link: "https://ai-hub-x.vercel.app/login",
  },
  {
    img: "/skipthemap.avif",
    title: "Skip the map",
    description: "Map-based property search and recommendation engine.",
    bullets: [
      "Built geospatial search with interactive maps for destination discovery.",
      "Developed a RAG-based recommendation engine using vector search and semantic retrieval.",
      "Optimized query response times and data rendering for seamless user experience."
    ],
    techStack: ["Next", "Postgresql", "Strapi", "Vector Search"],
    link: "https://skipthemap.com/",
  },
  {
    img: "/clipkaro.avif",
    title: "ClipKaro",
    description: "High-throughput video processing and creator platform.",
    bullets: [
      "Automated creator onboarding, analytics sync, and content verification.",
      "Integrated Facebook, Instagram, YouTube, and Google Drive APIs with cron schedulers.",
      "Implemented Redis-backed background workers for high-performance job processing."
    ],
    techStack: ["Next", "MongoDB", "Nest", "NodeJS", "Redis", "BullMQ"],
    link: "https://clipkaro.in/",
  },
  {
    img: "/chatty.png",
    title: "Chat Web App",
    description: "A real-time P2P communication tool with authentication.",
    bullets: [
      "Built WebRTC integration for peer-to-peer video and audio calls.",
      "Implemented Socket.io for low-latency text messaging signaling.",
      "Secured communication with robust end-to-end encryption practices."
    ],
    techStack: ["React", "Express", "Socket IO", "MongoDB", "WebRTC", "NodeJS"],
    link: "https://full-stack-chat-website.onrender.com",
  },
  {
    img: "/crypto-wallet.png",
    title: "Crypto Wallet",
    description: "A secure browser extension for streamlined crypto transactions.",
    bullets: [
      "Developed a browser extension with vanilla JS and Ether.js.",
      "Interacted directly with Ethereum nodes to simplify key management.",
      "Enabled one-click transactions and real-time wallet balance fetching."
    ],
    techStack: ["NodeJS", "MongoDB", "EtherJS", "JavaScript", "CSS"],
    link: "https://crypto-wallet-extension.netlify.app/",
  },
];
