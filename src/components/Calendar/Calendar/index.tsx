import CalendarContext from '../CalendarContext'
import { forwardRef, useEffect, useState, HTMLAttributes } from 'react'
import styles from './index.module.css'

export interface CalendarProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'value' | 'onChange'
> {
  value: Date
  onChange: (date: Date) => void
}

const Calendar = forwardRef<HTMLDivElement, CalendarProps>(function Calendar(
  { children, value, onChange, className = '', ...props },
  ref
) {
  const [currentMonth, setCurrentMonth] = useState(value)
  const contextValue = { value, onChange, currentMonth, setCurrentMonth }

  useEffect(() => {
    setCurrentMonth(value)
  }, [value])

  return (
    <CalendarContext.Provider value={contextValue}>
      <div ref={ref} className={`${styles.container} ${className}`} {...props}>
        {children}
      </div>
    </CalendarContext.Provider>
  )
})

export default Calendar
