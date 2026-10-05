import { Router } from "express";
import { requireAuth } from "../middlewares/requireAuth.js";
import { authApiLimiter } from "../middlewares/rateLimiter.js";
import {
  createAccount,
  getAccounts,
  getAccount,
  updateAccount,
  deleteAccount,
} from "../controllers/account.controller.js";

const accountRoute = Router();

accountRoute.use(requireAuth, authApiLimiter);

accountRoute.post("/", createAccount);
accountRoute.get("/", getAccounts);
accountRoute.get("/:id", getAccount);
accountRoute.patch("/:id", updateAccount);
accountRoute.delete("/:id", deleteAccount);

export default accountRoute;
