import { prisma } from "@/lib/prisma";
import { faker } from "@faker-js/faker/.";

async function main() {
    for (let i = 0; i < 30; i++) {
        await prisma.user.create({
            data: {
                name: faker.person.fullName(),
                email: faker.internet.email(),
                password_hash: faker.string.uuid(),
            }
        })
    }
}
main().then(() => console.log('Seed Concluído!')).catch(e => console.error(e)).finally(() => prisma.$disconnect());