import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateProjectUseCase } from './CreateProjectUseCase'

export class CreateProjectController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createProjectUseCase = container.resolve(CreateProjectUseCase)
    const { name, owner } = request.body
    const project = await createProjectUseCase.execute({ name, owner })
    return response.status(201).json(project)
  }
}
