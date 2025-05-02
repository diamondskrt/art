import { NextIntlClientProvider } from 'next-intl'

import { QueryProvider } from './query-provider'
import { ThemeProvider } from './theme-provider'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </ThemeProvider>
    </QueryProvider>
  )
}
