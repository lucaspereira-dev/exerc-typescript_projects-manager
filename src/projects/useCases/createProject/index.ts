import { ProjectsRepository } from '@projects/repositories/ProjectsRepository'
import { CreateProjectController } from './CreateProjectController'
import { CreateProjectUseCase } from './CreateProjectUseCase'

const projectsRepository = ProjectsRepository.getInstance()
const createProjectUseCase = new CreateProjectUseCase(projectsRepository)
export const createProjectController = new CreateProjectController(
  createProjectUseCase,
)
