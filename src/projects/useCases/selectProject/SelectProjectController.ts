import { Request, Response } from 'express'
import { SelectProjectUseCase } from './SelectProjectUseCase'

export class SelectProjectController {
  constructor(private selectProjectUserCase: SelectProjectUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params
    const project = this.selectProjectUserCase.execute(id)
    return response.status(200).json(project)
  }
}
