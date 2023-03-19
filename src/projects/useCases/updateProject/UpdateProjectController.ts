import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateProjectUseCase } from './UpdateProjectUseCase'

export class UpdateProjectController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updateProjectUseCase = container.resolve(UpdateProjectUseCase)
    const { id } = request.params
    const { name, owner } = request.body
    const project = await updateProjectUseCase.execute({ id, name, owner })
    return response.status(200).json(project)
  }
}
