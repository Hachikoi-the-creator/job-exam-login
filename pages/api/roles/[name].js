import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  const name = req.query.name;

  console.log("Custom name: ", name);

  try {
    const client = await clientPromise;
    const db = client.db("jobTest");

    const movies = await db.collection("roles").find({ name }).toArray();

    res.json(movies);
  } catch (e) {
    console.error(e);
  }
};
