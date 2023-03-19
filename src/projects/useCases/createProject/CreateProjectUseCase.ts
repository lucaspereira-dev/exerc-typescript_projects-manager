import { Projects } from '@projects/entities/Projects'
import { IProjectsRepository } from '@projects/repositories/IProjectsRepository'
import { AppError } from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'
import { CreateProjectDTO } from '@projects/repositories/IProjectsRepository'

@injectable()
export class CreateProjectUseCase {
  constructor(
    @inject('ProjectsRepository')
    private projectsRepository: IProjectsRepository,
  ) {}

  async execute({ name, owner }: CreateProjectDTO): Promise<Projects> {
    const projectAlreadyExists = await this.projectsRepository.findByName(name)
    if (projectAlreadyExists) {
      throw new AppError('Nome de projeto já existe', 401)
    }

    return this.projectsRepository.create({ name, owner })
  }
}
