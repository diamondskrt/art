import { z } from 'zod'

import { contactFormSchema } from '../config'

type ContactFormPayload = z.infer<typeof contactFormSchema>

type ContactFormProps = Omit<React.HTMLAttributes<HTMLFormElement>, 'onSubmit'>

export type { ContactFormPayload, ContactFormProps }
