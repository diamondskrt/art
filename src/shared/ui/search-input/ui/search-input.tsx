'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useEffect, useMemo, useState } from 'react'
import { useDebounce } from 'use-debounce'

import { Input, InputProps } from '~/shared/ui'

import { DEFAULT_DELAY, SEARCH_PARAM_KEY } from '../config'

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

  const initialSearchValue = useMemo(
    () => searchParams?.get(paramKey) || '',
    [searchParams, paramKey]
  )
  const [inputValue, setInputValue] = useState(initialSearchValue)

  const [debouncedValue] = useDebounce(inputValue, delay)

  useEffect(() => {
    const params = new URLSearchParams(searchParams?.toString() || '')

    if (debouncedValue) {
      params.set(paramKey, debouncedValue)
    } else {
      params.delete(paramKey)
    }
    router.push(`?${params.toString()}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue])

  return (
    <Input
      {...props}
      placeholder={placeholder || t('placeholder')}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  )
}
