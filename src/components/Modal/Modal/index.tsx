import {
  forwardRef,
  DialogHTMLAttributes,
  SyntheticEvent,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'
import ModalContext from '../ModalContext'
import styles from './index.module.css'

export interface ModalProps extends DialogHTMLAttributes<HTMLDialogElement> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

function useModal(open: boolean) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current

    if (open && !dialog?.open) {
      dialog?.showModal()
    } else if (!open && dialog?.open) {
      dialog.close()
    }
  }, [open])

  return dialogRef
}

const Modal = forwardRef<HTMLDialogElement, ModalProps>(function Modal(
  { children, className = '', open = false, onOpenChange, ...props },
  ref
) {
  const value = { closeModal: () => onOpenChange?.(false) }
  const dialogRef = useModal(open)

  const handleCancelDialog = (
    event: SyntheticEvent<HTMLDialogElement, Event>
  ) => {
    event.preventDefault()
    onOpenChange?.(false)
  }

  useImperativeHandle(ref, () => dialogRef.current as HTMLDialogElement)

  return (
    <ModalContext.Provider value={value}>
      <dialog
        ref={dialogRef}
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
