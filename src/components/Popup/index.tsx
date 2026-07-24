import {
  useEffect,
  forwardRef,
  HTMLAttributes,
  CSSProperties,
  MouseEvent as ReactMouseEvent,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import styles from './index.module.css'

export interface PopupProps extends HTMLAttributes<HTMLDivElement> {
  left?: string
  top?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

function usePopup(open: boolean, onOpenChange?: (open: boolean) => void) {
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setPortalTarget(document.body)
  }, [])

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onOpenChange?.(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onOpenChange, open])

  return portalTarget
}

const Popup = forwardRef<HTMLDivElement, PopupProps>(function Popup(
  {
    children,
    left,
    top,
    open = false,
    onOpenChange,
    className = '',
    onClick,
    style,
    ...props
  },
  ref
) {
  const portalTarget = usePopup(open, onOpenChange)

  if (!open || !portalTarget) {
    return null
  }

  const containerStyle = {
    '--left': left,
    '--top': top,
    ...style,
  } as CSSProperties

  const handleModalClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    onClick?.(event)
  }

  return createPortal(
    <div className={styles.overlay} onClick={() => onOpenChange?.(false)}>
      <div
        ref={ref}
        className={`${styles.container} ${className}`}
        {...props}
        style={containerStyle}
        onClick={handleModalClick}
      >
        {children}
      </div>
    </div>,
    portalTarget
  )
})

export default Popup
