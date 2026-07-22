import { useContext, useRef } from 'react'
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
      context.onShowMenu && context.onShowMenu()
      return
    }

    const rect = trigger.getBoundingClientRect()
    context.setMenuPos({
      top: `${rect.bottom + context.offsetMenuPosVertical}px`,
      left: `${rect.left + context.offsetMenuPosHorizontal}px`,
    })
    context.onShowMenu && context.onShowMenu()
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

export default function MenuToggle({
  children,
  onClick,
  ...props
}: MenuToggleProps) {
  const context = useContext(MenuContext)
  const { triggerRef, handleClick, handleKeyDown } = useMenuToggle(onClick)

  return (
    <div ref={triggerRef}>
      <button
        aria-haspopup="menu"
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
