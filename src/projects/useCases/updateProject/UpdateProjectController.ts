import { Request, Response } from 'express'
import { UpdateProjectUseCase } from './UpdateProjectUseCase'

export class UpdateProjectController {
  constructor(private updateProjectUseCase: UpdateProjectUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params
    const { name, owner } = request.body
    const project = this.updateProjectUseCase.execute({ id, name, owner })
    return response.status(200).json(project)
  }
}
