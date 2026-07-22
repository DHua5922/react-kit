import { forwardRef, HTMLAttributes } from 'react'
import styles from './index.module.css'

export type ModalFooterProps = HTMLAttributes<HTMLDivElement>

const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  function ModalFooter({ children, className = '', ...props }, ref) {
    return (
      <div ref={ref} className={`${styles.container} ${className}`} {...props}>
        {children}
      </div>
    )
  }
)

export default ModalFooter
