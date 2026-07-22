import {
  forwardRef,
  HTMLAttributes,
  SyntheticEvent,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'
import ModalContext from '../ModalContext'
import styles from './index.module.css'

export interface ModalProps extends HTMLAttributes<HTMLDialogElement> {
  show?: boolean
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

const Modal = forwardRef<HTMLDialogElement, ModalProps>(function Modal(
  { children, className = '', show, onHide, ...props },
  ref
) {
  const dialogRef = useModal(!!show)
  useImperativeHandle(ref, () => dialogRef.current as HTMLDialogElement)
  const value = { show, onHide }

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
})

export default Modal
