const review = [
  {
    id: 0,
    url: "images/certificates/software_engineer.jpg",
  },
  {
    id: 5,
    url: "images/certificates/python_basic.jpg",
  },
  {
    id: 3,
    url: "images/certificates/problem_solving_basic.jpg",
  },
  {
    id: 1,
    url: "images/certificates/css.jpg",
  },
  {
    id: 2,
    url: "images/certificates/javascript_basic.jpg",
  },
  {
    id: 4,
    url: "images/certificates/javascript_intermediate.jpg",
  },
];
export default function handler(req, res) {
  res.status(200).json(review);
}
