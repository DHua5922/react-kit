import { useContext, useRef, isValidElement, cloneElement } from 'react'
import type {
  ReactNode,
  ButtonHTMLAttributes,
  ReactElement,
  MouseEvent as ReactMouseEvent,
  MouseEventHandler,
} from 'react'
import MenuContext from './MenuContext'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
}

function useMenuToggle(onClick?: MouseEventHandler<HTMLButtonElement>) {
  const context = useContext(MenuContext)
  const triggerRef = useRef<HTMLDivElement>(null)

  if (!context) {
    throw new Error('MenuToggle must be used within a Menu component')
  }

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

  return { context, triggerRef, openMenu, handleClick }
}

export default function MenuToggle({
  children,
  onClick,
  type,
  ...props
}: Props) {
  const { context, triggerRef, openMenu, handleClick } = useMenuToggle(onClick)

  if (!context) {
    return null
  }

  if (isValidElement(children)) {
    const child = children as ReactElement<{
      onClick?: MouseEventHandler<HTMLElement>
    }>

    const handleChildClick = (event: ReactMouseEvent<HTMLElement>) => {
      const onClickEvent =
        event as unknown as ReactMouseEvent<HTMLButtonElement>

      child.props.onClick?.(event)
      onClick?.(onClickEvent)
      openMenu()
    }

    return (
      <div ref={triggerRef}>
        {cloneElement(child, {
          ...props,
          ...child.props,
          onClick: handleChildClick,
        })}
      </div>
    )
  }

  return (
    <div ref={triggerRef}>
      <button type={type || 'button'} onClick={handleClick} {...props}>
        {children}
      </button>
    </div>
  )
}
