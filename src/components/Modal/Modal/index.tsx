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
  show?: boolean
  onHide?: () => void
}

function useModal(show: boolean) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current

    if (show && !dialog?.open) {
      dialog?.showModal()
    } else if (!show && dialog?.open) {
      dialog.close()
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
