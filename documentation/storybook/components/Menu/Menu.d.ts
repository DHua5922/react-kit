import { ReactNode } from '../../../node_modules/react';

interface Props {
    children?: ReactNode;
    showMenu?: boolean;
    defaultShowMenu?: boolean;
    onShowMenu?: () => void;
    onHideMenu?: () => void;
    offsetMenuPosVertical?: number;
    offsetMenuPosHorizontal?: number;
    onSelect?: (item: unknown) => void;
}
export default function Menu({ children, showMenu, defaultShowMenu, onShowMenu, onHideMenu, offsetMenuPosVertical, offsetMenuPosHorizontal, onSelect, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Menu.d.ts.map