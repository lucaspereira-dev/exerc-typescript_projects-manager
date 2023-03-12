import { Router } from 'express'
import { createProjectController } from '@projects/useCases/createProject'
import { listProjectController } from '@projects/useCases/listProjects'

const projectsRoutes = Router()

projectsRoutes.get('/', (request, response) => {
  return listProjectController.handle(request, response)
})

projectsRoutes.post('/', (request, response) => {
  return createProjectController.handle(request, response)
})

export { projectsRoutes }
