import { z } from 'zod'

const contactFormSchema = z.object({
  name: z.string().min(1, {
    message: 'Name is required.',
  }),
  email: z.string().email({
    message: 'Invalid email address.',
  }),
})

export { contactFormSchema }
