import { forwardRef, HTMLAttributes } from 'react'
import AccordionContext from './AccordionContext'

export interface AccordionProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'onSelect'
> {
  activeKeys: string[]
  onSelect: (key: string) => void
}

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(function Accordion(
  { children, activeKeys, onSelect, ...props },
  ref
) {
  const contextValue = { activeKeys, onSelect }
  return (
    <AccordionContext.Provider value={contextValue}>
      <div ref={ref} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
})

export default Accordion
