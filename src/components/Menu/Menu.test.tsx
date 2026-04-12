import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import Menu from '.'

describe('Menu', () => {
  it('opens the menu when the toggle is clicked and closes it after selecting an item', async () => {
    const user = userEvent.setup()
    const onItemClick = vi.fn()

    render(
      <Menu>
        <Menu.Toggle>Open menu</Menu.Toggle>
        <Menu.Content>
          <Menu.Item onClick={onItemClick}>Profile</Menu.Item>
        </Menu.Content>
      </Menu>
    )

    expect(screen.queryByText('Profile')).not.toBeInTheDocument()

    await act(async () => {
      await user.click(screen.getByRole('button', { name: 'Open menu' }))
    })

    expect(screen.getByText('Profile')).toBeInTheDocument()

    await act(async () => {
      await user.click(screen.getByText('Profile'))
    })

    expect(onItemClick).toHaveBeenCalledTimes(1)
    expect(screen.queryByText('Profile')).not.toBeInTheDocument()
  })

  it('calls the visibility callbacks when the menu opens and closes with Escape', async () => {
    const user = userEvent.setup()
    const onShowMenu = vi.fn()
    const onHideMenu = vi.fn()

    render(
      <Menu onShowMenu={onShowMenu} onHideMenu={onHideMenu}>
        <Menu.Toggle>Click Me</Menu.Toggle>
        <Menu.Content>
          <Menu.Item>Edit</Menu.Item>
        </Menu.Content>
      </Menu>
    )

    await act(async () => {
      await user.click(screen.getByRole('button', { name: 'Click Me' }))
    })

    expect(onShowMenu).toHaveBeenCalledTimes(1)
    expect(screen.getByText('Edit')).toBeInTheDocument()

    await act(async () => {
      await user.keyboard('{Escape}')
    })

    expect(onHideMenu).toHaveBeenCalledTimes(1)
    expect(screen.queryByText('Edit')).not.toBeInTheDocument()
  })
})
