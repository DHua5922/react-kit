import { render, screen } from '@testing-library/react'
import CopyButton from '.'

const handleCopy = () => navigator.clipboard.writeText('<div>Copy me</div>')

const testCases = [
  { description: 'renders the copy button', copied: false },
  {
    description: 'renders the copied button',
    copied: true,
  },
]

describe('CopyButton', () => {
  testCases.forEach(({ description, copied }) => {
    it(description, async () => {
      render(<CopyButton copied={copied} onClick={handleCopy} />)

      const button = screen.getByRole('button', {
        name: copied ? 'Copied!' : 'Copy code',
      })
      expect(button).toBeInTheDocument()
    })
  })
})
