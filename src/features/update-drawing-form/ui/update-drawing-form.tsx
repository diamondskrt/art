'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
  Drawing,
  useUpdateDrawing,
  updateDrawingFormSchema,
  UpdateDrawingPayload,
  DrawingImage,
  DrawingSortableGrid,
} from '~/entities/drawing'
import { useRouter } from '~/shared/lib'
import { Button, Form, FormFieldItem } from '~/shared/ui'

export function UpdateDrawingForm({ drawing }: { drawing: Drawing }) {
  const router = useRouter()

  const t = useTranslations('EditDrawingPage.form')

  const { mutate: updateDrawing, isPending } = useUpdateDrawing()

  const defaultValues = {
    $id: drawing.$id,
    images: drawing.images,
    title: drawing.title,
    description: drawing.description,
    price: drawing.price,
  }

  const form = useForm<UpdateDrawingPayload>({
    resolver: zodResolver(updateDrawingFormSchema),
    defaultValues,
  })

  const onSubmit = async (values: Drawing) => {
    try {
      await updateDrawing(values)
      toast.success('Drawing updated successfully')
      form.reset(defaultValues)
      router.push('/drawings/list')
    } catch (error) {
      toast.error((error as Error).message)
    }
  }

  return (
    <>
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
            placeholder={t('title')}
          />
          <FormFieldItem
            control={form.control}
            name="description"
            placeholder={t('description')}
          />
          <FormFieldItem
            control={form.control}
            name="price"
            placeholder={t('price')}
            type="number"
            description={t('priceDescription')}
          />
          <Button type="submit" disabled={isPending} className="cursor-pointer">
            {t('submitBtn')}
          </Button>
        </div>
      </Form>
    </>
  )
}
