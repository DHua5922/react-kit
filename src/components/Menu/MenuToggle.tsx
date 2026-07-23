import { forwardRef, useContext, useRef } from 'react'
import type {
  KeyboardEvent as ReactKeyboardEvent,
  ButtonHTMLAttributes,
  MouseEventHandler,
} from 'react'
import MenuContext from './MenuContext'

export type MenuToggleProps = ButtonHTMLAttributes<HTMLButtonElement>

function useMenuToggle(onClick?: MouseEventHandler<HTMLButtonElement>) {
  const context = useContext(MenuContext)
  const triggerRef = useRef<HTMLDivElement>(null)

  const openMenu = () => {
    const trigger = triggerRef.current
    if (!trigger) {
      context.onShowMenu()
      return
    }

    const rect = trigger.getBoundingClientRect()
    context.setMenuPos({
      top: `${rect.bottom + context.offsetMenuPosVertical}px`,
      left: `${rect.left + context.offsetMenuPosHorizontal}px`,
    })
    context.onShowMenu()
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event)
    openMenu()
  }

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault()
      openMenu()
    }
  }

  return { triggerRef, handleClick, handleKeyDown }
}

const MenuToggle = forwardRef<HTMLButtonElement, MenuToggleProps>(
  function MenuToggle({ children, onClick, ...props }, ref) {
    const context = useContext(MenuContext)
    const { triggerRef, handleClick, handleKeyDown } = useMenuToggle(onClick)

    return (
      <div ref={triggerRef}>
        <button
          ref={ref}
          type="button"
          aria-expanded={Boolean(context.showMenu)}
          onKeyDown={handleKeyDown}
          onClick={handleClick}
          {...props}
        >
          {children}
        </button>
      </div>
    )
  }
)

export default MenuToggle
