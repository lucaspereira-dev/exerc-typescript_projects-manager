import { ProjectsRepository } from '@projects/repositories/ProjectsRepository'
import { AppError } from '@shared/errors/AppError'

export class DeleteProjectUseCase {
  constructor(private projectsRepository: ProjectsRepository) {}
  execute(id: String): Boolean {
    const project = this.projectsRepository.findById(id)
    if (!project) {
      throw new AppError('ID de projeto não existe', 401)
    }
    return this.projectsRepository.delete(id)
  }
}
