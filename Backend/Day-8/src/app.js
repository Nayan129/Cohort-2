const express = require("express");
const noteModel = require("./model/notes.model");

const app = express();
app.use(express.json());

// const notes = [];

// this is our first server starting method
app.get("/", (req, res) => {
  res.send("server started with Day-8 folder successfully");
});

// this method is use to create some notes
app.post("/notes", async (req, res) => {
  const { title, description } = req.body;
  const notes = await noteModel.create({
    title,
    description,
  });

  res.status(201).json({
    message: "notes created successfully...",
  });
});

// this method fetch all the notes that we created
app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();
  res.status(200).json({
    message: "fetch all notes successfully",
    notes,
  });
});

module.exports = app;
