import styles from './index.module.css'
import { HTMLProps, useContext, CSSProperties } from 'react'
import CalendarContext from '../CalendarContext'
import { format, isSameMonth } from 'date-fns'

interface Props extends Omit<HTMLProps<HTMLDivElement>, 'value' | 'onClick'> {
  value: Date
  onClick?: (value: Date) => void
  textStyle?: CSSProperties
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
  textStyle,
  style,
  ...props
}: Props) {
  const { isChosen, isInCurrentMonth, handleDayNumberClick } = useCalendarDay(
    value,
    onClick
  )

  const numberContainerStyle = {
    backgroundColor: isInCurrentMonth && isChosen ? '#0d6efd' : 'transparent',
    ...style,
  }

  const numberTextStyle = {
    color: isChosen && isInCurrentMonth ? '#ffffff' : '#000000',
    opacity: isInCurrentMonth ? 1 : 0.25,
    ...textStyle,
  }

  return (
    <div className={`${styles.container} ${className}`}>
      <div
        className={styles.number}
        {...props}
        onClick={handleDayNumberClick}
        style={numberContainerStyle}
      >
        <div style={numberTextStyle}>{children || format(value, 'd')}</div>
      </div>
    </div>
  )
}
