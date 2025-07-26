'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Form, FormFieldItem, Button } from '~/shared/ui'
import { cn } from '~/shared/utils'

import { contactFormSchema, defaultValues } from '../config'
import { ContactFormProps, ContactFormPayload } from '../model'

export function ContactForm({ className, ...props }: ContactFormProps) {
  const form = useForm<ContactFormPayload>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
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
