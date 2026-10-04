import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
  max: process.env.DB_POOL_MAX ? parseInt(process.env.DB_POOL_MAX, 10) : 10,
  idleTimeoutMillis: process.env.DB_IDLE_TIMEOUT_MS
    ? parseInt(process.env.DB_IDLE_TIMEOUT_MS, 10)
    : 30_000,
  connectionTimeoutMillis: process.env.DB_CONNECT_TIMEOUT_MS
    ? parseInt(process.env.DB_CONNECT_TIMEOUT_MS, 10)
    : 5_000,
});

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma: PrismaClient =
  globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
