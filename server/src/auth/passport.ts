import passport from "passport";
import {
  Strategy as GoogleStrategy,
  type Profile,
  type VerifyCallback,
} from "passport-google-oauth20";
import { userRepository } from "../db/repositories/user.repository.js";

passport.serializeUser((user: Express.User, done) => {
  done(null, (user as { id: string }).id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await userRepository.findById(id);
    done(null, user ?? false);
  } catch (err) {
    done(err, false);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: process.env.GOOGLE_CALLBACK_URL as string,
    },
    async (
      _accessToken: string,
      _refreshToken: string,
      profile: Profile,
      done: VerifyCallback,
    ) => {
      try {
        const email = profile.emails?.[0]?.value;
        if (!email) {
          return done(new Error("Google account has no associated email"));
        }

        // 1. Try to find an existing user by provider
        let user = await userRepository.findByProvider("google", profile.id);

        if (!user) {
          // 2a. Check for an existing account with the same email (different provider)
          const existing = await userRepository.findByEmail(email);
          if (existing) {
            return done(
              new Error(
                "An account with this email already exists with a different provider",
              ),
            );
          }

          // 2b. Create a brand-new user
          user = await userRepository.create({
            authProvider: "google",
            providerUserId: profile.id,
            email,
            name: profile.displayName ?? null,
            avatarUrl: profile.photos?.[0]?.value ?? null,
          });
        } else {
          // 3. Refresh display name / avatar from Google on every login
          user = await userRepository.update(user.id, {
            name: profile.displayName ?? user.name,
            avatarUrl: profile.photos?.[0]?.value ?? user.avatarUrl,
          });
        }

        return done(null, user);
      } catch (err) {
        return done(err as Error);
      }
    },
  ),
);

export default passport;
