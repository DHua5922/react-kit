import { forwardRef, HTMLAttributes } from 'react'
import CalendarWeekday from '../CalendarWeekday'
import styles from './index.module.css'

export type CalendarWeekdaysProps = HTMLAttributes<HTMLDivElement>

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const CalendarWeekdays = forwardRef<HTMLDivElement, CalendarWeekdaysProps>(
  function CalendarWeekdays({ children, className = '', ...props }, ref) {
    return (
      <div
        ref={ref}
        className={`${styles.container} ${className}`}
        {...props}
      >
        {children ||
          weekdays.map((weekday) => (
            <CalendarWeekday key={weekday}>{weekday}</CalendarWeekday>
          ))}
      </div>
    )
  }
)

export default CalendarWeekdays
