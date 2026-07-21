import { HTMLAttributes } from '../../../node_modules/react';

interface Props extends HTMLAttributes<HTMLDivElement> {
    left?: string;
    top?: string;
    show?: boolean;
    onHide?: () => void;
}
export default function Popup({ children, left, top, show, onHide, className, ...props }: Props): import('../../../node_modules/react').ReactPortal | null;
export {};
//# sourceMappingURL=index.d.ts.map