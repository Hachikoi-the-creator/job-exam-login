import clientPromise from "../../lib/mongodb";
import Cryptr from "cryptr";

export default async (req, res) => {
  const cryptr = new Cryptr("myTotallySecretKey");

  console.log("api body is", req.body);
  req.body._id = cryptr.encrypt(req.body.name).slice(0, 13);
  console.log(req.body._id);

  if (req.method === "POST") {
    try {
      const client = await clientPromise;
      const db = client.db("jobTest");

      const employee = await db.collection("employees").insert(req.body);
      console.log("Got the employe whit the credentials", employee);
      res.json(employee);
    } catch (e) {
      console.error(e);
    }
  } else {
    res.status(203).send("You wont GET much like this, hehe");
  }
};
