import { ProjectsRepository } from '@projects/repositories/ProjectsRepository'
import { AppError } from '@shared/errors/AppError'

export class DeleteProjectUseCase {
  constructor(private projectsRepository: ProjectsRepository) {}
  async execute(id: string): Promise<Boolean> {
    const project = await this.projectsRepository.findById(id)
    if (!project) {
      throw new AppError('ID de projeto não existe', 401)
    }
    await this.projectsRepository.delete(project)
    return true
  }
}
