import { useQuery } from '@tanstack/react-query'

import { getCurrentUser } from '../api'

export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: getCurrentUser,
    retry: false,
  })
}
