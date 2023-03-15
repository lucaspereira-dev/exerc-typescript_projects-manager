import { Request, Response } from 'express'
import { UpdateProjectUseCase } from './UpdateProjectUseCase'

export class UpdateProjectController {
  constructor(private updateProjectUseCase: UpdateProjectUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { name, owner } = request.body
    const project = await this.updateProjectUseCase.execute({ id, name, owner })
    return response.status(200).json(project)
  }
}
