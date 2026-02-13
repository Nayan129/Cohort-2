const express = require("express");
const userModel = require("../models/user.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const authRouter = express.Router();

// here is user register api/route
authRouter.post("/register", async (req, res) => {
  const { username, email, password, bio, profileImage } = req.body;

  // here we use signle calling so that at single call to database and check username or email exist
  const isUserAlreadyExist = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExist) {
    return res.status(409).json({
      message:
        "user already exist" +
        (isUserAlreadyExist.email == email
          ? "email already exist choose different email"
          : "username already exist choose different username"),
    });
  }

  // we save password in hash format so that if database leak password still secure
  const hash = crypto.createHash("sha256").update(password).digest("hex");

  // now time to create user using userModel.create
  const user = await userModel.create({
    username,
    email,
    bio,
    profileImage,
    password: hash,
  });

  // now we create token that with store user after creation
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  
});

module.exports = authRouter;
