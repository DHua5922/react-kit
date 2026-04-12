import { default as React } from '../../../node_modules/react';

interface Props {
    left?: string;
    top?: string;
    children?: React.ReactNode;
    show?: boolean;
    onHide: () => void;
}
declare function Popup({ children, left, top, show, onHide }: Props): React.ReactPortal | null;
export default Popup;
//# sourceMappingURL=Popup.d.ts.map