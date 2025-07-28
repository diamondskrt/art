'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
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

  const t = useTranslations('IndexPage.contacts')

  return (
    <Form
      {...form}
      {...props}
      className={cn('flex gap-4', className)}
      onSubmit={() => {}}
    >
      <FormFieldItem
        control={form.control}
        name="name"
        placeholder={t('form.name')}
      />
      <FormFieldItem
        control={form.control}
        name="email"
        placeholder={t('form.email')}
      />
      <Button
        type="submit"
        variant="rounded"
        size="lg"
        className="cursor-pointer"
      >
        {t('form.subscribeBtn')}
      </Button>
    </Form>
  )
}
