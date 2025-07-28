import { useMutation, useQueryClient } from '@tanstack/react-query'

import { updateDrawing } from '../api'
import { DRAWINGS_QUERY_KEY } from '../config'
import { UpdateDrawingPayload } from '../model'

export const useUpdateDrawing = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (drawing: UpdateDrawingPayload) => updateDrawing(drawing),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [DRAWINGS_QUERY_KEY] })
    },
  })
}
