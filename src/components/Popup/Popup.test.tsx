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
    const { rerender } = renderPopup({ show: false })
    render(
      <Popup show={false} onHide={vi.fn()}>
        <div>Popup body</div>
      </Popup>
    )
    expect(screen.queryByText('Popup body')).not.toBeInTheDocument()

    rerender(
      <Popup show onHide={vi.fn()}>
        <div>Popup body</div>
      </Popup>
    )
    expect(screen.getByText('Popup body')).toBeInTheDocument()
  })

  it('calls onHide when Escape is pressed', async () => {
    const user = userEvent.setup()
    const onHide = vi.fn()

    render(
      <Popup show onHide={onHide}>
        <div>Dismiss me</div>
      </Popup>
    )

    await user.keyboard('{Escape}')
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

    await user.click(screen.getByRole('button', { name: 'Inside action' }))
    expect(onHide).not.toHaveBeenCalled()

    const overlay = screen
      .getByRole('button', { name: 'Inside action' })
      .closest('div')?.parentElement
    await user.click(overlay!)
    expect(onHide).toHaveBeenCalledTimes(1)
  })
})
