import { ListProjectsUseCase } from './ListProjectsUseCase'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

export class ListProjectsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listProjectsUseCase = container.resolve(ListProjectsUseCase)
    const page = request.query.page && Number(request.query.page) > 0 ? Number(request.query.page) : 0
    const limit = request.query.limit && Number(request.query.limit) > 0 ? Number(request.query.limit) : 15
    const projects = await listProjectsUseCase.execute({ page, limit })
    return response.status(200).json(projects)
  }
}
