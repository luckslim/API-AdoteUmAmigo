import { AnimalRepository } from "@/repositories/animal-repository";
import { Animal } from "@prisma/client";
interface GetAnimalByIdRequest{
    id:string
}
interface GetAnimalByIdResponse{
    animal: Animal[]
}
export class GetAnimalByIdUseCase {
    constructor(private animalRepository : AnimalRepository){}
    async execute({
        id,
    }:GetAnimalByIdRequest):Promise<GetAnimalByIdResponse>{
        const animal = await this.animalRepository.findById(id)
        return {
            animal,
        }
    }
}