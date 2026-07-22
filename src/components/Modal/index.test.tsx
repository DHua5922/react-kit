import { describe, test, expect, vi } from 'vitest'
import Modal from '.'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

function renderModal(props = {}) {
  const onHide = vi.fn()

  render(
    <Modal show={true} onHide={onHide} {...props}>
      <Modal.Header>
        <Modal.Title>Modal Title</Modal.Title>
        <Modal.CloseButton />
      </Modal.Header>

      <Modal.Body>Modal body content goes here.</Modal.Body>
      
      <Modal.Footer>
        <button type="button" onClick={onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  )

  return { onHide }
}

describe('Modal', () => {
  test('shows modal when show = true', () => {
    renderModal()

    expect(screen.getByRole('dialog')).toHaveAttribute('open')
    expect(screen.getByText(/Modal Title/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Modal body content goes here./i)
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Close/i })).toBeInTheDocument()
  })

  test('closes modal when Escape key is pressed', () => {
    const { onHide } = renderModal()

    fireEvent(
      screen.getByRole('dialog'),
      new Event('cancel', { cancelable: true })
    )

    expect(onHide).toHaveBeenCalledOnce()
  })

  test('closes modal when close button is clicked', async () => {
    const user = userEvent.setup()

    const { onHide } = renderModal()

    await user.click(screen.getByRole('button', { name: /Close/i }))
    expect(onHide).toHaveBeenCalledOnce()
  })
})
