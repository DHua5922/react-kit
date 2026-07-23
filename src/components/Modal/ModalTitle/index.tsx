import { forwardRef, HTMLAttributes } from 'react'
import styles from './index.module.css'

export type ModalTitleProps = HTMLAttributes<HTMLHeadingElement>

const ModalTitle = forwardRef<HTMLHeadingElement, ModalTitleProps>(
  function ModalTitle({ children, className = '', ...props }, ref) {
    return (
      <h2 ref={ref} className={`${styles.container} ${className}`} {...props}>
        {children}
      </h2>
    )
  }
)

export default ModalTitle
