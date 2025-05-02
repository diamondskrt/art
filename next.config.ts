import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {}

const withNextIntl = createNextIntlPlugin({
  requestConfig: './src/shared/lib/i18n/request.ts',
  experimental: {
    createMessagesDeclaration: './src/shared/lib/i18n/messages/en.json',
  },
})

export default withNextIntl(nextConfig)
