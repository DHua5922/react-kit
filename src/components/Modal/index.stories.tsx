import type { Meta, StoryObj } from '@storybook/react'
import Modal from '.'
import LiveCodeBlock from '@/internal/LiveCodeBlock'

const liveCode = `function Example() {
  const [show, setShow] = React.useState(false)

  const handleOpen = () => {
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }

  return (
    <>
      <button type="button" onClick={handleOpen}>Open Modal</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
          <Modal.CloseButton />
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
