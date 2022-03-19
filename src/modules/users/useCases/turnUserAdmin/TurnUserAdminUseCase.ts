import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const validUser = this.usersRepository.findById(user_id);

    if (!validUser) {
      throw new Error("This id doesn't exist among the created users");
    }

    const adminUser = this.usersRepository.turnAdmin(validUser);

    return adminUser;
  }
}

export { TurnUserAdminUseCase };
