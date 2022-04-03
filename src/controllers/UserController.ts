// we first need to import some types from express because we want to type the values explicitly
import { Response, Request } from 'express'
import { IUser } from '../Interfaces'
import { User } from '../Models'

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users: IUser[] = await User.find()
    res.status(200).json({ users })
  } catch (err) {
    console.error(err)
  }
}

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<IUser, 'name' | 'email' | 'password' | 'lists'>
    const user: IUser = new User({
      name: body.name,
      email: body.email,
      password: body.password,
    })

    const newUser: IUser = await user.save()
    const allUsers: IUser[] = await User.find()

    res.status(201).json({ message: 'User added', user: newUser, users: allUsers })
  } catch (err) {
    console.error(err)
    res.status(400).json(err)
  }
}
