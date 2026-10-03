import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      authProvider: "google",
      providerUserId: "google-test-001",
      email: "nilesh@example.com",
      name: "Nilesh",
    },
  });

  console.log("Created user:", user.id);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
