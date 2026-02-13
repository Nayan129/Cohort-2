const express = require("express");
// we write express.router to create routes in this file and export it to app.js
const authRouter = express.Router();
const authController = require("../Controllers/authController");

// this is for register user first time by using " POST " method
authRouter.post("/register", authController.registerController);

// this route will check for cookies data in our cookie
authRouter.post("/protected", (req, res) => {
  console.log(req.cookies);
  res.status(200).json({
    message: "this is protected route",
  });
});

// this route is for check user email & password is correct or not for login

// the callback/arrow Function is also called controller.
authRouter.post("/login", authController.loginController);

module.exports = authRouter;
