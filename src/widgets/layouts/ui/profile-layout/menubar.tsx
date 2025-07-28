import { Home, Inbox } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Link, routing } from '~/shared/lib'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '~/shared/ui'

type MenuItem = {
  title: string
  url: keyof (typeof routing)['pathnames']
  icon: React.ElementType
}

export function ProfileSidebar() {
  const t = useTranslations('ProfilePage.menu')

  const items: MenuItem[] = [
    {
      title: t('home'),
      url: '/home',
      icon: Home,
    },
    {
      title: t('drawings'),
      url: '/drawings/list',
      icon: Inbox,
    },
  ]

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{t('title')}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  <Link href={item.url as any}>
                    <SidebarMenuButton className="cursor-pointer">
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
