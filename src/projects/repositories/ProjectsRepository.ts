import { Projects } from '@projects/entities/Projects'

type CreateProjectDTO = {
  name: string
  owner: string
}

export class ProjectsRepository {
  private projects: Projects[]
  private static INSTANCE: ProjectsRepository

  private constructor() {
    this.projects = []
  }

  public static getInstance(): ProjectsRepository {
    if (!this.INSTANCE) {
      this.INSTANCE = new ProjectsRepository()
    }
    return this.INSTANCE
  }

  create({ name, owner }: CreateProjectDTO): Projects {
    const project = new Projects()
    Object.assign(project, {
      name: name,
      owner: owner,
    })
    this.projects.push(project)
    return project
  }

  findAll(): Projects[] {
    return this.projects
  }

  findByName(name: String): Projects | undefined {
    return this.projects.find(project => project.name === name)
  }
}
