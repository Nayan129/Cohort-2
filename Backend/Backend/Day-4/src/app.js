// here we store our express inside a variable
const express = require("express");

// create instance for running express file
const app = express();

// we initialize here a middleware
app.use(express.json());

// we store our notes inside this notes array
const notes = [];

app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

/* POST method */
app.post("/notes", (req, res) => {
  notes.push(req.body);
  console.log(notes);
  res.send("notes created...");
});

/* GET method */
app.get("/notes", (req, res) => {
  res.send(notes);
});

/* PATCH method */
app.patch("/notes/:index", (req, res) => {
  notes[req.params.index].description = req.body.description;
  res.send("description updated successfully");
});

/* DELETE method */
app.delete("/notes/:index", (req, res) => {
  delete notes[req.params.index];
  res.send("note deleted successfully");
});

// export app.js so that we can access it inside server.js or any js file
module.exports = app;
