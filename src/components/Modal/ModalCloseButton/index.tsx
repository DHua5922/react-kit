import { ButtonHTMLAttributes, useContext } from 'react'
import styles from './index.module.css'
import ModalContext from '../ModalContext'

export type ModalCloseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function ModalCloseButton({
  children,
  className = '',
  ...props
}: ModalCloseButtonProps) {
  const { onHide } = useContext(ModalContext)
  return (
    <button
      className={`${styles.container} ${className}`}
      onClick={onHide}
      {...props}
    >
      {children || 'X'}
    </button>
  )
}
