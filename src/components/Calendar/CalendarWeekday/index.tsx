import styles from './index.module.css'
import { HTMLAttributes } from 'react'

export default function CalendarWeekday({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {children}
    </div>
  )
}
