// this dotenv file we have to require at top of the code so that url hit first then connect to Database otherwise we could not get the output we want...
require("dotenv").config();
const app = require("./src/app");
const connectToDB = require("./src/config/database");

connectToDB();

app.listen(3000, () => {
  console.log("server running on port 3000");
});
