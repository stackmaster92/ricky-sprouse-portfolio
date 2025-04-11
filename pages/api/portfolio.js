const portfolio = [
  {
    id: 10,
    projectName: "ALSN Document Translation Platform",
    url: "https://alsn.app/",
    image: "projects/alsn.png",
    projectDetail:
      "Built a secure document translation platform using React.js and Tailwind CSS, integrated REST APIs and WebSocket for real-time updates.",
    technologiesUsed: [
      { tech: "React.js" },
      { tech: "JavaScript (ES6+)" },
      { tech: "Tailwind CSS" },
      { tech: "RESTful APIs" },
      { tech: "WebSockets" },
      { tech: "React Native" },
      { tech: "Node.js" }
    ]
  },
  {
    id: 11,
    projectName: "FirmSanad Licensing Automation System",
    url: "/domain-expired",
    image: "projects/firmsanad.png",
    projectDetail:
      "Developed a licensing automation platform with VueJS and REST APIs, deployed on AWS Amplify with optimized Tailwind UI.",
    technologiesUsed: [
      { tech: "VueJS" },
      { tech: "RESTful APIs" },
      { tech: "Tailwind CSS" },
      { tech: "AWS Amplify" },
      { tech: "Node.js" }
    ]
  },
  {
    id: 1,
    projectName: "Hostinger High-Performance UI",
    url: "https://hostinger.com/",
    image: "projects/new/hostinger.png",
    projectDetail:
      "Built high-performance UIs using React.js and Tailwind CSS, integrated CI/CD with GitHub Actions, and structured scalable architecture using Next.js and Redux.",
    technologiesUsed: [
      { tech: "JavaScript (ES6+)" },
      { tech: "TypeScript" },
      { tech: "React.js" },
      { tech: "Next.js" },
      { tech: "Tailwind CSS" },
      { tech: "Redux" },
      { tech: "Framer Motion" },
      { tech: "GraphQL (Apollo Client)" },
      { tech: "RESTful APIs" },
      { tech: "Docker" },
      { tech: "CI/CD (GitHub Actions)" },
      { tech: "Node.js" },
      { tech: "PostgreSQL" },
      { tech: "MongoDB" },
      { tech: "AWS (EC2)" },
      { tech: "Vercel" }
    ]
  },
  {
    id: 6,
    projectName: "Elvex Scalable Platform Development",
    url: "https://www.elvex.com",
    image: "projects/new/elvex.png",
    projectDetail:
      "Built scalable platforms using React.js, Material UI, and Tailwind CSS. Integrated GitHub workflows and REST APIs.",
    technologiesUsed: [
      { tech: "React.js" },
      { tech: "Material UI" },
      { tech: "Tailwind CSS" },
      { tech: "RESTful APIs" },
      { tech: "GitHub" },
      { tech: "JavaScript (ES6+)" },
      { tech: "Node.js" },
      { tech: "AWS (Amplify)" }
    ]
  },
  {
    id: 2,
    projectName: "HSBC Mobile Banking Features",
    url: "https://www.hsbc.com/",
    image: "projects/new/hsbc.png",
    projectDetail:
      "Engineered mobile-first banking features using React Native, Redux, Zustand, and integrated real-time features with WebSockets and RESTful APIs.",
    technologiesUsed: [
      { tech: "React.js" },
      { tech: "React Native" },
      { tech: "Redux" },
      { tech: "Zustand" },
      { tech: "Expo" },
      { tech: "TypeScript" },
      { tech: "RESTful APIs" },
      { tech: "WebSockets" },
      { tech: "Framer Motion" },
      { tech: "Node.js" }
    ]
  },
  {
    id: 3,
    projectName: "Matsuyama Marketing Page Development",
    url: "https://matsuyama.co/",
    image: "projects/new/matsuyama.co.png",
    projectDetail:
      "Created fully responsive marketing pages with Tailwind CSS and animations via Framer Motion; integrated APIs and deployed via CI/CD pipelines.",
    technologiesUsed: [
      { tech: "JavaScript (ES6+)" },
      { tech: "Tailwind CSS" },
      { tech: "Framer Motion" },
      { tech: "RESTful APIs" },
      { tech: "CI/CD (GitHub Actions)" },
      { tech: "React.js" },
      { tech: "Next.js" },
      { tech: "Node.js" }
    ]
  },
  {
    id: 5,
    projectName: "Airbyte eCommerce Platform",
    url: "https://airbyte.com",
    image: "projects/new/airbyte.png",
    projectDetail:
      "Developed eCommerce features with SSR in Next.js and managed state using Redux. Styled with Tailwind CSS and integrated RESTful APIs.",
    technologiesUsed: [
      { tech: "Next.js" },
      { tech: "RESTful APIs" },
      { tech: "Tailwind CSS" },
      { tech: "Redux" },
      { tech: "JavaScript (ES6+)" },
      { tech: "TypeScript" },
      { tech: "React.js" },
      { tech: "Redux Toolkit" },
      { tech: "Node.js" }
    ]
  },
  {
    id: 7,
    projectName: "Enterliminal Travel Booking System",
    url: "https://enterliminal.com/",
    image: "projects/new/enterliminal.png",
    projectDetail:
      "Designed and built travel booking UIs using Tailwind CSS, handled secure auth via AUTH0, and developed scalable backends using REST APIs.",
    technologiesUsed: [
      { tech: "Tailwind CSS" },
      { tech: "RESTful APIs" },
      { tech: "AUTH0" },
      { tech: "JavaScript (ES6+)" },
      { tech: "Node.js" }
    ]
  },
  {
    id: 8,
    projectName: "JMM ERP Enterprise Solution",
    url: "https://jmmerp.com/",
    image: "projects/erp.png",
    projectDetail:
      "Delivered enterprise-grade ERP frontends using Zustand and React Query, integrated with GraphQL APIs and styled using Tailwind CSS.",
    technologiesUsed: [
      { tech: "GraphQL (Apollo Client)" },
      { tech: "RESTful APIs" },
      { tech: "Zustand" },
      { tech: "React Query" },
      { tech: "Tailwind CSS" },
      { tech: "React.js" },
      { tech: "Node.js" }
    ]
  },
  {
    id: 9,
    projectName: "ABSCO Frontend Optimization",
    url: "https://absco.sa/",
    image: "projects/absco.png",
    projectDetail:
      "Optimized frontend experience with Tailwind CSS and built performant RESTful APIs with a lightweight backend setup.",
    technologiesUsed: [
      { tech: "RESTful APIs" },
      { tech: "Tailwind CSS" },
      { tech: "Node.js" },
      { tech: "JavaScript (ES6+)" }
    ]
  },
  {
    id: 12,
    projectName: "Firstrade Real-Time Trading Dashboard",
    url: "https://www.firstrade.com/",
    image: "projects/new/firstrade.png",
    projectDetail:
      "Built real-time trading dashboards with WebSockets and Redux, implemented secure auth and asynchronous data fetching using REST APIs and Firebase.",
    technologiesUsed: [
      { tech: "React.js" },
      { tech: "Redux" },
      { tech: "TypeScript" },
      { tech: "WebSockets" },
      { tech: "RESTful APIs" },
      { tech: "Firebase" },
      { tech: "JavaScript (ES6+)" },
      { tech: "Node.js" }
    ]
  }
];

export default function handler(req, res) {
  res.status(200).json(portfolio);
}
