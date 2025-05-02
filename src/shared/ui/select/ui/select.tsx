import get from 'lodash-es/get'

import { cn } from '~/shared/lib'

import { SelectProps } from '../model'

import {
  SelectTrigger,
  Select as SelectPrimitive,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from './select-items'

function Select({
  defaultValue,
  value,
  placeholder,
  label,
  options = [],
  optionLabel = 'label',
  optionValue = 'value',
  disabled,
  onSelectChange,
  triggerClassName,
  ...props
}: SelectProps) {
  return (
    <SelectPrimitive
      defaultValue={defaultValue}
      value={value}
      disabled={disabled}
      onValueChange={onSelectChange}
      {...props}
    >
      <SelectTrigger className={cn(triggerClassName)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.length ? (
          <SelectGroup>
            {label && <SelectLabel>{label}</SelectLabel>}
            {options.map((option) => (
              <SelectItem
                key={get(option, optionValue)}
                value={get(option, optionValue)}
              >
                {get(option, optionLabel)}
              </SelectItem>
            ))}
          </SelectGroup>
        ) : (
          <p className="text-center text-sm text-gray-500">No content</p>
        )}
      </SelectContent>
    </SelectPrimitive>
  )
}

export { Select }
