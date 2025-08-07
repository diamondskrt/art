'use client'

import { UserIcon } from 'lucide-react'

import { Link, useAuth } from '~/shared/lib'
import { Button } from '~/shared/ui'

import { UserMenu } from './user-menu'

function Profile() {
  const { user } = useAuth()

  return user ? (
    <UserMenu />
  ) : (
    <Link href="/auth/sign-in">
      <Button variant="outline" className="min-w-12">
        <UserIcon />
      </Button>
    </Link>
  )
}

export { Profile }
