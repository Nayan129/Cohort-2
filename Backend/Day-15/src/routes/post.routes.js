const express = require("express");
const postController = require("../controllers/post.controller");
const multer = require("multer");
const upload = multer({ Storage: multer.memoryStorage() });

const postRouter = express.Router();

postRouter.post(
  "/",
  upload.single("image"),
  postController.createPostController,
);

postRouter.get("/", postController.getAllPostController);

module.exports = postRouter;
