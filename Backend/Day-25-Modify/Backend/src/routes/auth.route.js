const express = require("express");
const identifyUser = require("../middlewares/auth.middleware");
const authController = require("../controllers/authController");

const authRouter = express.Router();

authRouter.post("/register", identifyUser, authController.registerController);

authRouter.post("/login", identifyUser, authController.loginController);

module.exports = authRouter;
