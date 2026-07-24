import { ReactNode, useState } from 'react'
import MenuContext from './MenuContext'

export interface MenuProps {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  popupOffsetVertical?: number
  popupOffsetHorizontal?: number
  onSelect?: (item: unknown) => void
  children?: ReactNode
}

function useMenu({
  open,
  defaultOpen = false,
  onOpenChange,
  popupOffsetVertical = 0,
  popupOffsetHorizontal = 0,
  onSelect,
}: MenuProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen)
  const [popupPosition, setPopupPosition] = useState({
    top: 'auto',
    left: 'auto',
  })
  const isControlled = open !== undefined
  const isOpen = isControlled ? open : internalOpen

  const contextValue = {
    open: isOpen,
    setOpen: (nextOpen: boolean) => {
      if (!isControlled) {
        setInternalOpen(nextOpen)
      }

      onOpenChange?.(nextOpen)
    },
    popupOffsetVertical,
    popupOffsetHorizontal,
    popupPosition,
    setPopupPosition,
    onSelect: onSelect ?? (() => {}),
  }

  return contextValue
}

export default function Menu({
  children,
  open,
  defaultOpen = false,
  onOpenChange,
  popupOffsetVertical = 0,
  popupOffsetHorizontal = 0,
  onSelect,
}: MenuProps) {
  const contextValue = useMenu({
    open,
    defaultOpen,
    onOpenChange,
    popupOffsetVertical,
    popupOffsetHorizontal,
    onSelect,
  })

  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  )
}
