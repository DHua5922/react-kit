import {
  useEffect,
  HTMLAttributes,
  CSSProperties,
  MouseEvent as ReactMouseEvent,
} from 'react'
import { createPortal } from 'react-dom'
import styles from './index.module.css'

interface Props extends HTMLAttributes<HTMLDivElement> {
  left?: string
  top?: string
  show?: boolean
  onHide?: () => void
}

function usePopup(show: boolean, onHide?: () => void) {
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
}

export default function Popup({
  children,
  left,
  top,
  show = false,
  onHide,
  className = '',
  ...props
}: Props) {
  usePopup(show, onHide)

  if (!show) {
    return null
  }

  const containerStyle = {
    '--left': left,
    '--top': top,
  } as CSSProperties

  const handleModalClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
  }

  return createPortal(
    <div className={styles.overlay} onClick={onHide}>
      <div
        className={`${styles.container} ${className}`}
        style={containerStyle}
        onClick={handleModalClick}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body
  )
}
