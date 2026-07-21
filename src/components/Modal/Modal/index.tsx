import { HTMLAttributes, SyntheticEvent, useEffect, useRef } from 'react'
import ModalContext from '../ModalContext'
import styles from './index.module.css'

interface Props extends HTMLAttributes<HTMLDialogElement> {
  show?: boolean
  onShow?: () => void
  onHide?: () => void
}

function useModal(show: boolean) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  
  useEffect(() => {
    if (show) {
      dialogRef.current?.showModal()
    } else {
      dialogRef.current?.close()
    }
  }, [show])

  return dialogRef
}

export default function Modal({
  children,
  className = '',
  show,
  onShow,
  onHide,
  ...props
}: Props) {
  const dialogRef = useModal(!!show)
  const value = { show, onShow, onHide }

  const handleCancelDialog = (
    event: SyntheticEvent<HTMLDialogElement, Event>
  ) => {
    event.preventDefault()
    onHide?.()
  }

  return (
    <ModalContext.Provider value={value}>
      <dialog
        ref={dialogRef}
        onClose={onHide}
        onCancel={handleCancelDialog}
        className={`${styles.container} ${className}`}
        {...props}
      >
        {children}
      </dialog>
    </ModalContext.Provider>
  )
}
