import { Request, Response } from 'express'
import { DeleteProjectUseCase } from './DeleteProjectUseCase'

export class DeleteProjectController {
  constructor(private deleteProjectUseCase: DeleteProjectUseCase) {}
  handle(request: Request, response: Response): Response {
    const { id } = request.params
    this.deleteProjectUseCase.execute(id)
    return response.json(200).json({
      code: 'Success',
      message: `Projeto de ID ${id} excluido com sucesso`,
    })
  }
}
