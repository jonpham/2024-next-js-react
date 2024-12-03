import { PrismaClient } from '@prisma/client';
import type { Student } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  const numStudentsToSeed: number = 3;

  const students: Student[] = new Array(numStudentsToSeed).fill(0).map(() => {
    return {
      id: crypto.randomUUID(),
      first_name: faker.person.firstName(),
      last_name: `SEED_${faker.person.lastName()}`,
      check_in_time: faker.date.recent({ days: 7 }),
    };
  });

  const created = await prisma.student.createManyAndReturn({
    data: students,
    skipDuplicates: true,
  });

  console.log(`${numStudentsToSeed} created: `, created); //  ${JSON.stringify(created)}`
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
