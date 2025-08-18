import { Animal, Prisma } from "@prisma/client";

export interface AnimalRepository{
    findAll():Promise<Animal[]>
    findById(id: string):Promise<Animal[]>
    DeleteById(id: string):Promise<Animal>
    create(data: Prisma.AnimalUncheckedCreateInput):Promise<Animal>
}