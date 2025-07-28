'use client'

import { useTranslations } from 'next-intl'

import { useAuth } from '~/shared/lib'
import { Badge, Typography } from '~/shared/ui'

export function UserInfo() {
  const { user } = useAuth()

  const t = useTranslations('ProfilePage.userInfo')

  return (
    <div className="space-y-2">
      <Typography variant="p">
        {t('name')}: {user?.name}
      </Typography>
      <Typography variant="p">
        {t('email')}: {user?.email}
      </Typography>
      <div className="flex flex-wrap gap-2">
        <Typography variant="p">{t('roles')}:</Typography>
        {user?.roles.map((role) => (
          <Badge key={role}>{role}</Badge>
        ))}
      </div>
    </div>
  )
}
