import { PrismaClient } from '@prisma/client';
import type { Todo } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  const numToDosToSeed: number = 3;

  const todos: Todo[] = new Array(numToDosToSeed).fill(0).map(() => {
    return {
      id: crypto.randomUUID(),
      task: `SEED_${faker.person.lastName()}`,
      completed: false,
      created: faker.date.recent({ days: 7 }),
      end: null,
    };
  });

  const created = await prisma.todo.createManyAndReturn({
    data: todos,
    skipDuplicates: true,
  });

  console.log(`${numToDosToSeed} created: `, created); //  ${JSON.stringify(created)}`
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
