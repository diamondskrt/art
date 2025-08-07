import { VariantProps } from 'class-variance-authority'

import { buttonVariants } from '../config'

type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

export type { ButtonProps }
