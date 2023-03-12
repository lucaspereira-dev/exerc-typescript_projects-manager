import { Projects } from '@projects/entities/Projects'
import { ProjectsRepository } from '@projects/repositories/ProjectsRepository'

export class ListProjectsUseCase {
  constructor(private projectRepository: ProjectsRepository) {}

  execute(): Projects[] {
    return this.projectRepository.findAll()
  }
}
