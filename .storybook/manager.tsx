import { addons, types } from '@storybook/manager-api'
import { IconButton } from '@storybook/components'
import { HomeIcon } from '@storybook/icons'
import React from 'react'

addons.register('react-kit/home-link', () => {
  addons.add('react-kit/home-link', {
    type: types.TOOL,
    title: 'Back to homepage',
    render: () => (
      <IconButton
        onClick={() => (window.location.href = '/')}
        title="Back to homepage"
        aria-label="Back to homepage"
      >
        <HomeIcon />
      </IconButton>
    ),
  })
})
