import { FieldValues } from 'react-hook-form'

import { cn } from '~/shared/utils'

import { FormFieldItemProps } from '../model'
import { FormFieldInput } from './form-field-input'
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
      render={(renderParams) => (
        <FormItem {...props} className={cn('w-full', className)}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            {render ? (
              render(renderParams)
            ) : (
              <FormFieldInput
                type={type}
                placeholder={placeholder}
                {...renderParams}
              />
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
