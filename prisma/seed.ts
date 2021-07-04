import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const book = await prisma.book.create({
    data: {
      title: 'Progressive Web Application Development by Example',
      subtitle:
        'Develop Fast, Reliable, and Engaging User Experiences for the Web',
      isbn: '9781787125421',
      abstract:
        'Are you a developer that wants to create truly cross-platform user experiences with a minimal footprint, free of store restrictions and features customers want? Then you need to get to grips with Progressive Web Applications (PWAs), a perfect amalgamation of web and mobile applications with a blazin...',
      author: 'Chris Love',
      publisher: 'Packt Publishing',
      price: 31.02,
      numPages: 354,
      cover: 'http://localhost:4730/covers/9781787125421.png',
    },
  });
  return book;
}

main()
  .then((res) => console.table(res))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
