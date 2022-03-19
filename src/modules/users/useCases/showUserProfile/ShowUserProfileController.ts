import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const { user_id } = request.params;

      const user = this.showUserProfileUseCase.execute({
        user_id: String(user_id),
      });

      return response.json(user);
    } catch (Error) {
      return response.status(404).json({ error: Error.message });
    }
  }
}

export { ShowUserProfileController };
