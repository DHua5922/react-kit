import {
  ButtonHTMLAttributes,
  forwardRef,
  MouseEventHandler,
  useContext,
} from 'react'
import styles from './index.module.css'
import ModalContext from '../ModalContext'

export type ModalCloseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const ModalCloseButton = forwardRef<HTMLButtonElement, ModalCloseButtonProps>(
  function ModalCloseButton(
    { children, className = '', onClick, ...props },
    ref
  ) {
    const { closeModal } = useContext(ModalContext)
    const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
      onClick?.(event)
      if (!event.defaultPrevented) closeModal()
    }

    return (
      <button
        ref={ref}
        type="button"
        className={`${styles.container} ${className}`}
        onClick={handleClick}
        {...props}
      >
        {children || 'X'}
      </button>
    )
  }
)

export default ModalCloseButton
