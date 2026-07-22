import ModalParent from './Modal'
import ModalHeader from './ModalHeader'
import ModalTitle from './ModalTitle'
import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter'
import ModalCloseButton from './ModalCloseButton'

export type { ModalProps } from './Modal'
export type { ModalHeaderProps } from './ModalHeader'
export type { ModalTitleProps } from './ModalTitle'
export type { ModalBodyProps } from './ModalBody'
export type { ModalFooterProps } from './ModalFooter'
export type { ModalCloseButtonProps } from './ModalCloseButton'

const Modal = Object.assign(ModalParent, {
  Header: ModalHeader,
  Title: ModalTitle,
  CloseButton: ModalCloseButton,
  Body: ModalBody,
  Footer: ModalFooter,
})

export default Modal
