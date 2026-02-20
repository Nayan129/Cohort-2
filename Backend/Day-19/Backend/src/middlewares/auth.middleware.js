const jwt = require("jsonwebtoken");
async function identifyUser(req, res, next) {
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
      message: "token not match",
    });
  }

  req.user = decoded;
  next();
}

module.exports = identifyUser;
