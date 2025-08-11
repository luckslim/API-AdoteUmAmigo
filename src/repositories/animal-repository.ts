import { Animal, Prisma } from "@prisma/client";

export interface AnimalRepository{
    create(data: Prisma.AnimalCreateInput):Promise<Animal>
}