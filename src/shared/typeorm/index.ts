import { Projects } from '@projects/entities/Projects'
import { DataSource } from 'typeorm'
import { CreateProjecstTable1678841841614 } from './migration/1678841841614-CreateProjecstTable'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Projects],
  migrations: [CreateProjecstTable1678841841614],
})
