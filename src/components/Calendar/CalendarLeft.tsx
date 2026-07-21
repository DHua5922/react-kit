import { useContext, HTMLProps } from 'react'
import CalendarContext from './CalendarContext'
import { subMonths } from 'date-fns'

interface Props extends HTMLProps<HTMLDivElement> {
  onPress?: (date: Date) => void
}

export default function CalendarLeft({ children, onPress, ...props }: Props) {
  const { currentMonth, setCurrentMonth } = useContext(CalendarContext)

  const handleClick = () => {
    const newMonth = subMonths(currentMonth, 1)
    setCurrentMonth(newMonth)
    onPress && onPress(newMonth)
  }

  return (
    <div onClick={handleClick} {...props}>
      {children || <div>◀</div>}
    </div>
  )
}
