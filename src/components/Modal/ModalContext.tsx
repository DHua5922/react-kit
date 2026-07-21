import { createContext } from 'react'

interface Type {
  show?: boolean
  onShow?: () => void
  onHide?: () => void
}

const defaultValues: Type = {
  show: false,
  onShow: () => {},
  onHide: () => {},
}

const ModalContext = createContext<Type>(defaultValues)

export default ModalContext
