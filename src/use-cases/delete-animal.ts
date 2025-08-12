import { AnimalRepository } from "@/repositories/animal-repository"
import { Animal } from "@prisma/client"

interface DeleteAnimalUseCaseRequest {
    idRequest: string
}
interface DeleteAnimalUseCaseResponse{
    idDelete: Animal
}
export class DeleteAnimal {
    constructor(private animalRepository: AnimalRepository ){}
    async execute({
        idRequest
    }:DeleteAnimalUseCaseRequest): Promise<DeleteAnimalUseCaseResponse>{
        const idDelete = await this.animalRepository.DeleteById(idRequest )
        return {
           idDelete,
        } 
    }
}