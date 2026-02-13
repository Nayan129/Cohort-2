const express = require("express");
const userModel = require("./model/users.model");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());
// this will give us access to all files inside public folder so that our app not get crash
app.use(express.static("./public"));

// this is starter route for checking server started or not
app.get("/", (req, res) => {
  res.send("server started with Day-9 folder on port 3000");
});

// POST method
app.post("/api/users", async (req, res) => {
  const { name, role } = req.body;

  const users = await userModel.create({
    name,
    role,
  });

  res.status(201).json({
    message: "user created successfully",
  });
});

// FETCH method
app.get("/api/users", async (req, res) => {
  const users = await userModel.find();

  res.status(200).json({
    message: "users data fetched successfully",
    users,
  });
});

// PATCH method
app.patch("/api/users/:id", async (req, res) => {
  // this is also the way to update
  // const id = req.params.id
  // const {role} = req.body;

  try {
    const updatedUser = await userModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );

    res.status(200).json({
      message: "user updated successfully",
      updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "error updating user",
      error: error.message,
    });
  }
});

// DELETE method
app.delete("/api/users/:id", async (req, res) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(req.params.id);

    res.status(204).json({
      message: "user deleted successfully",
      deletedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "error deleting user",
      error: error.message,
    });
  }
});

// this will handle all path that we not write or created if we hit any path it will redirect us to index.html file
app.use("*name", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/public/index.html"));
});

module.exports = app;
