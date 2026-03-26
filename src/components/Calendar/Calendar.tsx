import { format } from 'date-fns'
import CalendarContext from './CalendarContext'
import React, { useState } from 'react'

interface Props extends Omit<React.HTMLProps<HTMLDivElement>, 'value' | 'onChange'> {
  value: Date
  onChange: (date: Date) => void
}

function Calendar({ children, value, onChange, ...props }: Props) {
  const [currentMonth, setCurrentMonth] = useState(value)

  return (
    <CalendarContext.Provider
      value={{
        value,
        onChange,
        currentMonth,
        setCurrentMonth,
      }}
    >
      <div key={format(currentMonth, 'yyyy-MM')} {...props}>
        {children}
      </div>
    </CalendarContext.Provider>
  )
}

export default Calendar
