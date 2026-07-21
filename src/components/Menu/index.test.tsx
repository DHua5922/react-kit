import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import Menu from '.'

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

  it('focuses the first menu item on open and tabs to the next item', async () => {
    const user = userEvent.setup()

    renderMenu()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const profileItem = screen.getByRole('button', { name: 'Profile' })
    const billingItem = screen.getByRole('button', { name: 'Billing' })

    expect(profileItem).toHaveFocus()

    await user.keyboard('{Tab}')
    expect(billingItem).toHaveFocus()
  })

  it('keeps the menu open while tabbing through items', async () => {
    const user = userEvent.setup()

    renderMenu()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('button', { name: 'Profile' })).toBeInTheDocument()

    await user.keyboard('{Tab}')
    expect(screen.getByRole('button', { name: 'Profile' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Billing' })).toHaveFocus()
  })
})

function renderMenu(props = {}) {
  render(
    <Menu {...props}>
      <Menu.Toggle>Open menu</Menu.Toggle>

      <Menu.Content>
        <Menu.Item value="profile">Profile</Menu.Item>
        <Menu.Item value="billing">Billing</Menu.Item>
      </Menu.Content>
    </Menu>
  )
}
