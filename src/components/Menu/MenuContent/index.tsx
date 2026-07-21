import { useContext, useEffect, useRef, HTMLAttributes } from 'react'
import Popup from '../../Popup'
import MenuContext from '../MenuContext'
import styles from './index.module.css'

function useMenuContent() {
  const context = useContext(MenuContext)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!context.showMenu) {
      return
    }

    const container = containerRef.current
    if (!container) {
      return
    }

    const firstFocusable = container.querySelector<HTMLElement>(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
    firstFocusable?.focus()
  }, [context.showMenu])

  return {
    containerRef,
    context,
  }
}

export default function MenuContent({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const { containerRef, context } = useMenuContent()

  return (
    <Popup
      left={context.menuPos.left}
      top={context.menuPos.top}
      show={context.showMenu}
      onHide={context.onHideMenu}
    >
      <div
        ref={containerRef}
        className={`${styles.container} ${className}`}
        {...props}
      >
        {children}
      </div>
    </Popup>
  )
}
