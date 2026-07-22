import { ButtonHTMLAttributes, useContext } from 'react'
import AccordionContext from '../AccordionContext'
import AccordionItemContext from '../AccordionItemContext'
import styles from './index.module.css'

export type AccordionHeaderProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function AccordionHeader({
  children,
  className = '',
  ...props
}: AccordionHeaderProps) {
  const { activeKeys, onSelect } = useContext(AccordionContext)
  const { eventKey } = useContext(AccordionItemContext)
  const isExpanded = activeKeys.includes(eventKey)
  const defaultClassName = `${styles.button} ${isExpanded ? styles.active : ''}`

  const handleClick = () => onSelect(eventKey)

  return (
    <button
      type="button"
      className={`${defaultClassName} ${className}`}
      aria-expanded={isExpanded}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  )
}
