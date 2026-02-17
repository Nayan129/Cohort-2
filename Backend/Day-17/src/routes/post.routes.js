const express = require("express");
const postController = require("../controller/post.controller");
const identifyUser = require("../middlewares/auth.middleware");
const multer = require("multer");
const upload = multer({ Storage: multer.memoryStorage() });

const postRouter = express.Router();

// route : POST "/api/posts/"
postRouter.post(
  "/",
  upload.single("image"),
  identifyUser,
  postController.createPostController,
);

// route : GET "/api/posts/"
postRouter.get("/", identifyUser, postController.getAllPostController);

// route : GET "/api/posts/details/:id"
postRouter.get(
  "/details/:postId",
  identifyUser,
  postController.getPostDetailsController,
);

module.exports = postRouter;
