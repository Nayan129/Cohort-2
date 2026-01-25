const express = require("express");
const app = express();

// all created user are store in this array
const users = [];

app.use(express.json());

// get method for "/" page
app.get("/", (req, res) => {
  res.send("server started...");
});

// post create method
app.post("/users", (req, res) => {
  users.push(req.body);
  res.status(201).json({
    message: "user created successfully",
  });
  console.log(req.body);
});

// get method to show users
app.get("/users", (req, res) => {
  if (users.length === 0) {
    return res.status(404).json({ message: "No users found" });
  }

  res.status(200).json({
    message: "users fetch successfully..",
    users,
  });
  console.log(users);
});

// delete method
app.delete("/users/:index", (req, res) => {
  delete users[req.params.index];
  res.status(204).json({
    message: "user deleted successfully..",
  });
});

// patch method
app.patch("/users/:index", (req, res) => {
  users[req.params.index].description = req.body.description;
  res.status(200).json({
    message: "description updated successfully...",
  });
});

// put method
app.put("/users/:index", (req, res) => {
  users[req.params.index] = req.body;
  res.status(200).json({
    message: "user title and description updated",
  });
});



module.exports = app;
