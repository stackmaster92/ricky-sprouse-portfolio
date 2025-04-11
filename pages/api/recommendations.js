// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: "Voize",
    image: "images/emoji.png",
    designation: "Senior Full Stack Developer",
    view:
      "I led the development of enterprise-grade applications using the MERN stack and TypeScript. I architected and implemented both RESTful and GraphQL APIs, optimized database performance with MongoDB indexing and Redis caching, and built scalable frontend interfaces with Next.js and Tailwind CSS. I also managed DevOps workflows using Docker, GitHub Actions, and Vercel, collaborating with cross-functional teams in an agile setup.",
    linkednURL: "",
  },
  {
    id: 1,
    name: "Waabi",
    image: "images/emoji.png",
    designation: "Senior Frontend Developer",
    view:
      "I led the front-end development of a high-traffic web application using the MERN stack and TypeScript. I created scalable, reusable UI components with Next.js and Tailwind CSS, implemented smooth animations with Framer Motion, and boosted performance using code-splitting, lazy loading, and optimization strategies with Vite and Webpack. I also supported CI/CD pipelines with GitHub Actions and Docker.",
    linkednURL: "",
  },
  {
    id: 2,
    name: "SkyVerge",
    image: "images/emoji.png",
    designation: "Senior Backend Developer",
    view:
      "I developed scalable RESTful and GraphQL APIs with Express.js and MongoDB. I added real-time features using WebSockets and collaborated with React and Zustand-based frontend teams. I also introduced custom logging and monitoring using Prometheus and Grafana.",
    linkednURL: "",
  },
  {
    id: 3,
    name: "NovaForge",
    image: "images/emoji.png",
    designation: "Full Stack Developer",
    view:
      "I built RESTful and GraphQL APIs using Express.js and MongoDB, added WebSocket-based real-time functionality, and collaborated closely with frontend teams using React and Zustand. I also handled logging and server monitoring using Prometheus and Grafana.",
    linkednURL: "",
  },
  {
    id: 4,
    name: "PixelBase",
    image: "images/emoji.png",
    designation: "Frontend Developer",
    view:
      "I contributed to a mobile-first e-commerce platform using React, Redux Toolkit, and Tailwind CSS. I optimized site performance through lazy loading and server-side rendering in Next.js, and collaborated with UI/UX teams to maintain design consistency using Framer Motion and Material UI.",
    linkednURL: "",
  },
  {
    id: 5,
    name: "Fintrail",
    image: "images/emoji.png",
    designation: "Backend Developer",
    view:
      "I built a real-time analytics dashboard backend using Node.js, GraphQL, and MongoDB. I implemented features for onboarding and subscription management and integrated third-party APIs with Redis-based caching strategies.",
    linkednURL: "",
  },
  {
    id: 6,
    name: "DataScape",
    image: "images/emoji.png",
    designation: "Full Stack Developer",
    view:
      "I implemented new SaaS features using React, Redux, and Express.js with MongoDB. I worked closely with designers to maintain UI consistency using Tailwind CSS, Chakra UI, and Material UI. I also optimized frontend build processes with Webpack and managed deployments using Docker, Vercel, and Netlify.",
    linkednURL: "",
  },
];

export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}
