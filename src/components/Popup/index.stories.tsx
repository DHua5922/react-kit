import type { Meta, StoryObj } from '@storybook/react'
import Popup from '.'
import LiveCodeBlock from '@/internal/LiveCodeBlock'

const liveCode = `function Example() {
  const [open, setOpen] = React.useState(false)
  
  const containerStyle = {
    minHeight: 260,
    padding: 32,
    background: '#f8fafc'
  }

  const buttonStyle = {
    padding: '10px 14px',
    borderRadius: 10,
    border: '1px solid #cbd5e1',
    background: '#ffffff',
    cursor: 'pointer',
  }

  const popupContentStyle = {
    width: 240,
    padding: 16,
    borderRadius: 12,
    background: '#ffffff',
    boxShadow: '0 12px 32px rgba(15, 23, 42, 0.16)',
  }

  const onOpenPopup = () => {
    setOpen(true)
  }

  return (
    <div style={containerStyle}>
      <button
        type="button"
        onClick={onOpenPopup}
        style={buttonStyle}
      >
        Open popup
      </button>

      <Popup
        open={open}
        onOpenChange={setOpen}
        left="32px"
        top="88px"
      >
        <div style={popupContentStyle}>
          Popup content rendered through a portal.
        </div>
      </Popup>
    </div>
  )
}

render(<Example />)`

const meta = {
  title: 'Components/Popup',
  component: Popup,
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Popup>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  tags: ['!dev'],
  render: () => <LiveCodeBlock code={liveCode} noInline scope={{ Popup }} />,
}
