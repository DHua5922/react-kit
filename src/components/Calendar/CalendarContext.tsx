import { createContext } from 'react'

interface Type {
  value: Date
  onChange: (date: Date) => void
  currentMonth: Date
  setCurrentMonth: (date: Date) => void
}

const defaultValues: Type = {
  value: new Date(),
  onChange: () => {},
  currentMonth: new Date(),
  setCurrentMonth: () => {},
}

const CalendarContext = createContext<Type>(defaultValues)

export default CalendarContext
