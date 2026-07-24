import { ReactNode, useState } from 'react'
import DatePickerContext from './DatePickerContext'

export interface DatePickerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children?: ReactNode
  popupOffsetVertical?: number
  popupOffsetHorizontal?: number
}

function useDatePicker({
  open,
  onOpenChange,
  popupOffsetVertical = 0,
  popupOffsetHorizontal = 0,
}: DatePickerProps) {
  const [popupPosition, setPopupPosition] = useState({
    top: 'auto',
    left: 'auto',
  })

  const contextValue = {
    open,
    setOpen: onOpenChange,
    popupOffsetVertical,
    popupOffsetHorizontal,
    popupPosition,
    setPopupPosition,
  }

  return contextValue
}

export default function DatePicker({
  open,
  onOpenChange,
  children,
  popupOffsetVertical = 0,
  popupOffsetHorizontal = 0,
}: DatePickerProps) {
  const contextValue = useDatePicker({
    open,
    onOpenChange,
    popupOffsetVertical,
    popupOffsetHorizontal,
  })

  return (
    <DatePickerContext.Provider value={contextValue}>
      {children}
    </DatePickerContext.Provider>
  )
}
