const postModel = require("../models/post.model");
const jwt = require("jsonwebtoken");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = ImageKit;

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  console.log(req.body, req.file);

  if (!req.file) {
    return res.status(401).json({
      message: "Image file is required",
    });
  }

  const file = await imageKit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "MillieBobbyBrown",
    folder: "DAY-17-Posts",
  });

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

async function getAllPostController(req, res) {
  const userId = req.user.id;
  const post = await postModel.find({ user: userId });

  if (!post) {
    return res.status(401).json({
      message: "post not found",
    });
  }

  res.status(200).json({
    message: "All Posts Fetched Successfully",
    post,
  });
}

async function getPostDetailsController(req, res) {
  const userId = req.user.id;
  const postId = req.params.postId;

  const post = await postModel.findById(postId);
  if (!post) {
    return res.status(404).json({
      message: "post not found",
    });
  }

  const validUser = post.user.toString() === userId;
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

module.exports = {
  createPostController,
  getAllPostController,
  getPostDetailsController,
};
