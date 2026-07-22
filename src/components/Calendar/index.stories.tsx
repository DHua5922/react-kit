import type { Meta, StoryObj } from '@storybook/react'
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

const basicCalendarCode = `function Example() {
  const [value, setValue] = React.useState(new Date(2026, 2, 26))

  const containerStyle = {
    width: 360,
    padding: 20,
    border: '1px solid #e2e8f0',
    borderRadius: 16,
    background: '#ffffff',
    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.08)',
  }

  const headerStyle = {
    justifyContent: 'space-between'
  }

  const directionButtonStyle = {
    cursor: 'pointer'
  }

  const weekdaysStyle = {
    marginBottom: 12
  }

  const daysStyle = {
    flexWrap: 'wrap',
    rowGap: 12
  }

  return (
    <div style={containerStyle}>
      <Calendar value={value} onChange={setValue}>
        <Calendar.Header style={headerStyle}>
          <Calendar.Left style={directionButtonStyle}>
            ◀
          </Calendar.Left>

          <Calendar.Title />

          <Calendar.Right style={directionButtonStyle}>
            ▶
          </Calendar.Right>
        </Calendar.Header>

        <Calendar.Weekdays style={weekdaysStyle} />

        <Calendar.Days style={daysStyle} />
      </Calendar>
    </div>
  )
}

render(<Example />)`

const customCalendarCode = `
  function Example() {
    const [chosenDate, setChosenDate] = React.useState(new Date())
    const [currentMonth, setCurrentMonth] = React.useState(new Date())

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
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
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
        <Calendar value={chosenDate} onChange={(date) => setChosenDate(date)}>
          <Calendar.Header>
            <Calendar.Left
              onPress={() => setCurrentMonth(subMonths(currentMonth, 1))}
            >
              ◀
            </Calendar.Left>

            <Calendar.Title>
              {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </Calendar.Title>

            <Calendar.Right
              onPress={() => setCurrentMonth(addMonths(currentMonth, 1))}
            >
              ▶
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
                  onClick={(date) => setChosenDate(date)}
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
      </div>
    )
  }

  render(<Example />)`

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    value: new Date(2026, 2, 26),
    onChange: () => {},
  },
} satisfies Meta<typeof Calendar>

export default meta

type Story = StoryObj<typeof meta>

export const BasicCalendar: Story = {
  tags: ['!dev'],
  render: () => (
    <LiveCodeBlock code={basicCalendarCode} noInline scope={{ Calendar }} />
  ),
}

export const CustomCalendar: Story = {
  tags: ['!dev'],
  render: () => (
    <LiveCodeBlock
      code={customCalendarCode}
      noInline
      scope={{
        Calendar,
        addDays,
        addMonths,
        endOfMonth,
        eachDayOfInterval,
        getDay,
        isSameMonth,
        startOfMonth,
        subDays,
        subMonths,
      }}
    />
  ),
}
