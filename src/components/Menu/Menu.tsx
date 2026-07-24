import { ReactNode, useRef, useState } from 'react'
import MenuContext from './MenuContext'

export interface MenuProps {
  popupOffsetVertical?: number
  popupOffsetHorizontal?: number
  children?: ReactNode
}

function useMenu({
  popupOffsetVertical = 0,
  popupOffsetHorizontal = 0,
}: MenuProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const [popupPosition, setPopupPosition] = useState({
    top: 'auto',
    left: 'auto',
  })
  const triggerRef = useRef<HTMLButtonElement>(null)

  const contextValue = {
    open: internalOpen,
    setOpen: setInternalOpen,
    popupPosition,
    setPopupPosition,
    triggerRef,
    popupOffsetVertical,
    popupOffsetHorizontal,
  }

  return contextValue
}

export default function Menu({
  children,
  popupOffsetVertical = 0,
  popupOffsetHorizontal = 0,
}: MenuProps) {
  const contextValue = useMenu({
    popupOffsetVertical,
    popupOffsetHorizontal,
  })

  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  )
}
