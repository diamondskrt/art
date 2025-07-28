'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
  addDrawingFormSchema,
  AddDrawingPayload,
  useAddDrawing,
} from '~/entities/drawing'
import { useRouter } from '~/shared/lib'
import { Button, Form, FormFieldItem } from '~/shared/ui'

import { defaultValues } from '../config'

export function AddDrawingForm() {
  const router = useRouter()

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
        type="file"
        description="*Drag and drop images to reorder them, max 5 images"
      />
      <div className="w-full md:w-1/3 lg:w-[350px] space-y-4">
        <FormFieldItem
          control={form.control}
          name="title"
          placeholder="Enter title"
        />
        <FormFieldItem
          control={form.control}
          name="description"
          placeholder="Enter description"
        />
        <FormFieldItem
          control={form.control}
          name="price"
          placeholder="Enter price"
          type="number"
          description="Price must be up to 100 000 $"
        />
        <Button type="submit" disabled={isPending} className="cursor-pointer">
          Submit
        </Button>
      </div>
    </Form>
  )
}
