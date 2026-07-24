import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react'
import type { MouseEventHandler } from 'react'
import { vi } from 'vitest'
import Menu from '.'
import type { MenuProps } from '.'

interface RenderMenuProps extends Partial<MenuProps> {
  toggleOnClick?: MouseEventHandler<HTMLButtonElement>
  onItemClick?: MouseEventHandler<HTMLButtonElement>
  onOpenChange?: (open: boolean) => void
}

describe('Menu', () => {
  it('opens the menu when the toggle is clicked and closes it after selecting an item', async () => {
    const user = userEvent.setup()
    const onItemClick = vi.fn()

    renderMenu({
      onItemClick,
    })
    expect(screen.queryByText('Profile')).not.toBeInTheDocument()

    await act(() =>
      user.click(screen.getByRole('button', { name: 'Open menu' }))
    )
    expect(screen.getByText('Profile')).toBeInTheDocument()

    await act(() => user.click(screen.getByText('Profile')))
    expect(onItemClick).toHaveBeenCalledTimes(1)
    expect(screen.queryByText('Profile')).not.toBeInTheDocument()
  })

  it('opens the menu when the toggle is clicked and closes with Escape', async () => {
    const user = userEvent.setup()

    renderMenu({})

    await act(() =>
      user.click(screen.getByRole('button', { name: 'Open menu' }))
    )
    expect(screen.getByText('Profile')).toBeInTheDocument()

    await act(() => user.keyboard('{Escape}'))
    expect(screen.queryByText('Profile')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveFocus()
  })

  it('does not open when the toggle click is prevented', async () => {
    const user = userEvent.setup()
    const preventOpen: MouseEventHandler<HTMLButtonElement> = (event) => {
      event.preventDefault()
    }

    renderMenu({ toggleOnClick: preventOpen })

    await act(() =>
      user.click(screen.getByRole('button', { name: 'Open menu' }))
    )
    expect(screen.queryByText('Profile')).not.toBeInTheDocument()
  })

  it('keeps the menu positioned below its toggle while scrolling', async () => {
    const user = userEvent.setup()
    let bottom = 140

    renderMenu({})

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    vi.spyOn(toggle, 'getBoundingClientRect').mockImplementation(
      () =>
        ({
          bottom,
          left: 24,
        }) as DOMRect
    )

    await act(() => user.click(toggle))

    const popup = screen.getByText('Profile').parentElement?.parentElement
    expect(popup?.style.getPropertyValue('--top')).toBe('140px')

    bottom = 80
    fireEvent.scroll(window)

    expect(popup?.style.getPropertyValue('--top')).toBe('80px')
    expect(popup?.style.getPropertyValue('--left')).toBe('24px')
  })

  it('focuses the first menu item on open and tabs to the next item', async () => {
    const user = userEvent.setup()

    renderMenu({})

    await act(() =>
      user.click(screen.getByRole('button', { name: 'Open menu' }))
    )
    const profileItem = screen.getByRole('button', { name: 'Profile' })
    const billingItem = screen.getByRole('button', { name: 'Billing' })

    expect(profileItem).toHaveFocus()

    await act(() => user.keyboard('{Tab}'))
    expect(billingItem).toHaveFocus()
  })

  it('keeps the menu open while tabbing through items', async () => {
    const user = userEvent.setup()

    renderMenu({})

    await act(() =>
      user.click(screen.getByRole('button', { name: 'Open menu' }))
    )
    expect(screen.getByRole('button', { name: 'Profile' })).toBeInTheDocument()

    await act(() => user.keyboard('{Tab}'))
    expect(screen.getByRole('button', { name: 'Profile' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Billing' })).toHaveFocus()
  })
})

function renderMenu({ toggleOnClick, onItemClick, ...props }: RenderMenuProps) {
  render(
    <Menu {...props}>
      <Menu.Toggle onClick={toggleOnClick}>Open menu</Menu.Toggle>

      <Menu.Content>
        <Menu.Item onClick={onItemClick}>Profile</Menu.Item>
        <Menu.Item onClick={onItemClick}>Billing</Menu.Item>
      </Menu.Content>
    </Menu>
  )
}
