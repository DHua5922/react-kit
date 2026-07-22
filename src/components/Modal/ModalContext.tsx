import { createContext } from 'react'

interface Type {
  show?: boolean
  onHide?: () => void
}

const defaultValues: Type = {
  show: false,
  onHide: () => {},
}

const ModalContext = createContext<Type>(defaultValues)

export default ModalContext
