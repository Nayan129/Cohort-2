const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* register user controller*/
async function registerController(req, res) {
  const { username, email, password } = req.body;

  const isUserAlreadyExist = await userModel.findOne({
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

/* Loggin user controller*/
async function loginController(req, res) {
  const { username, password, email } = req.body;

  const user = await userModel
    .findOne({
      $or: [{ username: username }, { email: email }],
    })
    .select("+password");

  if (!user) {
    return res.status(401).json({
      message: "Invalid Credentials",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid Credentials",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "user LoggedIn successfully...",
    user: {
      username,
      email,
    },
  });
}

async function getMeController(req, res) {
  const userId = req.user.id;
  const user = await userModel.findById(userId);

  res.status(200).json({
    user: {
      username: user.username,
      email: user.email,
    },
  });
}

module.exports = {
  registerController,
  loginController,
  getMeController,
};
