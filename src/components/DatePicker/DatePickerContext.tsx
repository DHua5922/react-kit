import { createContext } from 'react'

interface Type {
  open: boolean
  setOpen: (open: boolean) => void
  popupOffsetVertical: number
  popupOffsetHorizontal: number
  popupPos: {
    top: string
    left: string
  }
  setPopupPos: (position: { top: string; left: string }) => void
}

const defaultValues: Type = {
  open: false,
  setOpen: () => {},
  popupOffsetVertical: 0,
  popupOffsetHorizontal: 0,
  popupPos: {
    top: '0px',
    left: '0px',
  },
  setPopupPos: () => {},
}

const DatePickerContext = createContext<Type>(defaultValues)

export default DatePickerContext
