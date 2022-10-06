const users = [
  { id: 1, name: "John Smith" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Jonhy Joe" },
  { id: 4, name: "Jolyne Joestar" },
];

export default (req, res) => {
  const {
    query: { id },
  } = req;

  res.status(200).json({
    ...users.find((user) => user.id === +id),
  });
};
