import { rateLimit } from "express-rate-limit";

/**
 * Applied to GET /api/v1/auth/google — the OAuth initiation endpoint.
 *
 * Prevents bots from hammering the redirect endpoint and triggering
 * excessive Google OAuth flows. Allows 10 login attempts per 15 minutes
 * per IP before locking them out.
 */
export const authInitLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 10,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    status: 429,
    message: "Too many login attempts. Please try again after 15 minutes.",
  },
});

/**
 * Applied to POST /api/v1/auth/signout and GET /api/v1/auth/me.
 *
 * General guard against abuse of authenticated endpoints.
 * Allows 60 requests per minute per IP.
 */
export const authApiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  limit: 60,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    status: 429,
    message: "Too many requests. Please slow down.",
  },
});
