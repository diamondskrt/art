import { useQuery } from '@tanstack/react-query'

import { getDrawings } from '../api'
import { DRAWINGS_QUERY_KEY } from '../config'

export const useGetDrawings = () => {
  return useQuery({
    queryKey: [DRAWINGS_QUERY_KEY],
    queryFn: getDrawings,
  })
}
