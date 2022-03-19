import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const { user_id } = request.params;

      const user = this.turnUserAdminUseCase.execute({
        user_id: String(user_id),
      });

      return response.json(user);
    } catch (StatusError) {
      return response
        .status(StatusError.status)
        .json({ error: StatusError.message });
    }
  }
}

export { TurnUserAdminController };
