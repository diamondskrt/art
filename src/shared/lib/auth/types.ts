import { LoginPayload, User } from '~/entities/user'

type AuthContextType = {
  user?: User
  isLoading: boolean
  login: (user: LoginPayload) => Promise<User>
  logout: () => Promise<void>
}

export type { AuthContextType }
