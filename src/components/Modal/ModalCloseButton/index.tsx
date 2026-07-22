import { ButtonHTMLAttributes, forwardRef, useContext } from 'react'
import styles from './index.module.css'
import ModalContext from '../ModalContext'

export type ModalCloseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const ModalCloseButton = forwardRef<
  HTMLButtonElement,
  ModalCloseButtonProps
>(function ModalCloseButton({ children, className = '', ...props }, ref) {
  const { onHide } = useContext(ModalContext)
  return (
    <button
      ref={ref}
      type="button"
      className={`${styles.container} ${className}`}
      onClick={onHide}
      {...props}
    >
      {children || 'X'}
    </button>
  )
})

export default ModalCloseButton
