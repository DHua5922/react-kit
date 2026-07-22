import { useContext, ButtonHTMLAttributes } from 'react'
import CalendarContext from '../CalendarContext'
import { subMonths } from 'date-fns'
import styles from './index.module.css'

export interface CalendarLeftProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onClick'
> {
  onClick?: (date: Date) => void
}

export default function CalendarLeft({
  children,
  onClick,
  className = '',
  ...props
}: CalendarLeftProps) {
  const { currentMonth, setCurrentMonth } = useContext(CalendarContext)

  const handleClick = () => {
    const newMonth = subMonths(currentMonth, 1)
    setCurrentMonth(newMonth)
    onClick && onClick(newMonth)
  }

  return (
    <button
      onClick={handleClick}
      className={`${styles.container} ${className}`}
      {...props}
    >
      {children || <div>◀</div>}
    </button>
  )
}
