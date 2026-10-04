import type { Account, AccountType, Prisma } from "../../generated/prisma/client.js";
import { prisma } from "../client.js";

// ── Types ────────────────────────────────────────────────────────────────────

export type CreateAccountInput = Omit<
  Prisma.AccountUncheckedCreateInput,
  "id" | "createdAt" | "updatedAt"
>;

export type UpdateAccountInput = Prisma.AccountUncheckedUpdateInput;

// ── Repository ───────────────────────────────────────────────────────────────

export const accountRepository = {
  /** Return all accounts belonging to a user. */
  findAllByUser(userId: string): Promise<Account[]> {
    return prisma.account.findMany({
      where: { userId },
      orderBy: { createdAt: "asc" },
    });
  },

  /** Return only active accounts for a user, optionally filtered by type. */
  findActiveByUser(userId: string, type?: AccountType): Promise<Account[]> {
    return prisma.account.findMany({
      where: { userId, isActive: true, ...(type ? { type } : {}) },
      orderBy: { name: "asc" },
    });
  },

  /** Find a single account by id, ensuring it belongs to the given user. */
  findByIdAndUser(id: string, userId: string): Promise<Account | null> {
    return prisma.account.findUnique({ where: { id, userId } });
  },

  /** Create a new account for a user. */
  create(data: CreateAccountInput): Promise<Account> {
    return prisma.account.create({ data });
  },

  /** Update an account, scoped to the owning user. */
  update(
    id: string,
    userId: string,
    data: UpdateAccountInput
  ): Promise<Account> {
    return prisma.account.update({ where: { id, userId }, data });
  },

  /** Soft-delete by marking the account inactive. */
  deactivate(id: string, userId: string): Promise<Account> {
    return prisma.account.update({
      where: { id, userId },
      data: { isActive: false },
    });
  },

  /** Hard-delete an account (only safe if no entries reference it). */
  delete(id: string, userId: string): Promise<Account> {
    return prisma.account.delete({ where: { id, userId } });
  },
} as const;
