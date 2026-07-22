import { format } from 'date-fns'
import CalendarContext from './CalendarContext'
import { useState, HTMLAttributes } from 'react'

interface Props extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'value' | 'onChange'
> {
  value: Date
  onChange: (date: Date) => void
}

export default function Calendar({
  children,
  value,
  onChange,
  ...props
}: Props) {
  const [currentMonth, setCurrentMonth] = useState(value)
  const contextValue = {
    value,
    onChange,
    currentMonth,
    setCurrentMonth,
  }

  return (
    <CalendarContext.Provider value={contextValue}>
      <div key={format(currentMonth, 'yyyy-MM')} {...props}>
        {children}
      </div>
    </CalendarContext.Provider>
  )
}
