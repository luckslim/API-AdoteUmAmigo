import { makeGetAnimalByIdUseCase } from "@/use-cases/factories/make-get-animal-by-id";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function getAnimalById(request: FastifyRequest,reply: FastifyReply) {
    const GetAnimalBodySchema = z.object({
        id: z.string(),
    })
    const {id} = GetAnimalBodySchema.parse(request.params)
    const getAnimalByIdUseCase = makeGetAnimalByIdUseCase()
    const {animal} = await getAnimalByIdUseCase.execute({
        id
    })
    return reply.status(200).send(animal)
}