const express = require("express");
const authController = require("../controllers/authController");
const authRouter = express.Router();

// here is user register api/route
authRouter.post("/register", authController.registerController);

// here is user login api.route
authRouter.post("/login", authController.loginController);

module.exports = authRouter;
