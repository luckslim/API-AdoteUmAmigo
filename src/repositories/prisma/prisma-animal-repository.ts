import { Animal, Prisma } from "@prisma/client";
import { AnimalRepository } from "../animal-repository";
import { prisma } from "@/lib/prisma";

export class PrismaAnimalRepository implements AnimalRepository {
    async findById(id: string){
        const animal = await prisma.animal.findMany({
            where:{
                user_id: id,
            }
        })
        return animal
    }
    async findAll(){
        const animalAll = await prisma.animal.findMany(
            {
                orderBy:{created_at:'desc'}
            }
        )
        return animalAll
    }
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