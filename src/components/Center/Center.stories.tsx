import type { Meta, StoryObj } from '@storybook/react'
import Center from '.'
import LiveCodeBlock from '@/internal/LiveCodeBlock'

const meta = {
  title: 'Components/Center',
  component: Center,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['', 'vertical', 'horizontal'],
    },
  },
  args: {
    children: 'Centered content',
    style: {
      width: 240,
      height: 120,
      border: '1px dashed #cbd5e1',
      borderRadius: 8,
      background: '#f8fafc',
      padding: 16,
    },
  },
} satisfies Meta<typeof Center>

export default meta

type Story = StoryObj<typeof meta>

// export const Default: Story = {}

const liveCode = `<Center
  style={{
    width: 260,
    height: 140,
    border: '1px dashed #cbd5e1',
    borderRadius: 8,
    background: '#f8fafc',
    padding: 16,
  }}
>
  Live render preview
</Center>`

export const LiveExample: Story = {
  parameters: {
    layout: 'padded',
    docs: {
      source: {
        code: liveCode,
      },
    },
  },
  render: () => (
    <div style={{ maxWidth: 960, margin: '0 auto' }}>
      <LiveCodeBlock
        title="Center Live Playground"
        code={liveCode}
        editorHeight="280px"
        scope={{ Center }}
      />
    </div>
  ),
}
