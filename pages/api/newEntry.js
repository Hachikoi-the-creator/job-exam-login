import clientPromise from "../../lib/mongodb";
import Cryptr from "cryptr";

export default async (req, res) => {
  const cryptr = new Cryptr("myTotallySecretKey");

  console.log("api body is", req.body);
  req.body._id = cryptr.encrypt(req.body.name).slice(0, 13);
  console.log("some ecnripted data", req.body._id);

  if (req.method === "POST") {
    console.log("Server data", req.body);

    try {
      const client = await clientPromise;
      const db = client.db("jobTest");

      // const employee = await db.collection("employees").insert(req.body);

      // console.log("Got the employe whit the credentials", employee);
      // res.status(200).json(employee);
      res.status(200).json({ employee: "122" });
    } catch (e) {
      console.error(e);
    }
  } else {
    res.status(203).send("You wont GET much like this, hehe");
  }
};
