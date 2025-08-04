import { UsersRepository } from "@/repositories/users-repository";
interface RegisterUseCaseRequest {
    name: string
    email: string
    password: string
}
interface RegisterUseCaseResponse {
    user: any;
}
export class RegisterUseCase{
    constructor(private usersRepository: UsersRepository){}
}