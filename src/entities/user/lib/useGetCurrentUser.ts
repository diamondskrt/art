import { useQuery } from '@tanstack/react-query'

import { getCurrentUser } from '../api'

export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: getCurrentUser,
    retry: false,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  })
}
