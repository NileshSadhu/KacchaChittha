import type { Prisma, User } from "../../generated/prisma/client.js";
import { prisma } from "../client.js";

// ── Types ────────────────────────────────────────────────────────────────────

export type CreateUserInput = Prisma.UserCreateInput;
export type UpdateUserInput = Prisma.UserUpdateInput;

// ── Repository ───────────────────────────────────────────────────────────────

export const userRepository = {
  /** Find a user by their primary key. */
  findById(id: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { id } });
  },

  /** Find a user by their email address. */
  findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { email } });
  },

  /** Find a user by their OAuth provider and provider-specific user ID. */
  findByProvider(
    authProvider: string,
    providerUserId: string,
  ): Promise<User | null> {
    return prisma.user.findUnique({
      where: { authProvider_providerUserId: { authProvider, providerUserId } },
    });
  },

  /** Create a new user. */
  create(data: CreateUserInput): Promise<User> {
    return prisma.user.create({ data });
  },

  /** Update a user by their primary key. */
  update(id: string, data: UpdateUserInput): Promise<User> {
    return prisma.user.update({ where: { id }, data });
  },

  /** Delete a user by their primary key. */
  delete(id: string): Promise<User> {
    return prisma.user.delete({ where: { id } });
  },
} as const;
