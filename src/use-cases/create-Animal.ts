import { AnimalRepository } from "@/repositories/animal-repository"
import { Animal, Prisma } from "@prisma/client"

interface CreateAnimalUseCaseRequest {
    name: string;
    species: string;
    age: number;
    location: string;
    userId: string;
}
interface CreateAnimalUseCaseResponse {
    animal: Animal;
}
export class CreateAnimalUseCase {
    constructor(private animalRepository: AnimalRepository) { }
    async execute({
        name,
        userId,
        age,
        species,
        location
    }: CreateAnimalUseCaseRequest): Promise<CreateAnimalUseCaseResponse> {
        const animal = await this.animalRepository.create({
        })
        return {
            animal
        }
    }
}