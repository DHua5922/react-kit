import { HTMLAttributes, ReactNode } from 'react'
import AccordionContext from './AccordionContext'

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  activeKeys: string[]
  onSelect: (key: string) => void
  children?: ReactNode
}

export default function Accordion({
  children,
  activeKeys,
  onSelect,
  ...props
}: Props) {
  const contextValue = { activeKeys, onSelect }
  return (
    <AccordionContext.Provider value={contextValue}>
      <div {...props}>{children}</div>
    </AccordionContext.Provider>
  )
}
