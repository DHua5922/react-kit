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
        <DatePicker.Toggle>
          <button>Open menu</button>
        </DatePicker.Toggle>

        <DatePicker.Popup>
          <Calendar value={date} onChange={onChangeDate} style={calendarStyle}>
            <Calendar.Header>
              <Calendar.Left>◀</Calendar.Left>
              <Calendar.Title />
              <Calendar.Right>▶</Calendar.Right>
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
