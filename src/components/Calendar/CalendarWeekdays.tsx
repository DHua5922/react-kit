import React from 'react'
import CalendarWeekday from './CalendarWeekday'
import styled from 'styled-components'

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const Row = styled.div`
  display: flex;
`

function CalendarWeekdays({
  children,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <Row {...props}>
      {children ||
        weekdays.map((weekday) => (
          <CalendarWeekday key={weekday}>{weekday}</CalendarWeekday>
        ))}
    </Row>
  )
}

export default CalendarWeekdays
