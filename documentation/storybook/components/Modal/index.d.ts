import { default as ModalParent } from './Modal';
import { default as ModalHeader } from './ModalHeader';
import { default as ModalTitle } from './ModalTitle';
import { default as ModalBody } from './ModalBody';
import { default as ModalFooter } from './ModalFooter';
import { default as ModalCloseButton } from './ModalCloseButton';

declare const Modal: typeof ModalParent & {
    Header: typeof ModalHeader;
    Title: typeof ModalTitle;
    CloseButton: typeof ModalCloseButton;
    Body: typeof ModalBody;
    Footer: typeof ModalFooter;
};
export default Modal;
//# sourceMappingURL=index.d.ts.map