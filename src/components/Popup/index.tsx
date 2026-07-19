import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './index.module.css'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  left?: string
  top?: string
  children?: React.ReactNode
  show?: boolean
  onHide: () => void
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
  useEffect(() => {
    if (!show) {
      return undefined
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onHide()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onHide, show])

  if (!show) {
    return null
  }

  const containerStyle = {
    '--left': left,
    '--top': top,
  } as React.CSSProperties

  return createPortal(
    <div className={styles.overlay} onClick={onHide}>
      <div
        className={`${styles.container} ${className}`}
        style={containerStyle}
        onClick={(event) => event.stopPropagation()}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body
  )
}
