import styles from './index.module.css'
import { ButtonHTMLAttributes, useContext } from 'react'
import CalendarContext from '../CalendarContext'
import { format, isSameMonth } from 'date-fns'

export interface CalendarDayProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'value' | 'onClick'
> {
  value: Date
  onClick?: (value: Date) => void
}

function useCalendarDay(value: Date, onClick?: (value: Date) => void) {
  const {
    currentMonth,
    value: chosenDate,
    onChange,
  } = useContext(CalendarContext)

  const isChosen =
    chosenDate &&
    chosenDate.getFullYear() === value.getFullYear() &&
    chosenDate.getMonth() === value.getMonth() &&
    chosenDate.getDate() === value.getDate()

  const isInCurrentMonth = isSameMonth(value, currentMonth)

  const handleDayNumberClick = () => {
    if (isInCurrentMonth) {
      onChange(value)
      onClick && onClick(value)
    }
  }

  return {
    isChosen,
    isInCurrentMonth,
    handleDayNumberClick,
  }
}

export default function CalendarDay({
  className = '',
  children,
  value,
  onClick,
  style,
  ...props
}: CalendarDayProps) {
  const { isChosen, isInCurrentMonth, handleDayNumberClick } = useCalendarDay(
    value,
    onClick
  )

  const numberContainerStyle = {
    backgroundColor: isInCurrentMonth && isChosen ? '#0d6efd' : 'transparent',
    color: isChosen && isInCurrentMonth ? '#ffffff' : '#000000',
    opacity: isInCurrentMonth ? 1 : 0.25,
    cursor: !isChosen ? 'pointer' : 'default',
    ...style,
  }

  return (
    <div className={`${styles.container} ${className}`}>
      <button
        className={styles.number}
        {...props}
        onClick={handleDayNumberClick}
        style={numberContainerStyle}
      >
        {children || format(value, 'd')}
      </button>
    </div>
  )
}
