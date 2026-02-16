const express = require("express");
const authController = require("../controller/auth.controller");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const authRouter = express.Router();

// path will become : '/api/auth/register'
authRouter.post(
  "/register",
  upload.single("profileImage"),
  authController.userRegisterController,
);

// path will become : '/api/auth/login'
authRouter.post("/login", authController.userLoginController);

module.exports = authRouter;
