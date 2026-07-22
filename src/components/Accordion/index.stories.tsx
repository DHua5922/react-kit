import type { Meta } from '@storybook/react'
import Accordion from '.'
import LiveCodeBlock from '@/internal/LiveCodeBlock'

const liveCode = `function Example() {
  const eventKey = "0";
  const [activeKeys, setActiveKeys] = React.useState<string[]>([]);

  const onSelect = (key: string) => {
    setActiveKeys((prev) => (prev.includes(key) ? [] : [key]));
  }
  
  return (
    <Accordion
      activeKeys={activeKeys}
      onSelect={onSelect}
    >
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>
          Click Me!
        </Accordion.Header>
        
        <Accordion.Body>
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
} satisfies Meta<typeof Accordion>

export default meta

export const Example = {
  tags: ['!dev'],
  render: () => (
    <LiveCodeBlock code={liveCode} noInline scope={{ Accordion }} />
  ),
}
