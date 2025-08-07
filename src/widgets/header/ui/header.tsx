import { MenuIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Link } from '~/shared/lib'
import {
  BreadcrumbItem,
  Button,
  LocaleSwitcher,
  ThemeSwitcher,
  Typography,
} from '~/shared/ui'

import { DrawerMenu } from './drawer-menu'
import { NavigationLink } from './navigation-link'
import { Profile } from './profile'

export function Header() {
  const t = useTranslations('Navigation')

  const navigationLinks: BreadcrumbItem[] = [
    { href: '/home', label: t('home') },
    { href: '/drawings/list', label: t('drawings') },
  ]

  return (
    <header className="py-4">
      <nav className="container flex items-center justify-between">
        <Typography asChild variant="h3" className="uppercase">
          <Link href="/home">KE</Link>
        </Typography>
        <div className="hidden md:flex items-center gap-4">
          {navigationLinks.map((link) => (
            <NavigationLink key={link.label} href={link.href!}>
              {link.label}
            </NavigationLink>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <LocaleSwitcher className="min-w-[80px]" />
          <Profile />
          <DrawerMenu navigationLinks={navigationLinks}>
            <Button variant="outline" className="cursor-pointer">
              <MenuIcon className="w-4 h-4" />
            </Button>
          </DrawerMenu>
        </div>
      </nav>
    </header>
  )
}
