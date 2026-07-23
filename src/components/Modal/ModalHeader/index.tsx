import { forwardRef, HTMLAttributes } from 'react'
import styles from './index.module.css'

export type ModalHeaderProps = HTMLAttributes<HTMLDivElement>

const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  function ModalHeader({ children, className = '', ...props }, ref) {
    return (
      <div ref={ref} className={`${styles.container} ${className}`} {...props}>
        {children}
      </div>
    )
  }
)

export default ModalHeader
