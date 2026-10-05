import { Router } from "express";
import passport from "../auth/passport.js";
import {
  googleCallback,
  signOut,
  getMe,
} from "../controllers/auth.controller.js";
import { requireAuth } from "../middlewares/requireAuth.js";

const authRoute = Router();

authRoute.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  }),
);

authRoute.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${process.env.CLIENT_ORIGIN ?? "http://localhost:5173"}/auth/callback?status=error`,
    session: true,
  }),
  googleCallback,
);

authRoute.post("/signout", requireAuth, signOut);
authRoute.get("/me", requireAuth, getMe);

export default authRoute;
