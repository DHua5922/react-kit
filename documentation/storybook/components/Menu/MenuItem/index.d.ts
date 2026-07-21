import { ButtonHTMLAttributes } from '../../../../node_modules/react';

interface MenuItemProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value'> {
    value: unknown;
}
export default function MenuItem({ children, className, onClick, value, style, ...props }: MenuItemProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map