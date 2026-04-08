import { config } from "dotenv";
import app from "./src/app.js";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
config();

app.get("/", (req, res) => {
  res.send("Hello , server is running...");
});

// initialized passport library and used it
app.use(passport.initialize());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (_, __, profile, done) => {
      return done(null, profile);
    },
  ),
);

// authentication process
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

// authentication success
app.get(
  "/auth/google/callback",
  passport.authenticate("google", { session: false, failureRedirect: "/" }),
  (req, res) => {
    console.log(req.user);
    res.send("Google authenticate Successful");
  },
);

app.listen(3000, (req, res) => {
  console.log("server is running on port 3000 successfully.");
});
