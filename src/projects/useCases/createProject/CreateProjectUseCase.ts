import { Projects } from '@projects/entities/Projects'
import { ProjectsRepository } from '@projects/repositories/ProjectsRepository'
import { AppError } from '@shared/errors/AppError'

type CreateProjectDTO = {
  name: string
  owner: string
}

export class CreateProjectUseCase {
  constructor(private projectsRepository: ProjectsRepository) {}

  execute({ name, owner }: CreateProjectDTO): Projects {
    const projectAlreadyExists = this.projectsRepository.findByName(name)
    if (projectAlreadyExists) {
      throw new AppError('Nome de projeto já existe', 401)
    }

    return this.projectsRepository.create({ name, owner })
  }
}
