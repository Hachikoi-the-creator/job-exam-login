import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  if (req.method === "POST") {
    console.log("API data: ", req.body);

    try {
      const client = await clientPromise;
      const db = client.db("jobTest");

      const employee = await db.collection("employees").insertOne(req.body);

      console.log("Added the employe whit ID", employee);
      res.status(200).json(employee);
      // res.status(200).json(req.body);
    } catch (e) {
      console.error(e);
    }
  } else {
    res.status(203).send("You wont GET much like this, hehe");
  }
};
