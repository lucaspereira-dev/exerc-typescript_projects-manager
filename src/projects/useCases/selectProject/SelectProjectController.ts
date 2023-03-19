import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { SelectProjectUseCase } from './SelectProjectUseCase'

export class SelectProjectController {
  async handle(request: Request, response: Response): Promise<Response> {
    const selectProjectUserCase = container.resolve(SelectProjectUseCase)
    const { id } = request.params
    const project = await selectProjectUserCase.execute(id)
    return response.status(200).json(project)
  }
}
