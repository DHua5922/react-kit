import React, { useContext } from 'react'
import Popup from '../../Popup'
import MenuContext from '../MenuContext'
import styles from './index.module.css'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

function MenuContent({ children, className = '', ...props }: Props) {
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

export default MenuContent
