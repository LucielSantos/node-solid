import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(
    private createUSerUseCase: CreateUserUseCase,
  ){}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    try {
      await this.createUSerUseCase.execute({
        name, 
        email,
        password,
      });
  
      return res.status(201).send();
    } catch (error) {
      return res.status(400).send({ 
        message: error.message || 'Unexpected error.'
      })
    }
  }
}