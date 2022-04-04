import { Document } from 'mongoose'

// Here, we have a Todo interface that extends the Document type provided by mongoose. We will be using it later to interact with MongoDB
export interface ITodo extends Document {
  userId: string
  listId: string
  description: string
  status: boolean
  priority: number
  dueDate: Date
}

export interface IList extends Document {
  userId: string
  name: string
}

export interface IUser extends Document {
  name: string
  email: string
  password: string
}
