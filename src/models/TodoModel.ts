// we start by importing the interface ITodo and some utilities from mongoose. The latter helps to define the Todo schema and also pass in ITodo as a type to the model before exporting it.

import { ITodo } from '../types/todo'
import { model, Schema } from 'mongoose'

const todoSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    status: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
)

export default model<ITodo>('Todo', todoSchema)
