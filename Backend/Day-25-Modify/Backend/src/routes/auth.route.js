import { body } from "express-validator";
const express = require("express");
const identifyUser = require("../middlewares/auth.middleware");
const authController = require("../controllers/authController");

const authRouter = express.Router();

authRouter.post(
  "/register",
  [body("email").isEmail(), body("password").isLength({ min: 6 })],
  authController.registerController,
);

authRouter.post("/login", authController.loginController);

authRouter.get("/get-me", identifyUser, authController.getMeController);

authRouter.post("/logout", identifyUser, authController.logoutController);

module.exports = authRouter;
