import { ReactNode } from 'react'

export interface formInputProps {
  htmlFor?: string
  children?: ReactNode
  type: string
  id?: string
  placeholder?: string
  value?: string | number
  required?: boolean
  className?: string
  disabled?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
