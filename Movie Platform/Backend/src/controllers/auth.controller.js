import userModel from "../models/auth.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

async function registerController(req, res) {
  const { username, password, email } = req.body;

  // user already exist or not
  const isUserAlreadyExist = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExist) {
    return res.status(401).json({
      message: "user already exist",
    });
  }

  // hash the password
  const hash = await bcrypt.hash(password, 10);

  // create user
  const user = await userModel.create({
    username: username,
    password: hash,
    email: email,
  });

  //after creating user sign token using jwt
  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  //now token send to cookies
  res.cookie("token", token);

  // now send res as user registered
  res.status(201).json({
    message: "user registered successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}

export default {
  registerController,
};
