import { z } from 'zod'

import { drawingFormSchema } from '../config'

type DrawingPayload = z.infer<typeof drawingFormSchema>

type DrawingImage = {
  $id: string
  name: string
  url: string
}

type Drawing = {
  $id: string
  title: string
  description: string
  price: number
  images: DrawingImage[]
}

export type { DrawingPayload, Drawing, DrawingImage }
