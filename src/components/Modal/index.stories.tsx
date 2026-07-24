import type { Meta, StoryObj } from '@storybook/react'
import Modal from '.'
import LiveCodeBlock from '@/internal/LiveCodeBlock'

const liveCode = `function Example() {
  const [open, setOpen] = React.useState(false)
  const titleId = 'example-modal-title'

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <button type="button" onClick={handleOpen}>Open Modal</button>

      <Modal open={open} onOpenChange={setOpen} aria-labelledby={titleId}>
        <Modal.Header>
          <Modal.Title id={titleId}>Modal Title</Modal.Title>
          <Modal.CloseButton aria-label="Close modal" />
        </Modal.Header>

        <Modal.Body>
          Modal body content goes here.
        </Modal.Body>

        <Modal.Footer>
          <button type="button" onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

render(<Example />)`

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  tags: ['!dev'],
  render: () => <LiveCodeBlock code={liveCode} noInline scope={{ Modal }} />,
}
