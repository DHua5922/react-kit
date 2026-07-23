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
  show?: boolean
  onHide?: () => void
}

function usePopup(show: boolean, onHide?: () => void) {
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setPortalTarget(document.body)
  }, [])

  useEffect(() => {
    if (!show) {
      return undefined
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onHide && onHide()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onHide, show])

  return portalTarget
}

const Popup = forwardRef<HTMLDivElement, PopupProps>(function Popup(
  {
    children,
    left,
    top,
    show = false,
    onHide,
    className = '',
    onClick,
    style,
    ...props
  },
  ref
) {
  const portalTarget = usePopup(show, onHide)

  if (!show || !portalTarget) {
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
    <div className={styles.overlay} onClick={onHide}>
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
