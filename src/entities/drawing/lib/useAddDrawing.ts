import { useMutation, useQueryClient } from '@tanstack/react-query'

import { addDrawing } from '../api'
import { DRAWINGS_QUERY_KEY } from '../config'
import { DrawingPayload } from '../model'

export const useAddDrawing = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (payload: DrawingPayload) => addDrawing(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [DRAWINGS_QUERY_KEY] })
    },
  })
}
