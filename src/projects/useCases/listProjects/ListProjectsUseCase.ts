import {
  ProjectsPaginateProperties,
  ProjectsRepository,
} from '@projects/repositories/ProjectsRepository'

type ListProjectUseCaseParams = {
  page: number
  limit: number
}

export class ListProjectsUseCase {
  constructor(private projectRepository: ProjectsRepository) {}

  async execute({
    page,
    limit,
  }: ListProjectUseCaseParams): Promise<ProjectsPaginateProperties> {
    const take = limit
    const skip = page - 1 * take
    return this.projectRepository.findAll({ page, skip, take })
  }
}
