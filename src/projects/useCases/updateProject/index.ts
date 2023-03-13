import { ProjectsRepository } from '@projects/repositories/ProjectsRepository'
import { UpdateProjectController } from './UpdateProjectController'
import { UpdateProjectUseCase } from './UpdateProjectUseCase'

const projectsRepository = ProjectsRepository.getInstance()
const updateProjectUseCase = new UpdateProjectUseCase(projectsRepository)
export const updateProjectController = new UpdateProjectController(
  updateProjectUseCase,
)
