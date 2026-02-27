const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerController(req, res) {
  const { username, email, password } = req.body;

  const isUserAlreadyExist = await userModel.find({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExist) {
    return res.status(403).json({
      message: "user already exist with this email and password",
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    password: hash,
    email,
  });

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "user registered successfully...",
    user: {
      username,
      email,
    },
  });
}

async function loginController(req, res) {
  
}

module.exports = {
  registerController,
  loginController,
};
