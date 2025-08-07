import fastify from "fastify";
import { usersRoutes } from "./http/controllers/users/routes";
import fastifyJwt from "@fastify/jwt";
import { env } from "./env";
export const app = fastify()
app.register(usersRoutes)
app.register(fastifyJwt,{
    secret: env.JWT_SECRET
})