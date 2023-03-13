import { ProjectsRepository } from '@projects/repositories/ProjectsRepository'
import { SelectProjectController } from './SelectProjectController'
import { SelectProjectUseCase } from './SelectProjectUseCase'

const projectsRepository = ProjectsRepository.getInstance()
const selectProjectUseCase = new SelectProjectUseCase(projectsRepository)
export const selectProjectController = new SelectProjectController(
  selectProjectUseCase,
)
