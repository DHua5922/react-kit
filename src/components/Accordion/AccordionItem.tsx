import { HTMLAttributes } from 'react'
import AccordionItemContext from './AccordionItemContext'

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  eventKey: string
}

export default function AccordionItem({
  children,
  eventKey,
  ...props
}: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={{ eventKey }}>
      <div {...props}>{children}</div>
    </AccordionItemContext.Provider>
  )
}
