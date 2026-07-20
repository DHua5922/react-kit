import React, { useContext, useRef } from 'react'
import MenuContext from './MenuContext'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

function MenuToggle({ children, onClick, type, ...props }: Props) {
  const context = useContext(MenuContext)
  const triggerRef = useRef<HTMLDivElement>(null)

  if (!context) {
    return null
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

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event)
    openMenu()
  }

  if (React.isValidElement(children)) {
    const child = children as React.ReactElement<{
      onClick?: React.MouseEventHandler<HTMLElement>
    }>

    return (
      <div ref={triggerRef}>
        {React.cloneElement(child, {
          ...props,
          ...child.props,
          onClick: (event: React.MouseEvent<HTMLElement>) => {
            child.props.onClick?.(event)
            onClick?.(
              event as unknown as React.MouseEvent<
                HTMLButtonElement,
                MouseEvent
              >
            )
            openMenu()
          },
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

export default MenuToggle
