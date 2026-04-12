import { default as React } from '../../../node_modules/react';

interface Props {
    children?: React.ReactNode;
    showMenu?: boolean;
    defaultShowMenu?: boolean;
    onShowMenu?: () => void;
    onHideMenu?: () => void;
    offsetMenuPosVertical?: number;
    offsetMenuPosHorizontal?: number;
}
declare function Menu({ children, showMenu, defaultShowMenu, onShowMenu, onHideMenu, offsetMenuPosVertical, offsetMenuPosHorizontal, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export default Menu;
//# sourceMappingURL=Menu.d.ts.map