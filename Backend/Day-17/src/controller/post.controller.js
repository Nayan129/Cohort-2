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
      message: "token not provided",
    });
  }

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message: "this token is not provided by our JWT_SECRET",
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

module.exports = {
  createPostController,
};
