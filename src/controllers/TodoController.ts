// we first need to import some types from express because we want to type the values explicitly
import { Response, Request } from 'express'
import { ITodo } from '../Interfaces'
import { Todo } from '../Models'

export const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    // TODO: test
    const todos: ITodo[] = await Todo.find({ userId: req.params.id, listId: req.params.listId })
    res.status(200).json({ todos })
  } catch (err) {
    console.error(err)
    res.status(400).json(err)
  }
}

export const addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<
      ITodo,
      'userId' | 'listId' | 'description' | 'status' | 'priority' | 'dueDate'
    >
    const todo: ITodo = new Todo({
      userId: body.userId,
      listId: body.listId,
      description: body.description,
      status: body.status,
      priority: body.priority,
      dueDate: body.dueDate,
    })
    const newTodo: ITodo = await todo.save()
    res.status(201).json({ message: 'Todo added', todo: newTodo })
  } catch (err) {
    console.error(err)
    res.status(400).json(err)
  }
}

export const updateTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req
    const updateTodo: ITodo | null = await Todo.findByIdAndUpdate({ _id: id }, body)
    res.status(200).json({
      message: 'Todo updated',
      todo: updateTodo,
    })
  } catch (err) {
    console.error(err)
    res.status(400).json(err)
  }
}

export const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedTodo: ITodo | null = await Todo.findByIdAndRemove(req.params.id)
    res.status(200).json({
      message: 'Todo deleted',
      todo: deletedTodo,
    })
  } catch (err) {
    console.error(err)
    res.status(400).json(err)
  }
}
