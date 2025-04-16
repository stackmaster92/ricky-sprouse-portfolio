// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: "Anterior",
    image: "images/companies/anterior.png",
    designation: "Senior Full Stack Developer",
    view:
      "I led the development of scalable web applications using Django REST Framework and Flask. I designed and implemented both RESTful and GraphQL APIs, improved backend performance through PostgreSQL indexing and Redis caching, and built modular frontend interfaces with React and Tailwind CSS. I also managed deployment pipelines using Docker, GitHub Actions, and Vercel, working closely with cross-functional teams in an agile environment using Jira and Notion.",
    linkednURL: "",
  },
  {
    id: 1,
    name: "BetterCommerce",
    image: "images/companies/bettercommerce.png",
    designation: "Senior Full Stack Developer",
    view:
      "I developed dynamic UI components using React, seamlessly integrated with a Django backend. I optimized performance with Vite, lazy loading, server-side rendering (SSR), and animations using Framer Motion. I also implemented CI/CD pipelines with Docker and GitHub Actions, while leading efforts to improve UI/UX consistency and accessibility across the platform.",
    linkednURL: "",
  },
  {
    id: 2,
    name: "SkyVerge",
    image: "images/companies/skyverge.png",
    designation: "Senior Full Stack Developer",
    view:
      "I developed high-performance APIs using ASP.NET Core, utilizing Entity Framework and ASP.NET Web API for reliable backend services. I implemented WebSocket services for real-time data updates, integrated secure token-based authentication for enhanced security, and monitored system health using Prometheus and Grafana.",
    linkednURL: "",
  },
  {
    id: 3,
    name: "NovaForge",
    image: "images/companies/novaforge.png",
    designation: "Full Stack Developer",
    view:
      "I developed scalable applications using the MERN stack (MongoDB, Express, React, Node.js) and built real-time dashboards with React and Socket.IO. I designed backend logic using Django REST Framework (DRF), Flask, and SQL Server, optimizing system performance and ensuring seamless integration across the entire stack.",
    linkednURL: "",
  },
  {
    id: 4,
    name: "DriveNets",
    image: "images/companies/driv.png",
    designation: "Full Stack Developer",
    view:
      "I focused on frontend development using React, Redux, and Tailwind CSS, enhancing server-side rendering (SSR) with Next.js for better SEO and performance. I collaborated on maintaining consistent branding and user experience (UX) across the platform, integrating with Django for seamless functionality.",
    linkednURL: "",
  },
  {
    id: 5,
    name: "Fintrail",
    image: "images/companies/fintrail.png",
    designation: "Full Stack Developer",
    view:
      "I built analytics and user management tools using ASP.NET Core, leveraging Entity Framework and Identity for secure login and role management. I created RESTful APIs with ASP.NET Web API and integrated them with third-party services. I also improved speed and performance by implementing Redis caching and optimizing code with asynchronous processing.",
    linkednURL: "",
  },
  {
    id: 6,
    name: "Knowtrex",
    image: "images/companies/knowtrex.png",
    designation: "Full Stack Developer",
    view:
      "I developed full-stack web applications using Django for the backend and React for the frontend. I containerized services with Docker to streamline deployment and ensure scalability across environments. I managed data consistency and optimized performance using PostgreSQL and MongoDB.",
    linkednURL: "",
  },
];

export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}
