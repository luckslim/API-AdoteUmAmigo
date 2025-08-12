import { FastifyInstance } from "fastify";
import { create } from "./create";
export async function animalRoutes(app: FastifyInstance){
    app.post('/animal', create)
}