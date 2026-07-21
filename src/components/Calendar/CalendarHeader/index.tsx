import styles from './index.module.css'
import { HTMLProps } from 'react'

export default function CalendarHeader({
  children,
  className = '',
  ...props
}: HTMLProps<HTMLDivElement>) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {children}
    </div>
  )
}
