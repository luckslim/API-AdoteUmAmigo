import { Prisma, Animal } from "@prisma/client";
import { AnimalRepository } from "../animal-repository";
import { prisma } from "@/lib/prisma";

export class PrismaAnimalRepository implements AnimalRepository {
    async create(data: Prisma.AnimalCreateInput){
        const animal = await prisma.animal.create({
            data
        })
        return animal;
    }

}