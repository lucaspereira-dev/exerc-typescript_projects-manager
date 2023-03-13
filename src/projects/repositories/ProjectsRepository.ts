import { Projects } from '@projects/entities/Projects'

type CreateProjectDTO = {
  name: String
  owner: String
}

type UpdateProjectDTO = {
  id: String
  name: String
  owner: String
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

  findById(id: String): Projects | undefined {
    return this.projects.find(project => project.id === id)
  }

  update({ id, name, owner }: UpdateProjectDTO): Projects {
    const index = this.projects.findIndex(nodeProject => nodeProject.id === id)
    Object.assign(this.projects[index], {
      name: name,
      owner: owner,
    })
    return this.projects[index]
  }

  delete(id: String) {
    const index = this.projects.findIndex(nodeProject => nodeProject.id === id)
    delete this.projects[index]
    return true
  }
}
