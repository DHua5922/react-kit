import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
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

export const BasicMenu: Story = {
  render: function Render() {
    const [selection, setSelection] = useState('Profile')

    return (
      <div style={{ minHeight: 240, padding: 32, background: '#f8fafc' }}>
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
            <Menu.Item
              style={{ padding: 10, cursor: 'pointer', borderRadius: 8 }}
              onClick={() => setSelection('Profile')}
            >
              Profile
            </Menu.Item>
            <Menu.Item
              style={{ padding: 10, cursor: 'pointer', borderRadius: 8 }}
              onClick={() => setSelection('Billing')}
            >
              Billing
            </Menu.Item>
            <Menu.Item
              style={{ padding: 10, cursor: 'pointer', borderRadius: 8 }}
              onClick={() => setSelection('Sign out')}
            >
              Sign out
            </Menu.Item>
          </Menu.Content>
        </Menu>
      </div>
    )
  },
}

export const LiveExample: Story = {
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
        title="Menu Live Playground"
        code={liveCode}
        editorHeight="360px"
        noInline
        scope={{ Menu }}
      />
    </div>
  ),
}
