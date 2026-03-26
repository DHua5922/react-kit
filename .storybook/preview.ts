import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true, // Show all controls expanded
      hideNoControlsWarning: true, // Hide warnings about missing controls
    },
    actions: {
      argTypesRegex: '^on[A-Z].*', // Auto-detect onClick, onSubmit, etc.
    },
    docs: {
      canvas: {
        sourceState: 'shown',
      },
      source: {
        type: 'dynamic',
        transform: (code: string) => {
          // Clean up the code display
          return code
        },
      },
    },
  },
}

export default preview
