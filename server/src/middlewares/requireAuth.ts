import type { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/ApiError.js";

/**
 * Middleware that protects routes requiring an authenticated session.
 * Attaches the userId to res.locals.userId for downstream controllers.
 */
export function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  if (!req.session?.userId) {
    next(new ApiError(401, "Unauthorized – please sign in"));
    return;
  }
  // Attach userId so controllers don't need to touch the session directly
  res.locals.userId = req.session.userId as string;
  next();
}
