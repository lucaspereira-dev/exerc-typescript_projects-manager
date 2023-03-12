import { Request, Response } from 'express'
import { CreateProjectUseCase } from './CreateProjectUseCase'

export class CreateProjectController {
  constructor(private createProjectUseCase: CreateProjectUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, owner } = request.body
    const project = this.createProjectUseCase.execute({ name, owner })
    return response.status(201).json(project)
  }
}
