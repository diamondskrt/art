import { Locale } from 'next-intl'

type Nullable<T> = T | null

type LocaleParams = Promise<{ locale: Locale }>

export type { Nullable, LocaleParams }
