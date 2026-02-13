const express = require("express");
const authRouter = require("./routes/auth.routes");
const cookieParser = require("cookie-parser");

const app = express();
// middlewares
app.use(express.json());
app.use(cookieParser());

// this is required for when we hit register api we have to write first "/api/auth/register"
app.use("/api/auth", authRouter);

module.exports = app;
