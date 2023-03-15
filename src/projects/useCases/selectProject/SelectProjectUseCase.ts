import { Projects } from '@projects/entities/Projects'
import { ProjectsRepository } from '@projects/repositories/ProjectsRepository'
import { AppError } from '@shared/errors/AppError'

export class SelectProjectUseCase {
  constructor(private projectsRepository: ProjectsRepository) {}

  async execute(id: string): Promise<Projects> {
    const project = await this.projectsRepository.findById(id)
    if (!project) {
      throw new AppError('ID de projeto não encontrado')
    }
    return project
  }
}
