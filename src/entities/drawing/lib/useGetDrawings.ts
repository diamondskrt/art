import { useQuery } from '@tanstack/react-query'

import { getDrawings } from '../api'
import { DRAWINGS_QUERY_KEY } from '../config'
import { GetDrawingsParams } from '../model'

export const useGetDrawings = (params?: GetDrawingsParams) => {
  return useQuery({
    queryKey: [DRAWINGS_QUERY_KEY, params],
    queryFn: () => getDrawings(params),
    retry: 2,
  })
}
