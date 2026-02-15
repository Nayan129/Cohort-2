const express = require("express");
const authController = require("../controllers/auth.controller");
const multer = require("multer");
const upload = multer({ Storage: multer.memoryStorage() });

const authRouter = express.Router();

authRouter.post("/register", upload.any(), authController.registerController);

authRouter.post("/login", authController.loginController);

module.exports = authRouter;
