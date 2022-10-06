// Connect to BD
mongoose.connect(process.env.MANGO_CONNECTION_STRING);
const database = mongoose.connection;

//? mongoose's error handler
database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

export default async function handler(req, res) {}
