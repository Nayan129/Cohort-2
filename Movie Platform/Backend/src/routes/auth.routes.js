import express from "express";
import identifyUser from "../middleware/auth.middleware.js";
import authController from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/register", identifyUser, authController.registerController);

export default router;
