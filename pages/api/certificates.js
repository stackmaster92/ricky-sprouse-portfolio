const certificates = [
  {
    id: 0,
    url: "images/certificates/software_engineer_intern certificate.jpg",
  },
  {
    id: 1,
    url: "images/certificates/software_engineer certificate.jpg",
  },
  {
    id: 2,
    url: "images/certificates/problem_solving_intermediate certificate.jpg",
  },
  {
    id: 3,
    url: "images/certificates/problem_solving_basic certificate.jpg",
  },
  {
    id: 4,
    url: "images/certificates/frontend_developer_react certificate.jpg",
  },
  {
    id: 5,
    url: "images/certificates/react_basic certificate.jpg",
  },
  {
    id: 6,
    url: "images/certificates/javascript_intermediate certificate.jpg",
  },
  {
    id: 7,
    url: "images/certificates/javascript_basic certificate.jpg",
  },
  {
    id: 8,
    url: "images/certificates/python_basic certificate.jpg",
  },
];
export default function handler(req, res) {
  res.status(200).json(certificates);
}
