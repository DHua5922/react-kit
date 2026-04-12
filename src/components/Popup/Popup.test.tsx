import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import Popup from './Popup'
import { act } from 'react'

describe('Popup', () => {
  it('renders portal content only when show is true', () => {
    const { rerender } = render(
      <Popup show={false} onHide={vi.fn()}>
        <div>Popup body</div>
      </Popup>
    )

    expect(screen.queryByText('Popup body')).not.toBeInTheDocument()

    rerender(
      <Popup show onHide={vi.fn()} left="24px" top="48px">
        <div>Popup body</div>
      </Popup>
    )

    const content = screen.getByText('Popup body')

    expect(content).toBeInTheDocument()
    expect(content.parentElement).toHaveStyle({
      left: '24px',
      top: '48px',
      position: 'absolute',
    })
  })

  it('calls onHide when Escape is pressed', async () => {
    const user = userEvent.setup()
    const onHide = vi.fn()

    render(
      <Popup show onHide={onHide}>
        <div>Dismiss me</div>
      </Popup>
    )

    await act(async () => {
      await user.keyboard('{Escape}')
    })

    expect(onHide).toHaveBeenCalledTimes(1)
  })

  it('calls onHide on outside click but not when clicking inside the popup', async () => {
    const user = userEvent.setup()
    const onHide = vi.fn()

    render(
      <Popup show onHide={onHide}>
        <button type="button">Inside action</button>
      </Popup>
    )

    await act(async () => {
      await user.click(screen.getByRole('button', { name: 'Inside action' }))
    })

    expect(onHide).not.toHaveBeenCalled()

    const overlay = screen
      .getByRole('button', { name: 'Inside action' })
      .closest('div')?.parentElement

    await act(async () => {
      if (!overlay) {
        throw new Error('Popup overlay not found')
      }

      await user.click(overlay)
    })

    expect(onHide).toHaveBeenCalledTimes(1)
  })
})
