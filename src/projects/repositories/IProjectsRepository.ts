import { Projects } from '@projects/entities/Projects'

export type CreateProjectDTO = {
  name: string
  owner: string
}
export type PaginateParams = {
  page: number
  skip: number
  take: number
}
export type ProjectsPaginateProperties = {
  per_page: number
  total: number
  current_page: number
  data: Projects[]
}

export interface IProjectsRepository {
  create({ name, owner }: CreateProjectDTO): Promise<Projects>
  findAll({ page, skip, take }: PaginateParams): Promise<ProjectsPaginateProperties>
  findByName(name: string): Promise<Projects | null>
  findById(id: string): Promise<Projects | null>
  update(project: Projects): Promise<Projects>
  delete(project: Projects): Promise<void>
}
