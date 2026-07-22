import { default as MenuParent } from './Menu';

export type { MenuProps } from './Menu';
export type { MenuContentProps } from './MenuContent';
export type { MenuItemProps } from './MenuItem';
export type { MenuToggleProps } from './MenuToggle';
declare const Menu: typeof MenuParent & {
    Content: import('../../../node_modules/react').ForwardRefExoticComponent<import('./MenuContent').MenuContentProps & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    Item: import('../../../node_modules/react').ForwardRefExoticComponent<import('./MenuItem').MenuItemProps & import('../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
    Toggle: import('../../../node_modules/react').ForwardRefExoticComponent<import('./MenuToggle').MenuToggleProps & import('../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
};
export default Menu;
//# sourceMappingURL=index.d.ts.map