import { HTMLAttributes } from '../../../../node_modules/react';

interface Props extends HTMLAttributes<HTMLDialogElement> {
    show?: boolean;
    onShow?: () => void;
    onHide?: () => void;
}
export default function Modal({ children, className, show, onShow, onHide, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map