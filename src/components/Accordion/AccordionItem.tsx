import { HTMLAttributes, ReactNode } from 'react'
import AccordionItemContext from './AccordionItemContext'

interface Props extends HTMLAttributes<HTMLDivElement> {
  eventKey: string
  children?: ReactNode
}

export default function AccordionItem({ children, eventKey, ...props }: Props) {
  return (
    <AccordionItemContext.Provider value={{ eventKey }}>
      <div {...props}>{children}</div>
    </AccordionItemContext.Provider>
  )
}
