import styles from './index.module.css'
import { format } from 'date-fns'
import { useContext, HTMLAttributes } from 'react'
import CalendarContext from '../CalendarContext'

export default function CalendarTitle({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const { currentMonth } = useContext(CalendarContext)
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {children || format(currentMonth, 'MMMM yyyy')}
    </div>
  )
}
