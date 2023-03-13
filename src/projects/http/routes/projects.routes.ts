import { Router } from 'express'
import { createProjectController } from '@projects/useCases/createProject'
import { listProjectController } from '@projects/useCases/listProjects'
import { updateProjectController } from '@projects/useCases/updateProject'
import { deleteProjectController } from '@projects/useCases/deleteProject'
import { selectProjectController } from '@projects/useCases/selectProject'

const projectsRoutes = Router()

projectsRoutes.get('/', (request, response) => {
  return listProjectController.handle(request, response)
})

projectsRoutes.post('/', (request, response) => {
  return createProjectController.handle(request, response)
})

projectsRoutes.get('/:id', (request, response) => {
  return selectProjectController.handle(request, response)
})

projectsRoutes.put('/:id', (request, response) => {
  return updateProjectController.handle(request, response)
})

projectsRoutes.delete('/:id', (request, response) => {
  return deleteProjectController.handle(request, response)
})

export { projectsRoutes }
