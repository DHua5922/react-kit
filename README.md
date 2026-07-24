# React Kit

A lightweight, composable React component library built with TypeScript. React
Kit provides flexible UI primitives while leaving application state, styling
overrides, and use-case-specific accessibility relationships under consumer
control.

## Documentation

Browse the component guides and live-editable examples at
[Storybook](https://huadylan.com/react-kit/docs/).

## Installation

```bash
yarn add @dhua5922/react-kit
```

Or:

```bash
npm install @dhua5922/react-kit
```

React Kit supports React and ReactDOM 18 and 19. Import the stylesheet once
near your application entry point:

```tsx
import '@dhua5922/react-kit/style.css'
```

React Kit is distributed as an ES module and requires a bundler or runtime that
supports ESM package exports.

## Quick Start

Accordion is controlled: the consumer supplies `activeKeys` and updates them
when `onSelect` reports an item key.

```tsx
import { useState } from 'react'
import { Accordion } from '@dhua5922/react-kit'
import '@dhua5922/react-kit/style.css'

export default function Example() {
  const [activeKeys, setActiveKeys] = useState<string[]>([])
  const eventKey = 'account'
  const headerId = 'account-accordion-header'
  const panelId = 'account-accordion-panel'

  const handleSelect = (key: string) => {
    setActiveKeys((current) =>
      current.includes(key)
        ? current.filter((activeKey) => activeKey !== key)
        : [...current, key]
    )
  }

  return (
    <Accordion activeKeys={activeKeys} onSelect={handleSelect}>
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header id={headerId} aria-controls={panelId}>
          Account settings
        </Accordion.Header>

        <Accordion.Body id={panelId} aria-labelledby={headerId}>
          Update your account preferences here.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
```

## Components

See the [Storybook documentation](https://huadylan.com/react-kit/docs/)
for complete component guides and examples.

## TypeScript

React Kit includes generated declarations, exports public component prop types,
and forwards refs from DOM-rendering components to their underlying elements.

```tsx
import type {
  AccordionProps,
  CalendarProps,
  MenuItemProps,
  ModalProps,
  PopupProps,
} from '@dhua5922/react-kit'
```

`Menu` itself renders only a context provider and therefore has no DOM ref. Its
DOM-rendering subcomponents forward refs normally.

## Accessibility

React Kit uses semantic HTML and exposes native element attributes so consumers
can adapt components to their use case. Consumers are responsible for:

- Connecting related elements with IDs and attributes such as `aria-controls`
  and `aria-labelledby`.
- Providing accessible names for icon-only controls.
- Selecting appropriate roles for flexible primitives such as `Menu`.
- Implementing additional focus and keyboard behavior required by those roles.
- Testing the completed application with keyboard navigation and assistive
  technologies.

The library provides only semantics and keyboard behavior that are valid across
its supported use cases. Detailed responsibilities are documented in each
component's Storybook guide.

## Browser Support

React Kit targets modern browsers and relies on native `<dialog>`, portals, CSS
custom properties, and ES modules. Applications supporting older browsers must
provide appropriate transpilation and platform polyfills.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development setup, architecture,
testing, documentation, accessibility, and pull-request guidelines.

## License

React Kit is available under the [MIT License](./LICENSE).
