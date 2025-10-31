import { FieldValues } from 'react-hook-form'
import { NumericFormat } from 'react-number-format'

import { Input } from '~/shared/ui'
import { cn } from '~/shared/utils'

import { FormFieldItemProps } from '../model'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './form-items'

function FormFieldItem<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  description,
  type = 'text',
  render,
  className,
  ...props
}: FormFieldItemProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem {...props} className={cn('w-full', className)}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            {render ? (
              render(field)
            ) : type === 'number' ? (
              <NumericFormat
                value={field.value}
                customInput={Input}
                thousandSeparator=" "
                suffix=" $"
                allowNegative={false}
                allowLeadingZeros={false}
                placeholder={placeholder}
                onValueChange={({ floatValue }) => {
                  field.onChange(floatValue)
                }}
                isAllowed={({ floatValue }) => (floatValue ?? 0) <= 100000}
                aria-invalid={Boolean(fieldState.error)}
              />
            ) : (
              <Input type={type} placeholder={placeholder} {...field} />
            )}
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export { FormFieldItem }
