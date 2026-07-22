import { forwardRef, useContext, type HTMLAttributes } from 'react'
import AccordionContext from '../AccordionContext'
import AccordionItemContext from '../AccordionItemContext'
import styles from './index.module.css'

export type AccordionBodyProps = HTMLAttributes<HTMLDivElement>

const AccordionBody = forwardRef<HTMLDivElement, AccordionBodyProps>(
  function AccordionBody({ children, className = '', ...props }, ref) {
    const { activeKeys } = useContext(AccordionContext)
    const { eventKey } = useContext(AccordionItemContext)
    const isExpanded = activeKeys.includes(eventKey)
    const defaultClassName = `${styles.container} ${isExpanded ? styles.expanded : ''}`

    return (
      <div
        ref={ref}
        className={`${defaultClassName} ${className}`}
        aria-hidden={!isExpanded}
        {...props}
      >
        <div className={styles['container--inner']}>{children}</div>
      </div>
    )
  }
)

export default AccordionBody
