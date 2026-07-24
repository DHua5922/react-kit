import { createContext } from 'react'
import type { RefObject } from 'react'

interface Type {
  open: boolean
  setOpen: (open: boolean) => void
  onSelect: (item: unknown) => void
  popupOffsetVertical: number
  popupOffsetHorizontal: number
  popupPosition: {
    top: string
    left: string
  }
  setPopupPosition: (position: { top: string; left: string }) => void
  triggerRef: RefObject<HTMLButtonElement>
}

const defaultValues: Type = {
  open: false,
  setOpen: () => {},
  onSelect: () => {},
  popupOffsetVertical: 0,
  popupOffsetHorizontal: 0,
  popupPosition: {
    top: '0px',
    left: '0px',
  },
  setPopupPosition: () => {},
  triggerRef: { current: null },
}

const MenuContext = createContext<Type>(defaultValues)

export default MenuContext
