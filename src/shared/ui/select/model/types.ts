import { SelectProps as SelectPropsRadix } from '@radix-ui/react-select'

type SelectOption = {
  label: string
  value: string
}

type SelectProps = SelectPropsRadix & {
  defaultValue?: string
  value?: string
  placeholder?: string
  label?: string
  options?: SelectOption[]
  optionLabel?: string
  optionValue?: string
  disabled?: boolean
  onSelectChange?: (value: string) => void
  triggerClassName?: string
}

export type { SelectOption, SelectProps }
