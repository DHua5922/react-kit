import { ButtonHTMLAttributes } from '../../../../node_modules/react';

export interface MenuItemProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value'> {
    value: unknown;
}
declare const MenuItem: import('../../../../node_modules/react').ForwardRefExoticComponent<MenuItemProps & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export default MenuItem;
//# sourceMappingURL=index.d.ts.map