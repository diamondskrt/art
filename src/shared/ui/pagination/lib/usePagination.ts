'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useCallback } from 'react'

import { DEFAULT_LIMIT, DEFAULT_PAGE } from '../config'
import { UsePaginationOptions } from '../model'

export const usePagination = ({
  defaultLimit = DEFAULT_LIMIT,
}: UsePaginationOptions = {}) => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const page = parseInt(searchParams?.get('page') || `${DEFAULT_PAGE}`, 10)
  const limit = parseInt(searchParams?.get('limit') || `${defaultLimit}`, 10)

  const setPage = useCallback(
    (newPage: number) => {
      const params = new URLSearchParams(searchParams?.toString() || '')
      params.set('page', newPage.toString())
      router.push(`?${params.toString()}`)
    },
    [router, searchParams]
  )

  const setLimit = useCallback(
    (newLimit: number) => {
      const params = new URLSearchParams(searchParams?.toString() || '')
      params.set('limit', newLimit.toString())
      params.set('page', `${DEFAULT_PAGE}`)
      router.push(`?${params.toString()}`)
    },
    [router, searchParams]
  )

  return {
    page,
    limit,
    offset: (page - 1) * limit,
    setPage,
    setLimit,
  }
}
