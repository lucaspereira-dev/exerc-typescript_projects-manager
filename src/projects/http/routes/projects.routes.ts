import { Router } from 'express'
import { CreateProjectController } from '@projects/useCases/createProject/CreateProjectController'
import { ListProjectsController } from '@projects/useCases/listProjects/ListProjectsController'
import { UpdateProjectController } from '@projects/useCases/updateProject/UpdateProjectController'
import { DeleteProjectController } from '@projects/useCases/deleteProject/DeleteProjectController'
import { SelectProjectController } from '@projects/useCases/selectProject/SelectProjectController'
import { container } from 'tsyringe'
import { valid } from '../validations'

const projectsRoutes = Router()
const createProjectController = container.resolve(CreateProjectController)
const listProjectController = container.resolve(ListProjectsController)
const updateProjectController = container.resolve(UpdateProjectController)
const deleteProjectController = container.resolve(DeleteProjectController)
const selectProjectController = container.resolve(SelectProjectController)

projectsRoutes.get('/', (request, response) => {
  return listProjectController.handle(request, response)
})

projectsRoutes.post('/', valid.validCreateProject, (request, response) => {
  return createProjectController.handle(request, response)
})

projectsRoutes.get('/:id', valid.validSelectProject, (request, response) => {
  return selectProjectController.handle(request, response)
})

projectsRoutes.put('/:id', valid.validUpdateProject, (request, response) => {
  return updateProjectController.handle(request, response)
})

projectsRoutes.delete('/:id', valid.validDeleteProject, (request, response) => {
  return deleteProjectController.handle(request, response)
})

export { projectsRoutes }
