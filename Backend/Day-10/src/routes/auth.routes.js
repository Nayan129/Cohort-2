const express = require("express");
const userModel = require("../models/user.model");
// we write express.router to create routes in this file and export it to app.js
const authRouter = express.Router();
const jwt = require("jsonwebtoken");

// this is for register user first time by using " POST " method
authRouter.post("/register", async (req, res) => {
  // firstly we desctructure all required data from req.body
  const { name, email, password } = req.body;

  const isUserAlreadyExist = await userModel.findOne({ email });

  if (isUserAlreadyExist) {
    return res.status(400).json({
      message: "user already exist with this email address...",
      email,
    });
  }

  // then create database using this data
  const users = await userModel.create({
    name,
    email,
    password,
  });

  // now we create token for registered user
  const token = jwt.sign(
    {
      id: users._id,
      email: users.email,
    },
    process.env.JWT_SECRET,
  );

  // we store token in our browser/cookies so that server can access it whenever user visit website
  res.cookie("jwt_token", token);

  res.status(201).json({
    message: "user registered successfully ✅",
    users,
    token,
  });
});

module.exports = authRouter;
