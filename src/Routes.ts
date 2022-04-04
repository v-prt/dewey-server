import { Router } from 'express'
import { getUser, createUser, loginUser } from './controllers/UserController'
import { getTodos, addTodo, updateTodo, deleteTodo } from './controllers/TodoController'

const router: Router = Router()

// users
router.get('/users/:id', getUser)
router.post('/users', createUser)
router.post('/login', loginUser)

// todos
router.get('/todos', getTodos)
router.post('/todos', addTodo)
router.put('/todos/:id', updateTodo)
router.delete('/todos/:id', deleteTodo)

export default router
