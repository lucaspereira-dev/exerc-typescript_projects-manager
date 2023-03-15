import { Request, Response } from 'express'
import { SelectProjectUseCase } from './SelectProjectUseCase'

export class SelectProjectController {
  constructor(private selectProjectUserCase: SelectProjectUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const project = await this.selectProjectUserCase.execute(id)
    return response.status(200).json(project)
  }
}
