import styles from './index.module.css'
import { ButtonHTMLAttributes, MouseEventHandler, useContext } from 'react'
import { forwardRef } from 'react'
import CalendarContext from '../CalendarContext'
import { format, isSameMonth } from 'date-fns'

export interface CalendarDayProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'value'
> {
  value: Date
}

function useCalendarDay(value: Date) {
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

  const selectDate = () => {
    if (isInCurrentMonth) {
      onChange(value)
    }
  }

  return {
    isChosen,
    isInCurrentMonth,
    selectDate,
  }
}

const CalendarDay = forwardRef<HTMLButtonElement, CalendarDayProps>(
  function CalendarDay(
    { className = '', children, value, onClick, disabled, style, ...props },
    ref
  ) {
    const { isChosen, isInCurrentMonth, selectDate } = useCalendarDay(value)

    const isDisabled = Boolean(disabled || !isInCurrentMonth)

    const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
      onClick?.(event)

      if (event.defaultPrevented) {
        return
      }

      selectDate()
    }

    const numberContainerStyle = {
      backgroundColor: isInCurrentMonth && isChosen ? '#0d6efd' : 'transparent',
      color: isChosen && isInCurrentMonth ? '#ffffff' : '#000000',
      opacity: isInCurrentMonth ? 1 : 0.25,
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      ...style,
    }

    return (
      <button
        ref={ref}
        type="button"
        className={`${styles.container} ${className}`}
        {...props}
        disabled={isDisabled}
        onClick={handleClick}
        style={numberContainerStyle}
      >
        {children ?? format(value, 'd')}
      </button>
    )
  }
)

export default CalendarDay
