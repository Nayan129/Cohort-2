import express from "express";
// import identifyUser from "../middleware/auth.middleware.js";
import authController from "../controllers/auth.controller.js";
const router = express.Router();

// Routes : POST - "/api/auth/register"
router.post("/register", authController.registerController);

export default router;
