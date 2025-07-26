import { z } from 'zod'

const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10 MB
const ACCEPTED_TYPES = ['image/png', 'image/jpeg', 'image/webp']

const drawingFormSchema = z.object({
  images: z
    .array(
      z
        .instanceof(File)
        .refine((file) => ACCEPTED_TYPES.includes(file.type), {
          message: 'Invalid file type',
        })
        .refine((file) => file.size <= MAX_FILE_SIZE, {
          message: 'File is too large (max. 10MB)',
        })
    )
    .min(1, 'You need to select at least 1 file')
    .max(5, 'You can upload a maximum of 5 files'),
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  price: z
    .number()
    .min(1, 'Price is required')
    .max(100000, 'Price is too high'),
})

export { drawingFormSchema }
