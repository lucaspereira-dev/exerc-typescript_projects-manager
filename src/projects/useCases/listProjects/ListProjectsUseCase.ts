import { ProjectsPaginateProperties, IProjectsRepository } from '@projects/repositories/IProjectsRepository'
import { inject, injectable } from 'tsyringe'

type ListProjectUseCaseParams = {
  page: number
  limit: number
}

@injectable()
export class ListProjectsUseCase {
  constructor(
    @inject('ProjectsRepository')
    private projectRepository: IProjectsRepository,
  ) {}

  async execute({ page, limit }: ListProjectUseCaseParams): Promise<ProjectsPaginateProperties> {
    const take = limit
    const skip = page - 1 * take
    return this.projectRepository.findAll({ page, skip, take })
  }
}
