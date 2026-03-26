import { act, render, screen } from '@testing-library/react'
import LiveCodeBlock from './LiveCodeBlock'

describe('LiveCodeBlock', () => {
  it('renders the live editor chrome', async () => {
    await act(async () => {
      render(
        <LiveCodeBlock code={'<div>Hello live preview</div>'} title="Play" />
      )
    })

    expect(screen.getByText('Play')).toBeInTheDocument()
    expect(screen.getByText(/Edit Code/)).toBeInTheDocument()
    expect(screen.getByText(/Live Preview/)).toBeInTheDocument()
  })

  it('renders no-inline examples when they explicitly call render', async () => {
    render(
      <LiveCodeBlock
        code={'function Example() { return <div>No inline works</div> }\nrender(<Example />)'}
        noInline
      />
    )

    expect(await screen.findByText('No inline works')).toBeInTheDocument()
  })
})
