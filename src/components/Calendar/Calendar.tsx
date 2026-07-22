import { format } from 'date-fns'
import CalendarContext from './CalendarContext'
import { forwardRef, useState, HTMLAttributes } from 'react'

export interface CalendarProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'value' | 'onChange'
> {
  value: Date
  onChange: (date: Date) => void
}

const Calendar = forwardRef<HTMLDivElement, CalendarProps>(function Calendar(
  { children, value, onChange, ...props },
  ref
) {
  const [currentMonth, setCurrentMonth] = useState(value)
  const contextValue = { value, onChange, currentMonth, setCurrentMonth }

  return (
    <CalendarContext.Provider value={contextValue}>
      <div ref={ref} key={format(currentMonth, 'yyyy-MM')} {...props}>
        {children}
      </div>
    </CalendarContext.Provider>
  )
})

export default Calendar
