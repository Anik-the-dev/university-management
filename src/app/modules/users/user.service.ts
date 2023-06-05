import { IUser } from './user.interface'
import { User } from './user.model'
import config from '../../../config/index'
import { generateUserId } from './user.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto increment id
  user.id = await generateUserId()
  // default password
  if (!user.password) {
    user.password = config.default_user_pass as string
  }
  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new Error('Failed to create User!')
  }
  return createdUser
}

export default {
  createUser,
}
