const express = require("express");
const userModel = require("../models/user.model");
// we write express.router to create routes in this file and export it to app.js
const authRouter = express.Router();
const jwt = require("jsonwebtoken");
// this is hash method use for secure password from breach/leak
const crypto = require("crypto");

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

  // storing password as HASH
  const hash = crypto.createHash("md5").update(password).digest("hex");

  // then create database using this data
  const users = await userModel.create({
    name,
    email,
    password: hash,
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

// this route will check for cookies data in our cookie
authRouter.post("/protected", (req, res) => {
  console.log(req.cookies);
  res.status(200).json({
    message: "this is protected route",
  });
});

// this route is for check user email & password is correct or not for login

// the callback/arrow Function is also called controller.
authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(404).json({
      message: "email address not found ❌",
    });
  }

  // it compare database hash password with req.body password
  const isPasswordMatched =
    user.password === crypto.createHash("md5").update(password).digest("hex");

  if (!isPasswordMatched) {
    return res.status(401).json({
      message: "invalid Password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("jwt_token", token);

  res.status(200).json({
    message: "user LoggedIn Successfully ✅",
    user,
  });
});

module.exports = authRouter;
