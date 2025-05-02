import { useEffect, useState } from 'react'

import { User } from '~/entities/user'
import { getKey } from '~/shared/lib'

import { USER_KEY } from '../config'

export function useUser() {
  const [user, setUser] = useState<User | null>(null)

  const init = async () => {
    const user = await getKey<User>(USER_KEY)
    setUser(user)
  }

  useEffect(() => {
    init()
  }, [])

  return { user }
}
