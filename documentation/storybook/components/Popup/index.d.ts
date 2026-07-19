import { default as React } from '../../../node_modules/react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    left?: string;
    top?: string;
    children?: React.ReactNode;
    show?: boolean;
    onHide: () => void;
}
export default function Popup({ children, left, top, show, onHide, className, ...props }: Props): React.ReactPortal | null;
export {};
//# sourceMappingURL=index.d.ts.map