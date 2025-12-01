import { ReactNode } from "react"
import { KeyboardTypeOptions } from "react-native"

export interface WrapperProps {
  child: ReactNode
}

export interface InputLabelProps {
  label: string
  value: string
  onChangeText: (text: string) => void
  keyboardType?: KeyboardTypeOptions
  placeholder?: string
}

export interface TimeProps {
  hours: number
  minutes: number
}

export interface DateTimeProps {
  date: any
  onConfirmDate: (params: any) => void
  hours: number
  minutes: number
  onConfirmTime: (hoursAndMinutes: TimeProps) => any
}

export interface DurationProps {
  duration: string
  onChangeDuration: (text: string) => void
}

export interface AddNotesProps {
  value: string
  onChangeText: (text: string) => void
}
