'use client'

import { PlusIcon } from 'lucide-react'

import { Link, useAuth } from '~/shared/lib'
import { Button } from '~/shared/ui'

export function AddDrawingBtn() {
  const { user } = useAuth()

  if (!user?.roles.includes('admin')) {
    return null
  }

  return (
    <Button asChild className="cursor-pointer">
      <Link href="/drawings/add">
        <PlusIcon />
        Add Drawing
      </Link>
    </Button>
  )
}
