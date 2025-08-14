import { makeGetAnimalUseCase } from "@/use-cases/factories/make-get-animal-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function getAnimalAll(_: FastifyRequest,reply: FastifyReply) {
    const getAnimalInUseCase = makeGetAnimalUseCase()
    const data = await getAnimalInUseCase.execute()
    return reply.status(200).send(data.animal)
}