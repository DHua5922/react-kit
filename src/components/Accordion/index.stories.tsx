import type { Meta, StoryObj } from '@storybook/react'
import Accordion from '.'
import LiveCodeBlock from '@/internal/LiveCodeBlock'

const liveCode = `function Example() {
  const eventKey = "0";
  const [activeKeys, setActiveKeys] = React.useState<string[]>([]);

  const onSelect = (key: string) => {
    setActiveKeys((prev) => (prev.includes(key) ? [] : [key]));
  }

  const headerId = "accordion-header-0";
  const panelId = "accordion-panel-0";
  
  return (
    <Accordion
      activeKeys={activeKeys}
      onSelect={onSelect}
    >
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header id={headerId} aria-controls={panelId}>
          Click Me!
        </Accordion.Header>
        
        <Accordion.Body id={panelId} aria-labelledby={headerId}>
          Body
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

render(<Example />)`

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
  args: {
    activeKeys: [],
    onSelect: () => {},
  },
} satisfies Meta<typeof Accordion>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  tags: ['!dev'],
  render: () => (
    <LiveCodeBlock code={liveCode} noInline scope={{ Accordion }} />
  ),
}
