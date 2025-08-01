'use client'

import { createContext } from 'react'

import { AuthContextType } from './types'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export { AuthContext }
