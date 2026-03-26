import styled from 'styled-components'
import { format } from 'date-fns'
import React, { useContext } from 'react'
import CalendarContext from './CalendarContext'

const Container = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 16px;
`

function CalendarTitle({
  children,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  const { currentMonth } = useContext(CalendarContext)
  return (
    <Container {...props}>
      {children || format(currentMonth, 'MMMM yyyy')}
    </Container>
  )
}

export default CalendarTitle
