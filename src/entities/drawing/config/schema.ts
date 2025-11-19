import { z } from 'zod'

import { MAX_FILES, MIN_FILES } from '~/shared/config'

const imageSchema = z.object({
  $id: z.string(),
  name: z.string(),
  url: z.string(),
  type: z.string(),
  size: z.number(),
  file: z.instanceof(File).optional(),
  order: z.number(),
})

const imagesSchema = z
  .array(imageSchema)
  .min(MIN_FILES, `You need to select at least ${MIN_FILES} file`)
  .max(MAX_FILES, `You can upload a maximum of ${MAX_FILES} files`)

const addDrawingFormSchema = z.object({
  images: imagesSchema,
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(0.1, 'Description needs to be greater than 0.1'),
  length: z.number().min(0.1, 'Length needs to be greater than 0.1'),
  width: z.number().min(0.1, 'Width needs to be greater than 0.1'),
  depth: z.number().min(0.1, 'Depth needs to be greater than 0.1'),
  price: z
    .number()
    .min(1, 'Price is required')
    .max(100000, 'Price is too high'),
})

const updateDrawingFormSchema = addDrawingFormSchema.extend({
  $id: z.string(),
})

export { addDrawingFormSchema, imageSchema, updateDrawingFormSchema }
