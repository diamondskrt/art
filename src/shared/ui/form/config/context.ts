import { createContext } from 'react'

import { FormItemContextValue, FormFieldContextValue } from '../model'

const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

export { FormFieldContext, FormItemContext }
