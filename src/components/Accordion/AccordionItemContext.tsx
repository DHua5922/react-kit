import { createContext } from 'react'

interface Type {
  eventKey: string
}

const defaultValues: Type = {
  eventKey: '',
}

const AccordionItemContext = createContext<Type>(defaultValues)

export default AccordionItemContext
