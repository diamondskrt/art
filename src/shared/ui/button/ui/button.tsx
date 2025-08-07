import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

import { cn } from '~/shared/utils'

import { buttonVariants } from '../config'
import { ButtonProps } from '../model'

function Button({
  className,
  variant,
  size,
  asChild = false,
  type = 'button',
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      type={type}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
