const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

// routes import
const authRouter = require("./routes/auth.routes");
const postRouter = require("./routes/post.routes");
const followRouter = require("./routes/follow.routes");

// routes use
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/users", followRouter);
module.exports = app;
