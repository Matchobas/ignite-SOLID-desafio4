import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    // Complete aqui
    const emailAlreadyInUse = this.usersRepository.findByEmail(email);

    if (emailAlreadyInUse) {
      throw new Error("Invalid email, already in use");
    }

    const newUser = this.usersRepository.create({
      name,
      email,
    });

    return newUser;
  }
}

export { CreateUserUseCase };
