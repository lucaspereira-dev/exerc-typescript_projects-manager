import { Projects } from '@projects/entities/Projects'
import { AppDataSource } from '@shared/typeorm'
import { Repository } from 'typeorm'

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
export class ProjectsRepository {
  private repository: Repository<Projects>
  private static INSTANCE: ProjectsRepository

  private constructor() {
    this.repository = AppDataSource.getRepository(Projects)
  }

  public static getInstance(): ProjectsRepository {
    if (!this.INSTANCE) {
      this.INSTANCE = new ProjectsRepository()
    }
    return this.INSTANCE
  }

  async create({ name, owner }: CreateProjectDTO): Promise<Projects> {
    const project = await this.repository.create({ name, owner })
    return await this.repository.save(project)
  }

  async findAll({
    page,
    skip,
    take,
  }: PaginateParams): Promise<ProjectsPaginateProperties> {
    const [projects, count] = await this.repository
      .createQueryBuilder()
      .skip(skip)
      .take(take)
      .getManyAndCount()
    return {
      per_page: take,
      total: count,
      current_page: page,
      data: projects,
    }
  }

  async findByName(name: string): Promise<Projects | null> {
    return this.repository.findOneBy({ name })
  }

  async findById(id: string): Promise<Projects | null> {
    return this.repository.findOneBy({ id })
  }

  async update(project: Projects): Promise<Projects> {
    return this.repository.save(project)
  }

  async delete(project: Projects): Promise<void> {
    await this.repository.remove(project)
  }
}
