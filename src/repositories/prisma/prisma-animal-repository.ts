import { Animal, Prisma } from "@prisma/client";
import { AnimalRepository } from "../animal-repository";
import { prisma } from "@/lib/prisma";

export class PrismaAnimalRepository implements AnimalRepository {
    async DeleteById(id: string) {
        const animal = await prisma.animal.delete({
            where: {
                id
            }
        })
        return animal
    }
    async create(data: Prisma.AnimalUncheckedCreateInput) {
        const animal = await prisma.animal.create({
            data
        })
        return animal;
    }

}