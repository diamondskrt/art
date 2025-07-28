import { Locale } from 'next-intl'

type Nullable<T> = T | null

type LocaleParams = Promise<{ locale: Locale }>

type Image = {
  $id: string
  url: string
  name: string
  type: string
  size: number
  file?: File
  order: number
}

export type { Nullable, LocaleParams, Image }
