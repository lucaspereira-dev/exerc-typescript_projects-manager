import { IProjectsRepository } from '@projects/repositories/IProjectsRepository'
import { ProjectsRepository } from '@projects/repositories/ProjectsRepository'
import { CreateProjectController } from '@projects/useCases/createProject/CreateProjectController'
import { DeleteProjectController } from '@projects/useCases/deleteProject/DeleteProjectController'
import { ListProjectsController } from '@projects/useCases/listProjects/ListProjectsController'
import { SelectProjectController } from '@projects/useCases/selectProject/SelectProjectController'
import { UpdateProjectController } from '@projects/useCases/updateProject/UpdateProjectController'
import { container } from 'tsyringe'

container.registerSingleton<IProjectsRepository>('ProjectsRepository', ProjectsRepository)
container.registerSingleton('CreateProjectController', CreateProjectController)
container.registerSingleton('SelectProjectController', SelectProjectController)
container.registerSingleton('UpdateProjectController', UpdateProjectController)
container.registerSingleton('DeleteProjectController', DeleteProjectController)
container.registerSingleton('ListProjectsController', ListProjectsController)
