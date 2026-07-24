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

function useMenuContent(onKeyDown?: KeyboardEventHandler<HTMLDivElement>) {
  const context = useContext(MenuContext)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    onKeyDown?.(event)

    if (!event.defaultPrevented && event.key === 'Escape') {
      event.preventDefault()
      event.stopPropagation()
      context.setOpen(false)
      context.triggerRef.current?.focus()
    }
  }

  useEffect(() => {
    if (context.open) {
      const container = containerRef.current

      if (container) {
        const firstFocusable = container.querySelector<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
        firstFocusable?.focus()
      }
    }
  }, [context.open])

  return {
    containerRef,
    context,
    handleKeyDown,
  }
}

const MenuContent = forwardRef<HTMLDivElement, MenuContentProps>(
  function MenuContent({ children, className = '', onKeyDown, ...props }, ref) {
    const { containerRef, context, handleKeyDown } = useMenuContent(onKeyDown)

    useImperativeHandle(ref, () => containerRef.current as HTMLDivElement)

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
