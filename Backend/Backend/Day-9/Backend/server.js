require("dotenv").config();
const connectToDb = require("./src/config/database");
const app = require("./src/app");

connectToDb();

app.listen(3000, () => {
  console.log("server started with day-9 on port 3000");
});
