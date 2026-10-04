import type { Request, Response, NextFunction } from "express";
import { ApiError } from "./ApiError.js";

/**
 * Express global error-handling middleware.
 * Must be registered LAST (after all routes) in app.ts.
 *
 * - Known ApiErrors are serialised with their status code.
 * - Unexpected errors fall back to 500 Internal Server Error.
 */
export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({
      success: false,
      statusCode: err.statusCode,
      message: err.message,
      errors: err.errors,
    });
    return;
  }

  console.error("[Unhandled Error]", err);
  res.status(500).json({
    success: false,
    statusCode: 500,
    message: "Internal Server Error",
    errors: [],
  });
}
