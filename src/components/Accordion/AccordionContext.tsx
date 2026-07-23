import { createContext } from 'react'

interface Type {
  activeKeys: string[]
  onSelect: (key: string) => void
}

const defaultValues: Type = {
  activeKeys: [],
  onSelect: () => {},
}

const AccordionContext = createContext<Type>(defaultValues)

export default AccordionContext
