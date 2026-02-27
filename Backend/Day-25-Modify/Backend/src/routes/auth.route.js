const express = require("express");
const identifyUser = require("../middlewares/auth.middleware");
const authController = require("../controllers/authController");

const authRouter = express.Router();

authRouter.post("/register", identifyUser, authController.registerController);

authRouter.post("/login", identifyUser, authController.loginController);

authRouter.get("/get-me", identifyUser, authController.getMeController);

module.exports = authRouter;
