import { FieldValues } from 'react-hook-form'

import { cn } from '~/shared/lib'
import { Input } from '~/shared/ui'

import { FormFieldItemProps } from '../model'

import {
  FormControl,
  FormDescription,
  FormMessage,
  FormItem,
  FormLabel,
  FormField,
} from './form-items'

function FormFieldItem<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  description,
  type = 'text',
  className,
  ...props
}: FormFieldItemProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem {...props} className={cn('w-full', className)}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export { FormFieldItem }
