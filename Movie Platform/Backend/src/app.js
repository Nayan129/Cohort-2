import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

/**
 * Routes import and use here..
 **/
import authRouter from "./routes/auth.routes.js";
import movieRouter from "./routes/movie.routes.js";
app.use("/api/auth", authRouter);
app.use("/movies", movieRouter);

export default app;
