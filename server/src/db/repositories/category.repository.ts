import type {
  Category,
  CategoryType,
  Prisma,
} from "../../generated/prisma/client.js";
import { prisma } from "../client.js";

// ── Types ────────────────────────────────────────────────────────────────────

export type CreateCategoryInput = Omit<
  Prisma.CategoryUncheckedCreateInput,
  "id" | "createdAt" | "updatedAt"
>;

export type UpdateCategoryInput = Prisma.CategoryUncheckedUpdateInput;

// ── Repository ───────────────────────────────────────────────────────────────

export const categoryRepository = {
  /**
   * Return all categories visible to a user:
   * their own categories + global (userId = null) categories.
   */
  findAllForUser(userId: string, type?: CategoryType): Promise<Category[]> {
    return prisma.category.findMany({
      where: {
        OR: [{ userId }, { userId: null }],
        ...(type ? { type } : {}),
      },
      orderBy: [{ userId: "asc" }, { name: "asc" }],
    });
  },

  /** Find a single category by id. */
  findById(id: string): Promise<Category | null> {
    return prisma.category.findUnique({ where: { id } });
  },

  /** Find a user-owned category by its unique name+type combination. */
  findByUserNameType(
    userId: string,
    name: string,
    type: CategoryType
  ): Promise<Category | null> {
    return prisma.category.findUnique({
      where: { userId_name_type: { userId, name, type } },
    });
  },

  /** Create a new category. Pass `userId: null` for a global category. */
  create(data: CreateCategoryInput): Promise<Category> {
    return prisma.category.create({ data });
  },

  /** Update a user-owned category, scoped to the owning user. */
  update(
    id: string,
    userId: string,
    data: UpdateCategoryInput
  ): Promise<Category> {
    return prisma.category.update({ where: { id, userId }, data });
  },

  /** Delete a user-owned category (cascades via DB constraint). */
  delete(id: string, userId: string): Promise<Category> {
    return prisma.category.delete({ where: { id, userId } });
  },
} as const;
