import { Document } from 'mongoose'

// Here, we have a Todo interface that extends the Document type provided by mongoose. We will be using it later to interact with MongoDB
export interface ITodo extends Document {
  description: string
  status: boolean
  priority: number
  dueDate: Date
}

export interface IList extends Document {
  user: IUser
  name: string
  tasks: ITodo[]
}

export interface IUser extends Document {
  name: string
  email: string
  password: string
  lists: IList[]
}
