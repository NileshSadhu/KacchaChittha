import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export interface GoogleTokenPayload {
  sub: string;       // provider user ID
  email: string;
  name?: string;
  picture?: string;
}

/**
 * Verifies a Google ID Token sent from the frontend.
 * Returns the decoded payload on success, throws on failure.
 */
export async function verifyGoogleIdToken(
  idToken: string,
): Promise<GoogleTokenPayload> {
  const ticket = await client.verifyIdToken({
    idToken,
    audience: process.env.GOOGLE_CLIENT_ID as string,
  });

  const payload = ticket.getPayload();

  if (!payload || !payload.sub || !payload.email) {
    throw new Error("Invalid Google ID token payload");
  }

  return {
    sub: payload.sub,
    email: payload.email,
    ...(payload.name !== undefined && { name: payload.name }),
    ...(payload.picture !== undefined && { picture: payload.picture }),
  };
}
