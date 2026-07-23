import { ReactNode, useMemo, useState } from 'react'
import DatePickerContext from './DatePickerContext'

export interface DatePickerProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children?: ReactNode
  offsetMenuPosVertical?: number
  offsetMenuPosHorizontal?: number
}

function useDatePicker({
  open,
  onOpenChange,
  offsetMenuPosVertical = 0,
  offsetMenuPosHorizontal = 0,
}: DatePickerProps) {
  const [popupPos, setPopupPos] = useState({
    top: 'auto',
    left: 'auto',
  })

  const contextValue = useMemo(
    () => ({
      showPopup: open || false,
      openPopup: () => onOpenChange?.(true),
      closePopup: () => onOpenChange?.(false),
      offsetMenuPosVertical,
      offsetMenuPosHorizontal,
      popupPos,
      setPopupPos,
    }),
    [
      open,
      onOpenChange,
      popupPos,
      setPopupPos,
      offsetMenuPosHorizontal,
      offsetMenuPosVertical,
    ]
  )

  return contextValue
}

export default function DatePicker({
  open,
  onOpenChange,
  children,
  offsetMenuPosVertical = 0,
  offsetMenuPosHorizontal = 0,
}: DatePickerProps) {
  const contextValue = useDatePicker({
    open,
    onOpenChange,
    offsetMenuPosVertical,
    offsetMenuPosHorizontal,
  })

  return (
    <DatePickerContext.Provider value={contextValue}>
      {children}
    </DatePickerContext.Provider>
  )
}
