import { PrismaAnimalRepository } from "@/repositories/prisma/prisma-animal-repository";
import { GetAnimalByIdUseCase } from "../get-animal-by-id";
export function makeGetAnimalByIdUseCase(){
    const animalRepository = new PrismaAnimalRepository()
    const useCase = new GetAnimalByIdUseCase(animalRepository)
    return useCase
}