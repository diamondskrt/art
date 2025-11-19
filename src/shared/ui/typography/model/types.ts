type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'p'
  | 'small'
  | 'span'
  | 'b'
  | 'code'
  | 'a'
  | 'strong'
  | 'em'

type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  variant: TypographyVariant
  children?: React.ReactNode
  asChild?: boolean
}

export type { TypographyProps }
