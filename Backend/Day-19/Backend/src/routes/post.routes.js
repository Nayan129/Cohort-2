const express = require("express");
const postController = require("../controller/post.controller");
const identifyUser = require("../middlewares/auth.middleware");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const postRouter = express.Router();

// route : POST "/api/posts/"
postRouter.post(
  "/",
  identifyUser,
  upload.single("image"),
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

// routes : POST "/api/posts/like/:postid"
postRouter.post(
  "/like/:postId",
  identifyUser,
  postController.likePostController,
);

// routes : GET "/api/posts/feed" //private
postRouter.get("/feed", identifyUser, postController.getFeedController);

module.exports = postRouter;
