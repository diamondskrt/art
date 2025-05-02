import {
  FieldValues,
  FieldPath,
  Path,
  Control,
  FormProviderProps,
} from 'react-hook-form'

type FormItemContextValue = {
  id: string
}

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

type FormProps<T extends FieldValues> = Omit<
  React.HTMLAttributes<HTMLFormElement>,
  'onSubmit'
> &
  FormProviderProps<T> & {
    onSubmit: (values: T) => void
  }

type FormFieldItemProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  label?: string
  placeholder?: string
  description?: string
  type?: 'text' | 'email' | 'password' | 'number'
}

export type {
  FormItemContextValue,
  FormFieldContextValue,
  FormFieldItemProps,
  FormProps,
}
