import React, { useContext } from 'react'
import CalendarContext from './CalendarContext'
import { addMonths } from 'date-fns'

interface Props extends React.HTMLProps<HTMLDivElement> {
  onPress?: (date: Date) => void
}

function CalendarRight({ children, onPress, ...props }: Props) {
  const { currentMonth, setCurrentMonth } = useContext(CalendarContext)

  return (
    <div
      onClick={() => {
        const newMonth = addMonths(currentMonth, 1)
        setCurrentMonth(newMonth)
        onPress && onPress(newMonth)
      }}
      {...props}
    >
      {children || <div>▶</div>}
    </div>
  )
}

export default CalendarRight
