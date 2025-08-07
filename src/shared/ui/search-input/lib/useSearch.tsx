'use client'

import { useSearchParams } from 'next/navigation'

export function useSearch() {
  const searchParams = useSearchParams()
  const search = searchParams?.get('search')

  return {
    search: search ?? undefined,
  }
}
