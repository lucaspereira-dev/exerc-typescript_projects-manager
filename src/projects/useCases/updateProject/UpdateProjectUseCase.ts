import { Projects } from '@projects/entities/Projects'
import { ProjectsRepository } from '@projects/repositories/ProjectsRepository'
import { AppError } from '@shared/errors/AppError'

type UpdateProjectDTO = {
  id: string
  name: string
  owner: string
}

export class UpdateProjectUseCase {
  constructor(private projectRepository: ProjectsRepository) {}

  async execute({ id, name, owner }: UpdateProjectDTO): Promise<Projects> {
    const project = await this.projectRepository.findById(id)
    const projectWithSameName = await this.projectRepository.findByName(name)
    if (!project) {
      throw new AppError('Não existe projeto com esse ID')
    }

    if (projectWithSameName && project.name != projectWithSameName.name) {
      throw new AppError('Existe um projeto com esse nome')
    }
    return this.projectRepository.update({ id, name, owner })
  }
}
