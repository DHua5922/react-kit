import { HTMLAttributes, useContext } from 'react'
import AccordionContext from '../AccordionContext'
import AccordionItemContext from '../AccordionItemContext'
import styles from './index.module.css'

export default function AccordionHeader({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLButtonElement>) {
  const { activeKeys, onSelect } = useContext(AccordionContext)
  const { eventKey } = useContext(AccordionItemContext)
  const isExpanded = activeKeys.includes(eventKey)

  return (
    <button
      type="button"
      className={`${styles.button} ${isExpanded ? styles.active : ''} ${className}`}
      aria-expanded={isExpanded}
      onClick={() => onSelect(eventKey)}
      {...props}
    >
      {children}
    </button>
  )
}
