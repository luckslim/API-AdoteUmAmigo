import { FastifyInstance } from "fastify";
import { register } from "./register";
import { authenticate } from "./authenticate";
import { profile } from "./profile";


export async function usersRoutes(app: FastifyInstance){
    app.post('/users', register)
    app.post('/session',authenticate)
    app.post('/me', profile )
}