import { createContext } from 'react'

interface Type {
  onHide?: () => void
}

const defaultValues: Type = {
  onHide: () => {},
}

const ModalContext = createContext<Type>(defaultValues)

export default ModalContext
