import { v4 as uuidv4 } from 'uuid'
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm'

@Entity('projects')
export class Projects {
  @PrimaryGeneratedColumn()
  id?: string

  @Column()
  name: string
  @Column()
  owner: string
  @CreateDateColumn()
  created_at?: Date

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
