'use client'

import { PlusIcon } from 'lucide-react'

import { Link } from '~/shared/lib'
import { Button } from '~/shared/ui'

export function AddDrawingBtn() {
  return (
    <Button asChild className="cursor-pointer">
      <Link href="/drawings/add">
        <PlusIcon />
        Add Drawing
      </Link>
    </Button>
  )
}
