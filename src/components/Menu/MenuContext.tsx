import { createContext } from 'react'

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
}

const MenuContext = createContext<Type>(defaultValues)

export default MenuContext
