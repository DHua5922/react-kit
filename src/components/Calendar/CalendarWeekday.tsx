import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
  flex: 1;
  text-align: center;
  font-size: 1rem;
  color: #757575;
`

function CalendarWeekday({
  children,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return <Container {...props}>{children}</Container>
}

export default CalendarWeekday
