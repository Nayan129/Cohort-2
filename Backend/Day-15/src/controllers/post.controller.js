const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = ImageKit;
const jwt = require("jsonwebtoken");

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  console.log(req.body, req.file);

  if (!req.file) {
    return res.status(400).json({
      message: "Image file is required",
    });
  }

  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "token not provided, unauthorized access",
    });
  }

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message: "token invalid",
    });
  }

  const file = await imageKit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Millie",
    folder: "Insta-clone-posts",
  });

  const post = await postModel.create({
    caption: req.body.caption,
    profileImage: file.url,
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
    return res.status(401).json({
      message: "unauthorized user",
    });
  }

  let decoded;
  

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message: "token invalid",
    });
  }

  const userId = decoded.id;

  const post = await postModel.find({
    user: userId,
  });

  res.status(200).json({
    message: "posts fetched successfully",
    post,
  });
}

module.exports = {
  createPostController,
  getAllPostController,
};
