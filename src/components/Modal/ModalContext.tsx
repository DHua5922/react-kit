import { createContext } from 'react'

interface Type {
  closeModal: () => void
}

const defaultValues: Type = {
  closeModal: () => {},
}

const ModalContext = createContext<Type>(defaultValues)

export default ModalContext
