type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small' | 'code' | 'a' | 'strong'
  children: React.ReactNode
}

export type { TypographyProps }
