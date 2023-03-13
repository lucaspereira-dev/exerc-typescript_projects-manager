import { ProjectsRepository } from '@projects/repositories/ProjectsRepository'
import { DeleteProjectController } from './DeleteProjectController'
import { DeleteProjectUseCase } from './DeleteProjectUseCase'

const projectsRepository = ProjectsRepository.getInstance()
const deleteProjectUseCase = new DeleteProjectUseCase(projectsRepository)
export const deleteProjectController = new DeleteProjectController(
  deleteProjectUseCase,
)
