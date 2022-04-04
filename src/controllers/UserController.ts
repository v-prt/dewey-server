// we first need to import some types from express because we want to type the values explicitly
import { Response, Request } from 'express'
import { IUser } from '../Interfaces'
import { User } from '../Models'

export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findOne({ _id: req.params.id })
    res.status(200).json({ user })
  } catch (err) {
    console.error(err)
  }
}

export const createUser = async (req: Request, res: Response): Promise<void> => {
  // TODO: hash password
  try {
    const body = req.body as Pick<IUser, 'name' | 'email' | 'password' | 'lists'>
    const user: IUser = new User({
      name: body.name,
      email: body.email,
      password: body.password,
    })

    const newUser: IUser = await user.save()

    res.status(201).json({ message: 'User added', user: newUser })
  } catch (err) {
    console.error(err)
    res.status(400).json(err)
  }
}

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findOne({ email: req.body.email, password: req.body.password })
    res.status(200).json({ user })
  } catch (err) {
    console.error(err)
  }
}
