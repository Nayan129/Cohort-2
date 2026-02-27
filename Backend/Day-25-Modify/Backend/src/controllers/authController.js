const userModel = require("../models/user.model");
const bcryptjs = require("bcryptjs");

async function registerController(req, res) {
  const { username, email, password } = req.body;

  const isUserAlreadyExist = await userModel.find({
    $or: [{ username }, { email }],
  });

  if(isUserAlreadyExist){
    return res.status(403).json({
      
    })
  }
}

async function loginController(req, res) {}

module.exports = {
  registerController,
  loginController,
};
