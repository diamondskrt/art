import { z } from 'zod'

import {
  addDrawingFormSchema,
  imageSchema,
  updateDrawingFormSchema,
} from '../config'

type AddDrawingPayload = z.infer<typeof addDrawingFormSchema>

type UpdateDrawingPayload = z.infer<typeof updateDrawingFormSchema>

type DrawingImage = z.infer<typeof imageSchema>

type Drawing = UpdateDrawingPayload

type GetDrawingsParams = {
  page?: number
  limit?: number
  search?: string
}

export type {
  AddDrawingPayload,
  UpdateDrawingPayload,
  Drawing,
  DrawingImage,
  GetDrawingsParams,
}
