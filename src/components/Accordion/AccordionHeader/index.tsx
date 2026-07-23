import { ButtonHTMLAttributes, forwardRef, useContext } from 'react'
import AccordionContext from '../AccordionContext'
import AccordionItemContext from '../AccordionItemContext'
import styles from './index.module.css'

export type AccordionHeaderProps = ButtonHTMLAttributes<HTMLButtonElement>

const AccordionHeader = forwardRef<HTMLButtonElement, AccordionHeaderProps>(
  function AccordionHeader({ children, className = '', ...props }, ref) {
    const { activeKeys, onSelect } = useContext(AccordionContext)
    const { eventKey } = useContext(AccordionItemContext)
    const isExpanded = activeKeys.includes(eventKey)
    const defaultClassName = `${styles.button} ${isExpanded ? styles.active : ''}`

    const handleClick = () => onSelect(eventKey)

    return (
      <button
        ref={ref}
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
)

export default AccordionHeader
