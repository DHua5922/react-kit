import { HTMLAttributes } from 'react'
import styles from './index.module.css'

export default function ModalTitle({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={`${styles.container} ${className}`} {...props}>
      {children}
    </h2>
  )
}
