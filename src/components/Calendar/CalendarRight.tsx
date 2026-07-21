import { HTMLProps, useContext } from 'react'
import CalendarContext from './CalendarContext'
import { addMonths } from 'date-fns'

interface Props extends HTMLProps<HTMLDivElement> {
  onPress?: (date: Date) => void
}

export default function CalendarRight({ children, onPress, ...props }: Props) {
  const { currentMonth, setCurrentMonth } = useContext(CalendarContext)

  const handleClick = () => {
    const newMonth = addMonths(currentMonth, 1)
    setCurrentMonth(newMonth)
    onPress && onPress(newMonth)
  }

  return (
    <div onClick={handleClick} {...props}>
      {children || <div>▶</div>}
    </div>
  )
}
