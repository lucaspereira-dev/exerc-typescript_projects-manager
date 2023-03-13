import { Projects } from '@projects/entities/Projects'
import { ProjectsRepository } from '@projects/repositories/ProjectsRepository'
import { AppError } from '@shared/errors/AppError'

export class DeleteProjectUseCase {
  constructor(private projectsRepository: ProjectsRepository) {}
  execute(id: String): Projects[] {
    const project = this.projectsRepository.findById(id)
    if (!project) {
      throw new AppError('ID de projeto não existe', 401)
    }
    return this.projectsRepository.delete(id)
  }
}
