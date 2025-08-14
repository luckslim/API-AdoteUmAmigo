import { AnimalRepository } from "@/repositories/animal-repository";
import { Animal } from "@prisma/client";

interface GetAnimalAllResponse{
    animal : Animal[]
}
export class GetAnimalAllUseCase{
    constructor(private animalRepository:AnimalRepository){}
    async execute():Promise<GetAnimalAllResponse>{
        const animal = await this.animalRepository.findAll()
        return {animal}
    }
}