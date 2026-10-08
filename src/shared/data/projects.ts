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
    description: "A tour and travel company featuring an AI-powered 'feeling engine'.",
    bullets: [
      "Built a 'feeling engine' where users explain their current mood and AI recommends the perfect location to visit.",
      "Developed geospatial search with interactive maps for dynamic destination discovery.",
      "Optimized the RAG-based recommendation engine for fast and highly accurate semantic retrieval."
    ],
    techStack: ["Next", "Postgresql", "Strapi", "Vector Search"],
    link: "https://skipthemap.com/",
  },
  {
    img: "/clipkaro.avif",
    title: "ClipKaro",
    description: "A platform empowering small influencers to earn money through brand campaigns.",
    bullets: [
      "Engineered a platform where micro-influencers can participate in campaigns and monetize their reach.",
      "Built integrations to fetch analytics directly from social media APIs without storing actual video files.",
      "Integrated Facebook, Instagram, YouTube, and Google Drive APIs with cron schedulers and background workers."
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
