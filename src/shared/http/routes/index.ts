import { Router } from 'express'
import { projectsRoutes } from '@projects/http/routes/projects.routes'

const routes = Router()

routes.use('/projects', projectsRoutes)

export { routes }
