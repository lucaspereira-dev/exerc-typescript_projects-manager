import { Request, Response } from 'express'
import { CreateProjectUseCase } from './CreateProjectUseCase'

export class CreateProjectController {
  constructor(private createProjectUseCase: CreateProjectUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, owner } = request.body
    const project = await this.createProjectUseCase.execute({ name, owner })
    return response.status(201).json(project)
  }
}
