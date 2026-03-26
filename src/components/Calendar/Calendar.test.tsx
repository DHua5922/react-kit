import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import Calendar from '.'

function renderCalendar(onChange = vi.fn(), value = new Date(2026, 2, 15)) {
  return render(
    <Calendar value={value} onChange={onChange}>
      <Calendar.Header style={{ justifyContent: 'space-between' }}>
        <Calendar.Left style={{ cursor: 'pointer' }} />
        <Calendar.Title />
        <Calendar.Right style={{ cursor: 'pointer' }} />
      </Calendar.Header>
      <Calendar.Weekdays />
      <Calendar.Days />
    </Calendar>
  )
}

describe('Calendar', () => {
  it('renders the current month title and weekday labels', () => {
    renderCalendar()

    expect(screen.getByText('March 2026')).toBeInTheDocument()
    expect(screen.getByText('Sun')).toBeInTheDocument()
    expect(screen.getByText('Sat')).toBeInTheDocument()
  })

  it('moves to the next month when the right control is clicked', async () => {
    const user = userEvent.setup()
    renderCalendar()

    await act(async () => {
      await user.click(screen.getByText('▶'))
    })

    expect(screen.getByText('April 2026')).toBeInTheDocument()
  })

  it('calls onChange with the selected date when a day is clicked', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()

    renderCalendar(onChange)

    await user.click(screen.getByText('15'))

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(new Date(2026, 2, 15))
  })
})
