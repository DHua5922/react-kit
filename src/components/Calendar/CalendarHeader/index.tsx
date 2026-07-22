import styles from './index.module.css'
import { forwardRef, HTMLAttributes } from 'react'

export type CalendarHeaderProps = HTMLAttributes<HTMLDivElement>

const CalendarHeader = forwardRef<HTMLDivElement, CalendarHeaderProps>(
  function CalendarHeader({ children, className = '', ...props }, ref) {
    return (
      <div
        ref={ref}
        className={`${styles.container} ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)

export default CalendarHeader
