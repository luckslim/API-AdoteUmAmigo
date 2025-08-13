import { makeDeleteUseCase } from "@/use-cases/factories/make-delete-animal-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function deleteAnimal(request: FastifyRequest, reply: FastifyReply) {
    const createAnimalBodySchema = z.object({
        userId: z.string(),
    })
    const { userId } = createAnimalBodySchema.parse(request.body);
    const deleteInUseCase = makeDeleteUseCase()
    await deleteInUseCase.execute({
        idRequest: userId,
    })
    return reply.status(200).send({message:"Deletado com sucesso!"})
}