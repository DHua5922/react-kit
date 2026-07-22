import styles from './index.module.css'
import { format } from 'date-fns'
import { useContext, HTMLAttributes } from 'react'
import CalendarContext from '../CalendarContext'

export type CalendarTitleProps = HTMLAttributes<HTMLDivElement>

export default function CalendarTitle({
  children,
  className = '',
  ...props
}: CalendarTitleProps) {
  const { currentMonth } = useContext(CalendarContext)
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {children || format(currentMonth, 'MMMM yyyy')}
    </div>
  )
}
