import { HTMLAttributes } from 'react'
import styles from './index.module.css'

export type ModalTitleProps = HTMLAttributes<HTMLHeadingElement>

export default function ModalTitle({
  children,
  className = '',
  ...props
}: ModalTitleProps) {
  return (
    <h2 className={`${styles.container} ${className}`} {...props}>
      {children}
    </h2>
  )
}
