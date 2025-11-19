import { FieldValues } from 'react-hook-form'
import { NumericFormat } from 'react-number-format'

import { Input } from '~/shared/ui'

import { FormFieldInputProps } from '../model'

export function FormFieldInput<T extends FieldValues>({
  field,
  fieldState,
  placeholder,
  type,
}: FormFieldInputProps<T>) {
  if (type === 'price') {
    return (
      <NumericFormat
        value={field.value}
        customInput={Input}
        thousandSeparator=" "
        prefix="$ "
        allowNegative={false}
        allowLeadingZeros={false}
        placeholder={placeholder}
        onValueChange={({ floatValue }) => {
          field.onChange(floatValue)
        }}
        isAllowed={({ floatValue }) => (floatValue ?? 0) <= 100000}
        aria-invalid={Boolean(fieldState.error)}
      />
    )
  }
  if (type === 'number') {
    return (
      <NumericFormat
        value={field.value}
        customInput={Input}
        allowNegative={false}
        allowLeadingZeros={false}
        placeholder={placeholder}
        onValueChange={({ floatValue }) => {
          field.onChange(floatValue)
        }}
        aria-invalid={Boolean(fieldState.error)}
      />
    )
  }
  return <Input type={type} placeholder={placeholder} {...field} />
}
