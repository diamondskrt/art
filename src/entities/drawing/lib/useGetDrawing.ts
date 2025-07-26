import { useQuery } from '@tanstack/react-query'

import { getDrawing } from '../api'

export const useGetDrawing = (id: string) => {
  return useQuery({
    queryKey: ['drawing', id],
    queryFn: () => getDrawing(id),
    enabled: Boolean(id),
  })
}
