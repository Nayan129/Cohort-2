const express = require("express");

const app = express();

app.use(express.json());

const students = [];

app.post("/students", (req, res) => {
  students.push(req.body);
  res.status(201).json({
    messege: "student created successfully...",
  });
});

app.get("/students", (req, res) => {
  if (students.length == 0) {
    res.status(400).json({
      messege: "students array is empty...",
    });
  } else {
    res.status(200).json({
      messege: "student fetched successfully...",
      students,
    });
    console.log(students);
  }
});

app.patch("/students/:id", (req, res) => {
  students[req.params.id].student = req.body.student;
  res.status(200).json({
    messege: "student updated successfully...",
    students,
  });
});

app.delete("/students/:id", (req, res) => {
  delete students[req.params.id];
  res.status(204).json({
    messege: "student deleted successfully...",
    students,
  });
});

app.put("/students/:id", (req, res) => {
  students[req.params.id] = req.body;
  res.status(200).json({
    messege: "student data fully updated...",
  });
});

module.exports = app;
