// this is required to connect to URI that we write in .env file
require("dotenv").config();
const connectToDb = require("./src/config/database");
const app = require("./src/app");

connectToDb();

app.listen(3000, () => {
  console.log("server started with Day-8 on port 3000");
});
