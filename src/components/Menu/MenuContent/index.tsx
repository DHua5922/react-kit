import { useContext, HTMLAttributes, ReactNode } from 'react'
import Popup from '../../Popup'
import MenuContext from '../MenuContext'
import styles from './index.module.css'

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

export default function MenuContent({
  children,
  className = '',
  ...props
}: Props) {
  const context = useContext(MenuContext)

  return (
    <Popup
      left={context.menuPos.left}
      top={context.menuPos.top}
      show={context.showMenu}
      onHide={context.onHideMenu}
    >
      <div className={`${styles.container} ${className}`} {...props}>
        {children}
      </div>
    </Popup>
  )
}
