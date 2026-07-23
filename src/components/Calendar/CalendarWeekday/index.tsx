import styles from './index.module.css'
import { forwardRef, HTMLAttributes } from 'react'

export type CalendarWeekdayProps = HTMLAttributes<HTMLDivElement>

const CalendarWeekday = forwardRef<HTMLDivElement, CalendarWeekdayProps>(
  function CalendarWeekday({ children, className = '', ...props }, ref) {
    return (
      <div ref={ref} className={`${styles.container} ${className}`} {...props}>
        {children}
      </div>
    )
  }
)

export default CalendarWeekday
