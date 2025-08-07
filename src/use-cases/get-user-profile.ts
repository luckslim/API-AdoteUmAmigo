import { UsersRepository } from "@/repositories/users-repository";
import { User } from "@prisma/client";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";
interface GetUserProfilerUseCaseRequest {
    userId: string
}
interface GetUserProfilerUseCaseResponse {
    user: User
}
export class GetUserProfileUseCase {
    constructor(private usersRepository: UsersRepository){}
    async execute({
        userId
    }:GetUserProfilerUseCaseRequest):Promise<GetUserProfilerUseCaseResponse>{
        const user = await this.usersRepository.findById(`${userId}`)
        if(!user){
            throw new ResourceNotFoundError()
        }
        return {
            user,
        }
    }
}