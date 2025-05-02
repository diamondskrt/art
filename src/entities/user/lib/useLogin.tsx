import { useMutation, useQueryClient } from '@tanstack/react-query'

import { loginUser } from '../api'
import { LoginPayload } from '../model'

export const useLogin = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (payload: LoginPayload) => loginUser(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUser'] })
    },
  })
}
