interface DefaultValue {
    showMenu: boolean;
    onShowMenu: () => void;
    onHideMenu: () => void;
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
declare const MenuContext: import('../../../node_modules/react').Context<DefaultValue | null>;
export default MenuContext;
//# sourceMappingURL=MenuContext.d.ts.map