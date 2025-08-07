'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'

import { Input, InputProps } from '~/shared/ui'

import { SEARCH_PARAM_KEY, DEFAULT_DELAY } from '../config'

type SearchInputProps = InputProps & {
  paramKey?: string
  delay?: number
  placeholder?: string
}

export const SearchInput = ({
  paramKey = SEARCH_PARAM_KEY,
  delay = DEFAULT_DELAY,
  placeholder,
  ...props
}: SearchInputProps) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const t = useTranslations('UI.search-input')
  const searchParam = searchParams?.get(paramKey) || ''

  const initial = searchParams?.get(paramKey) || ''
  const [inputValue, setInputValue] = useState(initial)

  const [debouncedValue] = useDebounce(inputValue, delay)

  // Сброс локального состояния при навигации назад/вперёд
  useEffect(() => {
    setInputValue(searchParams?.get(paramKey) || '')
  }, [searchParams, paramKey])

  // Обновление query параметров
  useEffect(() => {
    const params = new URLSearchParams(searchParams?.toString() || '')

    if (debouncedValue) {
      params.set(paramKey, debouncedValue)
    } else {
      params.delete(paramKey)
    }

    params.set('page', '1')

    router.push(`?${params.toString()}`)
  }, [debouncedValue, paramKey, router, searchParam])

  return (
    <Input
      {...props}
      placeholder={placeholder || t('placeholder')}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  )
}
