import { HTMLAttributes } from '../../../../node_modules/react';

export interface ModalProps extends HTMLAttributes<HTMLDialogElement> {
    show?: boolean;
    onShow?: () => void;
    onHide?: () => void;
}
declare const Modal: import('../../../../node_modules/react').ForwardRefExoticComponent<ModalProps & import('../../../../node_modules/react').RefAttributes<HTMLDialogElement>>;
export default Modal;
//# sourceMappingURL=index.d.ts.map