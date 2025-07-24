import { Slot } from '@radix-ui/react-slot'

import { cn } from '~/shared/lib'

import { TypographyProps } from '../model'

export function Typography({
  variant,
  children,
  asChild,
  ...props
}: TypographyProps) {
  const Tag = asChild ? Slot : variant

  return (
    <Tag {...props} className={cn(variant, props.className)}>
      {children}
    </Tag>
  )
}
