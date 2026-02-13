const express = require("express");
const app = express();

app.use(express.json());

const employees = [];

// this is main route when the server is start
app.get("/", (req, res) => {
  res.send("Server is Running...");
});

// this create employees and push into employees array
app.post("/employees", (req, res) => {
  employees.push(req.body);
  res.status(201).json({
    messege: "employee creation done ✅",
  });
  console.log(employees);
});

// this will show employees that created
app.get("/employees", (req, res) => {
  console.log(employees);
  {
    employees.length === 0
      ? res.status(404).json({
          messege: "no employee in database",
        })
      : res.status(200).json({
          messege: "employees data fetched ✅",
          employees,
        });
  }
});

// this is update one particular employees data it will be role or employee itself
app.patch("/employees/:index", (req, res) => {
  employees[req.params.index].role = req.body.role;
  res.status(200).json({
    messege: "employee role updated ✅",
  });
});

// this is use to delete one particular employees data
app.delete("/employees/:index", (req, res) => {
  delete employees[req.params.index];
  res.status(204).json({
    messege: "employee data deleted successfully ✅",
  });
});


module.exports = app;
