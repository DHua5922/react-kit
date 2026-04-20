import type { Meta, StoryObj } from '@storybook/react'
import Popup from './Popup'
import LiveCodeBlock from '@/internal/LiveCodeBlock'

const liveCode = `function Example() {
  const [show, setShow] = React.useState(false)

  return (
    <div style={{ minHeight: 260, padding: 32, background: '#f8fafc' }}>
      <button
        type="button"
        onClick={() => setShow(true)}
        style={{
          padding: '10px 14px',
          borderRadius: 10,
          border: '1px solid #cbd5e1',
          background: '#ffffff',
          cursor: 'pointer',
        }}
      >
        Open popup
      </button>

      <Popup
        show={show}
        onHide={() => setShow(false)}
        left="32px"
        top="88px"
      >
        <div
          style={{
            width: 240,
            padding: 16,
            borderRadius: 12,
            background: '#ffffff',
            boxShadow: '0 12px 32px rgba(15, 23, 42, 0.16)',
          }}
        >
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
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    show: true,
    left: '32px',
    top: '88px',
    children: (
      <div
        style={{
          width: 220,
          padding: 16,
          borderRadius: 12,
          background: '#ffffff',
          boxShadow: '0 12px 32px rgba(15, 23, 42, 0.16)',
        }}
      >
        Popup content
      </div>
    ),
    onHide: () => {},
  },
} satisfies Meta<typeof Popup>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  parameters: {
    docs: {
      source: {
        code: liveCode,
      },
    },
  },
  render: () => (
    <div style={{ maxWidth: 1080, margin: '0 auto' }}>
      <LiveCodeBlock
        title="Popup Live Playground"
        code={liveCode}
        editorHeight="340px"
        noInline
        scope={{ Popup }}
      />
    </div>
  ),
}
