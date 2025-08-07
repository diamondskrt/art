'use client'

import { ArrowLeftIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { useRouter } from '~/shared/lib'
import { Button, ButtonProps } from '~/shared/ui'

export function BackButton(props: ButtonProps) {
  const t = useTranslations('Navigation')
  const router = useRouter()

  const handleBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back()
    } else {
      router.push('/home')
    }
  }

  return (
    <Button
      variant="outline"
      {...props}
      onClick={handleBack}
      className="cursor-pointer"
    >
      <ArrowLeftIcon className="w-4 h-4" />
      {t('back')}
    </Button>
  )
}
