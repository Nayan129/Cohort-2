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

  const token = req.cookies.token;

  if (!token) {
    return res.status(404).json({
      message: "unauthorized user",
    });
  }

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message: "token not match",
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
    user: decoded.id,
  });

  res.status(201).json({
    message: "post created successfully",
    post,
  });
}

async function getAllPostController(req, res) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(404).json({
      message: "unauthorized user",
    });
  }

  let decoded;
  try {
    decoded = await jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(404).json({
      message: "token not match",
    });
  }

  const userId = decoded.id;
  const post = await postModel.find({ user: userId });

  if (!post) {
    return res.status(403).json({
      message: "forbidden content",
    });
  }

  res.status(200).json({
    message: "All Posts Fetched Successfully",
    post,
  });
}

module.exports = {
  createPostController,
  getAllPostController,
};
