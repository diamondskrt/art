import { NextIntlClientProvider } from 'next-intl'

import { QueryProvider } from './query-provider'
import { SidebarProvider } from './sidebar-provider'
import { ThemeProvider } from './theme-provider'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <SidebarProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
      </SidebarProvider>
    </QueryProvider>
  )
}
