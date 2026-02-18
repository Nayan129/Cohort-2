const postModel = require("../models/post.model");
const likeModel = require("../models/likes.model");
const ImageKit = require("@imagekit/nodejs/index.js");
const { toFile } = ImageKit;

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

// this controller is for creating post
async function createPostController(req, res) {
  console.log(req.body, req.file);

  if (!req.file) {
    return res.status(401).json({
      message: "Image file is required",
    });
  }

  // this is for upload image on imageKit
  const file = await imageKit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: Date.now() + ".jpg",
    folder: "DAY-18-Posts",
  });

  // this create post in database
  const post = await postModel.create({
    caption: req.body.caption,
    imageUrl: file.url,
    user: req.user.id,
  });

  res.status(201).json({
    message: "post created successfully",
    post,
  });
}

// this controller is for fetching all posts
async function getAllPostController(req, res) {
  const accountHolderUser = req.user.id;
  const post = await postModel.find({ user: accountHolderUser });

  if (post.length === 0) {
    return res.status(404).json({
      message: "posts not found",
    });
  }

  res.status(200).json({
    message: "All Posts Fetched Successfully",
    post,
  });
}

// this controller is for fetch post details i.e. the user who is asking for is created this post or not
async function getPostDetailsController(req, res) {
  const accountHolderUser = req.user.id;
  const postId = req.params.postId;

  const post = await postModel.findById(postId);
  if (!post) {
    return res.status(404).json({
      message: "post not found",
    });
  }

  const validUser = post.user.toString() === accountHolderUser;
  if (!validUser) {
    return res.status(403).json({
      message: "forbidden content",
    });
  }

  res.status(200).json({
    message: "post details fetched successfully",
    post,
  });
}

// this controller is for like/unlike particular post
async function likePostController(req, res) {
  const accountHolderUser = req.user.id;
  const postId = req.params.postId;

  const post = await postModel.findById(postId);
  if (!post) {
    return res.status(404).json({
      message: "post not found",
    });
  }

  const isAlreadyLike = await likeModel.findOne({
    user: accountHolderUser,
    post: postId,
  });

  if (isAlreadyLike) {
    await likeModel.findOneAndDelete({
      user: accountHolderUser,
      post: postId,
    });
    return res.status(200).json({
      message: "post unlike successfully",
    });
  } else {
    await likeModel.create({
      user: accountHolderUser,
      post: postId,
    });
    return res.status(201).json({
      message: "post like successfully ",
    });
  }
}

module.exports = {
  createPostController,
  getAllPostController,
  getPostDetailsController,
  likePostController,
};
