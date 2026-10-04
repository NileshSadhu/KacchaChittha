import { Router } from "express";
import { googleSignIn, signOut, getMe } from "../controllers/auth.controller.js";
import { requireAuth } from "../middlewares/requireAuth.js";

const authRoute = Router();

// Public
authRoute.post("/google", googleSignIn);   // POST /api/v1/auth/google
authRoute.post("/signout", signOut);        // POST /api/v1/auth/signout

// Protected – needs a valid session
authRoute.get("/me", requireAuth, getMe);  // GET  /api/v1/auth/me

export default authRoute;
