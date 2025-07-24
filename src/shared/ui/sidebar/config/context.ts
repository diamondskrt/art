'use client'

import { createContext } from 'react'

import { SidebarContextProps } from '../model'

const SidebarContext = createContext<SidebarContextProps | null>(null)

export { SidebarContext }
