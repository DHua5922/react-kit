import {
  ButtonHTMLAttributes,
  forwardRef,
  useContext,
  MouseEvent as ReactMouseEvent,
} from 'react'
import MenuContext from '../MenuContext'
import styles from './index.module.css'

export interface MenuItemProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'value'
> {
  value: unknown
}

const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>(function MenuItem(
  { children, className = '', onClick, value, ...props },
  ref
) {
  const { onSelect, onHideMenu } = useContext(MenuContext)

  const handleClick = (event: ReactMouseEvent<HTMLButtonElement>) => {
    onSelect(value)
    onClick?.(event)
    onHideMenu()
  }

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
