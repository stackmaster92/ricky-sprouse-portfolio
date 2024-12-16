// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 1,
    name: "ChargePoint",
    image: "images/logs/charge_point.svg",
    designation: "Frontend developer",
    view: "I was responsible for implementing Test-Driven Development (TDD) to minimize UI-related bugs and ensure high-quality code. Collaborating with backend, design, and product teams, I helped deliver new features on time. I also optimized web app performance by enhancing load times and improving accessibility. Additionally, I translated Figma designs into fully responsive, pixel-perfect web applications to meet design specifications and deliver a seamless user experience.",
    linkednURL: "https://www.linkedin.com/in/sikandar-hayat-381407179/",
  },
  {
    id: 0,
    name: "Voi Technology",
    image: "images/logs/voi.png",
    designation: "Junior Developer",
    view: "I strengthened my understanding of computational logic and systems by engaging in hands-on practice with algorithm design, emphasizing time and space complexity optimization. I gained experience in essential software development principles, including front-end technologies such as HTML, CSS, and JavaScript, as well as foundational back-end development concepts. My study of algorithmic thinking enhanced my grasp of search, sorting, and optimization methods, significantly improving code efficiency and logical flow. Additionally, I acquired core IT knowledge, focusing on programming fundamentals, data structures, and problem-solving techniques essential for robust software development.",
    linkednURL: "https://www.linkedin.com/in/shahmir-minhas/",
  },
];
export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}
