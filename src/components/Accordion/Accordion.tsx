import { HTMLAttributes } from 'react'
import AccordionContext from './AccordionContext'

export interface AccordionProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  activeKeys: string[]
  onSelect: (key: string) => void
}

export default function Accordion({
  children,
  activeKeys,
  onSelect,
  ...props
}: AccordionProps) {
  const contextValue = { activeKeys, onSelect }
  return (
    <AccordionContext.Provider value={contextValue}>
      <div {...props}>{children}</div>
    </AccordionContext.Provider>
  )
}
