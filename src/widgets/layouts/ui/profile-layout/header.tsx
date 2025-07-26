import { LocaleSwitcher, SidebarTrigger, ThemeSwitcher } from '~/shared/ui'
import { Profile } from '~/widgets/header'

export function ProfileHeader() {
  return (
    <header className="flex justify-between py-4">
      <SidebarTrigger />
      <div className="flex items-center gap-2">
        <ThemeSwitcher />
        <LocaleSwitcher className="min-w-[80px]" />
        <Profile />
      </div>
    </header>
  )
}
