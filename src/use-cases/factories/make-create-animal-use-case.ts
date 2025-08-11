import { PrismaAnimalRepository } from "@/repositories/prisma/prisma-animal-repository";
import { CreateAnimalUseCase } from "../create-Animal";

export function makeCreateAnimalUseCase(){
    const animalRepository = new PrismaAnimalRepository()
    const useCase = new CreateAnimalUseCase(animalRepository)
    return useCase
}