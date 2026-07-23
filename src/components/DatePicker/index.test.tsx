import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act, useState } from 'react'
import { vi } from 'vitest'
import DatePicker from '.'
import Calendar from '../Calendar'
import type { CalendarProps } from '../Calendar'

const currentDate = new Date()

describe('DatePicker', () => {
  it('positions the popup below the toggle', async () => {
    const user = userEvent.setup()

    renderDatePicker()

    const toggle = screen.getByRole('button', { name: 'Open Calendar' })
    vi.spyOn(toggle, 'getBoundingClientRect').mockReturnValue({
      bottom: 140,
      left: 24,
    } as DOMRect)

    await act(() => user.click(toggle))

    const popup = screen.getByTestId('date-picker-popup')
    expect(popup.style.getPropertyValue('--top')).toBe('140px')
    expect(popup.style.getPropertyValue('--left')).toBe('24px')
  })

  it('keeps the popup below the toggle while scrolling', async () => {
    const user = userEvent.setup()
    let bottom = 140

    renderDatePicker()

    const toggle = screen.getByRole('button', { name: 'Open Calendar' })
    vi.spyOn(toggle, 'getBoundingClientRect').mockImplementation(
      () =>
        ({
          bottom,
          left: 24,
        }) as DOMRect
    )

    await act(() => user.click(toggle))

    const popup = screen.getByTestId('date-picker-popup')
    bottom = 80
    fireEvent.scroll(window)

    expect(popup.style.getPropertyValue('--top')).toBe('80px')
    expect(popup.style.getPropertyValue('--left')).toBe('24px')
  })

  it('shows the calendar when the toggle is clicked and closes it after selecting a date', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()

    renderDatePicker({ value: currentDate, onChange })

    await act(() =>
      user.click(screen.getByRole('button', { name: 'Open Calendar' }))
    )
    expect(
      await screen.findByRole('button', { name: 'Previous month' })
    ).toBeInTheDocument()

    await act(() =>
      user.click(
        screen.getByRole('button', { name: currentDate.getDate().toString() })
      )
    )
    expect(
      screen.queryByRole('button', { name: 'Previous month' })
    ).not.toBeInTheDocument()
  })

  it('opens the calendar when the toggle is clicked and closes with Escape', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()

    renderDatePicker({ value: currentDate, onChange })

    await act(() =>
      user.click(screen.getByRole('button', { name: 'Open Calendar' }))
    )
    expect(
      screen.getByRole('button', { name: 'Previous month' })
    ).toBeInTheDocument()

    await act(() => user.keyboard('{Escape}'))
    expect(
      screen.queryByRole('button', { name: 'Previous month' })
    ).not.toBeInTheDocument()
  })

  it('keeps the calendar open while tabbing through', async () => {
    const user = userEvent.setup()

    renderDatePicker()

    await act(() =>
      user.click(screen.getByRole('button', { name: 'Open Calendar' }))
    )
    expect(
      screen.getByRole('button', { name: 'Open Calendar' })
    ).toBeInTheDocument()

    await act(() => user.keyboard('{Tab}'))
    expect(
      screen.getByRole('button', { name: 'Previous month' })
    ).toBeInTheDocument()
  })
})

function renderDatePicker(props: Partial<CalendarProps> = {}) {
  render(<TestDatePicker {...props} />)
}

function TestDatePicker({
  value = currentDate,
  onChange,
  ...props
}: Partial<CalendarProps>) {
  const [open, setOpen] = useState(false)

  const handleChange = (date: Date) => {
    onChange?.(date)
    setOpen(false)
  }

  return (
    <DatePicker open={open} onOpenChange={setOpen}>
      <DatePicker.Toggle>
        <button>Open Calendar</button>
      </DatePicker.Toggle>

      <DatePicker.Popup data-testid="date-picker-popup">
        <Calendar value={value} onChange={handleChange} {...props}>
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
  )
}
