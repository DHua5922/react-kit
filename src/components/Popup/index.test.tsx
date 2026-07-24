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
  it('renders portal content only when open is true', () => {
    renderPopup({ open: false, onOpenChange: vi.fn() })
    expect(screen.queryByText('Popup body')).not.toBeInTheDocument()

    renderPopup({ open: true, onOpenChange: vi.fn() })
    expect(screen.getByText('Popup body')).toBeInTheDocument()
  })

  it('requests closing when Escape is pressed', async () => {
    const user = userEvent.setup()
    const onOpenChange = vi.fn()

    renderPopup({
      open: true,
      onOpenChange,
    })

    await user.keyboard('{Escape}')
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it('requests closing on outside click but not when clicking inside', async () => {
    const user = userEvent.setup()
    const onOpenChange = vi.fn()

    renderPopup({
      open: true,
      onOpenChange,
      children: <button type="button">Inside action</button>,
    })

    await user.click(screen.getByRole('button', { name: 'Inside action' }))
    expect(onOpenChange).not.toHaveBeenCalled()

    const overlay = screen
      .getByRole('button', { name: 'Inside action' })
      .closest('div')?.parentElement
    await user.click(overlay!)
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it('merges consumer styles with popup positioning', () => {
    renderPopup({
      open: true,
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
