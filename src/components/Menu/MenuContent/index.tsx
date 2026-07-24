import {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  HTMLAttributes,
} from 'react'
import type { KeyboardEventHandler } from 'react'
import Popup from '../../Popup'
import MenuContext from '../MenuContext'
import styles from './index.module.css'

export type MenuContentProps = HTMLAttributes<HTMLDivElement>

function useMenuContent() {
  const context = useContext(MenuContext)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!context.open) {
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
  }, [context.open])

  return {
    containerRef,
    context,
  }
}

const MenuContent = forwardRef<HTMLDivElement, MenuContentProps>(
  function MenuContent({ children, className = '', onKeyDown, ...props }, ref) {
    const { containerRef, context } = useMenuContent()
    useImperativeHandle(ref, () => containerRef.current as HTMLDivElement)

    const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
      onKeyDown?.(event)
      if (event.defaultPrevented || event.key !== 'Escape') return

      event.preventDefault()
      event.stopPropagation()
      context.setOpen(false)
      context.triggerRef.current?.focus()
    }

    return (
      <Popup
        left={context.popupPosition.left}
        top={context.popupPosition.top}
        open={context.open}
        onOpenChange={context.setOpen}
      >
        <div
          ref={containerRef}
          className={`${styles.container} ${className}`}
          {...props}
          onKeyDown={handleKeyDown}
        >
          {children}
        </div>
      </Popup>
    )
  }
)

export default MenuContent
