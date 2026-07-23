import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import Popup from '.'
import { ComponentProps } from 'react'

function renderPopup({ children, ...props }: ComponentProps<typeof Popup>) {
  const renderResult = render(
    <Popup {...props}>{children || <div>Popup body</div>}</Popup>
  )

  return renderResult
}

describe('Popup', () => {
  it('renders portal content only when show is true', () => {
    renderPopup({ show: false, onHide: vi.fn() })
    expect(screen.queryByText('Popup body')).not.toBeInTheDocument()

    renderPopup({ show: true, onHide: vi.fn() })
    expect(screen.getByText('Popup body')).toBeInTheDocument()
  })

  it('calls onHide when Escape is pressed', async () => {
    const user = userEvent.setup()
    const onHide = vi.fn()

    renderPopup({
      show: true,
      onHide,
    })

    await user.keyboard('{Escape}')
    expect(onHide).toHaveBeenCalledTimes(1)
  })

  it('calls onHide on outside click but not when clicking inside the popup', async () => {
    const user = userEvent.setup()
    const onHide = vi.fn()

    renderPopup({
      show: true,
      onHide,
      children: <button type="button">Inside action</button>,
    })

    await user.click(screen.getByRole('button', { name: 'Inside action' }))
    expect(onHide).not.toHaveBeenCalled()

    const overlay = screen
      .getByRole('button', { name: 'Inside action' })
      .closest('div')?.parentElement
    await user.click(overlay!)
    expect(onHide).toHaveBeenCalledTimes(1)
  })

  it('merges consumer styles with popup positioning', () => {
    renderPopup({
      show: true,
      left: '12px',
      top: '24px',
      style: { color: 'red' },
    })

    const popup = screen.getByText('Popup body').parentElement!

    expect(popup.style.color).toBe('red')
    expect(popup.style.getPropertyValue('--left')).toBe('12px')
    expect(popup.style.getPropertyValue('--top')).toBe('24px')
  })
})
