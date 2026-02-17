const followModel = require("../models/follow.model");
const jwt = require("jsonwebtoken");

async function followUserController(req, res) {
  const accountDetails = await followModel.create({
    follower: req.user.id,
  });
}

module.exports = {
  followUserController,
};
