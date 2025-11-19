'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
  Drawing,
  DrawingImage,
  DrawingSortableGrid,
  UpdateDrawingPayload,
  updateDrawingFormSchema,
  useUpdateDrawing,
} from '~/entities/drawing'
import { useRouter } from '~/shared/lib'
import { Button, Form, FormFieldItem, Typography } from '~/shared/ui'

export function UpdateDrawingForm({ drawing }: { drawing: Drawing }) {
  const router = useRouter()

  const tForm = useTranslations('EditDrawingPage.form')
  const tDimension = useTranslations('Dimension')

  const { mutateAsync: updateDrawing, isPending } = useUpdateDrawing()

  const defaultValues = {
    $id: drawing.$id,
    images: drawing.images,
    title: drawing.title,
    description: drawing.description,
    length: drawing.length,
    width: drawing.width,
    depth: drawing.depth,
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
          <Button
            type="submit"
            disabled={isPending}
            className="w-full cursor-pointer md:w-auto"
          >
            {tForm('submitBtn')}
          </Button>
        </div>
      </Form>
    </>
  )
}
