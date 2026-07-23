import CalendarParent from './Calendar'
import CalendarDay from './CalendarDay'
import CalendarDays from './CalendarDays'
import CalendarHeader from './CalendarHeader'
import CalendarLeft from './CalendarLeft'
import CalendarRight from './CalendarRight'
import CalendarTitle from './CalendarTitle'
import CalendarWeekday from './CalendarWeekday'
import CalendarWeekdays from './CalendarWeekdays'

export type { CalendarProps } from './Calendar'
export type { CalendarDayProps } from './CalendarDay'
export type { CalendarDaysProps } from './CalendarDays'
export type { CalendarHeaderProps } from './CalendarHeader'
export type { CalendarLeftProps } from './CalendarLeft'
export type { CalendarRightProps } from './CalendarRight'
export type { CalendarTitleProps } from './CalendarTitle'
export type { CalendarWeekdayProps } from './CalendarWeekday'
export type { CalendarWeekdaysProps } from './CalendarWeekdays'

const Calendar = Object.assign(CalendarParent, {
  Day: CalendarDay,
  Days: CalendarDays,
  Header: CalendarHeader,
  Left: CalendarLeft,
  Right: CalendarRight,
  Title: CalendarTitle,
  Weekday: CalendarWeekday,
  Weekdays: CalendarWeekdays,
})

export default Calendar
