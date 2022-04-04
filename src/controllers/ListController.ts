// we first need to import some types from express because we want to type the values explicitly
import { Response, Request } from 'express'
import { IList } from '../Interfaces'
import { List } from '../Models'

export const getListsByUserId = async (req: Request, res: Response): Promise<void> => {
  try {
    const lists: IList[] = await List.find({ userId: req.params.id })
    res.status(200).json({ lists })
  } catch (err) {
    console.error(err)
    res.status(400).json(err)
  }
}

export const addList = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<IList, 'userId' | 'name'>
    const list: IList = new List({
      userId: body.userId,
      name: body.name,
    })
    const newList: IList = await list.save()
    res.status(201).json({ message: 'List added', list: newList })
  } catch (err) {
    console.error(err)
    res.status(400).json(err)
  }
}
