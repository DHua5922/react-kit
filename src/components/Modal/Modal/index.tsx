import { HTMLAttributes, useEffect, useRef } from 'react'
import ModalContext from '../ModalContext'
import styles from './index.module.css'

interface Props extends HTMLAttributes<HTMLDialogElement> {
  show?: boolean
  onShow?: () => void
  onHide?: () => void
}

export default function Modal({
  children,
  className = '',
  show,
  onShow,
  onHide,
  ...props
}: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (show) {
      dialogRef.current?.showModal()
    } else {
      dialogRef.current?.close()
    }
  }, [show])

  return (
    <ModalContext.Provider value={{ show, onShow, onHide }}>
      <dialog
        ref={dialogRef}
        onClose={onHide}
        onCancel={(event) => {
          event.preventDefault()
          onHide?.()
        }}
        className={`${styles.container} ${className}`}
        {...props}
      >
        {children}
      </dialog>
    </ModalContext.Provider>
  )
}
