import { describe, test, expect, vi } from 'vitest'
import Modal from '.'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { StrictMode } from 'react'

function renderModal(props = {}) {
  const onOpenChange = vi.fn()

  render(
    <Modal open onOpenChange={onOpenChange} {...props}>
      <Modal.Header>
        <Modal.Title>Modal Title</Modal.Title>
        <Modal.CloseButton />
      </Modal.Header>

      <Modal.Body>Modal body content goes here.</Modal.Body>

      <Modal.Footer>
        <button type="button" onClick={() => onOpenChange(false)}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  )

  return { onOpenChange }
}

describe('Modal', () => {
  test('shows modal when open is true', () => {
    renderModal()

    expect(screen.getByRole('dialog')).toHaveAttribute('open')
    expect(screen.getByText(/Modal Title/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Modal body content goes here./i)
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Close/i })).toBeInTheDocument()
  })

  test('closes modal when Escape key is pressed', () => {
    const { onOpenChange } = renderModal()

    fireEvent(
      screen.getByRole('dialog'),
      new Event('cancel', { cancelable: true })
    )

    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  test('closes modal when close button is clicked', async () => {
    const user = userEvent.setup()

    const { onOpenChange } = renderModal()

    await user.click(screen.getByRole('button', { name: /Close/i }))
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  test('opens the native dialog only once in Strict Mode', () => {
    const showModal = vi.spyOn(HTMLDialogElement.prototype, 'showModal')

    render(
      <StrictMode>
        <Modal open aria-label="Example modal" />
      </StrictMode>
    )

    expect(showModal).toHaveBeenCalledOnce()
    showModal.mockRestore()
  })
})
