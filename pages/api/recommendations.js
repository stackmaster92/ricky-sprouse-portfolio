// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: "NorthLoop Labs",
    image: "images/emoji.png",
    designation: "Senior Full Stack Developer",
    view:
      "I led the development of enterprise-grade applications using the MERN stack and TypeScript. I architected RESTful and GraphQL APIs, optimized MongoDB performance with indexing and Redis caching, and built scalable frontends with Next.js and Tailwind CSS. I also managed DevOps pipelines with Docker, GitHub Actions, and Vercel, while collaborating in an agile environment.",
    linkednURL: "",
  },
  {
    id: 1,
    name: "BrightField Tech",
    image: "images/emoji.png",
    designation: "Senior Frontend Developer",
    view:
      "I led the front-end development of a high-traffic web app using the MERN stack and TypeScript. I crafted reusable components with Next.js and Tailwind CSS, optimized performance with Vite and Webpack, and added animations using Framer Motion. I also maintained CI/CD workflows and enforced best practices in code quality.",
    linkednURL: "",
  },
  {
    id: 2,
    name: "SkyVerge Systems",
    image: "images/emoji.png",
    designation: "Senior Backend Developer",
    view:
      "I developed scalable RESTful and GraphQL APIs using Express.js and MongoDB, and implemented WebSocket features for real-time functionality. I worked closely with React frontend teams and introduced custom monitoring solutions using Prometheus and Grafana.",
    linkednURL: "",
  },
  {
    id: 3,
    name: "NovaForge",
    image: "images/emoji.png",
    designation: "Full Stack Developer",
    view:
      "I designed and built GraphQL and RESTful APIs using Express.js and MongoDB. I implemented real-time customer features via WebSocket and worked collaboratively with frontend developers to ensure seamless system integration.",
    linkednURL: "",
  },
  {
    id: 4,
    name: "PixelBase",
    image: "images/emoji.png",
    designation: "Frontend Developer",
    view:
      "I contributed to a mobile-first e-commerce platform using React, Redux Toolkit, and Tailwind CSS. My work focused on optimizing site performance and creating pixel-perfect, responsive layouts using Next.js and Material UI.",
    linkednURL: "",
  },
  {
    id: 5,
    name: "Fintrail",
    image: "images/emoji.png",
    designation: "Backend Developer",
    view:
      "I built the backend for a real-time analytics dashboard using Node.js, GraphQL, and MongoDB. I developed subscription and onboarding features and integrated third-party APIs with caching using Redis.",
    linkednURL: "",
  },
  {
    id: 6,
    name: "DataScape",
    image: "images/emoji.png",
    designation: "Full Stack Developer",
    view:
      "I implemented new SaaS features with React, Redux, and Express.js, and collaborated with designers to maintain consistent UI using Tailwind CSS, Chakra UI, and Material UI. I also optimized build performance and managed deployments with Docker and Vercel.",
    linkednURL: "",
  },
];

export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}
