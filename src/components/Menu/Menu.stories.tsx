import type { Meta, StoryObj } from '@storybook/react'
import Menu from '.'
import LiveCodeBlock from '@/internal/LiveCodeBlock'

const liveCode = `function Example() {
  const [selection, setSelection] = React.useState('Profile')

  return (
    <div style={{ minHeight: 220, padding: 32, background: '#f8fafc' }}>
      <div style={{ marginBottom: 16, color: '#475569', fontSize: 14 }}>
        Selected: {selection}
      </div>

      <Menu offsetMenuPosVertical={8}>
        <Menu.Toggle
          style={{
            padding: '10px 14px',
            borderRadius: 10,
            border: '1px solid #cbd5e1',
            background: '#ffffff',
            cursor: 'pointer',
          }}
        >
          Open menu
        </Menu.Toggle>

        <Menu.Content style={{ minWidth: 180, padding: 8 }}>
          <Menu.Item onClick={() => setSelection('Profile')}>Profile</Menu.Item>
          <Menu.Item onClick={() => setSelection('Billing')}>Billing</Menu.Item>
          <Menu.Item onClick={() => setSelection('Sign out')}>Sign out</Menu.Item>
        </Menu.Content>
      </Menu>
    </div>
  )
}

render(<Example />)`

const meta = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Menu>

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
  render: () => <LiveCodeBlock code={liveCode} noInline scope={{ Menu }} />,
}
