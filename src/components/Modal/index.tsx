import ModalParent from './Modal'
import ModalHeader from './ModalHeader'
import ModalTitle from './ModalTitle'
import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter'
import ModalCloseButton from './ModalCloseButton'

const Modal = Object.assign(ModalParent, {
  Header: ModalHeader,
  Title: ModalTitle,
  CloseButton: ModalCloseButton,
  Body: ModalBody,
  Footer: ModalFooter,
})

export default Modal
