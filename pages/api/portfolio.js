const portfolio = [
  {
    id: 0,
    projectName: "MATSUYAMA",
    url: "matsuyama.co/",
    image: "projects/new/matsuyama.co.png",
    projectDetail:
      "Built a Webflow website utilizing Webflow CMS, Webflow UIKit, JavaScript, jQuery, HTML, and CSS, implementing mobile-friendly, pixel-perfect UIs based on Figma designs. Added interactive UI animations and integrated third-party systems such as Marketo Forms and Greenhouse to enhance functionality and user experience.",
    technologiesUsed: [
      {
        tech: "AWS",
      },
      {
        tech: "REST API",
      },
      {
        tech: "AUTH0",
      },
      {
        tech: "Jenkin",
      },
      {
        tech: "Nignx",
      },
    ],
  },
  {
    id: 0,
    projectName: "HSBC",
    url: "https://www.hsbc.com/",
    image: "projects/new/hsbc.png",
    projectDetail:
      "Developed responsive, mobile-friendly, and pixel-perfect web front-end pages using React.js, Redux, HTML5, CSS3, and styled-components, and delivered a marketing website utilizing the same technologies. Built cross-platform mobile applications for iOS and Android with React Native CLI, React, Redux, Redux-Thunk, and Axios, integrating third-party packages such as Google Mapbox, DnD, and Stripe for enhanced functionality. Implemented messaging features using the SendBird API and integrated FCM for push notifications to improve user engagement.",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "React Native",
      },
      {
        tech: "Redux",
      },
      {
        tech: "Redux-Thunk",
      },
      {
        tech: "CSS3",
      },
    ],
  },
];
export default function handler(req, res) {
  res.status(200).json(portfolio);
}
