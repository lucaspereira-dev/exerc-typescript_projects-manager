import { ProjectsRepository } from '@projects/repositories/ProjectsRepository'
import { ListProjectsController } from './ListProjectsController'
import { ListProjectsUseCase } from './ListProjectsUseCase'

const projectsRepository = ProjectsRepository.getInstance()
const listProjectsUseCase = new ListProjectsUseCase(projectsRepository)
export const listProjectController = new ListProjectsController(
  listProjectsUseCase,
)
