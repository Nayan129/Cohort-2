const express = require("express");
const authController = require("../controller/auth.controller");
const multer = require("multer");
const upload = multer({ Storage: multer.memoryStorage() });

const authRouter = express.Router();

// path will become : '/api/auth/register'
authRouter.post(
  "/register",
  upload.any(),
  authController.userRegisterController,
);

// path will become : '/api/auth/login'
authRouter.post("/login", authRouter.userLoginController);

module.exports = authRouter;
