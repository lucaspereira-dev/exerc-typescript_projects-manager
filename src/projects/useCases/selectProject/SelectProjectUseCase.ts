import { Projects } from '@projects/entities/Projects'
import { ProjectsRepository } from '@projects/repositories/ProjectsRepository'
import { AppError } from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'

@injectable()
export class SelectProjectUseCase {
  constructor(
    @inject('ProjectsRepository')
    private projectsRepository: ProjectsRepository,
  ) {}

  async execute(id: string): Promise<Projects> {
    const project = await this.projectsRepository.findById(id)
    if (!project) {
      throw new AppError('ID de projeto não encontrado')
    }
    return project
  }
}
