import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();
  const moby = await prisma.book.create({
    data: { isbn: '978-3-86680-192-9' },
  });
  console.table(moby);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
