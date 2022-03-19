import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const requestingUser = this.usersRepository.findById(user_id);

    if (!requestingUser) {
      throw new Error("This id doesn't exist among the created users");
    }

    if (!requestingUser.admin) {
      throw new Error("Users has no admin permission to execute this action");
    }

    const allUsers = this.usersRepository.list();

    return allUsers;
  }
}

export { ListAllUsersUseCase };
