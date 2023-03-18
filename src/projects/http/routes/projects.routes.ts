import { Router } from 'express'
import { createProjectController } from '@projects/useCases/createProject'
import { listProjectController } from '@projects/useCases/listProjects'
import { updateProjectController } from '@projects/useCases/updateProject'
import { deleteProjectController } from '@projects/useCases/deleteProject'
import { selectProjectController } from '@projects/useCases/selectProject'
import { valid } from '../validations'

const projectsRoutes = Router()

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
