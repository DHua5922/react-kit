import {
  ButtonHTMLAttributes,
  forwardRef,
  useContext,
  MouseEvent as ReactMouseEvent,
} from 'react'
import MenuContext from '../MenuContext'
import styles from './index.module.css'

export type MenuItemProps = ButtonHTMLAttributes<HTMLButtonElement>

function useMenuItem(
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick']
) {
  const { setOpen } = useContext(MenuContext)

  const handleClick = (event: ReactMouseEvent<HTMLButtonElement>) => {
    onClick?.(event)
    if (!event.defaultPrevented) setOpen(false)
  }

  return handleClick
}

const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>(function MenuItem(
  { children, className = '', onClick, ...props },
  ref
) {
  const handleClick = useMenuItem(onClick)

  return (
    <button
      ref={ref}
      type="button"
      className={`${styles.container} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  )
})

export default MenuItem
