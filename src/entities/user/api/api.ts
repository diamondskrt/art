import { account } from '~/shared/lib'

import { LoginPayload, User } from '../model'

export const loginUser = async ({ email, password }: LoginPayload) => {
  try {
    await account.createEmailPasswordSession(email, password)
    const user = await getCurrentUser()
    return user
  } catch (error) {
    throw error
  }
}

export const getCurrentUser = async (): Promise<User> => {
  try {
    const user = await account.get()
    return {
      id: user.$id,
      email: user.email,
      name: user.name,
    }
  } catch (error) {
    throw error
  }
}

export const logoutUser = async () => {
  try {
    await account.deleteSession('current')
  } catch (error) {
    throw error
  }
}
