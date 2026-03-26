import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`

function CalendarHeader({
  children,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return <Container {...props}>{children}</Container>
}

export default CalendarHeader
