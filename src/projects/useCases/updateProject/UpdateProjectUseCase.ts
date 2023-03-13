import { Projects } from '@projects/entities/Projects'
import { ProjectsRepository } from '@projects/repositories/ProjectsRepository'
import { AppError } from '@shared/errors/AppError'

type UpdateProjectDTO = {
  id: String
  name: String
  owner: String
}

export class UpdateProjectUseCase {
  constructor(private projectRepository: ProjectsRepository) {}

  execute({ id, name, owner }: UpdateProjectDTO): Projects {
    const project = this.projectRepository.findById(id)
    if (!project) {
      throw new AppError('Não existe projeto com esse ID')
    }
    return this.projectRepository.update({ id, name, owner })
  }
}
