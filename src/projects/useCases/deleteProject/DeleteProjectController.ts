import { Request, Response } from 'express'
import { DeleteProjectUseCase } from './DeleteProjectUseCase'
import { container } from 'tsyringe'

export class DeleteProjectController {
  async handle(request: Request, response: Response): Promise<Response> {
    const deleteProjectUseCase = container.resolve(DeleteProjectUseCase)
    const { id } = request.params
    await deleteProjectUseCase.execute(id)
    return response.status(204).send()
  }
}
