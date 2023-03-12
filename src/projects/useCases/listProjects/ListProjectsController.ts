import { ListProjectsUseCase } from './ListProjectsUseCase'
import { Request, Response } from 'express'

export class ListProjectsController {
  constructor(private listProjectsUseCase: ListProjectsUseCase) {}

  handle(resquest: Request, response: Response) {
    const projects = this.listProjectsUseCase.execute()
    return response.status(200).json(projects)
  }
}
