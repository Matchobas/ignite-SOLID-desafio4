import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const { user_id } = request.headers;

      const allUsers = this.listAllUsersUseCase.execute({
        user_id: String(user_id),
      });

      return response.json(allUsers);
    } catch (Error) {
      return response.status(400).json({ error: Error.message });
    }
  }
}

export { ListAllUsersController };
