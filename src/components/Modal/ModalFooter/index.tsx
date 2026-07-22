import { HTMLAttributes } from 'react'
import styles from './index.module.css'

export type ModalFooterProps = HTMLAttributes<HTMLDivElement>

export default function ModalFooter({
  children,
  className = '',
  ...props
}: ModalFooterProps) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {children}
    </div>
  )
}
