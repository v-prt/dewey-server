// we start by importing the express library that allows us to access the use() method that helps handle the Todos routes
import express, { Express } from 'express'

// we use the mongoose package to connect to MongoDB by appending to the URL the credentials held on the nodemon.json file
import mongoose, { ConnectOptions } from 'mongoose'
import cors from 'cors'
import todoRoutes from './routes'

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(todoRoutes)

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster.gfccu.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`

// current version of mongoose doesn't support options and sets them by default so we need to remove them
// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// } as ConnectOptions
// mongoose.set('useFindAndModify', false)

mongoose
  .connect(uri)
  .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
  .catch(error => {
    throw error
  })
