interface Type {
    showMenu?: boolean;
    onShowMenu?: () => void;
    onHideMenu?: () => void;
    onSelect?: (item: unknown) => void;
    offsetMenuPosVertical: number;
    offsetMenuPosHorizontal: number;
    menuPos: {
        top: string;
        left: string;
    };
    setMenuPos: (position: {
        top: string;
        left: string;
    }) => void;
}
declare const MenuContext: import('../../../node_modules/react').Context<Type>;
export default MenuContext;
//# sourceMappingURL=MenuContext.d.ts.map