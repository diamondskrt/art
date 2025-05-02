'use client'

import { UserIcon } from 'lucide-react'

import { useUser } from '~/entities/user'
import { Link } from '~/shared/lib'
import { Button } from '~/shared/ui'

import { UserMenu } from './user-menu'

function Profile() {
  const { user } = useUser()

  return user ? (
    <UserMenu />
  ) : (
    <Link href="/auth/sign-in">
      <Button variant="outline">
        <UserIcon />
      </Button>
    </Link>
  )
}

export { Profile }
