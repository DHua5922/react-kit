import type { Meta, StoryObj } from '@storybook/react'
import DatePicker from '.'
import Calendar from '../Calendar'
import LiveCodeBlock from '@/internal/LiveCodeBlock'

const liveCode = `function Example() {
  const [date, setDate] = React.useState(new Date())
  const [open, setOpen] = React.useState(false)

  const onChangeDate = (newDate: Date) => {
    setDate(newDate)
    setOpen(false)
  }

  const calendarStyle = {
    maxWidth: 360,
    width: '100%',
  }

  return (
    <div>
      <p>
        Selected: {date.toDateString()}
      </p>

      <DatePicker open={open} onOpenChange={setOpen}>
        <DatePicker.Toggle aria-haspopup="dialog">
          Open calendar
        </DatePicker.Toggle>

        <DatePicker.Popup role="dialog" aria-label="Choose a date">
          <Calendar value={date} onChange={onChangeDate} style={calendarStyle}>
            <Calendar.Header>
              <Calendar.Left aria-label="Previous month">◀</Calendar.Left>
              <Calendar.Title />
              <Calendar.Right aria-label="Next month">▶</Calendar.Right>
            </Calendar.Header>

            <Calendar.Weekdays />

            <Calendar.Days />
          </Calendar>
        </DatePicker.Popup>
      </DatePicker>
    </div>
  )
}

render(<Example />)`

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
  args: {
    open: false,
    onOpenChange: () => {},
  },
} satisfies Meta<typeof DatePicker>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  tags: ['!dev'],
  args: {
    open: false,
    onOpenChange: () => {},
  },
  render: () => (
    <LiveCodeBlock code={liveCode} noInline scope={{ DatePicker, Calendar }} />
  ),
}
