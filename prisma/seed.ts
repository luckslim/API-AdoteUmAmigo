import { prisma } from "@/lib/prisma";
import { faker } from "@faker-js/faker";

async function main() {
  for (let i = 0; i < 30; i++) {
    // cria usuário
    const user = await prisma.user.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password_hash: faker.string.uuid(),
      },
    });

    // cria 1 animal para esse usuário
    await prisma.animal.create({
      data: {
        name: faker.animal.dog(), // pode trocar por cat se quiser variedade
        age: faker.number.int({ min: 1, max: 10 }),
        location: faker.location.city(),
        species: Math.random() > 0.5 ? "dog" : "cat",
        user_id: user.id,
      },
    });
  }
}

main()
  .then(() => console.log("✅ Seed concluído com 30 usuários e 30 animais"))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
