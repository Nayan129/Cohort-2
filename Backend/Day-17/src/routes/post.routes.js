const express = require("express");
const postController = require("../controller/post.controller");
const multer = require("multer");
const upload = multer({ Storage: multer.memoryStorage() });

const postRouter = express.Router();

// route : POST "/api/posts/"
postRouter.post(
  "/",
  upload.single("image"),
  postController.createPostController,
);

// route : GET "/api/posts/"
postRouter.get("/", postController.getAllPostController);

// route : GET "/api/posts/details/:id"
postRouter.get("/details/:postId", postController.getPostDetailsController);

module.exports = postRouter;
