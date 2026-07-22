import { HTMLAttributes } from '../../../node_modules/react';

export interface PopupProps extends HTMLAttributes<HTMLDivElement> {
    left?: string;
    top?: string;
    show?: boolean;
    onHide?: () => void;
}
declare const Popup: import('../../../node_modules/react').ForwardRefExoticComponent<PopupProps & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default Popup;
//# sourceMappingURL=index.d.ts.map