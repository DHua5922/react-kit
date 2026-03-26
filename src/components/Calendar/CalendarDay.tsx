import styled from 'styled-components'
import Center from '../Center'
import React, { useContext } from 'react'
import CalendarContext from './CalendarContext'
import { format, isSameMonth } from 'date-fns'

interface Props extends Omit<
  React.HTMLProps<HTMLDivElement>,
  'value' | 'onClick'
> {
  value: Date
  onClick?: (value: Date) => void
  textStyle?: React.CSSProperties
}

interface DayNumberProps {
  $backgroundColor: string
}

interface DayValueProps {
  $color: string
  $opacity: number
}

const DayContainer = styled(Center)`
  width: 14.28%;
`
const DayNumber = styled.div<DayNumberProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props: DayNumberProps) => props.$backgroundColor};
  padding: 8px;
`
const DayValue = styled.div<DayValueProps>`
  color: ${(props: DayValueProps) => props.$color};
  opacity: ${(props: DayValueProps) => props.$opacity};
`
const Day = Object.assign(DayContainer, { Number: DayNumber, Value: DayValue })

function CalendarDay({ children, value, onClick, textStyle, ...props }: Props) {
  const {
    currentMonth,
    value: chosenDate,
    onChange,
  } = useContext(CalendarContext)

  const isChosen =
    chosenDate &&
    chosenDate.getFullYear() === value.getFullYear() &&
    chosenDate.getMonth() === value.getMonth() &&
    chosenDate.getDate() === value.getDate()

  const isInCurrentMonth = isSameMonth(value, currentMonth)

  return (
    <Day>
      <Day.Number
        $backgroundColor={
          isInCurrentMonth && isChosen ? '#0d6efd' : 'transparent'
        }
        onClick={() => {
          if (isInCurrentMonth) {
            onChange(value)
            onClick && onClick(value)
          }
        }}
        {...props}
      >
        <Day.Value
          $color={isChosen && isInCurrentMonth ? '#ffffff' : '#000000'}
          $opacity={isInCurrentMonth ? 1 : 0.25}
          style={textStyle}
        >
          {children || format(value, 'd')}
        </Day.Value>
      </Day.Number>
    </Day>
  )
}

export default CalendarDay
