import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./ICreateUserDTO";

export class CreateUserUseCase {
    
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider
    ){}
    
    async execute(data:ICreateUserRequestDTO) {
        const usersAlreadyExists = await this.usersRepository.findByEmail(data.email);

        if (usersAlreadyExists){
            throw new Error('User already exists.');
        }

        const user = new User(data);

        await this.usersRepository.save(user);

        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from:{
                name: "Wesley Santos",
                email: 'wesleypsantos@hotmail.com',
            },
            subject: 'Seja bem-vindo',
            body:'<h1>TESTE</h1>'
        });
    }
}