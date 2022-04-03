import { Router } from 'express'
import { getUsers, createUser } from './controllers/UserController'
import { getTodos, addTodo, updateTodo, deleteTodo } from './controllers/TodoController'

const router: Router = Router()

// users
router.get('/users', getUsers)
router.post('/users', createUser)

// todos
router.get('/todos', getTodos)
router.post('/todos', addTodo)
router.put('/todos/:id', updateTodo)
router.delete('/todos/:id', deleteTodo)

export default router
