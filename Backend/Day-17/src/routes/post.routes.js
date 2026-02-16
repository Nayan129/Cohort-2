const express = require("express");
const postController = require("../controller/post.controller");
const multer = require("multer");
const upload = multer({ Storage: multer.memoryStorage() });

const postRouter = express.Router();

// routes : "/api/posts/"
postRouter.post(
  "/",
  upload.single("image"),
  postController.createPostController,
);

module.exports = postRouter;
