import { ButtonHTMLAttributes, useContext } from 'react'
import styles from './index.module.css'
import ModalContext from '../ModalContext'

export default function ModalCloseButton({
  children,
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
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
