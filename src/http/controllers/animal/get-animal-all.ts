import { FastifyReply, FastifyRequest } from "fastify";

export async function getAnimalAll(_: FastifyRequest,reply: FastifyReply) {
    return reply.status(200).send()
}