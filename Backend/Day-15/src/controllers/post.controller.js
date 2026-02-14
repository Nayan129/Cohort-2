const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = ImageKit;

async function createPostController(req, res) {
  console.log(req.body, req.file);

  const imageKit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  });

  const file = await imageKit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Millie",
  });

  res.send(file);
}

module.exports = {
  createPostController,
};
