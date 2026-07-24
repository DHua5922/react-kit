import { forwardRef, useContext, useImperativeHandle } from 'react'
import type {
  ButtonHTMLAttributes,
  ForwardedRef,
  KeyboardEventHandler,
  MouseEventHandler,
} from 'react'
import MenuContext from './MenuContext'
import usePopupPosition from '@/internal/usePopupPosition'

export type MenuToggleProps = ButtonHTMLAttributes<HTMLButtonElement>

function useMenuToggle(
  ref: ForwardedRef<HTMLButtonElement>,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  onKeyDown?: KeyboardEventHandler<HTMLButtonElement>
) {
  const {
    open,
    setOpen,
    popupOffsetHorizontal,
    popupOffsetVertical,
    setPopupPosition,
    triggerRef: contextTriggerRef,
  } = useContext(MenuContext)
  const { triggerRef, updatePosition } = usePopupPosition<HTMLButtonElement>({
    open,
    horizontalOffset: popupOffsetHorizontal,
    verticalOffset: popupOffsetVertical,
    setPosition: setPopupPosition,
    triggerRef: contextTriggerRef,
  })

  const openMenu = () => {
    updatePosition()
    setOpen(true)
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event)

    if (!event.defaultPrevented) {
      if (open) setOpen(false)
      else openMenu()
    }
  }

  const handleKeyDown: KeyboardEventHandler<HTMLButtonElement> = (event) => {
    onKeyDown?.(event)

    if (!event.defaultPrevented) {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault()
        openMenu()
      }
    }
  }

  useImperativeHandle(ref, () => triggerRef.current as HTMLButtonElement)

  return { open, triggerRef, handleClick, handleKeyDown }
}

const MenuToggle = forwardRef<HTMLButtonElement, MenuToggleProps>(
  function MenuToggle(
    { children, onClick, onKeyDown, type = 'button', ...props },
    ref
  ) {
    const { open, triggerRef, handleClick, handleKeyDown } = useMenuToggle(
      ref,
      onClick,
      onKeyDown
    )

    return (
      <button
        ref={triggerRef}
        type={type}
        {...props}
        aria-expanded={open}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
      >
        {children}
      </button>
    )
  }
)

export default MenuToggle
