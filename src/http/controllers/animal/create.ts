import { makeCreateAnimalUseCase } from "@/use-cases/factories/make-create-animal-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function create(request: FastifyRequest, reply: FastifyReply) {
    const createAnimalBodySchema = z.object({
        name: z.string(),
        userId: z.string(),
        age: z.coerce.number(),
        species: z.string(),
        location: z.string(),
    })
    const { name, age, location, species, userId } = createAnimalBodySchema.parse(request.body)
    const createAnimalUseCase = makeCreateAnimalUseCase()
    await createAnimalUseCase.execute({
        name,
        age,
        location,
        species,
        userId
    })
    return reply.status(201).send({
        message:"Cadastrado com sucesso"
    })
}