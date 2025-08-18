import { FastifyInstance } from "fastify";
import { create } from "./create";
import { deleteAnimal } from "./delete";
import { getAnimalAll } from "./get-animal-all";
import { getAnimalById } from "./get-animal-by-id";
export async function animalRoutes(app: FastifyInstance) {
    app.post('/animal', create)
    app.post('/animal/delete', deleteAnimal)
    app.get('/animal/all', getAnimalAll)
    app.get('/animal/Byid/:id', getAnimalById)
}