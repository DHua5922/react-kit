import CalendarContext from '../CalendarContext'
import { useContext, HTMLAttributes } from 'react'
import CalendarDay from '../CalendarDay'
import {
  addDays,
  eachDayOfInterval,
  endOfMonth,
  getDay,
  startOfMonth,
  subDays,
} from 'date-fns'
import styles from './index.module.css'

function getDatesInMonth(currentMonth: Date) {
  const firstDay = startOfMonth(currentMonth)
  const lastDay = endOfMonth(firstDay)
  const allDaysInMonth = eachDayOfInterval({ start: firstDay, end: lastDay })

  // Determine the weekday index of the first day of the month (0 for Sunday, 1 for Monday, etc.)
  const firstDayIndex = getDay(firstDay)

  // Determine the weekday index of the last day of the month
  const lastDayIndex = getDay(lastDay)

  // Calculate the number of days to add before and after the current month to complete the week
  const daysBefore = new Array(firstDayIndex)
    .fill(null)
    .map((_, index) => subDays(firstDay, firstDayIndex - index))
  const daysAfter = new Array(6 - lastDayIndex)
    .fill(null)
    .map((_, index) => addDays(lastDay, index + 1))

  // Concatenate the arrays with days before, days of the month, and days after
  return daysBefore.concat(allDaysInMonth, daysAfter)
}

export default function CalendarDays({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const { currentMonth } = useContext(CalendarContext)

  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {children || <DefaultCalendarDays currentMonth={currentMonth} />}
    </div>
  )
}

function DefaultCalendarDays({ currentMonth }: { currentMonth: Date }) {
  const daysInMonth = getDatesInMonth(currentMonth)
  return daysInMonth.map((date, index: number) => (
    <CalendarDay key={index} value={date} />
  ))
}
