import { FastifyInstance } from "fastify";
import { register } from "./register";
import { authenticate } from "./authenticate";
import { profile } from "./profile";
import { verifyJwt } from "@/http/middlewares/verify-jwt";
import { refresh } from "./refresh";
export async function usersRoutes(app: FastifyInstance){
    app.post('/users', register)
    app.patch('/token/refresh', refresh)
    app.post('/session',authenticate)
    app.post('/me',{onRequest:[verifyJwt]}, profile )
}