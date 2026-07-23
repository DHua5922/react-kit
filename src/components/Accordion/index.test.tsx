import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import Accordion from '.'
import userEvent from '@testing-library/user-event'

describe('Accordion', () => {
  it('collapses the body when its key is not active', () => {
    renderAccordion(false)

    expect(screen.getByRole('button', { name: 'Header' })).toHaveAttribute(
      'aria-expanded',
      'false'
    )
    expect(screen.getByText('Body').parentElement).toHaveAttribute(
      'aria-hidden',
      'true'
    )
    expect(screen.getByText('Body').parentElement).toHaveAttribute('inert')
  })

  it('expands the body when its key is active', () => {
    renderAccordion(true)

    expect(screen.getByRole('button', { name: 'Header' })).toHaveAttribute(
      'aria-expanded',
      'true'
    )
    expect(screen.getByText('Body').parentElement).toHaveAttribute(
      'aria-hidden',
      'false'
    )
    expect(screen.getByText('Body').parentElement).not.toHaveAttribute('inert')
  })

  it('reports the selected item key when its header is clicked', async () => {
    const onSelect = vi.fn()
    const user = userEvent.setup()

    renderAccordion(false, onSelect)

    await user.click(screen.getByRole('button', { name: 'Header' }))

    expect(onSelect).toHaveBeenCalledOnce()
    expect(onSelect).toHaveBeenCalledWith('0')
  })
})

function renderAccordion(
  expanded: boolean,
  onSelect: (key: string) => void = vi.fn()
) {
  return render(
    <Accordion activeKeys={expanded ? ['0'] : []} onSelect={onSelect}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Header</Accordion.Header>
        <Accordion.Body>Body</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
