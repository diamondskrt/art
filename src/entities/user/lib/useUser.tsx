import { useCallback, useEffect, useState } from 'react'
import { toast } from 'sonner'

import { User } from '~/entities/user'
import { getKey } from '~/shared/lib'

import { USER_KEY } from '../config'

export function useUser() {
  const [user, setUser] = useState<User | null>(null)

  const init = useCallback(async () => {
    try {
      const user = await getKey<User>(USER_KEY)
      if (!user) return
      setUser(user)
    } catch (error) {
      toast.error((error as Error).message)
    }
  }, [])

  useEffect(() => {
    init()
  }, [init])

  return { user }
}
