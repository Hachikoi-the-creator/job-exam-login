import mongoose from "mongoose";
import roleSchema from "../../schemas/roleSchema";

export default async function handler(req, res) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI);

  const roar = await roleSchema.find({ name: "noob" });
  console.log(roar);

  // res.status(200).send("roar is there ?", roar);
  res.status(200).json({ cs: roar });
}
// ----------------
