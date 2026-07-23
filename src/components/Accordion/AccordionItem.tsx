import { forwardRef, HTMLAttributes } from 'react'
import AccordionItemContext from './AccordionItemContext'

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  eventKey: string
}

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  function AccordionItem({ children, eventKey, ...props }, ref) {
    return (
      <AccordionItemContext.Provider value={{ eventKey }}>
        <div ref={ref} {...props}>
          {children}
        </div>
      </AccordionItemContext.Provider>
    )
  }
)

export default AccordionItem
