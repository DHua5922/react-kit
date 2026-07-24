import { createContext } from 'react'

interface Type {
  showPopup: boolean
  openPopup: () => void
  closePopup: () => void
  popupOffsetVertical: number
  popupOffsetHorizontal: number
  popupPos: {
    top: string
    left: string
  }
  setPopupPos: (position: { top: string; left: string }) => void
}

const defaultValues: Type = {
  showPopup: false,
  openPopup: () => {},
  closePopup: () => {},
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
