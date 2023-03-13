import { Projects } from '@projects/entities/Projects'
import { ProjectsRepository } from '@projects/repositories/ProjectsRepository'
import { AppError } from '@shared/errors/AppError'

export class SelectProjectUseCase {
  constructor(private projectsRepository: ProjectsRepository) {}

  execute(id: String): Projects {
    const project = this.projectsRepository.findById(id)
    if (!project) {
      throw new AppError('ID de projeto não encontrado')
    }
    return project
  }
}
