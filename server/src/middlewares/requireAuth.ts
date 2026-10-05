import type { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/ApiError.js";

export function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  if (!req.isAuthenticated() || !req.user) {
    next(new ApiError(401, "Unauthorized – please sign in"));
    return;
  }
  res.locals.userId = req.user.id;
  next();
}
