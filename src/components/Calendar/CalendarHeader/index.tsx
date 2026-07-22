import styles from './index.module.css'
import { HTMLAttributes } from 'react'

export type CalendarHeaderProps = HTMLAttributes<HTMLDivElement>

export default function CalendarHeader({
  children,
  className = '',
  ...props
}: CalendarHeaderProps) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {children}
    </div>
  )
}
