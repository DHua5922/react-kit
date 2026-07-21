import { ReactNode } from '../../../node_modules/react';

interface MenuHookProps {
    showMenu?: boolean;
    defaultShowMenu?: boolean;
    onShowMenu?: () => void;
    onHideMenu?: () => void;
    offsetMenuPosVertical?: number;
    offsetMenuPosHorizontal?: number;
    onSelect?: (item: unknown) => void;
}
interface MenuProps extends MenuHookProps {
    children?: ReactNode;
}
export default function Menu({ children, showMenu, defaultShowMenu, onShowMenu, onHideMenu, offsetMenuPosVertical, offsetMenuPosHorizontal, onSelect, ...props }: MenuProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Menu.d.ts.map