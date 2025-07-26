import { z } from 'zod'

import { loginFormSchema, ROLES } from '../config'

type Role = (typeof ROLES)[keyof typeof ROLES]

type User = {
  id: string
  email: string
  name: string
  roles: Role[]
}

type LoginPayload = z.infer<typeof loginFormSchema>

export type { User, LoginPayload, Role }
