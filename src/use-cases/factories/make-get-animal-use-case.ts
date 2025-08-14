import { PrismaAnimalRepository } from "@/repositories/prisma/prisma-animal-repository";
import { GetAnimalAllUseCase } from "../get-animal-all";

export function makeGetAnimalUseCase(){
    const animalRepository = new PrismaAnimalRepository()
    const useCase = new GetAnimalAllUseCase(animalRepository)
    return useCase
}