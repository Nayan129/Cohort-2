import "dotenv/config";
import app from "./src/app.js";
import connectToDB from "./src/config/database.js";

connectToDB();

const port = 3000;

app.listen(port, () => {
  console.log(`server running on port ${port} successfully`);
});
