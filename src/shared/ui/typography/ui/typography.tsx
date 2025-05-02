import { TypographyProps } from '../model'

export function Typography({ variant, children, ...props }: TypographyProps) {
  const Tag = variant

  return <Tag {...props}>{children}</Tag>
}
