import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import Calendar from '.'
import LiveCodeBlock from '@/internal/LiveCodeBlock'
import {
  addDays,
  addMonths,
  endOfMonth,
  eachDayOfInterval,
  getDay,
  isSameMonth,
  startOfMonth,
  subDays,
  subMonths,
} from 'date-fns'

const calendarCode = `function Example() {
  const [value, setValue] = React.useState(new Date(2026, 2, 26))

  return (
    <div
      style={{
        width: 360,
        padding: 20,
        border: '1px solid #e2e8f0',
        borderRadius: 16,
        background: '#ffffff',
        boxShadow: '0 10px 30px rgba(15, 23, 42, 0.08)',
      }}
    >
      <Calendar value={value} onChange={setValue}>
        <Calendar.Header style={{ justifyContent: 'space-between' }}>
          <Calendar.Left style={{ cursor: 'pointer' }}>◀</Calendar.Left>
          <Calendar.Title />
          <Calendar.Right style={{ cursor: 'pointer' }}>▶</Calendar.Right>
        </Calendar.Header>
        <Calendar.Weekdays style={{ marginBottom: 12 }} />
        <Calendar.Days style={{ flexWrap: 'wrap', rowGap: 12 }} />
      </Calendar>
    </div>
  )
}

render(<Example />)`

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Calendar>

export default meta

type Story = StoryObj<typeof meta>

export const BasicCalendar: Story = {
  args: {
    value: new Date(2026, 2, 26),
    onChange: () => {},
  },
  render: function DefaultRender() {
    const [value, setValue] = React.useState(new Date(2026, 2, 26))

    return (
      <Calendar value={value} onChange={setValue}>
        <Calendar.Header style={{ justifyContent: 'space-between' }}>
          <Calendar.Left style={{ cursor: 'pointer' }} />
          <Calendar.Title />
          <Calendar.Right style={{ cursor: 'pointer' }} />
        </Calendar.Header>
        <Calendar.Weekdays style={{ marginBottom: 12 }} />
        <Calendar.Days style={{ flexWrap: 'wrap', rowGap: 12 }} />
      </Calendar>
    )
  },
}

export const CustomCalendar: Story = {
  args: {
    value: new Date(2026, 2, 26),
    onChange: () => {},
  },
  render: function Example() {
    const [chosenDate, setChosenDate] = useState(new Date())
    const [currentMonth, setCurrentMonth] = useState(new Date())

    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const weekdays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]

    function getDatesInMonth() {
      const firstDay = startOfMonth(currentMonth)
      const lastDay = endOfMonth(firstDay)
      const allDaysInMonth = eachDayOfInterval({
        start: firstDay,
        end: lastDay,
      })

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

    return (
      <Calendar value={chosenDate} onChange={(date) => setChosenDate(date)}>
        <Calendar.Header>
          <Calendar.Left
            onPress={() => setCurrentMonth(subMonths(currentMonth, 1))}
          >
            {'<'}
          </Calendar.Left>

          <Calendar.Title>
            {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </Calendar.Title>

          <Calendar.Right
            onPress={() => setCurrentMonth(addMonths(currentMonth, 1))}
          >
            {'>'}
          </Calendar.Right>
        </Calendar.Header>

        <Calendar.Weekdays>
          {weekdays.map((weekday) => (
            <Calendar.Weekday key={weekday}>{weekday}</Calendar.Weekday>
          ))}
        </Calendar.Weekdays>

        <Calendar.Days>
          {getDatesInMonth().map((date) => {
            const isChosen =
              chosenDate &&
              chosenDate.getFullYear() === date.getFullYear() &&
              chosenDate.getMonth() === date.getMonth() &&
              chosenDate.getDate() === date.getDate()

            return (
              <Calendar.Day
                value={date}
                onClick={(date: Date) => setChosenDate(date)}
                key={date.toISOString()}
                style={{
                  backgroundColor:
                    isSameMonth(date, currentMonth) && isChosen
                      ? 'lightblue'
                      : 'transparent',
                }}
                textStyle={{ color: '#000000' }}
              >
                {date.getDate()}
              </Calendar.Day>
            )
          })}
        </Calendar.Days>
      </Calendar>
    )
  },
}

export const LiveExample: Story = {
  args: {
    value: new Date(2026, 2, 26),
    onChange: () => {},
  },
  parameters: {
    layout: 'padded',
    docs: {
      source: {
        code: calendarCode,
      },
    },
  },
  render: () => (
    <div style={{ maxWidth: 1080, margin: '0 auto' }}>
      <LiveCodeBlock
        title="Calendar Live Playground"
        code={calendarCode}
        editorHeight="360px"
        noInline
        scope={{ Calendar }}
      />
    </div>
  ),
}
