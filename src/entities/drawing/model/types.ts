import { z } from 'zod'

import {
  addDrawingFormSchema,
  updateDrawingFormSchema,
  imageSchema,
} from '../config'

type AddDrawingPayload = z.infer<typeof addDrawingFormSchema>

type UpdateDrawingPayload = z.infer<typeof updateDrawingFormSchema>

type DrawingImage = z.infer<typeof imageSchema>

type Drawing = UpdateDrawingPayload

export type { AddDrawingPayload, UpdateDrawingPayload, Drawing, DrawingImage }
