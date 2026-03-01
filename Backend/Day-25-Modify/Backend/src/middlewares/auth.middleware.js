const jwt = require("jsonwebtoken");
const blacklistModel = require("../models/blacklist.model");
const redis = require("../config/cache");

async function identifyUser(req, res, next) {
  const token = req.cookies.token;

  // here we check token store in cookies or not
  if (!token) {
    return res.status(401).json({
      message: "unauthorized user",
    });
  }

  const isTokenBlacklisted = await redis.get(token);

  if (isTokenBlacklisted) {
    return res.status(400).json({
      message: "invalid token",
    });
  }

  // if token found check its sign with jwt or not
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message: "token not match",
    });
  }

  // send token in req.user
  req.user = decoded;
  next();
}

module.exports = identifyUser;
