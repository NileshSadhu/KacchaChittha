import type { Request, Response } from "express";
import { verifyGoogleIdToken } from "../auth/googleAuth.js";
import { userRepository } from "../db/repositories/user.repository.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { z } from "zod";

// ── Validation ────────────────────────────────────────────────────────────────

const googleSignInSchema = z.object({
  idToken: z.string().min(1, "Google ID token is required"),
});

// ── Controllers ───────────────────────────────────────────────────────────────

/**
 * POST /api/v1/auth/google
 *
 * Verifies the Google ID Token from the client, finds or creates the user,
 * and establishes an Express session.
 */
export const googleSignIn = asyncHandler(async (req: Request, res: Response) => {
  const parsed = googleSignInSchema.safeParse(req.body);
  if (!parsed.success) {
    throw new ApiError(400, "Validation failed", parsed.error.issues);
  }

  const { idToken } = parsed.data;

  // 1. Verify the token with Google
  const googleUser = await verifyGoogleIdToken(idToken).catch(() => {
    throw new ApiError(401, "Invalid or expired Google ID token");
  });

  // 2. Find or create the user in our DB
  let user = await userRepository.findByProvider("google", googleUser.sub);

  if (!user) {
    // Check if an account with this email already exists (different provider)
    const existing = await userRepository.findByEmail(googleUser.email);
    if (existing) {
      throw new ApiError(
        409,
        "An account with this email already exists with a different provider",
      );
    }

    user = await userRepository.create({
      authProvider: "google",
      providerUserId: googleUser.sub,
      email: googleUser.email,
      name: googleUser.name ?? null,
      avatarUrl: googleUser.picture ?? null,
    });
  } else {
    // Refresh name / avatar from Google on every login
    user = await userRepository.update(user.id, {
      name: googleUser.name ?? user.name,
      avatarUrl: googleUser.picture ?? user.avatarUrl,
    });
  }

  // 3. Store the user id in the session
  req.session.userId = user.id;

  // 4. Respond (never send sensitive fields)
  return res.status(200).json(
    new ApiResponse(200, {
      id: user.id,
      email: user.email,
      name: user.name,
      avatarUrl: user.avatarUrl,
    }, "Signed in successfully"),
  );
});

/**
 * POST /api/v1/auth/signout
 *
 * Destroys the current session.
 */
export const signOut = asyncHandler(async (req: Request, res: Response) => {
  await new Promise<void>((resolve, reject) =>
    req.session.destroy((err) => (err ? reject(err) : resolve())),
  );
  res.clearCookie("connect.sid");
  return res.status(200).json(new ApiResponse(200, null, "Signed out successfully"));
});

/**
 * GET /api/v1/auth/me
 *
 * Returns the currently authenticated user (session must be valid).
 */
export const getMe = asyncHandler(async (req: Request, res: Response) => {
  // userId is guaranteed by requireAuth middleware on this route
  const userId = res.locals.userId as string;

  const user = await userRepository.findById(userId);
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  return res.status(200).json(
    new ApiResponse(200, {
      id: user.id,
      email: user.email,
      name: user.name,
      avatarUrl: user.avatarUrl,
      createdAt: user.createdAt,
    }, "User fetched"),
  );
});
