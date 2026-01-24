const express = require("express");

const app = express(); // server instance created here

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/about", (req, res) => {
  res.send("this is about page");
});
app.get("/home", (req, res) => {
  res.send("this is home page");
});

app.listen(3000, () => {
  // server start here
  console.log("server started at port 3000 successfully...");
});
