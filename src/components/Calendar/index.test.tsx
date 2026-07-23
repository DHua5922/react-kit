import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react'
import { vi } from 'vitest'
import Calendar from '.'

const testDateValue = new Date(2026, 2, 15)

function renderCalendar(onChange = vi.fn(), value = testDateValue) {
  return render(
    <Calendar value={value} onChange={onChange}>
      <Calendar.Header>
        <Calendar.Left aria-label="Previous month" />
        <Calendar.Title />
        <Calendar.Right aria-label="Next month" />
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

  it('moves to the previous month when the left control is clicked', async () => {
    const user = userEvent.setup()

    renderCalendar()

    await act(() =>
      user.click(screen.getByRole('button', { name: 'Previous month' }))
    )
    expect(screen.getByText('February 2026')).toBeInTheDocument()
  })

  it('moves to the next month when the right control is clicked', async () => {
    const user = userEvent.setup()

    renderCalendar()

    await act(() =>
      user.click(screen.getByRole('button', { name: 'Next month' }))
    )
    expect(screen.getByText('April 2026')).toBeInTheDocument()
  })

  it('calls onChange with the selected date when a day is clicked', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()

    renderCalendar(onChange)

    await user.click(screen.getByText('15'))
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(testDateValue)
  })

  it('disables default days outside the displayed month', () => {
    renderCalendar()

    const disabledDays = screen
      .getAllByRole('button')
      .filter((button) => button.hasAttribute('disabled'))

    expect(disabledDays.length).toBeGreaterThan(0)
  })

  it('runs a native click handler without replacing month navigation', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()

    render(
      <Calendar value={testDateValue} onChange={vi.fn()}>
        <Calendar.Title />
        <Calendar.Left aria-label="Previous month" onClick={onClick} />
      </Calendar>
    )

    await act(() =>
      user.click(screen.getByRole('button', { name: 'Previous month' }))
    )

    expect(onClick).toHaveBeenCalledOnce()
    expect(onClick.mock.calls[0][0].nativeEvent).toBeInstanceOf(MouseEvent)
    expect(screen.getByText('February 2026')).toBeInTheDocument()
  })
})
