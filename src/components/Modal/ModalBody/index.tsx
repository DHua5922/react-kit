import { forwardRef, HTMLAttributes } from 'react'
import styles from './index.module.css'

export type ModalBodyProps = HTMLAttributes<HTMLDivElement>

const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(function ModalBody(
  { children, className = '', ...props },
  ref
) {
  return (
    <div ref={ref} className={`${styles.container} ${className}`} {...props}>
      {children}
    </div>
  )
})

export default ModalBody
