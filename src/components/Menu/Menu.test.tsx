import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import Menu from '.'

function renderMenu(props = {}) {
  render(
    <Menu {...props}>
      <Menu.Toggle>Open menu</Menu.Toggle>

      <Menu.Content>
        <Menu.Item value="profile">Profile</Menu.Item>
      </Menu.Content>
    </Menu>
  )
}

describe('Menu', () => {
  it('opens the menu when the toggle is clicked and closes it after selecting an item', async () => {
    const user = userEvent.setup()
    const onItemClick = vi.fn()

    renderMenu({ onSelect: onItemClick })
    expect(screen.queryByText('Profile')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByText('Profile')).toBeInTheDocument()

    await user.click(screen.getByText('Profile'))
    expect(onItemClick).toHaveBeenCalledTimes(1)
    expect(screen.queryByText('Profile')).not.toBeInTheDocument()
  })

  it('opens the menu when the toggle is clicked and closes with Escape', async () => {
    const user = userEvent.setup()
    const onShowMenu = vi.fn()
    const onHideMenu = vi.fn()

    renderMenu({ onShowMenu, onHideMenu })

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(onShowMenu).toHaveBeenCalledTimes(1)
    expect(screen.getByText('Profile')).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(onHideMenu).toHaveBeenCalledTimes(1)
    expect(screen.queryByText('Profile')).not.toBeInTheDocument()
  })
})
