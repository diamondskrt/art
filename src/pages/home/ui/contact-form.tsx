'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { cn } from '~/shared/lib'
import { Form, FormFieldItem, Button } from '~/shared/ui'

type Props = Omit<React.HTMLAttributes<HTMLFormElement>, 'onSubmit'>

export function ContactForm({ className, ...props }: Props) {
  const contactFormSchema = z.object({
    name: z.string().min(1, {
      message: 'Name is required.',
    }),
    email: z.string().email({
      message: 'Invalid email address.',
    }),
  })

  type ContactForm = z.infer<typeof contactFormSchema>

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  })

  return (
    <Form
      {...form}
      {...props}
      className={cn('flex gap-4', className)}
      onSubmit={() => {}}
    >
      <FormFieldItem control={form.control} name="name" placeholder="Name" />
      <FormFieldItem control={form.control} name="email" placeholder="Email" />
      <Button
        type="submit"
        variant="rounded"
        size="lg"
        className="cursor-pointer"
      >
        Subscribe
      </Button>
    </Form>
  )
}
