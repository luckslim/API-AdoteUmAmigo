import { Animal, Prisma } from "@prisma/client";

export interface AnimalRepository{
    create(data: Prisma.AnimalUncheckedCreateInput):Promise<Animal>
    DeleteById(id: string):Promise<Animal>
}