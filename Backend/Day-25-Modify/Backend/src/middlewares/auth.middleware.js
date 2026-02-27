const jwt = require("jsonwebtoken");

export const identifyUser = (req, res, next) => {
  const token = req.cookies.token;

  // here we check token store in cookies or not
  if (!token) {
    return res.status(401).json({
      message: "unauthorized user",
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
};
