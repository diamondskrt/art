'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
  AddDrawingPayload,
  DrawingImage,
  DrawingSortableGrid,
  addDrawingFormSchema,
  useAddDrawing,
} from '~/entities/drawing'
import { useRouter } from '~/shared/lib'
import { Button, Form, FormFieldItem } from '~/shared/ui'

import { defaultValues } from '../config'

export function AddDrawingForm() {
  const router = useRouter()

  const t = useTranslations('AddDrawingPage')

  const { mutate: addDrawing, isPending } = useAddDrawing()

  const form = useForm<AddDrawingPayload>({
    resolver: zodResolver(addDrawingFormSchema),
    defaultValues,
  })

  const onSubmit = async (values: AddDrawingPayload) => {
    try {
      await addDrawing(values)
      toast.success('Drawing added successfully')
      form.reset(defaultValues)
      router.push('/drawings/list')
    } catch (error) {
      toast.error((error as Error).message)
    }
  }

  return (
    <Form {...form} onSubmit={onSubmit} className="space-y-4">
      <FormFieldItem
        control={form.control}
        name="images"
        render={(field) => (
          <DrawingSortableGrid
            initialImages={field.value as DrawingImage[]}
            onChangeAction={(items) => {
              field.onChange(items)
            }}
          />
        )}
      />
      <div className="w-full md:w-1/3 lg:w-[350px] space-y-4">
        <FormFieldItem
          control={form.control}
          name="title"
          placeholder={t('form.title')}
        />
        <FormFieldItem
          control={form.control}
          name="description"
          placeholder={t('form.description')}
        />
        <FormFieldItem
          control={form.control}
          name="price"
          placeholder={t('form.price')}
          type="number"
          description={t('form.priceDescription')}
        />
        <Button type="submit" disabled={isPending} className="cursor-pointer">
          {t('form.submitBtn')}
        </Button>
      </div>
    </Form>
  )
}
