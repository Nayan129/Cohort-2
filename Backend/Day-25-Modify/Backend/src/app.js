const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

/**
 * Routes import and use here..
 **/
const authRouter = require("./routes/auth.route");
const songRouter = require("./routes/songs.route");
app.use("/api/auth", authRouter);
app.use("/api/songs", songRouter);

module.exports = app;
