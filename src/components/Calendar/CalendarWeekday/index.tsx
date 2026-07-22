import styles from './index.module.css'
import { HTMLAttributes } from 'react'

export type CalendarWeekdayProps = HTMLAttributes<HTMLDivElement>

export default function CalendarWeekday({
  children,
  className = '',
  ...props
}: CalendarWeekdayProps) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {children}
    </div>
  )
}
