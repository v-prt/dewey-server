// we start by importing the interfaces and some utilities from mongoose. The latter helps to define the schemas and also pass in the interface as a type to the model before exporting it.

import { ITodo, IList, IUser } from './Interfaces'
import { model, Schema } from 'mongoose'
const ObjectId = Schema.Types.ObjectId

const todoSchema: Schema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },

    status: {
      type: Boolean,
      required: true,
    },

    priority: {
      type: Number,
      required: true,
    },

    dueDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
)

const listSchema: Schema = new Schema({
  userId: {
    type: ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  tasks: [todoSchema],
})

const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  lists: [listSchema],
})

export const Todo = model<ITodo>('Todo', todoSchema)
export const List = model<IList>('List', listSchema)
export const User = model<IUser>('User', userSchema)
