import styles from './index.module.css'
import { format } from 'date-fns'
import { forwardRef, useContext, HTMLAttributes } from 'react'
import CalendarContext from '../CalendarContext'

export type CalendarTitleProps = HTMLAttributes<HTMLDivElement>

const CalendarTitle = forwardRef<HTMLDivElement, CalendarTitleProps>(
  function CalendarTitle({ children, className = '', ...props }, ref) {
    const { currentMonth } = useContext(CalendarContext)
    return (
      <div ref={ref} className={`${styles.container} ${className}`} {...props}>
        {children || format(currentMonth, 'MMMM yyyy')}
      </div>
    )
  }
)

export default CalendarTitle
