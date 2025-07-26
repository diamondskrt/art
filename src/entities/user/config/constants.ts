import { z } from 'zod'

const USER_KEY = 'user'

const loginFormSchema = z.object({
  email: z.string().email({
    message: 'Invalid email address.',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
})

const ROLES = {
  ADMIN: 'admin',
  USER: 'user',
}

export { loginFormSchema, USER_KEY, ROLES }
