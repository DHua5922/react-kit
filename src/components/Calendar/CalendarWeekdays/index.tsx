import { HTMLAttributes } from 'react'
import CalendarWeekday from '../CalendarWeekday'
import styles from './index.module.css'

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export default function CalendarWeekdays({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {children ||
        weekdays.map((weekday) => (
          <CalendarWeekday key={weekday}>{weekday}</CalendarWeekday>
        ))}
    </div>
  )
}
