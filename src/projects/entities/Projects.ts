import { v4 as uuidv4 } from 'uuid'

export class Projects {
  id?: String
  name: String
  owner: String
  created_at?: Date

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
      this.created_at = new Date()
    }
  }
}
