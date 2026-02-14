const epxress = require("express");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/user.routes");

const app = epxress();

app.use(cookieParser());
app.use(epxress.json());
app.use("/api/auth", authRouter);

module.exports = app;
