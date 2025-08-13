import { PrismaAnimalRepository } from "@/repositories/prisma/prisma-animal-repository";
import { DeleteAnimalUseCase } from "../delete-animal";

export function makeDeleteUseCase(){
    const animalRepository = new PrismaAnimalRepository()
    const useCase = new DeleteAnimalUseCase(animalRepository)
    return useCase
}