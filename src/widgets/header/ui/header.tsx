import { useTranslations } from 'next-intl'

import { Link } from '~/shared/lib'
import { LocaleSwitcher, ThemeSwitcher, Typography } from '~/shared/ui'

import { NavigationLink } from './navigation-link'
import { Profile } from './profile'

export function Header() {
  const t = useTranslations('Navigation')

  return (
    <header className="py-4">
      <nav className="container flex items-center justify-between">
        <Typography asChild variant="h3" className="uppercase">
          <Link href="/home">Kanzafarova Elvira</Link>
        </Typography>
        <div className="hidden md:flex items-center gap-4">
          <NavigationLink href="/home">{t('home')}</NavigationLink>
          <NavigationLink href="/drawings/list">{t('drawings')}</NavigationLink>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <ThemeSwitcher />
          <LocaleSwitcher className="min-w-[80px]" />
          <Profile />
        </div>
      </nav>
    </header>
  )
}
