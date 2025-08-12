import fastify from "fastify";
import { usersRoutes } from "./http/controllers/users/routes";
import fastifyJwt from "@fastify/jwt";
import { env } from "./env";
import { animalRoutes } from "./http/controllers/animal/routes";
export const app = fastify()
app.register(usersRoutes)
app.register(animalRoutes)
app.register(fastifyJwt,{
    secret: env.JWT_SECRET
})