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
  { children, className = '', onClick, value, style, ...props },
  ref
) {
  const { onSelect, onHideMenu } = useContext(MenuContext)

  const handleClick = (event: ReactMouseEvent<HTMLButtonElement>) => {
    onSelect && onSelect(value)
    onClick && onClick(event)
    onHideMenu && onHideMenu()
  }

  const buttonStyle = {
    cursor: onSelect ? 'pointer' : 'default',
    ...style,
  }

  return (
    <button
      ref={ref}
      type="button"
      className={`${styles.container} ${className}`}
      onClick={handleClick}
      style={buttonStyle}
      {...props}
    >
      {children}
    </button>
  )
})

export default MenuItem
