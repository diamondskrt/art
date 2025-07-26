import { useMutation, useQueryClient } from '@tanstack/react-query'

import { deleteDrawing } from '../api'
import { DRAWINGS_QUERY_KEY } from '../config'

export const useDeleteDrawing = (id: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => deleteDrawing(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [DRAWINGS_QUERY_KEY] })
    },
  })
}
