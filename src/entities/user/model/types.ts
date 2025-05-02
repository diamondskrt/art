import { z } from 'zod'

import { loginFormSchema } from '../config'

type User = {
  id: string
  email: string
  name: string
}

type LoginPayload = z.infer<typeof loginFormSchema>

export type { User, LoginPayload }
