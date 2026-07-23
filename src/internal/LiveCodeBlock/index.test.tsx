import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react'
import { vi } from 'vitest'
import LiveCodeBlock from '.'

describe('LiveCodeBlock', () => {
  it('renders the live editor chrome', async () => {
    await act(async () => {
      render(<LiveCodeBlock code={'<div>Hello live preview</div>'} />)
    })

    expect(screen.getByText(/Result/i)).toBeInTheDocument()
    expect(screen.getByText(/Code Editor/i)).toBeInTheDocument()
  })

  it('renders no-inline examples when they explicitly call render', async () => {
    await act(async () => {
      render(
        <LiveCodeBlock
          code={
            'function Example() { return <div>No inline works</div> }\nrender(<Example />)'
          }
          noInline
        />
      )
    })

    expect(
      await screen.findByText('No inline works', { selector: 'div' })
    ).toBeInTheDocument()
  })

  it('copies the editor code', async () => {
    const user = userEvent.setup()
    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    })

    await act(async () => {
      render(<LiveCodeBlock code={'<div>Copy me</div>'} />)
    })
    await user.click(screen.getByRole('button', { name: 'Copy code' }))

    expect(screen.getByRole('button', { name: 'Copied!' })).toBeInTheDocument()
    expect(writeText).toHaveBeenCalledWith('<div>Copy me</div>')
  })
})
