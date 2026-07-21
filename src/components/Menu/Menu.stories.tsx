import type { Meta, StoryObj } from '@storybook/react'
import Menu from '.'
import LiveCodeBlock from '@/internal/LiveCodeBlock'

const liveCode = `function Example() {
  const [selection, setSelection] = React.useState('Profile')

  const containerStyle = {
    minHeight: 220,
    padding: 32,
    background: '#f8fafc'
  }

  const chosenDisplayStyle = {
    marginBottom: 16,
    color: '#475569',
    fontSize: 14,
  }

  const menuToggleStyle = {
    padding: '10px 14px',
    borderRadius: 10,
    border: '1px solid #cbd5e1',
    background: '#ffffff',
    cursor: 'pointer',
  }

  const onClickItem = (item: string) => () => setSelection(item)

  return (
    <div style={containerStyle}>
      <p style={chosenDisplayStyle}>
        Selected: {selection}
      </p>

      <Menu offsetMenuPosVertical={8}>
        <Menu.Toggle style={menuToggleStyle}>
          Open menu
        </Menu.Toggle>

        <Menu.Content>
          <Menu.Item onClick={onClickItem('Profile')}>Profile</Menu.Item>
          <Menu.Item onClick={onClickItem('Billing')}>Billing</Menu.Item>
          <Menu.Item onClick={onClickItem('Sign out')}>Sign out</Menu.Item>
        </Menu.Content>
      </Menu>
    </div>
  )
}

render(<Example />)`

type MenuMeta = Meta<typeof Menu>
type Story = StoryObj<MenuMeta>

const meta: MenuMeta = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies MenuMeta
export default meta

export const Example: Story = {
  tags: ['!dev'],
  render: () => <LiveCodeBlock code={liveCode} noInline scope={{ Menu }} />,
}
