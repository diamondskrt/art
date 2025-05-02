import { useMutation, useQueryClient } from '@tanstack/react-query'

import { logoutUser } from '../api'

export const useLogout = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUser'] })
    },
    onError: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUser'] })
    },
  })
}
