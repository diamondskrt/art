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
import { Button, Form, FormFieldItem, Typography } from '~/shared/ui'

import { defaultValues } from '../config'

export function AddDrawingForm() {
  const router = useRouter()

  const tForm = useTranslations('AddDrawingPage.form')
  const tDimension = useTranslations('Dimension')

  const { mutateAsync: addDrawing, isPending } = useAddDrawing()

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
        render={({ field }) => (
          <DrawingSortableGrid
            initialImages={field.value as DrawingImage[]}
            onChangeAction={(items) => {
              field.onChange(items)
            }}
          />
        )}
      />
      <div className="w-full space-y-4 md:w-1/3 lg:w-[350px]">
        <FormFieldItem
          control={form.control}
          name="title"
          label={tForm('title')}
          placeholder={tForm('title')}
        />
        <FormFieldItem
          control={form.control}
          name="description"
          label={tForm('description')}
          placeholder={tForm('description')}
        />
        <div className="dimensions">
          <div className="flex items-center gap-2">
            <FormFieldItem
              control={form.control}
              name="length"
              type="number"
              label={tDimension('length')}
              placeholder={tDimension('length')}
            />
            <FormFieldItem
              control={form.control}
              name="width"
              type="number"
              label={tDimension('width')}
              placeholder={tDimension('width')}
            />
            <FormFieldItem
              control={form.control}
              name="depth"
              type="number"
              label={tDimension('depth')}
              placeholder={tDimension('depth')}
            />
          </div>
          <Typography variant="small" className="text-muted-foreground">
            {tForm('dimensionHint')}
          </Typography>
        </div>
        <FormFieldItem
          control={form.control}
          name="price"
          type="price"
          label={tForm('price')}
          placeholder={tForm('price')}
          description={tForm('priceDescription')}
        />
        <Button type="submit" disabled={isPending} className="cursor-pointer">
          {tForm('submitBtn')}
        </Button>
      </div>
    </Form>
  )
}
