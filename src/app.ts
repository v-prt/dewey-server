// we start by importing the express library that allows us to access the use() method that helps handle the Todos routes
import express, { Express } from 'express'

// we use the mongoose package to connect to MongoDB by appending to the URL the credentials held on the nodemon.json file
import mongoose from 'mongoose'
import cors from 'cors'
import todoRoutes from './routes'

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

// we need to parse our incoming requests
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use(todoRoutes)

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster.gfccu.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`

mongoose
  .connect(uri)
  .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
  .catch(error => {
    throw error
  })
